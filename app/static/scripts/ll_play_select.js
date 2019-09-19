import {ll_float_line} from './ll_float_line.js';
import {ll_login} from './ll_login.js';
import {ll_pic_scroll_top} from './ll_pic_scroll_top.js';
<<<<<<< HEAD
import {ll_pic_reload} from './ll_pic_reload.js';
=======
// import {ll_pic_reload} from './ll_pic_reload.js';
>>>>>>> cpz

// 下划线渐入
(function () {
    var items1 = document.querySelectorAll('.ll_items1');
    var line = document.querySelectorAll('.ll_items1 span');
    for(var i = 1; i < items1.length; i++){
        
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

<<<<<<< HEAD
// 加载节点图片
ll_pic_reload();
=======
// // 加载节点图片
// ll_pic_reload();
>>>>>>> cpz
