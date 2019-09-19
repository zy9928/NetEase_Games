export function ll_pic_scroll_top() {
    function Pic_scroll_top(dom) {
        this.dom = dom;
        
    }

    Pic_scroll_top.prototype.init = function () {
        this.mouse();
        
    }

    // 注册鼠标划入划出事件
    Pic_scroll_top.prototype.mouse = function () {
        var _this = this;
        this.dom.mouseover(function () {
            _this.dom.animate({
                top: -37
            },200,'linear');
        });
        this.dom.mouseout(function () {
            _this.dom.animate({
                top: 0
            },200,'linear');
        })
        
        

    }

    function factory(dom) {
        return new Pic_scroll_top(dom).init();
    }

    return factory;
}