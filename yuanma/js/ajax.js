/*
* @Author: Administrator
* @Date:   2017-11-02 15:21:21
* @Last Modified by:   Administrator
* @Last Modified time: 2017-12-03 23:13:35
*/
//媒说中研
var news = $(".news");
if(news.get(0)){
	var news_right = $(".news_right");
	var news_left = $(".news_left");
	$.ajax({
		url:"http://www.zytrainer.com:8080/api/mediaInfoCategory",
		dataType:'json',
		type:'get',
		success:function(data){
			console.log(111)
			console.log(data.mediaInfoCategoryList,news_left.children('h2').text());
			//左侧
			news_left.children('h2').text(data.mediaInfoCategoryList[0].name);
			var ul = news_left.children('ul');
			$.ajax({
				url:"http://www.zytrainer.com:8080/api/mediaInfo/list/1",
				dataType:'json',
				type:'get',
				success:function(dt){
					console.log(dt)
					ul.html('');
					for(var i = 0 ; i < dt.mediaInfos.length ; i++){
						if(i >= 14){
							return;
						}
						ul.html(ul.html() + '<li><a href="' + dt.mediaInfos[i].url + '">' + dt.mediaInfos[i].title + '</a></li>')
					}
				},
				error:function(dt){
					alert(dt);
				}
			})

			//右侧
			var oc = news_right.children('.oc_news');
			
			// console.log(clear)
			for(let n = 0 ; n < oc.length ; n++){
				$(oc[n]).children('h1').html(data.mediaInfoCategoryList[n+1].name + ' <a href="news.html">更多></a>')
				$.ajax({
					url:"http://www.zytrainer.com:8080/api/mediaInfo/list/" + data.mediaInfoCategoryList[n+1].id,
					dataType:'json',
					type:'get',
					success:function(dt){
						let clear = $(oc[n]).children('.clear');
						let data = dt;
						clear.html('')
						console.log(data,n)
						for(let i = 0; i < data.mediaInfos.length ; i++){
							if(i >= 4){
								return;
							}
							clear.html(clear.html() + '<li class=""><a href="' + data.mediaInfos[i].url + '" ><img src="http://www.zytrainer.com:8080' + data.mediaInfos[i].cover + '"  alt=""/><p>' + data.mediaInfos[i].title + '</p></a></li>')
						}
					},
					error:function(dt){
						alert(dt);
					}
				})
			}
			// <li class=""><a href="" alt=""/><p></p></a></li>
			// mediaInfoCategoryList
		},
		error:function(e){
			alert(e);
		}
	})
}

//news
var title_list = $("#title-list");
if(title_list.get(0)){
	// console.log(title_list)
	$.ajax({
		url:"http://www.zytrainer.com:8080/api/mediaInfoCategory",
		dataType:'json',
		type:'get',
		success:function(data){
			var name = title_list.find('li span:nth-child(1)');
			var kbbd = $(".kbbd");
			for(var n = 0 ; n < data.mediaInfoCategoryList.length ; n++){
				// console.log(data.mediaInfoCategoryList[n].name)
				$(name[n]).text(data.mediaInfoCategoryList[n].name);
				$(kbbd[n]).find(".head p").text(data.mediaInfoCategoryList[n].name);
			}

			for(let n = 0 ; n < kbbd.length ; n++){
				$.ajax({
					url:"http://www.zytrainer.com:8080/api/mediaInfo/list/" + (n + 1),
					dataType:'json',
					type:'get',
					success:function(dt){
						console.log(dt,n)
						for(var i = 0 ; i < dt.mediaInfos.length ; i++){
							$(kbbd[n]).html($(kbbd[n]).html() + '<div class="item"><img src="http://www.zytrainer.com:8080' + dt.mediaInfos[i].cover + '"><div class="info"><a href="#" class="item-title">' + dt.mediaInfos[i].title + '</a><p class="item-word">' + dt.mediaInfos[i].description + '</p><p class="date">' + dt.mediaInfos[i].createTime + '</p><a href="' + dt.mediaInfos[i].url + '?id=' + dt.mediaInfos[i].id + '" class="enter">详情内容</a></div></div>')
							if(i != dt.mediaInfos.length - 1){
								$(kbbd[n]).html($(kbbd[n]).html() + '<hr color="#898989">')
							}
						}

						pageFlag[n] = (i-1);
						if(n == 0){
							$('#page-list').html('');
							for(var a = 0 ; a < (i-1)/5 ; a++){
								$('#page-list').html($('#page-list').html() + '<li class="page page-btn">' + (a + 1) + '</li>');
							}
							$pageList = $('#page-list').find('li');
							$pageList.eq(0).addClass('focus');
							pageList();
						}
						maxPage = Math.ceil(pageFlag[0]/5) - 1;
						kbbd.children().hide();
						kbbd.children(':nth-child(1)').show();
						for(var i = 1 ; i < 11 ; i++){
							kbbd.children(':nth-child(' + ((i + 1) + pageNow*10) + ')').show();
						}
					},
					error:function(dt){
						alert(dt);
						pageFlag[n] = 0;
					}
				});
			}
		},
		error:function(e){
			alert(e);
		}
	})
	
	$.ajax({
		url:"http://www.zytrainer.com:8080/api/workStar/list",
		dataType:'json',
		type:'get',
		success:function(data){
			// console.log(data)
			var jymx = $(".jymx");
			// maxPage = 5
			for(var n = 0 ; n < data.workStarList.length ; n++){
				jymx.html(jymx.html() + '<div class="item"><img src="http://www.zytrainer.com:8080' + data.workStarList[n].cover + '" class="pic"><div class="info"><p class="name">' + data.workStarList[n].name + '</p><div class="lesson"><img src="images/news/icon1.png"><span>' + data.workStarList[n].course + '</span></div><div class="company"><img src="images/news/icon2.png"><span>' + data.workStarList[n].company + '</span></div><p class="word">' + data.workStarList[n].description + '</p><p class="sal">薪资：<span>' + data.workStarList[n].salary + '</span></p></div></div>')
			}
			pageFlag[4] = (n-1);
			jymx.children().hide();
			jymx.children(':nth-child(1)').show();
			for(var i = 1 ; i < 5 ; i++){
				jymx.children(':nth-child(' + ((i + 1) + pageNow*5) + ')').show();
			}
		},
		error:function(){
			alert(e);
		}
	})
}

//new
var mianl_con = $(".mianl_con");
if(mianl_con.get(0)){
	var category = ['行业新闻','开班报道','学员信息','精彩专区','就业明星'];
	var ID = getId();
	var con_heard = $(".con_heard");
	var con_mian = $(".con_mian");
	$.ajax({//标题
		url:"http://www.zytrainer.com:8080/api/mediaInfo/" + ID,
		dataType:'json',
		type:'get',
		success:function(data){
			console.log(data)
			console.log($(".con_heard").children(':nth-child(2)'))
			con_heard.children(':nth-child(1)').text(category[data.mediaInfo.categoryId])
			con_heard.children(':nth-child(2)').text(data.mediaInfo.title);
			con_heard.children(':nth-child(3)').text(data.mediaInfo.createTime);
			con_mian.html(data.mediaInfo.content)
			$(".con_heard").children('.eye').text(data.mediaInfo.readCount)

			var next = [data.nextId,data.nextTitle];
			var pre = [data.preId,data.preTitle];
			if(pre[0]){
				$(".con_button").children(":nth-child(1)").children('a').text(pre[1]).attr('href','new.html' + '?id=' + pre[0]);
			}
			else{
				$(".con_button").children(":nth-child(1)").html('');
			}
			if(next[0]){
				$(".con_button").children(":nth-child(2)").children('a').text(next[1]).attr('href','new.html' + '?id=' + next[0]);
			}
			else{
				$(".con_button").children(":nth-child(2)").html('');
			}
		},
		error:function(){
			alert(e);
		}
	})
	// con_button
	var mianr_text = $(".mianr_text ul");
	$.ajax({
		url:"http://www.zytrainer.com:8080/api/mediaInfo/list/hot",
		dataType:'json',
		type:'get',
		success:function(data){
			mianr_text.html('');
			console.log(data,321)
			for(var n = 0 ; n < data.mediaInfos.length ; n++){
				 mianr_text.html('<li><a href="' + data.mediaInfos[n].url + '">' + data.mediaInfos[n].title + '</a></li>');
			}
		},
		error:function(){
			alert(e);
		}
	})
	function getId(){
		var id = '';
		var href = window.location.href;
		for(var n = href.indexOf('id=') + 3 ; ; n++){
			if(n == 2){
				id = undefined;
				break;
			}
			if(isNaN(href[n] - 0)){
				console.log("aaaaa")
				break;
			}
			id += href[n];
		}
		return id
	}
}

var lz = $(".lz");
if(lz.get(0)){
	var btn = $(".lz .btn6");
	var input = $(".lz input");

	btn.on('click',function(){
		var name = input[0].value;
		var phone = input[1].value;
		var qq = input[2].value;
		var course = input[3].value;
		if(!(/^[\u4E00-\u9FFF]+$/.test(name))){
			alert('名字不能为空且只为中文');
			return ;
		}
		if(!(/^1(3|4|5|7|8)\d{9}$/.test(phone))){
			alert('手机格式有误或为空');
			return ;
		}
		if(!(/^\d{5,10}$/.test(qq))){
			alert('QQ格式有误或为空');
			return ;
		}
		if(course == ''){
			alert('课程为空');
			return ;
		}
		$.ajax({
			url:"http://www.zytrainer.com:8080/api/courseReservation/add",
			type:'post',
			dataType:'json',
			data:{
				name:name,
			    phone:phone,
			    qq:qq,
			    course:course
			},
			success:function(){

			}
		})
	})
}