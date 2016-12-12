var gulp = require('gulp');
var sass = require('gulp-sass');
var sync = require('browser-sync').create();

gulp.task('sass', function () {
    return gulp.src('src/scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/css/'))
        .pipe(sync.stream());
});

gulp.task('serve', function () {
    sync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch('src/scss/*.scss', ['sass']);
    gulp.watch("*.html").on('change', sync.reload);
});

gulp.task('default', ['serve']);