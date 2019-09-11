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

// 自动刷新
const server = require('browser-sync').create();//执行函数返回对象

// 创建任务
gulp.task('js', function(){
    // 取得scripts下的所有为.js的文件（**/的意思是包含所有子文件夹)
    gulp.src('app/static/scripts/**/*.js')
    //错误管理模块（有错误时会自动输出提示到终端上）
    .pipe(load.plumber())
    //合并同一目录下的所有文件,并指定文件名
    .pipe(load.concat('main.js'))
    //js压缩
    .pipe(load.uglify())
    //将合并压缩后的文件输出到dist/static/scripts下（如没有dist目录则自动生成dist）
    .pipe(gulp.dest('dist/static/scripts'))
});

gulp.task('sass', function(){
    // 取得sass下的所有为.scss的文件（**/的意思是包含所有子文件夹)
    gulp.src('app/static/sass/**/*.scss')
    //错误管理模块（有错误时会自动输出提示到终端上）
    .pipe(load.plumber())
    //编译sass文件使其转换为css文件
    .pipe(load.sass())
    //合并同一目录下的所有文件,并指定文件名
    .pipe(load.concat('main.css'))
    //css压缩
    .pipe(load.minifyCss())
    //将合并压缩后的文件输出到dist/static/css下（假如没有dist目录则自动生成dist目录）
    .pipe(gulp.dest('dist/static/css'))
});

gulp.task('html', function(){
    // 首先取得app/views下的所有为.html的文件（**/的意思是包含所有子文件夹)
    gulp.src('app/views/**/*.html')
    //错误管理模块（有错误时会自动输出提示到终端上）
    .pipe(load.plumber())
    //html压缩
    .pipe(load.minifyHtml())
    //将压缩后的文件输出到dist/views下（假如没有dist目录则自动生成dist目录）
    .pipe(gulp.dest('dist/views'))
});

gulp.task('images', function(){
    // 首先取得app/static/images下的所有为.{png,jpg,jpeg,ico,gif,svg}后缀的图片文件（**/的意思是包含所有子文件夹)
    gulp.src('app/static/images/**/*.{png,jpg,jpeg,ico,gif,svg}')
    //错误管理模块（有错误时会自动输出提示到终端上）
    .pipe(load.plumber())
    .pipe(load.imagemin([
        imagemin.gifsicle({interlaced: true}),
        imagemin.jpegtran({progressive: true}),
        imagemin.optipng({optimizationLevel: 6}),
        imagemin.svgo({
            plugins: [
                {removeViewBox: true},
                {cleanupIDs: false}
            ]
        })
    ]))
    //将压缩后的图片输出到dist/static/images下（假如没有dist目录则自动生成dist目录）
    .pipe(gulp.dest('dist/static/images'))
});

gulp.task('clean', function(){
    // 首先取得dist/*下的所有文件,read: false 返回空值，也就是并不会去读取文件
    gulp.src('dist/*', {read: false})
    //删除dist/*下的所有文件
    .pipe(load.clean())
})

gulp.task('build', function(){
    // 首先取得dist/*下的所有文件
    gulp.src('dist/*')
    //错误管理模块（有错误时会自动输出提示到终端上）
    .pipe(load.plumber())
    //将dist/*下的所有文件进行压缩打包生成为build.zip文件
    .pipe(load.zip('build.zip'))
    //将生成的build.zip文件输出到build下（假如没有build目录则自动生成build目录）
    .pipe(gulp.dest('build'))
})

gulp.task('watch', function(){
    //监听各个目录的文件，如果有变动则执行相应的任务操作文件
    gulp.watch('app/static/scripts/**/*.js',['js']);
    gulp.watch('app/static/sass/**/*.scss',['sass']);
    gulp.watch('app/views/**/*.html',['html']);
})

gulp.task('redist', function(){
    //先运行clean，然后并行运行html,js,sass,images,watch
    //如果不使用gulp-run-sequence插件的话，由于gulp是并行执行的
    //有可能会出现一种情况（其他文件处理速度快的已经处理完了，然后clean最后才执行，会把前面处理完的文件删掉，所以要用到runSequence）
    load.runSequence('clean', ['html', 'sass', 'js', 'images'],'watch')
})

//在终端上输入gulp命令，会默认执行default任务，并执行redist任务
gulp.task('default', ['redist']);
