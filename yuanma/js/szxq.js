var $bar=$('#bar');
var $introList=$bar.find('li');
var $barHeight=$bar.height();
var $barTop=$bar.offset().top;
var titleHeight=100;//此为标题高度，用于滚动条跳转偏移
var $introTop=$('#teacher-intro').offset().top-$barHeight-100;
var $experienceTop=$('#experience').offset().top-$barHeight-100;
var $charactTop=$('#charact').offset().top-$barHeight-100;
var top=[$introTop,$experienceTop,$charactTop];

// 滚轮固定状态条==============================================================
$(window).scroll(function(){
	if($(this).scrollTop()>=$barTop){
		$bar.css({"position":"fixed","top":"0"});
	}
	else{
		$bar.css({"position":"static"});
	}
});

//根据滚动条改变状态条=============================================================
$(window).scroll(function(){
	if($(document).scrollTop()>=$introTop){
		$introList.removeClass('focus');
		$introList.eq(0).addClass('focus');
	}
	if($(document).scrollTop()>=$experienceTop){
		$introList.removeClass('focus');
		$introList.eq(1).addClass('focus');
	}
	if($(document).scrollTop()>=$charactTop){
		$introList.removeClass('focus');
		$introList.eq(2).addClass('focus');
	}
});

//点击改变滚动条与状态条=============================================================
$introList.on('click', function(){
	var $obj=$(this).data('obj');
	$introList.removeClass('focus');
	$(this).addClass('focus');
	if($obj==="intro"){
		$("body").scrollTop($introTop);
	}
	if($obj==="experience"){
		$("body").scrollTop($experienceTop);
	}
	if($obj==="charact"){
		$("body").scrollTop($charactTop);
	}
});