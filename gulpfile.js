var gulp        = require('gulp');
var browserSync = require('browser-sync');
var sass        = require('gulp-sass');
var sourcemaps  = require('gulp-sourcemaps');
var cssnano     = require('gulp-cssnano');
var prefix      = require('gulp-autoprefixer');
var cp          = require('child_process');
var uglify      = require('gulp-uglify');
var rename      = require('gulp-rename');
var imagemin    = require('gulp-imagemin');
var pngquant    = require('imagemin-pngquant');
var shell       = require('gulp-shell');

var messages = {
    jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
};

/**
 * Build the Jekyll Site
 */
gulp.task('jekyll-build', function (done) {
    browserSync.notify(messages.jekyllBuild);
    return cp.spawn('jekyll', ['build', '--config', '_config.yml'], {stdio: 'inherit'})
        .on('close', done);
});

/**
 * Build the Jekyll Site for production
 */
gulp.task('jekyll-build-prod', ['img'], function (done) {
    browserSync.notify(messages.jekyllBuild);
    return cp.spawn('jekyll', ['build'], {stdio: 'inherit'})
        .on('close', done);
});

/**
 * Rebuild Jekyll & do page reload
 */
gulp.task('jekyll-rebuild', ['jekyll-build'], function () {
    browserSync.reload();
});

/**
 * Wait for jekyll-build, then launch the Server
 */
gulp.task('browser-sync', ['sass', 'js', 'jekyll-build'], function() {
    browserSync({
        server: {
            baseDir: '_site'
        }
    });
});

/**
 * Compile files from _scss into both _site/css (for live injecting) and site (for future jekyll builds)
 */
gulp.task('sass', function () {
    return gulp.src('_sass/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            includePaths: ['_sass'],
            onError: browserSync.notify,
            errLogToConsole: true
        }))
        .pipe(prefix(['last 15 versions', '> 1%'], { cascade: true }))
        .pipe(cssnano())
        .pipe(rename({
          suffix: '.min'
        }))
        // .pipe(sourcemaps.write())
        .pipe(gulp.dest('_site/css'))
        .pipe(browserSync.reload({stream:true}))
        .pipe(gulp.dest('css'));
});

// -->
// js
// Concatenate & JS build
// <--
gulp.task('js', function () {
    gulp.src('./_js/*.js')
        .pipe(rename({
          suffix: '.min'
        }))
        .pipe(uglify())
        .pipe(gulp.dest('./js'));
});

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
        .pipe(gulp.dest('./img/'));
});

/**
 * Watch scss files for changes & recompile
 * Watch html/md files, run jekyll & reload BrowserSync
 */
gulp.task('watch', function () {
    gulp.watch(['_sass/*.scss', 'css/*.scss'], ['sass']);
    gulp.watch(['_js/*.js'], ['js']);
    gulp.watch(['**/*.html', '_layouts/*.html', '_includes/*.html', 'blog/_posts/*', '_config.yml', '_images/*', 'js/*', '**/*.md'], ['jekyll-rebuild']);
});

/**
 * Default task, running just `gulp` will compile the sass,
 * compile the jekyll site, launch BrowserSync & watch files.
 */
gulp.task('default', ['browser-sync', 'watch']);

gulp.task('deploy', ['jekyll-build-prod'], shell.task([
  'cd _site/ && git add --all && git commit -m "update blog" && git push origin gh-pages'
]));
