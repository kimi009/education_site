inithFn ();
 function inithFn () {
     var banner=document.getElementById('banner');
     var imgs=document.getElementById('tab_box').getElementsByTagName("img");
     var h=document.documentElement.clientHeight||document.body.clientHeight;
     var w = document.documentElement.clientWidth||document.body.clientWidth;
     var oldW = imgs[0].offsetWidth;
     var oldH = imgs[0].offsetHeight;
     var newH = h;
     var newW = newH/oldH*oldW;
     if(w>=h){
         banner.style.height=h+"px"; 
     }
   	 var bl = ($(window).width()/$(window).height())-0.4;
     if(bl<1.92666){
         var newW = (($(window).height()*1.92666+0.4)-$(window).width())/2;
         $("#view img").height($(window).height());
         if (window.navigator.userAgent.indexOf("MSIE 8")>0) {
            // imgs[i].style.marginLeft = -newW/2+"px";
            $("#view img").css({
                marginLeft:-newW,
                left:0
            })
         }else{
            $("#view img").css({
                 left:"0%",
                 // marginLeft:-newW,
                 // transform:"translate3d("+(-newW/2)+"px,0,0)",
                 width:"auto"
             })
         }
     }
 }


var _UL = $(".partn .gs_log ul");
var _HTML="";
for(var j=0;j<24;j++){
	var _Htnl = "<li><img src='images/img_cj/comper_"+j+".png'></li>";
	 _HTML += _Htnl;
}
_UL.html(_HTML);

for(var i=0;i<2;i++){
	$(".btn a").eq(i).index = i;
	$(".btn a").eq(i).on("click",function(){
        var e = $(".btn a").index($(this));
       $(this).addClass("tab_a").siblings().removeClass('tab_a');
    })
}var bol = true;
// .more_logo

for(var i=0;i<4;i++){
	$(".zp").eq(i).index = i;
	$(".zp").attr("data","1");
	$(".zp").eq(i).on("click",function(){
		var e = $(".zp").index($(this));
		var dat = $(this).attr("data");
		if($(".perple").height()==600){
			dat =2;
		}
		if(dat == 2){
			$(".more_logo").attr("src","images/img_cj/more_logo.png");
			$(".more_logo").eq(e).attr("src","images/img_cj/down.png");
			$(".zp_js").css({
				'height':"0px"
			})
			$(".zp_js").eq(e).css({
				'height':"315px"
			})
			$(".perple").css({
				'height':"900px"
			})
			$(".zp").attr("data","2");
			$(this).attr("data","1")
		}else if(dat == 1){
			$(".more_logo").attr("src","images/img_cj/more_logo.png");
			$(".zp_js").css({
				'height':"0px"
			})
			$(".perple").css({
				'height':"600px"
			})
			$(".zp").attr("data","1");
			$(this).attr("data","2");
		}
	})
}
function sz(e){
	if(bol){
		bol = false;
		$(".more_logo").attr("src","images/img_cj/more_logo.png")
		$(".more_logo").eq(e).attr("src","images/img_cj/down.png")
		$(".zp_js").css({
			'height':"0px"
		})
		$(".zp_js").eq(e).css({
			'height':"315px"
		})
		$(".perple").css({
			'height':"900px"
		})
	}else{
		bol = true;
		$(".more_logo").attr("src","images/img_cj/more_logo.png");
		$(".zp_js").css({
			'height':"0px"
		})
		$(".perple").css({
			'height':"600px"
			})
	}
}
