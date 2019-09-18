export function ll_float_line() {
    function Float_line(d1,d2,s1,s2) {
        this.dom1 = d1;
        this.dom2 = d2;
        this.status1 =s1;
        this.status2 = s2;
    }
    Float_line.prototype.init = function () {
        this.mouse();
    }
    
    // 注册鼠标进入移出事件
    Float_line.prototype.mouse = function () {
        var _this = this;
        this.dom2.timer1 = null;
        this.dom1.onmouseenter = function () {
            move(_this.dom2,_this.status1);
            
        }
        this.dom1.onmouseleave = function () {
            move(_this.dom2,_this.status2);
            
        }
    }

    // 透明度运动函数
    function move(dom,target) {
        var opa = dom.style.opacity*100;
        clearInterval(dom.timer1);//防止定时器点击的时候重复触发
        dom.timer1 = setInterval(function () {
            if ( opa > target ) {
                var speed = -5;
            } else {
                var speed = 5;
            }

            if ( Math.abs(target - opa) < Math.abs(speed) ) {
                dom.style.opacity = target/100;
                clearInterval(dom.timer1)
            } else {
                opa = opa + speed;
                dom.style.opacity = opa/100;
            }
        },20)
    }

    function factory(d1,d2,status1,status2) {
        return new Float_line(d1,d2,status1,status2).init();
    }
    return factory;
}