'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require("gulp-rename");

gulp.task('sass', function () {
  return gulp.src('./webroot/scss/index.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(rename("index.css"))
    .pipe(gulp.dest('./webroot/css/'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./webroot/scss/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'sass:watch',]);
