var gulp = require('gulp'),
	sass = require('gulp-sass'),
	watch = require('gulp-watch'),
	sourcemaps = require('gulp-sourcemaps'),
	rename = require("gulp-rename"),
	jsmin = require('gulp-jsmin'),
	imagemin = require('gulp-imagemin'),
	pngquant = require('imagemin-pngquant');

	// SASS
gulp.task('sass', function () {
  gulp.src('assets/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('assets/css-min'));
});
 
	// Gulp JSmin
gulp.task('jsmin', function () {
    gulp.src('assets/js/**/*.js')
        .pipe(jsmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('assets/js-min'));
});
	// Gulp Img Min
gulp.task('imagemin', function () {
    return gulp.src('assets/img/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('assets/img-min'));
});
	// Default Action
gulp.task('default',['sass','jsmin','imagemin'], function() {
});