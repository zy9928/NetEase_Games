

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
    // 长文
    let requestDate = function (){
        $.getJSON('./../static/json/zy_dsLongText.json',function(json){
            // console.log(json.zy_dsLongTextLi[`text1`].zy_dsLongTextHead);
            for(var i = 1 ; i <= 15 ; i++){
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
    // 说说
    let requestDateSS = function (){
        $.getJSON('./../static/json/zy_dsLongText.json',function(json){
            // console.log(json.zy_dsLongTextLi[`text1`].zy_dsLongTextHead);
            for(var i = 1 ; i <= 9 ; i++){
                var head = json.zy_dsSSKuai[('text'+i)].zy_dsSSHead;
                if(json.zy_dsSSKuai[('text'+i)].zy_dsLongTextGf[0] == "zy_dsSSX"){
                    var rzClass = "zy_dsSSX";
                    var rzCont = "☆" ;
                }else{
                    var rzCont = "官";
                }
                var userID = json.zy_dsSSKuai[('text'+i)].zy_dsSSUser;
                var userFrom = json.zy_dsSSKuai[('text'+i)].zy_dsSSFrom;
                var contText = json.zy_dsSSKuai[('text'+i)].zy_dsSSContText;
                if(json.zy_dsSSKuai[('text'+i)].zy_dsSSContImgKuai[0] == "zy_dsSSContImgKuai"){
                    var contImgClass = "zy_dsSSContImgKuai";
                    var contImgCont = '';
                    for(var j = 1 ; j < json.zy_dsSSKuai[('text'+i)].zy_dsSSContImgKuai.length ; j ++){
                        contImgCont = contImgCont.concat(`<div class="zy_dsSSContImgBox"><img src="./../static/images/${json.zy_dsSSKuai[('text'+i)].zy_dsSSContImgKuai[j]}" alt="说说图片" class="zy_dsSSContImg"></div>`);
                    }
                }else{
                    var contImgClass = "zy_daSSContLongKuai";
                    var contImgCont = `<img src="./../static/images/${json.zy_dsSSKuai[('text'+i)].zy_dsSSContImgKuai[1]}" alt="说说图片" class="zy_dsSSContImg">`
                }
                $('.zy_dsSSBox').append(`
                <a class="zy_dsSSKuai zy_tx">
                    <!-- ID栏 -->
                    <div class="zy_dsSSIDLang">
                        <img src="./../static/images/${head}" alt="头像" class="zy_dsSSHead">
                        <span class="zy_dsLongTextGf ${rzClass}">${rzCont}</span>
                        <h6 class="zy_dsSSUser">${userID}</h6>
                        <span class="zy_dsSSFrom">${userFrom}&nbsp;来自网易大神</span>
                    </div>
                    <p class="zy_dsSSContText">${contText}</p>
                    <div class="${contImgClass} zy_tx">${contImgCont}</div>
                    <p class="zy_dsSSZtLang">
                        <span class="zy_dsSSZtZf">转发</span>
                        <span class="zy_dsSSZtPl">${json.zy_dsSSKuai[('text'+i)].zy_dsSSZtPl}</span>
                        <span class="zy_dsSSZtDz">${json.zy_dsSSKuai[('text'+i)].zy_dsSSZtDz}</span>
                    </p>
                </a>
                `);
            }

            //使图片垂直居中
            for(var k = 0 ; k < $('.zy_dsSSContImg').length; k++){
                // 解决k取值问题
                +function(n){
                    // 解决图片加载异步问题
                    $('.zy_dsSSContImg')[n].onload = function(){
                        var zy_ssImg = -$('.zy_dsSSContImg')[n].height/2;
                        $('.zy_dsSSContImg').eq(n).css('margin-top',zy_ssImg);
                    };
                }(k);
            }
        });
    };
    water.leadingOk(requestDateSS);
    $('.zy_dsSSLang')[0].onscroll = function(){
        let pageH = $('.zy_dsSSBox').height();
        let winH = $('.zy_dsSSLang').height();
        let pageScroll = $('.zy_dsSSLang').scrollTop();
        if( pageH - winH - pageScroll <= 100 ){
            requestDateSS();
        }
    };

    // 推荐用户
    let requestDateRec = function(){
        $.getJSON('./../static/json/zy_dsLongText.json', function(json){
            // console.log(json.userRec);
            for(var i = 1 ; i <= 13 ; i++){
                $('.zy_dsUserRecContLang').append(`
                    <div class="zy_dsUserRecommend">
                        <img src="./../static/images/${json.userRec[('test'+i)].head}" alt="头像" class="zy_dsUserRecHead">
                        <h6 class="zy_dsUserRecId">${json.userRec[('test'+i)].id}</h6>
                        <p class="zy_dsUserRecJs">${json.userRec[('test'+i)].js}</p>
                        <button class="zy_dsUserRecRead">查看主页</button>
                    </div>
                `);
            };
        });
    };
    water.leadingOk(requestDateRec);
    $('.zy_dsUserRecommendCont')[0].onscroll = function(){
        let pageH = $('.zy_dsUserRecContLang').width();
        let winH = $('.zy_dsUserRecommendCont').width();
        let pageScroll = $('.zy_dsUserRecommendCont').scrollLeft();
        if( pageH - winH - pageScroll <= 100 ){
            $('.zy_dsUserRecContLang').width(pageH + 1950);
            requestDateRec();
        }
    };
});

// 推荐用户点击事件
require(['jquery', 'evt'], function($, evt){
    evt.clickRec('.zy_dsUserRecBtnL');
    evt.clickRec('.zy_dsUserRecBtnR');
    $('.zy_dsUserRecHyH').on('click', function(){
        var maxW = $('.zy_dsUserRecContLang').width();
        var value = Math.floor(Math.random()*maxW);
        $('.zy_dsUserRecommendCont').scrollLeft(value);
    });
});

// 工具栏宽高成比例
require(['jquery'], function($){
    let timerHW;
    clearInterval(timerHW);
    timerHW = setInterval(function(){
        let y = ($('.zy_dsToolsImg').width()) * 0.3;
        $('.zy_dsToolsImg').height(y);
    },50);
});


// 说说图片居中
require(['jquery'], function($){
    let zy_ssImg = -($('.zy_dsSSContImg').height())/2;
    $('.zy_dsSSContImg').css('margin-top',zy_ssImg);
});

