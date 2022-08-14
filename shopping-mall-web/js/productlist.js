$(function(){
	$("#boxright1 .selllist li.first ").css({"height":"141px"});
	$("#boxright1 .selllist div.hastext:lt(3)").css({"background-color":"#ff6600"});
});
$("#boxright1 .selllist li").mouseenter(function(){
$("#boxright1 .selllist li ").css({"height":"42px"});
	$(this).css({"height":"141px"});

});
//折扣区效果
$(".products li").hover(function(){
	$(this).css({"background-color":"#F2F2F2"});
},function(){
	$(this).css({"background-color":"white"});
});
//新书畅销榜，效果切换
$(function(){
	$("#boxright .selllist").find(".style-1:lt(3)").find("span").css({"color":"#FF2313"});
	$("#boxright .selllist").find(".style-2:lt(3)").find("span").css({"color":"#FF2313"});
});
$("#boxright .selllist li").mouseenter(function(){
	$(".style-1").show();
	$(".style-2").hide();
	$(this).find(".style-1").show().hide();
	$(this).find(".style-2").hide().show();
});
//独家提供的table切换
$(".pro-com .title ul li").mouseenter(function(){
 
  $(this).addClass("current").siblings().removeClass("current");
	var index =$(this).index();
	console.log(index)
	$(".pptbox1").hide().eq(index).stop(true,false).fadeIn();
});
//换一批
$("#like  .title img").click(function(){
	
	$("#like .cons>li").each(function(index,item){
		$(item).toggleClass("current");
	});
});
