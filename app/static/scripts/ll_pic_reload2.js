import {ll_pic_big_small} from './ll_pic_big_small.js';
export function ll_pic_reload2() {

    // 最开始引入4张图片
    (function () {
        for(let i = 0; i < 4; i++){
            appendImg();
            img_move();
        }
    })()

   
    // 根据滚动条的位置来加载节点
    window.onscroll = function (){
        var pageH = document.documentElement.offsetHeight;
        var windH = document.documentElement.clientHeight;
        var scrollT = document.documentElement.scrollTop;
        if (pageH - windH - scrollT < 100) {//滚动条距离底部小于100时，添加一批图片
            for(var i = 0; i < 4; i++){
                appendImg();
            }
            img_move();
        }
    }

     // 插入节点
     function appendImg(){
        var dom = document.querySelector('.ll_comment_reload_pic');
        var num1 = Math.ceil(Math.random()*15)+5;// 6-20
        var num2 = Math.ceil(Math.random()*4);// 1-4
        var grande =['60.0','70.0','80.0','90.0'];
        var color;
        if (num2 == 1) {
            color = '#FFD222';
        }else{
            color = 'black'
        }


        
        dom.innerHTML += `<div class="ll_comment_items_pic">
                            <div class="ll_img">
                                <img src="../static/images/ll_com${num1}.png" alt="">
                            </div>
                            <div class="ll_text">
                                <div class="ll_pop">
                                    <img src="../static/images/ll_level${num2}.png" alt="">
                                    <span style=" color: ${color}; ">${grande[num2-1]}</span>
                                </div>
                                <p class="ll_title1">《贪婪之秋》</p>
                                <p class="ll_title2">猴子想做一个人，究竟有多难，囡囡安安安</p>
                                <p class="ll_title3">skrk/serg/arg</p>
                            </div>
                        </div>`
    }

    // 图片的放大缩小
    function img_move() {

        var imgs = document.querySelectorAll('.ll_comment_items_pic img');

        for(let i = 0; i < imgs.length; i++){
        ll_pic_big_small()(imgs[i].parentNode.parentNode, imgs[i]);
            
        }
    }
    
}
