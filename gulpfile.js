// ES5严格模式
"use strict"

// 创建gulp对象
const gulp = require('gulp');

// 创建自动加载模块并返回给load对象
/* 
    load加载其他API：
        文件合并（js,css）=> load.concat();
        js文件压缩  => load.uglify();
        css文件压缩 => load.minifyCss();
        重命名 => load.rename();
        HTML文件压缩 => load.minifyHtml();
        less编译 => load.less();
        sass编译 => load.sass();
        图片压缩 => load.imagemin();
        ES6转ES5 => load.babel();
        错误处理提示插件 => load.plumber();
        压缩文件 => load.zip();
        控制task中串行和并行 => load.runSequence();
        删除文件 => load.clean();
*/
const load = require('gulp-load-plugins');

// 设置一个默认事件
gulp.task('default',function(){});