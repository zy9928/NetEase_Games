export function ll_comment_nav_move() {
    var nav = $('.ll_comment_right_nav');
    var box = $('.ll_comment_right_nav_box');
    var mask = $('.ll_comment_right_nav_box .ll_mask');
    var index = 0;
    
    
    nav.on('mouseenter','.ll_comment_right_nav_box',function () {
        var width = mask.width();
        index = $(this).attr('ll_tmp');
        mask.stop();
        mask.animate({
            left: width * index 
        },300,'linear');
    })

    nav.on('mouseleave','.ll_comment_right_nav_box',function () {
        mask.stop();
        mask.animate({
            left: 0
        },300,'linear');
        
    })



    
}