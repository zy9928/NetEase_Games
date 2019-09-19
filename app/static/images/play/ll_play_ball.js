export function ll_paly_ball() {
    function Play_ball(d1) {
        this.dom1 = d1;

    }
    Play_ball.prototype.init = function () {
        this.mouse();
    }

    // 鼠标进入事件
    Play_ball.prototype.mouse = function () {
        
        var _this = this;
        var time,time1,timer2,timer3;
        var index = 0;
        var small_ball = this.dom1.children('.ll_items_pic');
        var r = this.dom1.width()+5;
        var angle = 45;//初始的度数
        var top = small_ball.position().top;//保存原来的top值
        
        

        // 鼠标进入小球体
        small_ball.mouseenter(function () {
            // console.log('进入小球体');

        })

        // 鼠标移出小球体
        small_ball.mouseleave(function () {
            // console.log('移出小球体');
        
        })
        
        // 鼠标进入大球体
        this.dom1.mouseenter(function () {  
            clearTimeout(timer2);
            clearTimeout(timer3);
            timer2 = setTimeout(function () {
                
            
            console.log('111');
            
            angle = 45;
            small_ball.stop();
            index = 0;

            // fadeIn(null/speed , easing , fn);   淡入
            // fadeOut(null/speed , easing , fn);   淡出

            // 给小球添加透明出现
            for(let i = 0; i < small_ball.length; i++){
                small_ball.eq(i).time = null;
                move(small_ball.eq(i),100);
            }
                // move(small_ball.eq(0),100);


            
            // 当会重复触发计时器的时候，先清除计时器，两个都清除，防止鼠标过快操作造成的bug
            clearInterval(time1);
            clearInterval(time);

            time = setInterval(() => {

                var x = Math.round(r* Math.cos(angle * Math.PI / 180)) ;
                var y = Math.round(r * Math.sin(angle * Math.PI / 180)) ;



                small_ball.eq(index).animate({
                    left: x,
                    top: top - y,
                },'linear');

                index ++;
                angle -= 30;
                if (index >= small_ball.length) {
                    index = 0
                    clearInterval(time);
                }
            },30)  
        },200);
            

        });
        


        // 鼠标移出大球体
        this.dom1.mouseleave(function () {
            clearTimeout(timer2);
            clearTimeout(timer3);
            timer3 = setTimeout(function (params) {
                
            
            console.log('222');
            
            small_ball.stop();
            index = 0;

            // 给小球添加透明消失
            for(let i = 0; i < small_ball.length; i++){
                // small_ball.eq(i).time = null;
                move(small_ball.eq(i),0);
            }
            
            // move(small_ball.eq(0),0);



            clearInterval(time);
            clearInterval(time1);

            time1 = setInterval(() => {

                small_ball.eq(index).animate({
                    left: 0,
                    top:top
                },'linear');

                index ++;
                angle -= 30;
                if (index >= small_ball.length) {
                    index = 0;
                    angle = 45;
                    clearInterval(time1);
                }
            },30)  
        },200);
        })
    }



    // 透明度运动函数
    function move(dom,target) {
        // console.log('透明计时器触发');
        
        var opa = dom.css('opacity')*100;
        
        // clearInterval(dom.time);//防止定时器点击的时候重复触发
        dom.time = setInterval(function () {
            if ( opa > target ) {
                var speed = -5;
            } else{
                var speed = 5;
            }
            // 
            if ( Math.abs(target - opa) <= Math.abs(speed) ) {
                dom.css('opacity',target/100)
                console.log("a");
                console.log(target, opa); 
                clearInterval(dom.time)
            } else {
                opa = opa + speed;
                dom.css('opacity',opa/100)
            }
        },20)
    }

    function factory(d1) {
        return new Play_ball(d1).init();
    }

    return factory;
}

