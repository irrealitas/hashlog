// Include Gulp
var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    postcss = require('gulp-postcss'),
    exec = require('child_process').exec;

// CSS
gulp.task('css', function () {
    return gulp.src('src/css/*')
        .pipe(postcss())
        .pipe(gulp.dest('dist/css'));
});

gulp.task('js', function () {
    return gulp.src('src/js/*')
        .pipe(gulp.dest('dist/js'));
});

gulp.task('fonts', function () {
    return gulp.src('src/fonts/*')
        .pipe(gulp.dest('dist/fonts'));
});

gulp.task('img', function () {
    return gulp.src('src/img/*')
        .pipe(gulp.dest('dist/img'));
});

// Browser-sync
gulp.task('browser-sync', function(cb) {
  browserSync({
    server: {
      baseDir: "./dist"
    },
    open: false
  }, cb);
});

function reload(done) {
  browserSync.reload();
  done();
}

// Scripts
gulp.task('scripts', function(cb) {
  exec('./hashlog.sh html', cb);
});

// Watch
gulp.task('watch', function () {
  gulp.watch([
    'src/css/**/*',
  ], gulp.series('css', reload));
  gulp.watch([
    'src/js/**/*',
  ], gulp.series('js', reload));
  gulp.watch([
    './hashlog.sh',
  ], gulp.series('scripts', reload));
});

gulp.task(
  'default',
  gulp.series('css', 'js', 'img', 'fonts', 'scripts', 'browser-sync', 'watch')
);
