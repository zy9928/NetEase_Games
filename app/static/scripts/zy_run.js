


/**
 * 匀速运动 uniformRun
 * obj.oldDate 为初始数据
 * obj.target 为目标数据
 * obj.speed 为运动速度
 * obj.ferquency 为运动频率
 * obj.timer 为运动计时器名称
 * obj.result 为运动要执行的动作
 * 
 */

define(function(){
    function uniformRun(obj,resolve){
        var date = obj.oldDate;
        clearInterval(obj.timer);
        obj.timer = setInterval(function(){
            if(Math.abs(date-obj.target) <= Math.abs(obj.speed)){
                obj.result(date);
                clearInterval(obj.timer);
                if(resolve){
                    resolve();
                }
            }
            date += obj.speed;
            obj.result(date);
        },obj.ferquency);
    }
    return {
        uniformRun,
    }
});