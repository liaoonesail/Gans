$(function() {
	//special1_nav头部导航快捷链接导航
/*	$("#special1_nav li").eq(0).click(function() {
		setTimeout(function() {
			mui.openWindow({
				url: 'discountgo/discountgo.html',
				id: 'discountgo',
				showType: 'zoom-fade-out',
				showTime: 200
			});
		}, 200);
	});*/
	//specLink跳转对应的特惠专区specialevent.html
	$(".specLink").click(function() {
		setTimeout(function() {
			mui.openWindow({
				url: 'stage/discountgo/specialevent.html',
				id: 'specialevent',
				showType: 'zoom-fade-out',
				showTime: 200
			});
		}, 200);
	});
});