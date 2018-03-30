var gulp = require('gulp')
var browserSync = require('browser-sync')
var sass = require('gulp-sass')
var sourcemaps = require('gulp-sourcemaps')
var cssnano = require('gulp-cssnano')
var prefix = require('gulp-autoprefixer')
var cp = require('child_process')
var uglify = require('gulp-uglify')
var rename = require('gulp-rename')
var imagemin = require('gulp-imagemin')
var pngquant = require('imagemin-pngquant')
var shell = require('gulp-shell')
var concat = require('gulp-concat')
var gutil = require('gulp-util')
var swPrecache = require('sw-precache')
// let babel = require('gulp-babel')

var messages = {
  jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
}

/**
 * Build the Jekyll Site
 */
gulp.task('jekyll-build', function (done) {
  browserSync.notify(messages.jekyllBuild)
  return cp.spawn('jekyll', ['build', '--config', '_config.yml'], {stdio: 'inherit'})
    .on('close', done)
})

/**
 * Build the Jekyll Site for production
 */
gulp.task('jekyll-build-prod', ['img'], function (done) {
  browserSync.notify(messages.jekyllBuild)
  return cp.spawn('jekyll', ['build'], {stdio: 'inherit'})
    .on('close', done)
})

/**
 * Rebuild Jekyll & do page reload
 */
gulp.task('jekyll-rebuild', ['jekyll-build'], function () {
  browserSync.reload()
})

/**
 * Wait for jekyll-build, then launch the Server
 */
gulp.task('browser-sync', ['sass', 'js', 'jekyll-build'], function () {
  browserSync({
    server: {
      baseDir: '_site'
    }
  })
})

/**
 * Compile files from _scss into both _site/css (for live injecting) and site (for future jekyll builds)
 */
gulp.task('sass', function () {
  return gulp.src('_sass/main.scss')
    // .pipe(sourcemaps.init())
    .pipe(sass({
      includePaths: ['_sass'],
      onError: browserSync.notify('Error in sass')
    }))
    .on('error', sass.logError)
    .pipe(prefix(['last 15 versions', '> 1%'], { cascade: true }))
    .pipe(cssnano())
    .pipe(rename({
      suffix: '.min'
    }))
    // .pipe(sourcemaps.write())
    .pipe(gulp.dest('_site/css'))
    .pipe(browserSync.reload({stream: true}))
    .pipe(gulp.dest('css'))
})

/**
 * Concatenate and minify the js files then rename the bundle
*/
gulp.task('js', function () {
  gulp.src(['./_js/barba.js', './_js/picturefill.js', './_js/typed.min.js', './_js/wow.js', './_js/pace.js', './_js/hammer.min.js', './_js/fetch.js', './_js/main.js'])
    // .pipe(sourcemaps.init())
    .pipe(uglify())
    .on('error', function (err) { gutil.log(gutil.colors.red('[Error]'), err.toString()) })
    .pipe(concat('bundle.js'))
    .pipe(rename({
      suffix: '.min'
    }))
    // .pipe(sourcemaps.write())
    .pipe(gulp.dest('./js'))
})

/**
 * Image magnification
 */
gulp.task('img', function () {
  return gulp.src('./_images/**/*')
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{removeViewBox: false}],
      use: [pngquant()]
    }))
    .pipe(gulp.dest('./img/'))
})

// Service Worker
gulp.task('generate-service-worker', function (callback) {
  var rootDir = '_site'
  swPrecache.write(rootDir + '/service-worker.js', {
    staticFileGlobs: [
      rootDir + '/service-worker-register.js',
      rootDir + '/service-worker.js',
      rootDir + '/js/*.js',
      rootDir + '/about/*.html',
      rootDir + '/works/*.html',
      rootDir + '/works/**/*.html',
      rootDir + '/blog/*.html',
      rootDir + '/blog/**/*.html',
      rootDir + '/404/*.html',
      rootDir + '/*.html',
      rootDir + '/img/**.*',
      rootDir + '/img/testimonials/**.*',
      rootDir + '/css/*.css'
    ],
    stripPrefix: rootDir
    // runtimeCaching: [{
    //   urlPattern: new RegExp('^https://code\.jquery\.com/'),
    //   handler: 'cacheFirst'
    // }]
  }, callback)
})

/**
 * Watch scss files for changes & recompile
 * Watch html/md files, run jekyll & reload BrowserSync
 */
gulp.task('watch', function () {
  gulp.watch(['_sass/**/*.scss', 'css/*.scss'], ['sass'])
  gulp.watch(['_js/*.js'], ['js'])
  gulp.watch(['**/*.html', '_layouts/*.html', '_includes/*.html', 'blog/_posts/*', '_config.yml', '_images/*', 'js/*', '**/*.md'], ['jekyll-rebuild', 'generate-service-worker'])
})

/**
 * Default task, running just `gulp` will compile the sass,
 * compile the jekyll site, launch BrowserSync & watch files.
 */
gulp.task('default', ['browser-sync', 'watch'])

gulp.task('deploy', ['jekyll-build-prod'], shell.task([
  'cd _site/ && git add --all && git commit -m "update blog" && git push'
]))
