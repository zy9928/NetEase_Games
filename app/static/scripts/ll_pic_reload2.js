import {ll_pic_big_small} from './ll_pic_big_small.js';
export function ll_pic_reload2() {

    var dom = document.querySelector('.ll_comment_reload_pic');
    var time1;
    
    // 最开始引入4张图片
    (function () {
        // for(let i = 0; i < 4; i++){
        //     appendImg();
        //     img_move();
        // }
        _promise(16);
    })()

    // 根据滚动条的位置来加载节点
    window.onscroll = function (){
        var pageH = document.documentElement.offsetHeight;
        var windH = document.documentElement.clientHeight;
        var scrollT = document.documentElement.scrollTop;
        if (pageH - windH - scrollT < 10) {//滚动条距离底部小于100时，添加一批图片
            // for(var i = 0; i < 4; i++){
            //     appendImg();
            // }
            // img_move();

            clearTimeout(time1);

            _promise(4);
        }
    }

     // 插入节点
     function appendImg(){
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



    // /删除提示
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


    // 图片的放大缩小
    function img_move() {

        var imgs = document.querySelectorAll('.ll_comment_items_pic img');

        for(let i = 0; i < imgs.length; i++){
        ll_pic_big_small()(imgs[i].parentNode.parentNode, imgs[i]);
            
        }
    }
    
}
