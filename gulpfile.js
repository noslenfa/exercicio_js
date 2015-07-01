var gulp = require('gulp');
var rename = require('gulp-rename');

gulp.task('copyjs', function() {
   gulp.src(['bower_components/**/dist/*.min.js', 'bower_components/**/dist/js/*.min.js'])
   .pipe(rename({dirname: ''}))
   .pipe(gulp.dest('js'));
});

gulp.task('copycss', function() {
   gulp.src(['bower_components/**/dist/*.min.css', 'bower_components/**/dist/css/*.min.css'])
   .pipe(rename({dirname: ''}))
   .pipe(gulp.dest('css'));
});