$.fn.extend({
	sTopFn:function  (end,Fn) {
		var start = $(window).scrollTop();
		var change = end-start;
		var t = 0;
		var endT = 30;
		var timer = setInterval(function(){
			t++;
			if (t>endT) {
				clearInterval(timer);		
				Fn && Fn();
			}else{
				var top = easeOut(t,start,change,endT);
				$(window).scrollTop(top)
			}

		},30)
		function easeOut(t,b,c,d){
      	  return c*((t=t/d-1)*t*t + 1) + b;
   		}
	},
	
})