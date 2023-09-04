'use stric';
var gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

gulp.task('sass', function () { gulp.src('assets/scss/style.scss') .pipe(sass().on('error', sass.logError)) .pipe(gulp.dest('assets/css')); });
gulp.task('sass:watch', function() { gulp.watch('assets/scss/style.scss', ['sass']);});
