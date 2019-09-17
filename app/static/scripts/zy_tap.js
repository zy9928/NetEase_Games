/* 
    选项卡切换
*/

define(['jquery','run'], function($, run){
    function imgTap(){
        let timerImgTap;
        var i = 1;
        clearInterval(timerImgTap);
        $('.zy_bannerImg')[0].obj = {
            speed: 20,
            result: function (value){ $('.zy_bannerImg').scrollLeft(value); },
            timer: $('.zy_bannerImg')[0],
            ferquency: 40,
        }
        timerImgTap = setInterval(function(){
            $('.zy_bannerImg')[0].obj.oldDate = $('.zy_bannerImg').scrollLeft();
            if(i >= $('.zy_bannerImgKuai>a').length){
                i = 0;
            }
            $('.zy_bannerImg')[0].obj.target = 950*(i);
            if($('.zy_bannerImg')[0].obj.oldDate > $('.zy_bannerImg')[0].obj.target){
                $('.zy_bannerImg')[0].obj.speed = 0 - $('.zy_bannerImg')[0].obj.speed;
            }else{
                $('.zy_bannerImg')[0].obj.speed = Math.abs($('.zy_bannerImg')[0].obj.speed);
            }
            (async function(){
                var res1 = await new Promise(function(resolve,reject){
                    run.uniformRun($('.zy_bannerImg')[0].obj,resolve);
                });
                var res2 = await new Promise(function(resolve, reject){
                    i = i+1;
                });
                console.log(res1,res2);
            })();
        },5000);
    };
    return {
        imgTap,
    }
});