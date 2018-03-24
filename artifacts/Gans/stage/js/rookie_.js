$(function() {
	//新人领券按钮  
	$(".xinrenrookieBts").click(function() {
		$(".rookquanList_1").css("transform", "translateY(0px)");
	});
	$(".coles_btns").click(function() {
		$(".rookquanList_1").css("transform", "translateY(-1000px)");
	});
	//提交新人领券按钮  
	$(".phopeTelBtns").click(function() {
		$(".rookquanList_1").css("transform", "translateY(-1000px)");
		$(".rookquanList_2").css("transform", "translateY(0px)");
	});
	$(".coles_btns").click(function() {
		$(".rookquanList_1").css("transform", "translateY(-1000px)");
		$(".rookquanList_2").css("transform", "translateY(-1000px)");
	});
	//跳转个人中心
	$("#tanzhuaBtns").click(function() {
		$(".rookquanList_2").css("transform", "translateY(-1000px)");
		window.location.href = 'stage/discountgo/personalcenter.html';
	});
});