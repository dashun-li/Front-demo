;(function($){
	var _that;
	function _tabChange(opts){
			//默认值	
			var _defaults ={
					box_w:800,//最外层盒子的宽度
					box_h:800,//最外层容器的高度
					title_h:100,//标题高度
					liw:200
			};
		var config = $.extend({},_defaults, opts);//将defaults的值与opts传入的值相互结合到config上
		//ul的设置
		$(this).css({"height":config.box_h,"width":config.box_w});
		$(this).find("ul.titlebox").css({"height":config.title_h,"width":config.box_w});
		//li的设置
		$(this).find("ul.titlebox>li").css({
			"width":config.liw,
			"height":config.title_h,
			"lineHeight":config.title_h+"px",
		});
		//内容盒子的宽高以及行高
		var boxh = config.box_h - config.title_h;
		$(this).find("div").css({"width":config.box_w,"height":boxh});
		$(this).find("div").css({"lineHeight":boxh+"px"});
	//鼠标移动到li上就为当前li添加curren类
	$(this).find("ul.titlebox>li").mouseenter(function(){
			//鼠标移动到li上就为当前li添加curren类
			var _that=this;
			$(_that).addClass("current").siblings().removeClass("current");
		//获取当前tab切换的索引并赋给相应div
			var index=$(_that).index();
			$(_that).parent().siblings("div").hide().eq(index).show();//页面上有多个tab切换时，找到当前的盒子中的内容div
		});
		return _that;
	};
	$.fn.tabChange=_tabChange;
})(jQuery);