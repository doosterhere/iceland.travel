'use strict';

const gulp = require('gulp');
const less = require('gulp-less');
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');

function createCss() {
    return gulp.src('./src/less/style.less')
        .pipe(less().on('error', console.error.bind(console)))
        .pipe(cssmin())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./output'));
}

exports.watch = function () {
    gulp.watch('./src/less/*.less', gulp.series('default'));
}

function copyPlugins() {
    return gulp.src(['node_modules/jquery/dist/jquery.min.js',
        'node_modules/wowjs/dist/wow.min.js',
        'node_modules/slick-carousel/slick/slick.min.js',
        'node_modules/magnific-popup/dist/jquery.magnific-popup.min.js',
        'node_modules/animate.css/animate.min.css',
        'node_modules/slick-carousel/slick/slick.css',
        'node_modules/slick-carousel/slick/slick-theme.css',
        'node_modules/magnific-popup/dist/magnific-popup.css',
        'node_modules/hover.css/css/hover-min.css',
        'node_modules/slick-carousel/slick/ajax-loader.gif'])
        .pipe(gulp.dest('./output'));
}

function copyFonts() {
    return gulp.src(['node_modules/slick-carousel/slick/fonts/slick.ttf',
        'node_modules/slick-carousel/slick/fonts/slick.woff'])
        .pipe(gulp.dest('./output/fonts'));
}

exports.build = gulp.series(createCss, copyPlugins, copyFonts);