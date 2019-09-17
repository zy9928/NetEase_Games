/**
 *事件
 */

/* 
    returnTop 点击返回顶部事件
    btn 为触发事件的元素
    obj 为运动参数

    onloadEvt 加载完成运动
    btn 为触发事件的元素
    obj 为运动参数
*/
define(['jquery','run'],function($,run){
    // 点击返回顶部事件
    function returnTop(btn){
        $(btn).on('click', function(){
            $(btn)[0].obj = {
                oldDate: document.documentElement.scrollTop,
                target: 0,
                speed: -5,
                result: function(value){document.documentElement.scrollTop = value;},
                timer: $(btn)[0],
                ferquency: 5,
            }
            run.uniformRun($(btn)[0].obj);
        });
    }
    // 加载完成事件
    function onloadEvt(dom){
        $(dom).ready(function(){
            run.uniformRun($(dom)[0].obj);
        });
    }
    return {
        returnTop,
        onloadEvt,
    };
})