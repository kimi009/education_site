/**
 * Created by Administrator on 2016/8/6.
 */
var Tween = {
    Cubic: {
        easeOut: function(t,b,c,d){
            return c*((t=t/d-1)*t*t + 1) + b;
        }
    }
}
function goTop(ele){ 
    ele.on('mousedown',function(){
        var start = $(document).scrollTop();
        var end = 0;
        var change = end-start;
        var t = 0;
        var T = 30;
        var timer = setInterval(function(){
            $(document).scrollTop(Tween.Cubic.easeOut(t,start,change,T));
            t++;
            if(t>T){
                clearInterval(timer);
            }
        },10)
    })
}
goTop($('.goTop'));


