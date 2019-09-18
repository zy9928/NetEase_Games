/**
 * 瀑布流
 */

define(['jquery'], function($){

    // 页面加载完成载入9块
    function leadingOk(fn){
        $(document).ready(function(){
            fn();
        });
    }

    // 触底加载
    function bottomLoad(fn){
        window.onscroll = function(){
            let pageH = document.documentElement.offsetHeight;
            let winH = document.documentElement.clientHeight;
            let pageScroll = document.documentElement.scrollTop;
            if( pageH - winH - pageScroll <= 100 ){
                fn();
            }
        }
    };
    return {
        leadingOk,
        bottomLoad,
    }
});