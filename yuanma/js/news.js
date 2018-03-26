var $main = $('.main');
var $titleList = $('#title-list').find('li');
var $pageList = $('#page-list').find('li');
var $next = $('#next');
var $prev = $('#prev');
var pageNow = 0;
var maxPage = 3;
var pageFlag = [];
var kbbd = $(".kbbd");
var jymx = $("#jymx");
//左侧栏效果-------------------------------------------------------------------------------
$titleList.on('click', function(){
	var $obj = $(this).data('obj');
	$titleList.removeClass('focus');
	$(this).addClass('focus');
	$main.hide();
	$('#'+$obj).show();
	maxPage = Math.ceil(pageFlag[$(this).index()]/5);
	pageNow = 0;
	$pageList.removeClass('focus');
	$pageList.eq(pageNow).addClass('focus');
	// console.log($(this).index(),pageFlag,Math.ceil(pageFlag[$(this).index()]/8))
	console.log(maxPage)
	kbbd.children().hide();
	kbbd.children(':nth-child(1)').show();
	for(var i = 1 ; i < 11 ; i++){
		kbbd.children(':nth-child(' + ((i + 1) + pageNow*10) + ')').show();
	}
	jymx.children().hide();
	jymx.children(':nth-child(1)').show();
	for(var i = 1 ; i < 5 ; i++){
		jymx.children(':nth-child(' + ((i + 1) + pageNow*5) + ')').show();
	}
	$('#page-list').html('');
	for(var n = 0 ; n < maxPage ; n++){
		$('#page-list').html($('#page-list').html() + '<li class="page page-btn">' + (n + 1) + '</li>');
	}
	$pageList = $('#page-list').find('li');
	$pageList.eq(0).addClass('focus');
	pageList();
});
//页码按钮效果-------------------------------------------------------------------------------
function pageList(){
	$pageList.on('click', function(){
		$pageList.removeClass('focus');
		$(this).addClass('focus');
		pageNow=$(this).html() - 1;

		kbbd.children().hide();
		kbbd.children(':nth-child(1)').show();
		for(var n = 1 ; n < 11 ; n++){
			console.log((n + pageNow*5))
			kbbd.children(':nth-child(' + ((n + 1) + pageNow*10) + ')').show();
		}
		jymx.children().hide();
		jymx.children(':nth-child(1)').show();
		for(var i = 1 ; i < 5 ; i++){
			jymx.children(':nth-child(' + ((i + 1) + pageNow*5) + ')').show();
		}
	});
};
$next.on('click', function(){
	if(pageNow<maxPage){
		$pageList.removeClass('focus');
		$pageList.eq(++pageNow).addClass('focus');
		kbbd.children().hide();
		kbbd.children(':nth-child(1)').show();
		for(var n = 1 ; n < 11 ; n++){
			console.log((n + pageNow*5))
			kbbd.children(':nth-child(' + ((n + 1) + pageNow*10) + ')').show();
		}
		jymx.children().hide();
		jymx.children(':nth-child(1)').show();
		for(var i = 1 ; i < 6 ; i++){
			jymx.children(':nth-child(' + ((i + 1) + pageNow*5) + ')').show();
		}
		// pageNow++;
	}
});
$prev.on('click', function(){
	if(pageNow!=0){
		$pageList.removeClass('focus');
		$pageList.eq(--pageNow).addClass('focus');
		kbbd.children().hide();
		kbbd.children(':nth-child(1)').show();
		for(var n = 1 ; n < 11 ; n++){
			kbbd.children(':nth-child(' + ((n + 1) + pageNow*10) + ')').show();
		}
		jymx.children().hide();
		jymx.children(':nth-child(1)').show();
		for(var i = 1 ; i < 6 ; i++){
			jymx.children(':nth-child(' + ((i + 1) + pageNow*5) + ')').show();
		}
		// pageNow--;
	}
});

var mySwiper = new Swiper('.swiper-container', {
	autoplay: 3000,
	loop : false,
	updateOnImagesReady : true,
	pagination : '.pagination',
	paginationClickable :true,
	//useCSS3Transforms : false,
	calculateHeight : true
})
