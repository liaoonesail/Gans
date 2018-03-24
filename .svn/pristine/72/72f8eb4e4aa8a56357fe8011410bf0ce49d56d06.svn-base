//生日选择
$(function() {
	var currYear = (new Date()).getFullYear();
	var opt = {};
	opt.date = {
		preset: 'date'
	};
	opt.datetime = {
		preset: 'datetime'
	};
	opt.time = {
		preset: 'time'
	};
	opt.default = {
		theme: 'android-ics light', //皮肤样式
		display: 'modal', //显示方式 
		mode: 'scroller', //日期选择模式
		dateFormat: 'yyyy-mm-dd',
		lang: 'zh',
		showNow: true,
		nowText: "今天",
		startYear: currYear - 180, //开始年份
		endYear: currYear + 10 //结束年份
	};

	$("#appDate").mobiscroll($.extend(opt['date'], opt['default']));
});
//上传头像
$(function(){
	//上传头像修改
	$(".imgborderP33").click(function(){
		$(".touxiang_Img").css("transform", "translateY(0px)");
	});
	//上传头像修改拍照
	$(".paizaoBtns_").click(function(){
		$(".touxiang_Img").css("transform", "translateY(-1000px)");
	});
	$("#pic").click(function() {
		$("#upload").click(); //隐藏了input:file样式后，点击头像就可以本地上传
		$("#upload").on("change", function() {
			var objUrl = getObjectURL(this.files[0]); //获取图片的路径，该路径不是图片在本地的路径
			if(objUrl) {
				$(".imgborderP33 img").attr("src", objUrl); //将图片路径存入src中，显示出图片

			}
		});

	});

	//建立一個可存取到該file的url
	function getObjectURL(file) {
		var url = null;
		if(window.createObjectURL != undefined) { // basic
			url = window.createObjectURL(file);
		} else if(window.URL != undefined) { // mozilla(firefox)
			url = window.URL.createObjectURL(file);
		} else if(window.webkitURL != undefined) { // webkit or chrome
			url = window.webkitURL.createObjectURL(file);
		}
		return url;
	};
	//上传头像修改从手机相册选择
	$(".xangceBtns_").click(function(){
		$(".touxiang_Img").css("transform", "translateY(-1000px)");
	});
	$("#pic2").click(function() {
		$("#upload2").click(); //隐藏了input:file样式后，点击头像就可以本地上传
		$("#upload2").on("change", function() {
			var objUrl = getObjectURL2(this.files[0]); //获取图片的路径，该路径不是图片在本地的路径
			if(objUrl) {
				$(".imgborderP33 img").attr("src", objUrl); //将图片路径存入src中，显示出图片

			}
		});

	});

	//建立一個可存取到該file的url
	function getObjectURL2(file) {
		var url = null;
		if(window.createObjectURL != undefined) { // basic
			url = window.createObjectURL(file);
		} else if(window.URL != undefined) { // mozilla(firefox)
			url = window.URL.createObjectURL(file);
		} else if(window.webkitURL != undefined) { // webkit or chrome
			url = window.webkitURL.createObjectURL(file);
		}
		return url;
	};
	//上传头像修改取消
	$(".colesBtns_").click(function(){
		$(".touxiang_Img").css("transform", "translateY(-1000px)");
	});
	//xiougaimala修改个人资料
	$("#xiougaimala").click(function() {
		setTimeout(function() {
			mui.openWindow({
				url: 'xiougai.html',
				id: 'xiougai',
				showType: 'zoom-fade-out',
				showTime: 200
			});
		}, 500);
	});
})
