/*
 * @Author: huying 
 * @Date: 2018-12-03 09:30:40 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2018-12-03 10:09:27
 */

var gulp = require('gulp');

// 编译scss
var sass = require('gulp-sass');

// 起服务
var server = require('gulp-webserver');
var url = require('url')
var path = require('path');
var fs = require('fs');


gulp.task('Sass', function() {
    return gulp.src('./src/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./src/css'))
})

// 监听scss
gulp.task('devWatch', function() {
    return gulp.watch('./src/scss/*.scss', gulp.parallel('Sass'))
})

// 开发环境
gulp.task('dev', gulp.parallel('Sass', 'devWatch'))

// 起服务

gulp.task('Server', function() {
    gulp.src('src')
        .pipe(server({
            port: 8060,

            open: true,
            middleware: function(req, res, next) {
                var pathname = url.parse(req.url).pathname;
                if (pathname === '/favicon.ico') {
                    return res.end('')
                }
                paths = pathname === '/' ? 'index.html' : pathname;
                console.log(pathname)
                res.end(fs.readFileSync(path.join(__dirname, 'src', paths)))
            }
        }));
});