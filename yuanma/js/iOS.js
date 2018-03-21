/**
 * Created by Administrator on 2016/8/28.
 */
//¹ö¶¯
function scroller(ele,row){
    var element = $(ele);
    var liWidth = element.find(row).outerHeight(true);
    var length = element.find(row).length;
    var str = element.html();
    var speed = 30;
    var index = 0;
    var timer1;
    var timer2;
    element.html(str+=str);
    move();
    function move(){
        timer1 = setInterval(function(){
            element.css('marginTop',--index+'px');
            if(index== -(liWidth*length)){
                index =0;
                element.css('margin-top','0px');
            }
            if(index%liWidth==0){
                clearInterval(timer1);
                timer2 = setTimeout(move,200)
            }

        },speed)
    }
}
window.onload = function(){
    scroller('.peo_body table','tr');
}