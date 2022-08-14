//登录框
$(".userbox input").focus(function(){
	$(this).val("");
});
$(".userbox input.first").keyup(function(){
	
	$(this).css({"color":"#353535"});
	
	if($(this).val().length>=1){
		$(this).siblings("img").show();
	}else if($(this).val().length==0){
		$(this).val("请输入用户名");
		$(this).css({"color":"#e5e5e5"});
		$(this).siblings("img").hide();
	};
	$(this).siblings("img").click(function(){
		$(this).val("");
		$(this).prop("placeholder","请输入用户名");
});
});
$(".userbox input.first").blur(function(){
	$(this).val("请输入用户名");
	$(this).css({"color":"#e5e5e5"});
	$(this).siblings("img").hide();
});

$(".userbox input.showbox").focus(function(){	
		$(this).hide();
		$(".hidebox").show();
		$(".hidebox").focus(function(){
			$(this).prop("placeholder","");
		});
		$(".hidebox").keyup(function(){
			
			if($(this).val().length>=1){
				$(this).css({"color":"#353535"});
				$(this).siblings("img").show();
			}else if($(this).val().length==0){
				$(this).css({"color":"#e5e5e5"});
				$(this).siblings("img").hide();
			};
		});
		$(".hidebox").blur(function(){
			$(this).hide();
			$(this).val("");
			$(this).siblings("img").hide();
			$(".showbox").show();
			$(".showbox").prop("placeholder","请输入密码");
		});
});



//账号登录，扫码登录切换
$("#mainbox #loginbox .title li").mouseenter(function(){
	$(this).addClass("current").siblings().removeClass("current");
	var index =$(this).index();
	$("#mainbox #loginbox .login").hide().eq(index).stop(true,false).fadeIn();
});

//扫码登录效果
$(".login .haspic1").hover(function(){
	$(this).stop(true,false).animate({"width":"350px"},"slow");
},function(){
	$(this).stop(true,false).animate({"width":"185px"},"slow");
});
