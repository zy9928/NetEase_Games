import {ll_float_line} from './ll_float_line.js';
export function ll_pic_reload() {

    // 最开始引入4张图片
    (function () {
        for(let i = 0; i < 4; i++){
            appendImg();
            img_move();
        }
    })()

   
    // 根据滚动条的位置来加载节点
    
    // window.onscroll = function (){
    //     var pageH = document.documentElement.offsetHeight;
    //     var windH = document.documentElement.clientHeight;
    //     var scrollT = document.documentElement.scrollTop;
    //     if (pageH - windH - scrollT < 100) {//滚动条距离底部小于100时，添加一批图片
    //         for(var i = 0; i < 4; i++){
    //             appendImg();
    //         }
    //         img_move();
    //     }
    // }

     // 插入节点
     function appendImg(){
        var dom = document.querySelector('.ll_con_pic_reload');
        var num = Math.ceil(Math.random()*13);// 1-13
        
        dom.innerHTML += `<div class="ll_reload_box">
                                <img class="ll_reload_pic" src="../static/images/ll_con${num}.png" alt="">
                                <div class="ll_reload_mask"></div>
                                <div class="ll_reload_title">
                                    <span>火花</span>
                                    <div class="ll_reload_title_line"></div>
                                    <em></em><b>99</b>
                                </div>
                                <div class="ll_reload_txt">猴子想做一个人，究竟有多难，安猴子想做一个人，究竟有多难，安文丰文丰</div>
                            </div>`
        
    }

    // 图片的放大缩小
    function img_move() {
        var mask = document.querySelectorAll('.ll_reload_mask');
        var pic = document.querySelectorAll('.ll_reload_pic')
        
        for(let i = 0; i < mask.length; i++){

            // 透明运动
            ll_float_line()(mask[i].parentNode,mask[i],70,0);

            // 放大
            mask[i].parentNode.onmouseover = function () {
                pic[i].style.transition = 'all 0.5s';
                pic[i].style.transform = 'scale(1.4)';
            }

            // 缩小
            mask[i].parentNode.onmouseout = function () {
                pic[i].style.transition = 'all 0.5s';
                pic[i].style.transform = 'scale(1)';
            }
        }
    }
    
}
