import {ll_float_line} from './ll_float_line.js';
import {ll_login} from './ll_login.js';
import {ll_pic_scroll_top} from './ll_pic_scroll_top.js';
import {ll_pic_big_small} from './ll_pic_big_small.js';
import {ll_comment_nav_move} from './ll_comment_nav_move.js';
import {ll_pic_reload2} from './ll_pic_reload2.js';

// 下划线渐入
(function () {
    var items1 = document.querySelectorAll('.ll_items1');
    var line = document.querySelectorAll('.ll_items1 span');
    for(var i = 0; i < items1.length - 1; i++){
        
        ll_float_line()(items1[i],line[i],100,0);
    }
})();

// 登陆
ll_login();

// 图片向上滚动
(function () {
    var $pic = $('.ll_other div');
    for(var i = 0; i < $pic.length; i++){
        ll_pic_scroll_top()($pic.eq(i));
    }
    
})();

// 给图片添加放大缩小
(function () {
    var imgs = document.querySelectorAll('.ll_comment_left_three  img');
    
    for(let i = 0; i < imgs.length; i++){
        ll_pic_big_small()(imgs[i].parentNode,imgs[i]);
    }
})();

// 导航模块的块移动
ll_comment_nav_move();

// 给瀑布流图片添加缩放
ll_pic_reload2();
