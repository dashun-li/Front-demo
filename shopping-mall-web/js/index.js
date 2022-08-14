//搜索框
$(".searchbox").focus(function(){
	if($(this).val() == $(this).attr("deta-value")){
		$(this).val("");
	}else{
		$(this).val($(this).val());
	}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
});
$(".searchbox").keyup(function(){
	$(this).css({"color":"black"});
});
$(".searchbox").blur(function(){
	if($(this).val().length ==0){
		$(this).val($(this).attr("date-value"));
		$(this).css({"color":"#E1E1E1"});
	}else{
		$(this).val($(this).val());
	}
});

//顶部搜索框
function fixtopsearchbox(){
	$(document).scroll(function(){
		var y = $(document).scrollTop();
		if(y>500){
			$("#formpa").addClass("on");
		}else{
			$("#formpa").removeClass("on");
		}
	});
};

//二级菜单
$("#leftnav_ppt #leftnav li").hover(function(){
	$(this).addClass("current");
	$("#leftnav_ppt").prop("width","429px");
},function(){
	$(this).removeClass("current");
});

//书tab切换
$("#product_book .title ul li").mouseenter(function(){
	$(this).addClass("current").siblings().removeClass("current");
	var index =$(this).index();
	$("#boxleft .bookbox .books").hide().eq(index).stop(true,false).fadeIn();
});
//新书畅销榜，效果切换
$(function(){
	$(".selllist").find(".style-1:lt(3)").find("span").css({"color":"#FF2313"});
	$(".selllist").find(".style-2:lt(3)").find("span").css({"color":"#FF2313"});
});
$(".selllist li").mouseenter(function(){
	$(".style-1").show();
	$(".style-2").hide();
	$(this).find(".style-1").show().hide();
	$(this).find(".style-2").hide().show();
});
//服饰的table切换
$(".pro-com .title ul li").mouseenter(function(){
	//因为服装模块将来要复制三分，通过$(".product .titlewrapper li") 选择的li就会有9个，控制页签就会出现问题。
 
  $(this).parent().find("li").removeClass("current");
  $(this).addClass("current");
  var index=$(this).parent().find("li").index(this); 
  $(this).parent().parent().parent().find(".mianbox").hide().eq(index).stop(true,false).fadeIn();

});
//推荐商品tab切换
$("#product .title ul li").mouseenter(function(){
	$(this).addClass("current").siblings().removeClass("current");
	var index =$(this).index();
	$("#product .prolist").hide().eq(index).stop(true,false).fadeIn();
});
//推荐商品鼠标hover效果
$("#product .prolist li").hover(function(){
	$(this).css({"background":"#F2F2F2"});

},function(){
	$(this).css({"background":"none"});
});

//楼层
$("#floors li").hover(function(){
	$(this).css("width","79px");
	$(this).css("background-position-x","-99px");
},function(){
	$(this).css("width","40px");
	$(this).css("background-position-x","-20px");
});
//返回相应楼层
$("#floors li").click(function(){
	//求助当前li对应模块的相对于顶部的偏移（高度）
	var moduid=$(this).attr("data-id");
	var dx=$("#"+moduid).offset().top;
	$("html,body").animate({
		scrollTop:dx-380
	},1000);
});
//滚动到相应的区域，相应的板块背景改变
function change(){
	$(document).scroll(function(){
		var ebookoffset=parseInt($("#product_book").offset().top)-380;//电子书坐标
		var clothesoffset=parseInt($("#clothes").offset().top)-380;//服装坐标
		var sportsoffset=parseInt($("#sports").offset().top)-380;//户外运动坐标
		var childclothesoffset=parseInt($("#child").offset().top)-380;//童装
		var houseoffset=parseInt($("#product_depart").offset().top)-380;//家居日用
	
		var scrolldx=$(document).scrollTop();//获取整个页面的滚动高度
		console.log(ebookoffset,scrolldx)
		if(ebookoffset <= scrolldx && clothesoffset > scrolldx){
		$("#floors li.icon1").css("background-position-x","-99px");
	}else{
		$("#floors li.icon1").css("background-position-x","-20px");
	}
		if(clothesoffset <= scrolldx && sportsoffset > scrolldx){
		$("#floors li.icon2").css("background-position-x","-99px");
	}else{
		$("#floors li.icon2").css("background-position-x","-20px");
	}
	if(sportsoffset <= scrolldx && childclothesoffset > scrolldx){
		$("#floors li.icon3").css("background-position-x","-99px");
	}else{
		$("#floors li.icon3").css("background-position-x","-20px");
	}
	if(childclothesoffset <= scrolldx && houseoffset > scrolldx){
		$("#floors li.icon4").css("background-position-x","-99px");
	}else{
		$("#floors li.icon4").css("background-position-x","-20px");
	}
	if(houseoffset <= scrolldx){
		$("#floors li.icon5").css("background-position-x","-99px");
	}else{
		$("#floors li.icon5").css("background-position-x","-20px");
	}
		
	});
}
	



//右边菜单导航
$("#right_menu .innerbox").hover(function(){
	$(this).css("width","140px");
	$(this).css("background-position-x","0");
	
},function(){
	$(this).css({"width":"40px"});
	$(this).css("background-position-x","-100px");
});


//点击事件
$("#returns").click(function(){
	$("html,body").animate({
		scrollTop:0
	},1000);
});

$(function(){
	//返回顶部
	$(document).scroll(function(){
		
		if($(document).scrollTop()>=3000){
		$("#returns").fadeIn();
		}else{
			$("#returns").fadeOut()
		}
		});
	fixtopsearchbox();
	change();
});
//首先进入滚动事件才行
//二维码显示效果
$("#twocode li.center").hover(function(){
	$("#twocodeimg").stop(true,true).fadeIn();
},function(){
	$("#twocodeimg").stop(true,true).fadeOut();
});