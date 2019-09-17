/**
 * 入口文件
 */

require.config({
    baseUrl: './../static/scripts',
    paths: {
        "jquery": "jquery-1.8.3",
        "evt": "zy_event",
        "run": "zy_run",
        "tap": "zy_tap",
        "waterfall": "zy_waterfallModel"
    }
});



// pageNav返回顶部按钮
require(['jquery','evt'], function($,evt){
    evt.returnTop('.zy_pageLi3'); 
});



// zy_tipTitle>span旋转事件
require(['jquery','evt'], function($,evt){
    document.obj = {
        oldDate: 0,
        speed: 1,
        result: function(value){$('.zy_tipCont>span').css("transform",`rotateZ(${value}deg)`);},
        timer: document,
        ferquency: 5,
    }
    evt.onloadEvt(document);
});



// banner
require(['jquery','tap'], function($,tap){
    tap.imgTap();
});



// 瀑布流
require(['jquery','waterfall'], function($,water){
    // 请求数据
    let requestDate = function (){
        $.getJSON('./../static/json/zy_dsLongText.json',function(json){
            // console.log(json.zy_dsLongTextLi[`text1`].zy_dsLongTextHead);
            for(var i = 1 ; i <= 9 ; i++){
                $('.zy_dsLongTextUl').append(`
                    <li class="zy_dsLongTextLi">
                        <a href="">
                            <img src="./../static/images/${json.zy_dsLongTextLi[('text'+i)].zy_dsLongTextHead}" alt="头像" class="zy_dsLongTextHead">
                            <span class="zy_dsLongTextGf">官</span>
                            <img src="./../static/images/${json.zy_dsLongTextLi[('text'+i)].zy_dsLongTextImg}" alt="长文配图" class="zy_dsLongTextImg">
                            <span class="zy_dsLongTextBs">大神长文</span>
                            <h3 class="zy_dsLongTextTitle">${json.zy_dsLongTextLi[('text'+i)].zy_dsLongTextTitle}</h3>
                            <p class="zy_dsLongTextDown">
                                <span class="zy_dsLongTextUser">${json.zy_dsLongTextLi[('text'+i)].zy_dsLongTextUser}</span>
                                <span class="zy_dsLongTextTime">${json.zy_dsLongTextLi[('text'+i)].zy_dsLongTextTime}</span>
                            </p>
                        </a>
                    </li>
                `);
            }

        });
    }
    water.leadingOk(requestDate);
    water.bottomLoad(requestDate);
});
