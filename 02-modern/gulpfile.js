const gulp = require('gulp')
const del = require('del')
const sass = require('gulp-sass')
const browserSync = require('browser-sync').create()
const uglify = require('gulp-minify')
const imagemin = require('gulp-imagemin')
const autoprefixer = require('gulp-autoprefixer')
const htmlmin = require('gulp-htmlmin')
const handleBars = require('gulp-compile-handlebars')
const rename = require('gulp-rename')
const sourcemaps = require('gulp-sourcemaps')
const plumber = require('gulp-plumber')
const postcss = require('gulp-postcss')
const cssnano = require('cssnano')
const concat = require('gulp-concat')
const cache = require('gulp-cache')
const babel = require('gulp-babel')

// files
const files = {
    root: '/',
    source: 'src/',
    all: 'src/**/*.*',
    html: 'src/components/**/*.html',
    sass: 'src/components/**/*.scss',
    jsPath: 'src/assets/scripts/*.js',
    public: 'public/',
    port: 4000
}

/** FUNCTIONS --------*/
// serve files
function serve (source = files.source ? files.source : files.public, port = files.port) {
    browserSync.init({
        browser: 'Google Chrome',
        watch: true,
        server: {
            baseDir: source
        },
        port: port
    })
    gulp.parallel(
        gulp.watch(files.sass)
            .on('change', gulp.series(buildCss, reloadBrowser)),
        gulp.watch(files.html)
            .on('change', gulp.series(buildHtml, reloadBrowser))
    )

}

// function that reloads browsers
function reloadBrowser () {
    browserSync.reload()
}

// clear the cache browser
function clearCache () {
    cache.clearAll()
}

// Minimize JS
function buildJs () {
    return gulp.src(files.jsPath, {
        sourcemaps: true
    })
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(concat(`main.js`))
        .pipe(uglify())
        .pipe(gulp.dest(`public/assets/scripts/`))
}

// Minify CSS and ADD vendor prefix
function buildCss () {
    let sassOptions = {
        outputStyle: 'compressed'
    }
    return gulp.src("src/**/*.scss")
        .pipe(sourcemaps.init())
        .pipe(sass(sassOptions).on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(concat('main.min.css'))
        .pipe(gulp.dest(`${files.public}/assets/styles/`))
}

// Compile Templates
function templates() {
    var templateData = {},
        options = {
            ignorePartials: true,
            batch: [partials]
        }
    return gulp.src(files.html)
        .pipe(handlebars(templateData, options))
        .pipe(gulp.dest(files.public))
}

// // Minify HTML
// const buildHtml = () => {
//     return pipeline(
//         src(files.html),
//         htmlmin({
//             removeComments: true,
//             collapseWhitespace: true
//         }),
//         dest(files.public)
//     )
// }

// // Copy files to public
// const buildCopy = () => {
//     let sourceFiles = [
//         files.all,
//         `!${files.sass}`,
//         `!${files.source}assets/img/*`,
//         `!${files.source}assets/js/*`,
//         `!${files.source}assets/css/maps/main.min.css.map`,
//         `!${files.source}assets/css/main.css`,
//         `!${files.html}`
//     ]
//     return src(sourceFiles).pipe(dest(files.public))
// }

// // Optimize images
// const buildImg = () => {
//     return pipeline(
//         src('src/assets/img/*'),
//         imagemin({
//             optimizationLevel: 3,
//             progressive: true,
//             interlaced: true
//         }),
//         dest('public/assets/img')
//     )
// }

// // Clean public and tmp
// const buildClean = () => {
//     return del([`${files.public}`, 'tmp/**/*'])
// }

// // del only css files
// const delCss = () => {
//     return del(['src/assets/css/*.min.css'])
// }

/** TASKS --------*/
gulp.task("serve", () => serve(files.source, files.port))
// exports.serve = () => serve(files.source, 5000)
// exports.clearCache = clearCache
// exports.buildHtml = buildHtml
gulp.task("buildJs", () => buildJs())
gulp.task("buildCss", () => buildCss())
// exports.buildCss = buildCss
// exports.buildImg = buildImg
// exports.buildCopy = buildCopy
// exports.buildClean = buildClean
// exports.delCss = delCss
// exports.buildAll = series(buildClean, buildCss, buildJs, buildHtml, buildCopy, buildImg)
