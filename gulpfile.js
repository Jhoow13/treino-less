var gulp = require('gulp');
var clean = require('gulp-clean');
var less = require('gulp-less');


gulp.task('clean', function () {
    return gulp.src('css/*')
        .pipe(clean());
});

gulp.task('less', function () {
    return gulp.src('./less/**/*.less')
        .pipe(less())
        .pipe(gulp.dest('./css'));
});

gulp.task('watch', function(){
    gulp.watch('less/**/*.less', ['less']);
});

gulp.task('default', ['clean', 'watch']);