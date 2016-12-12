var gulp = require('gulp');
var sass = require('gulp-sass');
var sync = require('browser-sync').create();

gulp.task('sass', function () {
    return gulp.src('src/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/'))
        .pipe(sync.stream());
});

gulp.task('serve', function () {
    sync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch('src/*.scss', ['sass']);
    gulp.watch("*.html").on('change', sync.reload);
});

gulp.task('default', ['serve']);