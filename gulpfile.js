"use strict";

var gulp = require('gulp'),
	sass = require('gulp-sass'),
	useref = require('gulp-useref'),
	cssnano = require('gulp-cssnano'),
	sourcemaps = require('gulp-sourcemaps');


gulp.task('compileSass', function() {
	gulp.src("scss/*.scss")
	.pipe(sass())
	.pipe(gulp.dest('css'))
});

gulp.task('cssMinify', function () {
    return gulp.src('public/lib/css/77beats.css')
        .pipe(sourcemaps.init())
        .pipe(cssnano())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('public/lib/css/minified'));
});

gulp.task('concat', function () {
    return gulp.src('public/*.html')
        .pipe(useref())
        .pipe(gulp.dest('./dist'));
});