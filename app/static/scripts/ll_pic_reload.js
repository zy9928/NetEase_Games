import {ll_float_line} from './ll_float_line.js';
export function ll_pic_reload() {

    var dom = document.querySelector('.ll_con_pic_reload');        
    var time1 ;


    // 最开始引入4张图片
    (function () {
        _promise(4);
    })()


   
    // 根据滚动条的位置来加载节点
    window.onscroll = function (){
        var pageH = document.documentElement.offsetHeight;
        var windH = document.documentElement.clientHeight;
        var scrollT = document.documentElement.scrollTop;
        if (pageH - windH - scrollT < 10) {//滚动条距离底部小于100时，添加一批图片
            
            clearTimeout(time1);

            _promise(2);

        }
    }



    // promise处理代码的先后执行顺序
    function _promise(pic_num) {
        function doSomeThing(task) {
            return new Promise(function (resolve,reject) {
                time1 = setTimeout(() => {
                    for(let i = 0; i < pic_num; i++){
                        appendImg(); 
                        img_move();
                    }
                    resolve(task);
                }, 1000);
            })
        }

        doSomeThing()
        .then(function () {
            remove_title();
            title();
            
        })
    }


    // 删除提示
    function remove_title() {
        
        var title = document.querySelector('.ll_reload_run_reload');
        if (title) {
            dom.removeChild(title);
        }

    }

    // // 插入提示
    function title() {
        var title = document.createElement('div');
        title.className = 'll_reload_run_reload'
        title.innerHTML = '加载中........'
        dom.appendChild(title);
    }

     // 插入节点
     function appendImg(){
        
        var num = Math.ceil(Math.random()*13);// 1-13
        
        dom.innerHTML += `<div class="ll_reload_box ">
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
