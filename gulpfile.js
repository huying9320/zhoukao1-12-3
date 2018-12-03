/*
 * @Author: huying 
 * @Date: 2018-12-03 09:30:40 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2018-12-03 09:33:25
 */

var gulp = require('gulp');

// 编译scss
var sass = require('gulp-sass');


gulp.task('Sass', function() {
    return gulp.src('./src/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./src/css'))
})

// 监听scss
gulp.task('devWatch', function() {
    return gulp.watch('./src/scss/*.scss', gulp.parallel('Sass'))
})