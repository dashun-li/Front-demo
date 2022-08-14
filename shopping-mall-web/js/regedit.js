//登录框
$("#mianbox input").focus(function(){
	$(this).val("");
	$(this).prop("placeholder","");
});
$("#mianbox input").keyup(function(){
	$(this).css({"color":"#666666"});
});

$("#mianbox input").blur(function(){
	if($(this).val().length!=0){
		$(this).val($(this).val());
	}else{
			$(this).val($(this).attr("oldvalue"));
			$(".icon2").prop("placeholder","建议设置两种字符密码");
			$(".icon3").prop("placeholder","再次输入密码");
	}
});


