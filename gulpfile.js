var gulp = require('gulp'),
	sass = require('gulp-sass'),
	watch = require('gulp-watch'),
	sourcemaps = require('gulp-sourcemaps'),
	rename = require("gulp-rename");

	// SASS
gulp.task('sass', function () {
  gulp.src('assets/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('assets/css-min'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('.assets/scss/**/*.scss', ['sass']);
});
	// Gulp WATCH

	// Default Action
gulp.task('default',['sass'], function() {
  // place code for your default task here
});