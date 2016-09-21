---
layout: post
title:  "Automatiser la génération d’un site statique avec Gulp et Jekyll"
date:   2016-09-18 19:02:48 +0100
author: Joel Mercier
categories: dev
lead: "Une commande pour les gouverner toutes !"
---
[Gulp](http://gulpjs.com/){: target="_blank" rel="noopener"} est un automatiseur de tâches puissant et rapide grâce à l’utilisation des streams NodeJS qui permettent d’effectuer plusieurs tâches simultanément.

Jekyll inclut également cette notion d’automatisation puisqu’il permet, grâce au flag `jekyll build --watch` de regénérer automatiquement le site lors de la modification d’un fichier. Cependant il n’est pas efficace de lancer à la fois des tâches Gulp et Jekyll dans le même dossier.

Ainsi si, comme dans le cas de ce site, on souhaite mélanger Gulp et Jekyll afin de compiler les fichiers SASS, de concaténer et minifier les fichiers javascripts, utiliser les sourcemaps et le très utile Autoprefixer, ne pas avoir à manuellement recharger la page à chaque modification, etc… on peut utiliser le module Child Process inné à NodeJS (comme HTTP ou FS par exemple). Celui-ci permet avec la fonction `spawn()` d’éxecuter une ligne de commande directement depuis un fichier `gulpfile.js` utilisé pour déclarer les tâches.

Ainsi, une tâche permettant de compiler un site Jekyll pourrait ressembler à ceci :
{% highlight js %}
gulp.task('jekyll-build', function (done) {
  return cp.spawn('jekyll', ['build', '--config', '_config.yml'], {stdio: 'inherit'})
    .on('close', done);
});
{% endhighlight %}
Dans cet exemple, on utilise la fonction `spawn()` afin d'éxecuter la commande `jekyll build --config _config.yml`. Il suffit ensuite de lancer cette tâche à chaque fois qu'un fichier est modifié pour que le site soit à jour.

Une petite subtilité cependant est qu'il faut utiliser un dossier de destination pour Gulp afin que Jekyll n'utilise que les fichiers traités par Gulp afin de générer le site. Pour cela, on peut utiliser des dossiers sources préfixés par un `_`. On aura ainsi un dossier `_js` contenant tous les scripts et un dossier `js` contenant le fichier concaténé et minifié qu'utilisera Jekyll. Il en va de même pour les dossiers `css` ou `sass` et des dossiers d'images si on utilise Gulp afin de les otpimiser.

{% highlight js %}
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
var concat      = require('gulp-concat');


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
        onError: browserSync.notify('Error in sass'),
    }))
    .on('error', sass.logError)
    .pipe(prefix(['last 15 versions', '> 1%'], { cascade: true }))
    .pipe(cssnano())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('_site/css'))
    .pipe(browserSync.reload({stream:true}))
    .pipe(gulp.dest('css'));
});

/**
 * Concatenate and minify the js files then rename the bundle
*/
gulp.task('js', function () {
  gulp.src(['./_js/barba.js', './_js/picturefill.js', './_js/typeit.js', './_js/wow.js', './_js/pace.js', './_js/jquery.connections.js', './_js/main.js'])
    .pipe(uglify())
    .pipe(concat('bundle.js'))
    .pipe(rename({
      suffix: '.min'
    }))
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

{% endhighlight %}
