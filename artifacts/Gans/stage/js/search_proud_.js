//跳转对应的商品详情     
var abc = $(".dssssdf")
for(var i = 0; i < abc.length; i++) {
	(function(e) { //自执行函数实时把i传入e
		abc[e].onclick = function() { //  通过传入的e获取到哪个按钮发生了点击事件
			//			            alert(e) //弹出e（此处e为i实时对应值）
			setTimeout(function() {
				mui.openWindow({
					url: 'details.html',
					id: 'details',
					showType: 'zoom-fade-out',
					showTime: 200
				});
			}, 200);
		}
	})(i)
}; //采用闭包和自执行函数获取i