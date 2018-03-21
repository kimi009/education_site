//    banner图
var mySwiper = new Swiper('.swiper-container', {
    autoplay: 3000,//可选选项，自动滑动
    loop : true,
    updateOnImagesReady : true,
    pagination : '.pagination',
    paginationClickable :true,
    //useCSS3Transforms : false,
    calculateHeight : true
})

//开班信息
tab($('.co_btn li'),$('.co_body ul'));

//学员故事
tab($('.story_item li'),$('.story_board'));

//学员作品
var mySwiper2 = new Swiper('.swiper-container2', {
    autoplay: 3000,//可选选项，自动滑动
    loop : true,
    updateOnImagesReady : true,
    paginationClickable :true,
    //useCSS3Transforms : false,
    calculateHeight : true,
    onSlideChangeStart: function(swiper){
        var len = $('.pagination2 div').length;
        if(mySwiper2.activeIndex== 7) {
            $('.pagination2 div').eq(0).addClass('select').siblings().removeClass('select');
        }else{
            $('.pagination2 div').eq(mySwiper2.activeIndex-1).addClass('select').siblings().removeClass('select');
        }
    }
})
$('.pagination2 div').each(function(i){
    $(this).click(function(){
        mySwiper2.swipeTo($(this).index(),500,true);
    })
});
$('.arrow2 .swiper_prev').on('click',function(){
    mySwiper2.swipePrev();
    mySwiper2.startAutoplay();
})
$('.arrow2 .swiper_next').on('click',function(){
    mySwiper2.swipeNext();
    mySwiper2.startAutoplay();
})
$(window).on('resize',function(){
    mySwiper2.reInit();
})
var index = 0;
var span_len;

work();
function work(){
    var list = $('.tea_team li');
    var _span = $('.tea_tip span')
    var len = list.length;
    var str = '';
    for(var i = 0;i<Math.ceil(len/4);i++){
        $(".tea_tip").append("<span></span>");
    }
    var _span = $('.tea_tip span')
    span_len = _span.length;
    _span.eq(0).addClass('select');
    $('.tea_arrow .swiper_prev').on('click',function(){
        if(index > 0){
            $('.tea_team').animate({'left':--index*(-1200)},500);
            _span.eq(index).addClass('select').siblings().removeClass('select');
        }
    })
    $('.tea_arrow .swiper_next').on('click',function(){
        if(index+1<span_len){
            $('.tea_team').animate({'left':++index*(-1200)},500);
            _span.eq(index).addClass('select').siblings().removeClass('select');
        }
    })
}
hz_company();
function hz_company(){
    var index = 0;
    var ul = $('.hz_slide ul');
    var ctrlBtn = $('.hz_ctrl a');
    if(ul.length>1){
        ctrlBtn.eq(1).removeClass('disable');
        $('.hz_l').on('click',function(){
            if(index != ul.length){
                ul.eq(++index).show().siblings().hide();
                if(index == ul.length-1){
                    ctrlBtn.eq(0).removeClass('disable');
                    ctrlBtn.eq(1).addClass('disable');
                }
            }
        })
        $('.hz_r').on('click',function(){
            if(index != 0){
                ul.eq(--index).show().siblings().hide();
                if(index == 0){
                    ctrlBtn.eq(1).removeClass('disable');
                    ctrlBtn.eq(0).addClass('disable');
                }
            }
        })
    }
}

$(function(){
    if($(document.body).width() <= 1375){
        $('.tea_arrow .swiper_prev').css('left','0');
        $('.tea_arrow .swiper_next').css('right','0');
    }
})
$(window).on('resize',function(){
    if($(document.body).width() <= 1375){
        $('.tea_arrow .swiper_prev').css('left','0');
        $('.tea_arrow .swiper_next').css('right','0');
    }else{
        $('.tea_arrow .swiper_prev').css('left','-80px');
        $('.tea_arrow .swiper_next').css('right','-80px');
    }
})

function tab(tab,con,bol){
    tab.each(function(i){
        $(this).on('click',function(){
            $(this).addClass('select').siblings().removeClass('select');
            con.eq(i).show().siblings().hide();
        })
    })
}