	;(function($){
		var _that;
		
			var mudel={
				bgColor:function(){
					this.css("background","red");
				},
				show:function(){
					this.css("background","blue");
				}
			};
			
			function _setStyle(a){
				_that =$(this);
				mudel[a].apply(_that);
				
				return _that;
			}
			
			$.fn.setStyle=_setStyle;
			
		})(jQuery);