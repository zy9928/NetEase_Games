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
                speed: -50,
                result: function(value){document.documentElement.scrollTop = value;},
                timer: $(btn)[0],
                ferquency: 1,
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

    // 推荐用户点击事件
    function clickRec(dom){
        $(dom).on('click', function(){
            var oldL = $('.zy_dsUserRecommendCont').scrollLeft();
            if(dom == '.zy_dsUserRecBtnL'){
                var sp = -20;
                if(oldL <= 140){
                    var tg = 0;
                }else{
                    var tg = oldL - 140;
                }
            }else{
                var sp = 20;
                var tg = oldL + 140;
            }
            $(dom)[0].obj = {
                oldDate: oldL,
                target: tg,
                speed: sp,
                result: function(value){$('.zy_dsUserRecommendCont').scrollLeft(value);},
                timer: $(dom)[0],
                ferquency: 40,
            }
            run.uniformRun($(dom)[0].obj);
        });
    }

    return {
        returnTop,
        onloadEvt,
        clickRec,
    };
})
