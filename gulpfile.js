'use strict';

const gulp = require('gulp');
const less = require('gulp-less');
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');

exports.default = function () {
    return gulp.src('./src/less/style.less')
        .pipe(less().on('error', console.error.bind(console)))
        .pipe(cssmin())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./output'));
}

exports.watch = function () {
    gulp.watch('./src/less/*.less', gulp.series('default'));
}

exports.build = function () {
    return gulp.src(['node_modules/jquery/dist/jquery.min.js',
        'node_modules/wowjs/dist/wow.min.js',
        'node_modules/slick-carousel/slick/slick.min.js',
        'node_modules/magnific-popup/dist/jquery.magnific-popup.min.js'])
        .pipe(gulp.dest('./output'));
}