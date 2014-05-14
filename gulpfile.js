var path = require('path');
var gulp = require('gulp');
var zip = require('gulp-zip');

var src = path.join(__dirname, 'src');
gulp.task('default', function() {
  return gulp.src('*', {cwd: src})
    .pipe(zip('build.zip'))
    .pipe(gulp.dest(__dirname));
});
