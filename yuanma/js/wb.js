/**
 * Created by Administrator on 2016/8/28.
 */
var tabItem = '.item1';
var index = 0;
$('.tab_body li').on('click',function(){
    tabItem = '.item'+($(this).index()+1);
    $(this).addClass('select').siblings().removeClass('select');
    $(tabItem).show().siblings('.item').hide();
    $(tabItem).find('ul').eq(0).show().siblings().hide();
    index = 0
});

$('.left_tab').on('click',function(){
    var ele = $(tabItem).find('ul');
    console.log(tabItem);
    if(index == 0){
        index = ele.length-1;
    }else{
        index--;
    }
    ele.eq(index).show().siblings().hide();
})
$('.right_tab').on('click',function(){
    var ele = $(tabItem).find('ul');
    if(index == ele.length-1){
        index = 0;
    }else{
        index++;
    }
    ele.eq(index).show().siblings().hide();
})
$(function(){
    if($(document.body).width() <= 1385){
        $('.right_tab').css('right','0');
        $('.left_tab').css('left','0');
    }
})
$(window).on('resize',function(){
    if($(document.body).width() <= 1385){
        console.log(1)
        $('.left_tab').css('left','0');
        $('.right_tab').css('right','0');
    }else{
        console.log(2)
        $('.left_tab').css('left','-90px');
        $('.right_tab').css('right','-90px');
    }
})
$('.item').on('mouseenter','li',function(){
    $(this).find('.mask').animate({
        'opacity':1,
        'top':0
    },500)
})
$('.item').on('mouseleave','li',function(){
    $(this).find('.mask').animate({
        'opacity':0,
        'top':195
    },500)
})