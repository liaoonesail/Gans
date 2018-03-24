//地区选择
//区域滚动
mui('.mui-scroll-wrapper').scroll({
	deceleration: 0.0005, //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
	indicators: false
});
/**
 * 获取所有地区
 * @returns
 */
var area_List = getArea();
area_List = JSON.parse(area_List);
//console.log(area_List);
area_start();
function area_start(){
	$("#address_ok").empty();
	var arae_List_html ="",area_id ="";
	/**
	  * 获取用户所选区域
	  * @returns 该区域对象
	  */
	var getCheckedArea_true =getCheckedArea();
	getCheckedArea_true = JSON.parse(getCheckedArea_true);
	var getCheckedArea_true_id =getCheckedArea_true.id;
	for(var i = 0; i < area_List.length; i++){
		arae_List_html +="<li id='"+area_List[i].id+"' area_id='"+area_List[i].id+"'>"+area_List[i].name+"</li>";
		if(area_List[i].id == getCheckedArea_true_id){
			area_id = getCheckedArea_true_id;
			color_ =area_List[i].id;
		}
	}
	$("#address_ok").append(arae_List_html);
	//默认选择第一个
	/**
	 * 获取用户所选区域
	 * @returns 该区域对象
	 */	
	$("#"+color_).addClass("addevtOk");
	$("#address_html").text(getCheckedArea_true.name);
	//点击对应切换
	$("ul#address_ok li").click(function() {
		$("ul#address_ok li").removeClass("addevtOk"); //siblings是循环遍历
		$(this).addClass("addevtOk");
		var check_html = $(this).text();
		$("#address_html").text(check_html);
		 var area_id =$(this).attr("area_id");
		 /**
		  * 修改所选地区
		  * @param area 地区ID
		  * @returns 成功返回"ok"
		  */
		 var getCheckedArea = changeArea(area_id);
		$(".address_addcheck").hide(600);
	});
	$(".headerLeft").click(function() {
		$(".address_addcheck").toggle(600);
	});
}
//扫一扫
$("#aLisr").click(function() {
	$("#Popup").toggle(600);
})
//轮播图
var swiper = new Swiper('.swiper-container', {
	pagination: '.swiper-pagination',
	paginationClickable: '.swiper-pagination',
	loop: true,
	spaceBetween: 30,
	autoplay: 2500,
	autoplayDisableOnInteraction: false,
	effect: 'fade'
});

//公告滚动效果
function autoScroll(obj, ul_bz) {
	$(obj).find(ul_bz).animate({
		marginTop: "-25px"
	}, 500, function() {
		$(this).css("width", "100%");
		$(this).css("fontSize", "13px");
		$(this).css("overflow", "hidden");
		$(this).css("whiteSpace", "nowrap");
		$(this).css("textOverflow", "ellipsis");
		$(this).css({
			marginTop: "0px"
		}).find("p:first").appendTo(this);
	});
}
//拿到对应滚动的p标签
setInterval('autoScroll(".scrollList", ".sdmList")', 1500);
//公告新闻跳转对应的链接
var abc = $(".content-toutiao-div .sdmList p")
for(var i = 0; i < abc.length; i++) {
	(function(e) { //自执行函数实时把i传入e
		abc[e].onclick = function() { //  通过传入的e获取到哪个按钮发生了点击事件
			//			            alert(e) //弹出e（此处e为i实时对应值）
			setTimeout(function() {
				mui.openWindow({
					url: 'stage/discountgo/news_details.html',
					id: 'news',
					showType: 'zoom-fade-out',
					showTime: 200
				});
			}, 200);
		}
	})(i)
}; //采用闭包和自执行函数获取i

//组选卡
//地方汇
$(".indexNews").click(function() {
	setTimeout(function() {
		mui.openWindow({
			url: 'Local1.html',
			id: 'Local1',
			showType: 'zoom-fade-out',
			showTime: 200
		});
	}, 200);
})
//打开专场活动
$(".indexNews1").click(function() {
	setTimeout(function() {
		mui.openWindow({
			url: 'special1.html',
			id: 'special1',
			showType: 'zoom-fade-out',
			showTime: 200
		});
	}, 200);
})
//打开周周惠
$(".indexNews2").click(function() {
	setTimeout(function() {
		mui.openWindow({
			url: 'stage/discountgo/zhouzhouhui.html',
			id: 'zhouzhouhui',
			showType: 'zoom-fade-out',
			showTime: 200
		});
	}, 200);
});
//个人中心
$(".indexNews3").click(function() {
	setTimeout(function() {
		mui.openWindow({
			url: 'stage/discountgo/personalcenter.html',
			id: 'personalcenter',
			showType: 'zoom-fade-out',
			showTime: 200
		});
	}, 200);
});
//9元观影
$(".indexNews4").click(function() {
	//      	setTimeout(function(){
	//				mui.openWindow({
	//					url: 'discountgo/luck.html',
	//					id: 'luck',
	//					showType: 'zoom-fade-out',
	//					showTime: 200
	//				});
	//			},200);
	alert("还没有页面哦")
});
//微公益
$(".indexNews5").click(function() {
	setTimeout(function() {
		mui.openWindow({
			url: 'tiny.html',
			id: 'tiny',
			showType: 'zoom-fade-out',
			showTime: 200
		});
	}, 200);
});
//悦生活
$(".indexNews6").click(function() {
	//      	setTimeout(function(){
	//				mui.openWindow({
	//					url: 'tiny.html',
	//					id: 'tiny',
	//					showType: 'zoom-fade-out',
	//					showTime: 200
	//				});
	//			},200);
	alert("还没有页面哦")
});
//信息xinxi
$("#xinxi").click(function() {
	setTimeout(function() {
		mui.openWindow({
			url: 'stage/discountgo/news.html',
			id: 'news',
			showType: 'zoom-fade-out',
			showTime: 200
		});
	}, 200);
});