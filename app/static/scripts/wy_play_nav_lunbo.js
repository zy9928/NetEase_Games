export function lunbo(){
    var cpz_one = $('.one');
    var cpz_nums = $('.nums li');
    var cpz_timer1,cpz_timer2;
    var cpz_index = 0;

    move(cpz_one[cpz_index],100);
    autoMove();

    function autoMove(){
        cpz_timer2 = setInterval(function(){
            cpz_one[cpz_index].style.zIndex = 1;
            cpz_one[cpz_index].style.opacity = 0.1;
            cpz_nums[cpz_index].className = '';
            cpz_index++;
            if(cpz_index>=cpz_one.length){
                cpz_index = 0;
            }
            cpz_one[cpz_index].style.zIndex = 10;
            cpz_nums[cpz_index].className = 'show';
            move(cpz_one[cpz_index],100);
        },5000);
    }

    for(var i = 0;i<cpz_nums.length;i++){
        cpz_nums[i].n = i;
        cpz_nums[i].onclick = function(){
            clearInterval(cpz_timer2);
            cpz_one[cpz_index].style.zIndex = 1;
            cpz_one[cpz_index].style.opacity = 0.1;
            cpz_nums[cpz_index].className = '';
            cpz_index=this.n;
            cpz_nums[cpz_index].className = 'show';
            cpz_one[cpz_index].style.zIndex = 10;
            move(cpz_one[cpz_index],100);
            autoMove();
        }
    }

    function move(dom,target){
        var cpz_opa = 10;
        clearInterval(cpz_timer1);
        cpz_timer1 =setInterval(function(){
            if(cpz_opa>target){
                var cpz_speed = -5;
            }else{
                var cpz_speed = 5;
            }
            if(Math.abs(cpz_opa - target)<=Math.abs(cpz_speed)){
                clearInterval(cpz_timer1);
                dom.style.opacity = target/100;
            }else{
                cpz_opa+=cpz_speed;
                dom.style.opacity = cpz_opa/100;
            }
        },40);
    }
}
