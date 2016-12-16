var gulp = require('gulp');
var sass = require('gulp-sass');
var sync = require('browser-sync').create();
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', function () {
    return gulp.src('src/scss/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist/css/'))
        .pipe(sync.stream());
});

gulp.task('scripts', function () {
    return gulp.src('src/js/*.js')
        .pipe(sourcemaps.init())
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist/js/'))
        .pipe(sync.stream());
});

gulp.task('serve', function () {
    sync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch('src/scss/*.scss', ['sass']);
    gulp.watch('*.html').on('change', sync.reload);
    gulp.watch('src/js/*.js', ['scripts']);
});

gulp.task('default', ['sass', 'scripts', 'serve']);