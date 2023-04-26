'use strict';

const gulp = require('gulp');
const less = require('gulp-less');
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');

exports.default = function () {
    return gulp.src('./src/less/style.less')
        .pipe(less().on('error', console.error.bind(console)))
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./dist'));
}

exports.watch = function () {
    gulp.watch('./src/less/*.less', gulp.series('default'));
}