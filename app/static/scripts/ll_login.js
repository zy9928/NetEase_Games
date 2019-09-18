export function ll_login(){
    // var login = document.querySelector('.ll_login_form');
    // var ipt_p = document.querySelectorAll('.ll_login_form .ll_ipt')
    var $login = $('.ll_login_form')
    
    $login.on('click','.ll_ipt',function () {
        $(this).children('input').focus();
        
    })
    
    
    
    
    
}
    