// 封装一个函数，通过类名获取元素（兼容谷歌、火狐、IE678）
// 获取所有元素：document.all; || document.getElementsByTagName('*');
function byClass1(classn){
    var allTag = document.all || document.getElementsByTagName('*');
    var arr = [];
    for (var i = 0; i < allTag.length; i++){
        if (allTag[i].className.indexOf(classn) != -1) {
            arr.push(allTag[i]);
        }
    }
    return arr;
}

function byClass2(parentId,classn){
    var parent = document.getElementById(parentId);
    var allTag = parent.all || parent.getElementsByTagName('*');
    var arr = [];
    for (var i = 0; i < allTag.length; i++){
        if (allTag[i].className.indexOf(classn) != -1) {
            arr.push(allTag[i]);
        }
    }
    return arr;
}

//x显示中文的星期几
function getWeek(){
    var d = new Date();
    var num = d.getDay();//0-6
    var arr = ['星期日','星期一','星期二','星期三','星期四','星期五','星期六'];
    return arr[num];
}

//获取min到max区间的任意整数
function randomInt(min,max){
    return Math.round(Math.random()*(max-min))+min;
}


//获取十六进制的随机颜色
function randomColor(){
    var col = '#';
    var arr = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];//0-15
    for (var i = 0; i < 6; i++){
        var num = Math.round(Math.random()*15);//0-15
        col += arr[num];
    }
    return col;
}

//获取六位随机验证码
function randomCode(){
    var arr = [1,1,1,1,1,1];//存储生成的随机字符
    for (var i in arr){
        do{
            var ascii = Math.round(Math.random()*(122-48))+48;// 48-122
        } while(ascii>57&&ascii<65 || ascii>90&&ascii<97);
        arr[i] = String.fromCharCode(ascii);
    }
    return arr.join('');// 返回的字符串
}

//封装兼容的获取元素样式的函数
function getStyle(dom,style){
    if (dom.currentStyle) {//IE
        return dom.currentStyle[style];
    } else {
        return getComputedStyle(dom,null)[style];
    }
}

//DOM2级事件模型，封装事件监听器的兼容函数
function addEvent(dom,type,fn){
    if (dom.attachEvent) {//IE
        dom.attachEvent('on'+type,fn);
    } else {
        dom.addEventListener(type,fn,false);
    }
}


//匀速运动
function move(dom,target){
    clearInterval(timer);
    timer = setInterval(function (){
        if (dom.offsetLeft > target) {//判断运动方向
            var speed = -5;//左走
        } else {
            var speed = 5;//右走
        }
        // 剩余运动量 <= 每次运动的量5
        if (Math.abs(dom.offsetLeft - target) <= Math.abs(speed)) {
            clearInterval(timer);
            dom.style.left = target + 'px';//手动设置终点
        } else{
            dom.style.left = dom.offsetLeft + speed + 'px';//每次的运动
        }
    },20);
}

//缓缓运动
function move(dom,target){
    clearInterval(timer);
    timer = setInterval(function (){
        var speed = (target - dom.offsetLeft) / 10;//持续变化的速度

        // 浮点数计算，造成数据丢失，无法到达目的地  => 取整（把数值的绝对值往大了取，因为下面会对多余的数设置直接到终点）
        speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
        
        // 剩余运动量 <= 每次运动的量5
        if (Math.abs(dom.offsetLeft - target) <= Math.abs(speed)) {
            clearInterval(timer);
            dom.style.left = target + 'px';//手动设置终点
        } else{
            dom.style.left = dom.offsetLeft + speed + 'px';//每次的运动
        }
    },20);
}


//多元素透明度运动
for (var i = 0; i < box.length; i++){
    box[i].timer = null;
    box[i].opa = 30;
    box[i].onmouseover = function (){
        move(this,100);
    }
    box[i].onmouseout = function (){
        move(this,30);
    }
}
function move(dom,target){// 多元素进行相同的运动，属性都不能共用！
    clearInterval(dom.timer);
    dom.timer = setInterval(function (){
        if (dom.opa > target) {//判断运动方向
            var speed = -5;//透明度减小
        } else {
            var speed = 5;//透明度增加
        }
        // 剩余运动量 <= 每次运动的量5
        if (Math.abs(dom.opa - target) <= Math.abs(speed)) {
            clearInterval(dom.timer);
            dom.style.opacity = target / 100;//手动设置终点
        } else{
            dom.opa += speed;
            dom.style.opacity = dom.opa / 100;//每次的运动
        }
    },40);
}


// 获取元素到body左侧或顶部的距离（包含父级边框）
function offset(dom){
    var l = 0;
    var t = 0;
    var bdl = dom.clientLeft;//元素左边框宽度
    var bdt = dom.clientTop;//元素上边框宽度
    while(dom){
        l = l + dom.offsetLeft + dom.clientLeft;
        t = t + dom.offsetTop + dom.clientTop;
        dom = dom.offsetParent;//指向最近的定位父级
    }
    return {left: l - bdl, top: t - bdt};
}
