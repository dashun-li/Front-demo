$(".hascontent p span.first").click(function(){
	$(this).toggleClass("current");
});

$(".mainbox>button").click(function(){
	$(".whole").css({"display":"block"})
});
$(".whole .comfirm").click(function(){
	$(".whole").css({"display":"none"});
	$(".whole1").css({"display":"block"})
});
$(".whole .close").click(function(){
	$(".whole").css({"display":"none"})
});

$(".whole1 .comfirm").click(function(){
	$(".whole1").css({"display":"none"})
});
$(".whole1 .close").click(function(){
	$(".whole1").css({"display":"none"})
});
