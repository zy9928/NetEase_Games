export function ll_pic_big_small() {
    function Pic_big_small(d1,d2) {
        this.dom1 = d1;
        this.dom2 =d2;
    }

    Pic_big_small.prototype.init = function () {
        this.mouse();
    }

    Pic_big_small.prototype.mouse = function () {

        var _this = this;

        // 放大
        this.dom1.onmouseover = function () {
            _this.dom2.style.transition = 'all 0.5s';
            _this.dom2.style.transform = 'scale(1.4)';
        }

        // 缩小
        this.dom1.onmouseout = function () {
            _this.dom2.style.transition = 'all 0.5s';
            _this.dom2.style.transform = 'scale(1)';
        }
    }

    function factory(d1,d2) {
        return new Pic_big_small(d1,d2).init();
    }

    return factory;
     
}