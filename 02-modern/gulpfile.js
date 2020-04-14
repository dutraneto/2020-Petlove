const gulp = require('gulp')
const del = require('del')
const sass = require('gulp-sass')
const browserSync = require('browser-sync').create()
const uglify = require('gulp-minify')
const imagemin = require('gulp-imagemin')
const autoprefixer = require('gulp-autoprefixer')
const htmlmin = require('gulp-htmlmin')
const handlebars = require('gulp-compile-handlebars')
const rename = require('gulp-rename')
const sourcemaps = require('gulp-sourcemaps')
const concat = require('gulp-concat')
const cache = require('gulp-cache')
const babel = require('gulp-babel')

// input files
const input = {
    root: '/',
    source: 'src/',
    all: 'src/**/*.*',
    handlebarsPath: 'src/**/*.handlebars',
    sassPath: 'src/**/*.scss',
    jsPath: 'src/assets/scripts/*.js',
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
function serve() {
    gulp.watch(input.source)
    .on('change', gulp.series('buildAll', reloadBrowser))

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
function reloadBrowser() {
    browserSync.reload()
}

// clear the cache browser
function clearCache() {
    cache.clearAll()
}

// Minimize JS
function buildJs() {
    return gulp
        .src(input.jsPath, {
            sourcemaps: true,
        })
        .pipe(
            babel({
                presets: ['@babel/env'],
            })
        )
        .pipe(concat(`main.js`))
        .pipe(uglify())
        .pipe(gulp.dest(output.jsPath))
}

// Minify CSS and ADD vendor prefix
function buildCss() {
    let sassOptions = {
        outputStyle: 'compressed',
    }
    return gulp
        .src(input.sassPath)
        .pipe(sourcemaps.init())
        .pipe(sass(sassOptions).on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(concat('styles.min.css'))
        .pipe(gulp.dest(output.cssPath))
}

// Compile Templates
function buildHtml() {
    let templateData = {},
        options = {
            ignorePartials: true,
            batch: [input.source + '/' + 'components'],
        }
    return gulp
        .src(input.handlebarsPath)
        .pipe(handlebars(templateData, options))
        .pipe(rename('index.html'))
        .pipe(
            htmlmin({
                removeComments: true,
                collapseWhitespace: true,
            })
        )
        .pipe(gulp.dest(output.public))
}

// Minify HTML
// const buildHtml = () => {
//     return gulp.src(input.html)
//         .pipe(htmlmin({
//             removeComments: true,
//             collapseWhitespace: true
//         }))
//         .pipe(dest(files.public))
// }

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
function buildImg() {
    const options = {
        optimizationLevel: 5,
        progressive: true,
        interlaced: true,
    }
    return gulp
        .src(input.imgPath)
        .pipe(cache(imagemin(options)))
        .pipe(gulp.dest(output.imgPath))
        .pipe(gulp.src(input.contentPath))
        .pipe(cache(imagemin(options)))
        .pipe(gulp.dest(output.contentPath))
}

// Clean public and tmp
function cleanBuild() {
    return del([output.public, 'tmp/**/*'])
}

/** TASKS --------*/
gulp.task('serve', () => serve())
gulp.task('buildHtml', () => buildHtml())
gulp.task('buildJs', () => buildJs())
gulp.task('buildCss', () => buildCss())
gulp.task('buildImg', () => buildImg())
// clear image caches
gulp.task('clearCache', () => cache.clearAll())
gulp.task('cleanBuild', () => cleanBuild())
// exports.buildCopy = buildCopy
gulp.task(
    'buildAll',
    gulp.series('cleanBuild', gulp.parallel('buildImg', 'buildCss', 'buildJs', 'buildHtml'))
)
