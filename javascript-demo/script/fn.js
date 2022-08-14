	//封装打印方法
  	function log(msg){
  		console.log(msg);
  	}
  	
	//封装页面输出的方法
	function w(msg){
		document.write(msg);
	}
	//打印对象
		function d(msg){
  		console.dir(msg);
  	}
	//获取CSS样式
	function getStyle(obj, attr){
		if(obj.currentStyle){
			//针对IE浏览器
			return obj.currentStyle[attr];
		}else{
			//非IE浏览器
			return getComputedStyle(obj, null)[attr];
		}
	}
		//封装函数 getbyid
	function getId (id){	
		return document.getElementById(id);
	}
	//兼容IE和非IE的事件注册
	
		var handler = {
			//注册时间句柄
			add:function(obj,type,fn){
													//非ie					//ie
			obj.addEventListener ? obj.addEventListener(type,fn,false) : obj.attachEvent("on"+type,fn,false);
			},
			//注销事件句柄
			remove:function(obj,type,fn){
													//非ie					//ie
		obj.removeEventListener ? obj.removeEventListener(type,fn,false) : obj.detachEvent("on"+type,fn,false);		
			}
		};