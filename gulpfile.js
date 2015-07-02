var gulp = require('gulp');
var webserver = require('gulp-webserver');
var rename = require('gulp-rename');

gulp.task('webserver', function(){
gulp.src('')
    .pipe(webserver({
        fallback: 'index.html',
        host: '0.0.0.0',
        port: '8000',
        open: true
      }));
});

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