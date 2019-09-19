// 轮播图

var sry_imgs = document.querySelectorAll('.sry_img');
var sry_points = document.querySelectorAll('.sry_banner_point a');
var sry_index = 0; //当前显示图片的下标
var sry_timer1,sry_timer2;

clearInterval(sry_timer2);
clearInterval(sry_timer1);

sry_move(sry_imgs[sry_index],100);//进入页面执行，显示第一张图片
sry_imgs[sry_index].style.zIndex = 10;
sry_moveAuto();//自动播放

// 自动播放
function sry_moveAuto(){
    clearInterval(sry_timer1);
    sry_timer1 = setInterval(function(){
        sry_imgs[sry_index].style.zIndex = 1; //当前图片下沉
        sry_imgs[sry_index].style.opacity = 0.1;    //当前图片的透明度恢复
        sry_points[sry_index].className = '';//取消当前图片对应的圆圈样式

        sry_index++;
        if(sry_index >= sry_imgs.length){
            sry_index = 0;
        }

        sry_imgs[sry_index].style.zIndex = 10; //下一张图片上浮 
        sry_points[sry_index].className = 'sry_show';// 下一张图片对应的圆圈显示样式
        sry_move(sry_imgs[sry_index],100);//下一张图片的透明度变化到100
    },4000);
}

//透明度变化
function sry_move(dom,target){
    var opa = 10;
    clearInterval(sry_timer2);
    sry_timer2 = setInterval(function(){
        if(opa > target){
            var speed = -10;
        }else{
            var speed = 10;
        }
        if(Math.abs(opa - target) <= Math.abs(speed)){
            clearInterval(sry_timer2);
            dom.style.opacity = target / 100;
        }else{
            opa += speed;
            dom.style.opacity = opa / 100;
        }
    },40);
}

//banner 里左侧按钮的轮播图
var sry_bl = document.querySelector('.sry_banner_left');
var sry_lh = document.querySelectorAll('.sry_left_hide');
var sry_nowIndex = 0;

var sry_Timer1;
clearInterval(sry_Timer1);

sry_hide_move();

sry_bl.onmouseenter = function(){
    sry_bl.style.background = '#3c3d3f';
    sry_lh[sry_nowIndex].style.display = 'block';
    clearInterval(sry_Timer1);
    sry_hide_move();
}
function sry_hide_move(){
    clearInterval(sry_Timer1);
    sry_Timer1 = setInterval(function(){
        sry_lh[sry_nowIndex].style.zIndex = 1;

        sry_nowIndex++;
        if(sry_nowIndex >= sry_lh.length){
            sry_nowIndex = 0;
        }

        sry_lh[sry_nowIndex].style.zIndex = 1000;
        sry_lh[sry_nowIndex].style.display = 'block';

    },3000);
}
sry_bl.onmouseleave = function(){
    for(var i = 0 ;i < 5; i++){
        sry_lh[i].style.display = 'none';
    }
    sry_bl.style.background = '#cf0f32';
}

//banner 里右侧按钮的轮播图
var sry_br = document.querySelector('.sry_banner_right');
var sry_rh = document.querySelectorAll('.sry_right_hide');
var sry_nowIndex2 = 0;

var sry_Timer2;
clearInterval(sry_Timer2);

sry_hide_move2();

sry_br.onmouseenter = function(){
    sry_br.style.background = '#3c3d3f';
    sry_rh[sry_nowIndex2].style.display = 'block';
    clearInterval(sry_Timer2);
    sry_hide_move2();
}
function sry_hide_move2(){
    clearInterval(sry_Timer2);
    sry_Timer2 = setInterval(function(){
        sry_rh[sry_nowIndex2].style.zIndex = 1;

        sry_nowIndex2--;
        if(sry_nowIndex2 < 0){
            sry_nowIndex2 = sry_rh.length - 1;
        }

        sry_rh[sry_nowIndex2].style.zIndex = 1000;
        sry_rh[sry_nowIndex2].style.display = 'block';

    },3000);
}
sry_br.onmouseleave = function(){
    for(var j = 0 ;j < 5; j++){
        sry_rh[j].style.display = 'none';
    }
    sry_br.style.background = '#cf0f32';
}

//banner底部盒子
var lis = document.querySelectorAll('.sry_tab_list li');
for(var i = 0, len = lis.length; i < len; i++){
    lis[i].onmouseover = function(){
        this.children[1].style.display = 'block';
        this.children[0].style.borderLeft = '4px solid #cf0f32';
        this.children[0].style.background = '#080909';
    };
    lis[i].onmouseout = function(){
        this.children[1].style.display = 'none';
        this.children[0].style.borderLeft = '4px solid transparent';
        this.children[0].style.background = '#272a2c';
    }
}
var sry_tab_preIndex = 0;
var sry_tab_as = document.querySelectorAll('.sry_tab_list li a');
var sry_tab_imgs = document.querySelectorAll('.sry_tab_main img');
var sry_tab_bs = document.querySelectorAll('.sry_tab_list b');

function sry_tab(n){
    lis[n].onclick = function(e){
        var ev = e || window.event;
        ev.preventDefault ? event.preventDefault() : (event.returnValue = false);
        sry_tab_as[sry_tab_preIndex].className = '';
        sry_tab_imgs[sry_tab_preIndex].className = '';
        sry_tab_as[n].className = 'sry_tab_active';
        sry_tab_bs[n].className = 'sry_tab_bActive';
        sry_tab_imgs[n].className = 'sry_tab_show';
        sry_tab_preIndex = n;
    }
}
for(var j = 0; j < lis.length; j++){
    sry_tab(j);
}