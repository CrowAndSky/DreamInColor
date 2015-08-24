var gulp = require('gulp')
var concat = require('gulp-concat')
var sourcemaps = require('gulp-sourcemaps')
var uglify = require('gulp-uglify')
var ngAnnotate = require('gulp-ng-annotate')

gulp.task('js', function () {
    gulp.src(['src/**/*.js'])
        .pipe(sourcemaps.init())
        .pipe(concat('dreamInColor.js'))
        .pipe(ngAnnotate())
        //.pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./dist/js'))
})

gulp.task('watch', ['js'], function () {
    gulp.watch('src/**/*.js', ['js'])
})