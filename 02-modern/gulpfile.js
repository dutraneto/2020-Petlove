const {src, watch, series, parallel, dest, task} = require('gulp')
const del = require('del')
const sass = require('gulp-sass')
const browserSync = require('browser-sync').create()
const uglify = require('gulp-uglify')
const imagemin = require('gulp-imagemin')
const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')
const postcss = require('gulp-postcss')
const htmlmin = require('gulp-htmlmin')
const handlebars = require('gulp-compile-handlebars')
const rename = require('gulp-rename')
const sourcemaps = require('gulp-sourcemaps')
const concat = require('gulp-concat')
const cache = require('gulp-cache')
const babel = require('gulp-babel')
const useref = require('gulp-useref')

// import data
const seed = require('./seed.js')

// input files
const input = {
    root: '/',
    source: 'src/',
    all: 'src/**/*.*',
    components: 'src/components',
    home: 'src/components/home/*.html',
    list: 'src/components/shopping-list/*.html',
    sassPath: 'src/components/base/index.scss',
    jsPath: 'src/components/**/*.js',
    imgPath: 'src/assets/images/*',
    contentPath: 'src/content/images/*',
    port: 4000,
}

const output = {
    public: 'public/',
    jsPath: 'public/assets/scripts/',
    cssPath: 'public/assets/styles/',
    imgPath: 'public/assets/images/',
    contentPath: 'public/content/images/',
}

/** FUNCTIONS --------*/
// serve files
const serve = () => {
    watch(input.source)
    .on('change', series('buildAll', reloadBrowser))

    browserSync.init({
        browser: 'Google Chrome',
        watch: true,
        server: {
            baseDir: output.public,
        },
        port: input.port,
    })
}

// function that reloads browsers
const reloadBrowser = () => browserSync.reload()

// clear the cache browser
const clearCache = () => cache.clearAll()

// Minimize JS
const buildJs = () => {
    return src(input.jsPath)
        .pipe(
            babel({
                presets: ['@babel/env'],
            })
        )
        .pipe(concat(`main.min.js`, {newLine: ';'}))
        .pipe(uglify())
        .pipe(dest(output.jsPath))
}

// Minify CSS and ADD vendor prefix
const buildCss = () => {
    let sassOptions = {
        outputStyle: 'compressed',
    }
    let plugins = [
        autoprefixer(),
        cssnano()
    ]
    return src(input.sassPath)
        .pipe(sourcemaps.init())
        .pipe(sass(sassOptions).on('error', sass.logError))
        .pipe(postcss(plugins))
        .pipe(concat('styles.min.css'))
        .pipe(sourcemaps.write('.'))
        .pipe(dest(output.cssPath))
        .pipe(browserSync.stream())
}

// Compile Templates
const buildHtml = () => {
    const templateData = seed,
    options = {
            // ignorePartials: true,
            batch: [input.components],
        }
    return src([input.home, input.list])
        .pipe(handlebars(templateData, options))
        // .pipe(rename('index.html'))
        .pipe(
            htmlmin({
                removeComments: true,
                collapseWhitespace: true,
            })
        )
        .pipe(dest(output.public))
}

// Copy files to public
// const buildCopy = () => {
//     let sourceFiles = [
//         input.all,
//         `!${input.source}components`,
//         `!${input.source}assets/images/*`,
//         `!${files.source}assets/scripts/*`,
//         `!${files.source}assets/styles`,
//         `!${files.html}`
//     ]
//     return src(sourceFiles).pipe(dest(output.public))
// }

// Optimize images
const buildImg = () => {
    const options = {
        optimizationLevel: 5,
        progressive: true,
        interlaced: true,
    }
    return src(input.imgPath)
        .pipe(cache(imagemin(options)))
        .pipe(dest(output.imgPath))
        .pipe(src(input.contentPath))
        .pipe(cache(imagemin(options)))
        .pipe(dest(output.contentPath))
}

// Clean public and tmp
const cleanBuild = () => del([output.public, 'tmp/**/*'])


/** TASKS --------*/
task('serve', () => serve())
task('buildHtml', () => buildHtml())
task('buildJs', () => buildJs())
task('buildCss', () => buildCss())
task('buildImg', () => buildImg())
// clear image caches
task('clearCache', () => clearCache())
task('cleanBuild', () => cleanBuild())
// exports.buildCopy = buildCopy
task(
    'buildAll',
    series('cleanBuild', parallel('buildImg', 'buildCss', 'buildHtml', 'buildJs'))
)
