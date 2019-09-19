export function test(){
    var cpz_test_li = $('.test-case li');
    var cpz_test_index = 0;
    console.log($('.test-case li'));
    console.log(cpz_test_li[cpz_test_index]);
    cpz_test_li[cpz_test_index].className='case1 active';
    cpz_test_li.mouseenter(function(){
        $(this).stop().animate({width:562});
        $(this).siblings('li').stop().animate({width:178});
        $(this).addClass('active');
        $(this).children().children('div').stop().animate({width:340});
        $(this).siblings('li').children().children('div').stop().animate({width:0});

    });
    
}