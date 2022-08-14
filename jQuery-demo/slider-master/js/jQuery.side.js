;(function($) {
	$.fn.extend({
		tyslider: function(opts) {
			//默认参数
			var defaults = {
				pptwidth: 550,
				pptheight: 400,
				isShowBtn: true,
				isShowControls: true,
				liW:30,
				liH:30,
				cuttime:2000,
				blanktime:500,
				liRadius:15,
				liFont:14,
				liColor:"white",
				liBg:"green",
				liCurrent:"red",
				liBottom:20,
				btTop:100,
			};
			var settings = $.extend({}, defaults, opts); //用opts去覆盖defaults中的同名参数
			//此处写插件的功能，this代表选择器选中的元素。
			//插件内容开始
			this.each(function(index, itemitem) { //item代表当前项
				//设置轮播宽高
				var pptwidth = settings.w;
				var pptheight = settings.h;

				item = $(itemitem);
				//轮播间隔：
				var ppttime = settings.cuttime; //轮播切换时间
				var playtime = settings.blanktime; //动画持续时间
				//底部控件参数:
				var sliW = settings.liW;
				var sliH = settings.liH; //控件li的高度
				var slimargin = 10; //控件li的间隔
				var sliradius = settings.liRadius; //控件li的圆角
				var slifont = settings.liFont; //控件li的字体大小
				var slicolor = settings.liColor; //控件li的字体颜色
				var slibg = settings.liBg; //控件li背景颜色
				var slicurrent = settings.liCurrent; //控件li活动li背景颜色
				var slibottom = settings.liBottom; //底部控件距离底部的高度
				//左右按钮参数：

				var btntop = settings.btTop; //左右按钮到顶部的距离

				//先克隆两个以实现无缝切换
				
				var firstli = item.find("ul.innerbox li:first").clone();
				var lastli = item.find("ul.innerbox li:last").clone();
				item.find("ul.innerbox").append(firstli);
				item.find("ul.innerbox").prepend(lastli);
				item.css({
					"width": pptwidth,
					"height": pptheight
				}); //设置轮播盒子宽高
				item.find("ul.innerbox>li").css({
					"width": pptwidth,
					"height": pptheight
				}); //设置轮播li宽高		
				var lilen = $(".innerbox>li").length; //获取图片列表数组length
				item.find("ul.innerbox").css({
					"width": pptwidth * lilen + "px",
					"left": -pptwidth
				}).show(); //设置初始宽高和位置
				//设置底部控件盒子的宽度和位置
				var controlsleft = (pptwidth - (sliW + slimargin) * (lilen - 2)) / 2;
				item.find("ul.controls").css({
					"width": (sliW + slimargin) * (lilen - 2) + "px",
					"left": controlsleft + "px"
				}).show();
				//设置底部控件li的样式
				item.find(".controls li").css({
					"width": sliW + "px",
					"height": sliH + "px",
					"border-radius": sliradius,
					"line-height": sliH + "px",
					"font-size": slifont + "px",
					"background-color": slibg,
					"color": slicolor,
				});
				//第一个底部控件li的current样式
				item.find("ul.controls li.current").css({
					"background-color": slicurrent
				})
				item.find(".controls").css({
					"bottom": slibottom
				});
				item.find("span").css({
					"top": btntop
				})

				item.show();
				//定义k
				var k = 1;
				//切换效果函数
				function pptplay() {
					if(k > (lilen - 1)) {
						k = lilen - 1;
					}
					if(k < 0) {
						k = 0;
					}
					var dx = -pptwidth * k;
					// 底部控件效果
					var c = k - 1;
					if(k == 0 || k == (lilen - 2)) {
						c = (lilen - 3);
					}
					if(k == 1 || k == (lilen - 1)) {
						c = 0;
					}
					item.find("ul.controls>li").eq(c).css({
						"background-color": slicurrent
					}).siblings().css({
						"background-color": slibg
					});
					item.find("ul.innerbox").stop(true, true).animate({
						"left": dx
					}, playtime, function() {
						//动画执行完成后
						if(k == (lilen - 1)) {
							k = 1;
						}
						if(k == 0) {
							k = lilen - 2;
						}
						dx = -pptwidth * k;
						//最后一张切换到第一张
						item.find("ul.innerbox").css({
							"left": dx
						});
					});
				}

				//点击左边按钮	
				$(".btnleft").click(function() {
					//取消默认事件
					this.onselectstart = function() {
						return false;
					};
					//判断动画是否完成
					if(!item.find("ul.innerbox").is(":animated")) {
						k--;
						pptplay();
					}
				});
				//点击右边按钮
				item.find("span.btnright").click(function() {
					//取消默认事件
					this.onselectstart = function() {
						return false;
					};
					//判断动画是否完成
					if(!item.find("ul.innerbox").is(":animated")) {
						k++;
						pptplay();
					}
				});

				//自动轮播
				var timer1 = setInterval(function() {
					k++;
					pptplay();
				}, ppttime);
				//hover停止轮播-鼠标离开开始轮播
				$(".pptbox").hover(function() {
					clearInterval(timer1);
				}, function() {
					timer1 = setInterval(function() {
						k++;
						pptplay();
					}, ppttime);
				});
				//点击控件切换
				item.find("ul.controls>li").click(function() {
					this.onselectstart = function() {
						return false;
					};
					var tempindex = item.find("ul.controls>li").index(this);
					k = tempindex + 1;
					pptplay();
				});

				//判断是否显示控件
				if(!settings.isShowControls) {
					item.find(".controls").hide();
				} else {
					item.find(".controls").show();
				}
				//判断是否显示左右翻页按钮
				if(!settings.isShowBtn) {
					item.find("span").hide();
				} else {
					item.find("span").show();
				}

			})

			//插件内容结束
			return this; //返回this方便链式操作
		}
	});

})(jQuery);