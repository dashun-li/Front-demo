//搜索框
$(".searchbox").focus(function() {
	if($(this).val() == $(this).attr("data-value")) {
		$(this).val("");
	} else {
		$(this).val($(this).val());
	}
});
$(".searchbox").keyup(function() {
	$(this).css({
		"color": "black"
	});
});
$(".searchbox").blur(function() {
	if($(this).val().length == 0) {
		$(this).val($(this).attr("data-value"));
		$(this).css({
			"color": "#E1E1E1"
		});
	} else {
		$(this).val($(this).val());
	}
});
//表单全选与否
$("input[name='firstbtn']").click(function() {
	var check = $(this).prop("checked");
	$("input[name='btn']").prop("checked", check);
	$("input[name='firstbtn']").prop("checked", check);
	sumprice();
	if(check == false) {
		$("tr.last td.last").prev().find("span").text("0");
		$("tr.last td.last span.price").text("0");
	}
});

$("input[name='btn']").click(function() {
	var a = $(this).prop("checked");
	if(a == false) {
		$("input[name='firstbtn']").prop("checked", a);
	}
	if($("input[name='btn']").prop("checked") == false) {
		$("tr.last td.last").prev().find("span").text("0");
		$("tr.last td.last span.price").text("0");
	}
	sumprice();
});
//点击加减
$(".adds").click(function() {
	var val = $(this).prev().val();
	val++;
	$(this).prev().val(val);
	sumprice();

});
$(".reduce").click(function() {
	var val = $(this).next().val();
	val--;
	$(this).next().val(val);

	if(val <= 0) {

		var c = confirm("确定删除该商品吗？")
		if(c == true) {
			$(this).parent().parent().remove();
		} else {
			val = 1;
			$(this).next().val(val);
		}
	}
	sumprice();
});

function sumprice() {
	var sump = 0;
	var counts = 0;
	
	$("td.add>input").each(function(index, item) {
		var num = parseInt($(item).val());//获取数量框里面的数值
		var p = $(item).parent().prev().find("span").text(); //单价
		var sumprice = p * num; //每一行的总价
		$(item).parent().next().find("span").text(sumprice.toFixed(2));
		var c = $(item).parent().parent().first().find("input"); //获取当前行的复选框

		if(c.is(":checked")) {
			counts += num;
			sump += sumprice;
			$("tr.last td.last").prev().find("span").text(counts);
			$("tr.last td.last span.price").text(sump.toFixed(2));
		}
	});
}