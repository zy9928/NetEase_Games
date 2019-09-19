// 热门游戏
var sry_re_mask = document.querySelector('.sry_re_mask');
var sry_re_lis = document.querySelectorAll('.sry_reLi1');
var sry_re_timer1;
clearInterval(sry_re_timer1);

sry_re_lis[0].onmouseenter = function(){
    clearInterval(sry_re_timer1);
    sry_re_mask.style.display = 'block';
    sry_re_move(sry_re_mask,0);
}
sry_re_lis[0].onmouseleave = function(){
    clearInterval(sry_re_timer1);
    sry_re_move(sry_re_mask,-170);
    // sry_re_mask.style.display = 'none';
}

//匀速运动
function sry_re_move(dom,target){
    clearInterval(sry_re_timer1);
    sry_re_timer1 = setInterval(function (){
        if (dom.offsetTop > target) {//判断运动方向
            var speed = -5;//左走
        } else {
            var speed = 5;//右走
        }
        // 剩余运动量 <= 每次运动的量5
        if (Math.abs(dom.offsetTop - target) <= Math.abs(speed)) {
            clearInterval(sry_re_timer1);
            dom.style.top = target + 'px';//手动设置终点
        } else{
            dom.style.top = dom.offsetTop + speed + 'px';//每次的运动
        }
    },10);
}





















// 客户端游戏

var sry_btn = document.querySelector('.sry_btn');
var sry_btn1 = document.querySelector('.sry_btn1');
var sry_client = document.querySelector('.sry_clientAll .sry_client');
var sry_clientAll = document.querySelector('.sry_clientAll');
var sry_btn_timer1,sry_btn_timer2;

clearInterval(sry_btn_timer1);
clearInterval(sry_btn_timer2);

// 查看更多
sry_btn.onclick = function(){
    clearInterval(sry_btn_timer1);
    clearInterval(sry_btn_timer2);
    sry_btn_timer1 = setInterval(function(){
        sry_btn.style.display = 'none';
        sry_btn1.style.display = 'block';
        sry_client.style.height = sry_client.offsetHeight + 10 + 'px';
        if(sry_client.style.height >= 750+'px'){
            sry_client.style.height = 750+'px';
        }
        sry_clientAll.style.height = sry_clientAll.offsetHeight + 10 + 'px';
        if(sry_clientAll.style.height >= 900+'px'){
            sry_clientAll.style.height = 900+'px';
        }
   },10);
};
// 收起
sry_btn1.onclick = function(){
    clearInterval(sry_btn_timer1);
    clearInterval(sry_btn_timer2);
    sry_btn_timer2 = setInterval(function(){
        sry_btn1.style.display = 'none';
        sry_btn.style.display = 'block';
        sry_client.style.height = sry_client.offsetHeight - 20 + 'px';
        if(sry_client.style.height <= 460+'px'){
            sry_client.style.height = 460+'px';
        }
        sry_clientAll.style.height = sry_clientAll.offsetHeight - 10 + 'px';
        if(sry_clientAll.style.height <= 620+'px'){
            sry_clientAll.style.height = 620+'px';
        }
    },10);
}