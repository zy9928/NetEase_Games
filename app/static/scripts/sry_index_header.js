$(function(){
    $('.sry_header_right').on('click',function(e){
        var ev = e || window.event;
        ev.preventDefault ? event.preventDefault() : (event.returnValue = false);
        $('.sry_header_nav').css('z-index','99999');
        $('.sry_header_nav').slideDown(500,'linear');
        $('.sry_header_rightAfter').css('display','block');
    });
   $('.sry_header_rightAfter').on('click',function(e){
        var ev = e || window.event;
        ev.preventDefault ? event.preventDefault() : (event.returnValue = false);
        $('.sry_header_nav').slideUp(50,'linear');
        $('.sry_header_rightAfter').slideUp(50,'linear');
   });
   $('.sry_nav_bottom i').on('click',function(e){
    var ev = e || window.event;
    ev.preventDefault ? event.preventDefault() : (event.returnValue = false);
    $('.sry_header_nav').slideUp(200,'linear');
    $('.sry_header_rightAfter').slideUp(200,'linear');
});

});
