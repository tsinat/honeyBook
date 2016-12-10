'use strict';

var gulp = require('gulp');
var del = require('del');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var babel = require('gulp-babel');
var rimraf = require('gulp-rimraf');
var annotate = require('gulp-ng-annotate');
var sourcemaps = require('gulp-sourcemaps');
var eslint = require('gulp-eslint');
var plumber = require('gulp-plumber');
var sass = require('gulp-sass');


gulp.task('default', ['build', 'watch', 'serve']);

gulp.task('build', ['js', 'css', 'html']);

gulp.task('watch', ['watch.js', 'watch.css', 'watch.html']);

gulp.task('watch.lint', function() {
    return gulp.watch('./**/*.js', ['lint'])
});

gulp.task('lint', function() {
    return gulp.src([
        './**/*.js',
        '!Gulpfile.js',
        ])
        .pipe(plumber())
        .pipe(eslint())
        .pipe(eslint.format());
});

gulp.task('js', ['clean:js'],function() {

    return gulp.src('./js/**/*.js')
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(concat('bundle.js'))
        .pipe(babel({presets: ['es2015'] }))
        .pipe(annotate())
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./build/js'));

});

gulp.task('watch.js', function() {
    return gulp.watch('js/**/*.js', ['js'])
});

gulp.task('clean:js', function() {
    return gulp.src('build/js', {
            read: false
        })
        .pipe(rimraf());
});

gulp.task('html', function() {
        return gulp.src('./html/**/*.html')
        .pipe(gulp.dest('./build/html'));
});

gulp.task('watch.html', function() {
    return gulp.watch('./html/**/*.html', ['html']);
});

gulp.task('css', ['clean.css'], function() {
    return gulp.src('./scss/**/*.scss')
        .pipe(plumber())
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./build/css'));
});

gulp.task('watch.css', function() {
    return gulp.watch('./scss/**', ['css'])
});

gulp.task('clean.css', function() {
    return del(['./build/css']);
});
