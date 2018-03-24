//限时秒杀
$("#tou1").click(function() {
	setTimeout(function() {
		mui.openWindow({
			url: 'seckill.html',
			id: 'seckill',
			showType: 'zoom-fade-out',
			showTime: 200
		});
	}, 500);
});
//生活服务
$("#tou2").click(function() {
	setTimeout(function() {
		mui.openWindow({
			url: 'lifeservice.html?part=1',
			id: 'lifeservice',
			showType: 'zoom-fade-out',
			showTime: 200
		});
	}, 500);
});
//海淘
$("#tou3").click(function() {
	setTimeout(function() {
		mui.openWindow({
			url: 'lifeservice.html?part=2',
			id: 'lifeservice',
			showType: 'zoom-fade-out',
			showTime: 200
		});
	}, 500);
});
//虚拟卡卷
$("#tou4").click(function() {
	setTimeout(function() {
		mui.openWindow({
			url: 'lifeservice.html?part=6',
			id: 'lifeservice',
			showType: 'zoom-fade-out',
			showTime: 200
		});
	}, 500);
});
//团购
$("#tou5").click(function() {
	setTimeout(function() {
		mui.openWindow({
			url: 'group.html',
			id: 'group',
			showType: 'zoom-fade-out',
			showTime: 200
		});
	}, 500);
});
//9.9特卖
$("#tou6").click(function() {
	setTimeout(function() {
		mui.openWindow({
			url: 'lifeservice.html?part=3',
			id: 'lifeservice',
			showType: 'zoom-fade-out',
			showTime: 200
		});
	}, 500);
});
//休闲娱乐
$("#tou7").click(function() {
	setTimeout(function() {
		mui.openWindow({
			url: 'lifeservice.html?part=4',
			id: 'lifeservice',
			showType: 'zoom-fade-out',
			showTime: 200
		});
	}, 500);
});
//美食
$("#tou8").click(function() {
	setTimeout(function() {
		mui.openWindow({
			url: 'lifeservice.html?part=5',
			id: 'lifeservice',
			showType: 'zoom-fade-out',
			showTime: 200
		});
	}, 500);
});
var shopGoods_html = getGoodsByTuijian();
shopGoods_html = JSON.parse(shopGoods_html);
console.log(shopGoods_html);
//addshophtml_();
function addshophtml_(){
	var shop_List_add ="",miaosha_ = "";
	for(var i = 0; i <shopGoods_html.length ; i++ ){
		var youxiaoqi_ ="<dt></dt>";
		var part ="";
		/**
		  * 根据商品ID获取周周惠活动详情
		  * @param goodsId 商品ID
		  * @returns 活动详情对象
		  */
		 var getActivityByGoods_ =getActivityByGoods(shopGoods_html[i].id);
		 console.log("根据商品ID获取周周惠活动详情"+getActivityByGoods_);
		 getActivityByGoods_ = JSON.parse(getActivityByGoods_);
	
		/**
		  * 根据商品Id获取团购活动详情
		  * @param goodsId
		  * @param response
		  * @return
		  * @throws IOException 
		  */
		 var getTuangouByGoodsId_=getTuangouByGoodsId(shopGoods_html[i].id);
		 console.log("根据商品Id获取团购活动详情"+getTuangouByGoodsId_);
		 getTuangouByGoodsId_ = JSON.parse(getTuangouByGoodsId_);
		 console.log(getTuangouByGoodsId_);
		 /**
		  * 根据商品Id 获取秒杀活动详情
		  * @param goodsId
		  * @param response
		  * @return
		  * @throws IOException
		  */
		 var getseckillByGoodsId_ =getseckillByGoodsId(shopGoods_html[i].id);
		 console.log("根据商品Id 获取秒杀活动详情"+getseckillByGoodsId_);
		 getseckillByGoodsId_ = JSON.parse(getseckillByGoodsId_);
		 console.log(getseckillByGoodsId_);
		 /**
		  * 根据商品ID获取龙支付活详情
		  * @param goodsId
		  * @param response
		  * @return
		  * @throws IOException
		  */
		 var getLongpayhuodongByGoodsId_ = getLongpayhuodongByGoodsId(shopGoods_html[i].id);
		 console.log("根据商品ID获取龙支付活详情"+getLongpayhuodongByGoodsId_);
		 getLongpayhuodongByGoodsId_ = JSON.parse(getLongpayhuodongByGoodsId_);
		 console.log(getLongpayhuodongByGoodsId_);
		 if(getseckillByGoodsId_ !=null ){
			 if(getseckillByGoodsId_.label ==1){//秒杀
				// alert("秒杀")
				 console.log(getseckillByGoodsId_.goods_id )
				  var endtime=getseckillByGoodsId_.end_time;
					 	var startime =getseckillByGoodsId_.start_time;
					 	var systemtime = getNowFormatDate();
					 	systemtime=systemtime.replace("-", "").replace(" ", "").replace(":", "").replace("-", "").replace(":", "");
					 	endtime=endtime.replace("-", "").replace(" ", "").replace(":", "").replace("-", "").replace(":", "");
						startime =startime.replace("-", "").replace(" ", "").replace(":", "").replace("-", "").replace(":", "");
						var m1 =systemtime-startime;
						var m2 =systemtime-endtime;
						/*//console.log(startime)
						//console.log(endtime)
						//console.log(systemtime);
						//console.log(m1)
						//console.log(m2)
*/						
						if(m1 >0 &&  m2 <0){
							pric_ =getseckillByGoodsId_.real_price;
                      }else{
                    	  pric_ =shopGoods_html[i].price;
                      }
				    miaosha_ ="<img src='../img/smallImg/a4.png' />";
					youxiaoqi_ ="<dt>有效期:<span>"+getseckillByGoodsId_.end_time+"</span></dt>";
			
					part = -2;
			 }else{
				 if(getTuangouByGoodsId_ !=null){//团购价格
						if(getTuangouByGoodsId_.label ==2){
							//alert("团购")
							miaosha_ ="<img src='../img/smallImg/a3.png' />";
							youxiaoqi_ ="<dt>有效期:<span>"+getTuangouByGoodsId_.end_time+"</span></dt>";
							pric_ =getTuangouByGoodsId_.real_price;
							part = 0;
						}else{
							 if(getLongpayhuodongByGoodsId_ != null){//龙支付
								 if(getLongpayhuodongByGoodsId_.label ==3){
									 //alert("龙支付")
										miaosha_ ="<img src='../img/smallImg/a2.png' />";
										youxiaoqi_ ="<dt>有效期:<span>"+getLongpayhuodongByGoodsId_.end_time+"</span></dt>";
										pric_ =getLongpayhuodongByGoodsId_.real_price;
										part = -1;
									} 
							 }else{
								 if(getActivityByGoods_ != null){//周周惠价格
							   			if(getActivityByGoods_.activity_id !=0){
							   			 //alert("周周惠")
							   				miaosha_ ="<img width='45' height='20'  src='' alt='周周惠' style='margin-left: 6px;font-size: 12px;line-height: 20px; color:#09b6f2;text-align: center;'/>";
							   			    youxiaoqi_ ="<dt>有效期:<span>"+getActivityByGoods_.end_time+"</span></dt>";
							   			    pric_ =getActivityByGoods_.real_price;
							   			    part ="";
							   			}
									}else{
										//alert("都不是")
										youxiaoqi_ ="<dt style='visibility: hidden;'>有效期:<span></span></dt>";
										miaosha_ ="";
										pric_ =shopGoods_html[i].price;
										part = -4;
									}
							}
						}
					}
			 }
		 }else{
			 if(getTuangouByGoodsId_ !=null){//团购价格
					if(getTuangouByGoodsId_.label ==2){
						//alert("团购")
						miaosha_ ="<img src='../img/smallImg/a3.png' />";
						youxiaoqi_ ="<dt>有效期:<span>"+getTuangouByGoodsId_.end_time+"</span></dt>";
						pric_ =getTuangouByGoodsId_.real_price;
						part = 0;
					}
			 }
				else if(getLongpayhuodongByGoodsId_ != null){//龙支付
				 if(getLongpayhuodongByGoodsId_.label ==3){
					 //alert("龙支付")
						miaosha_ ="<img src='../img/smallImg/a2.png' />";
						youxiaoqi_ ="<dt>有效期:<span>"+getLongpayhuodongByGoodsId_.end_time+"</span></dt>";
						pric_ =getLongpayhuodongByGoodsId_.real_price;
						part = -1;
					} 
			 }
			 else  if(getActivityByGoods_ != null){//周周惠价格
		   			if(getActivityByGoods_.activity_id !=0){
		   			// alert("周周惠")
		   				miaosha_ ="<img width='45' height='20'  src='' alt='周周惠' style='margin-left: 6px;font-size: 12px;line-height: 20px; color:#09b6f2;text-align: center;'/>";
		   			    youxiaoqi_ ="<dt>有效期:<span>"+getActivityByGoods_.end_time+"</span></dt>";
		   			    pric_ =getActivityByGoods_.real_price;
		   			    part ="";
		   			}
				}else{
					//alert("都不是")
					youxiaoqi_ ="<dt style='visibility: hidden;'>有效期:<span></span></dt>";
					miaosha_ ="";
					pric_ =shopGoods_html[i].price;
					part = -4;
				}
		 }
		
		shop_List_add +="<div part='"+part+"' id='"+shopGoods_html[i].id+"' class='mui-col-xs-6 dssssdf'>"
							+"<img  src='"+shopGoods_html[i].picture_address+"' />"
							+"<p>"+shopGoods_html[i].goods_name+"</p>"
							+youxiaoqi_
							+"<div class='picdetails'>优惠价：¥<span>"+pric_+"</span>元</div>"
							+"<dd class='clearfix'>"
								+"<del>市场价："+shopGoods_html[i].cost_price+"元</del>"
								+miaosha_
							+"</dd>"
							+"<button class='picBttns'>立即购买</button>"
						+"</div>";
	}
	
	$("#shopListBox").append(shop_List_add);
	  //跳转对应的商品详情     
	var url_ ="";
    var abc = $(".dssssdf")
		for (var i = 0; i < abc.length; i++) {
		    (function(e){  //自执行函数实时把i传入e
		        abc[e].onclick=function(){  //  通过传入的e获取到哪个按钮发生了点击事件
//		            alert(e) //弹出e（此处e为i实时对应值）
                    var shop_details_Id =$(this).attr("id");
                    var part =$(this).attr("part");
                     
                    	url_ ='details.html?id='+shop_details_Id+'&part='+part
            		 
                     setTimeout(function(){
						mui.openWindow({
							url: url_,
							id: 'details',
							showType: 'zoom-fade-out',
							showTime: 200
						});
					},200);
		        }
		    })(i)    
		};   //采用闭包和自执行函数获取i
		/**
		 * 获取该区域所有供应商
		 * @param area 区域ID
		 * @returns 供应商集合
		 */
		var getCheckedArea_ = getCheckedArea();
		//console.log("获取该区域所有供应商"+getCheckedArea_);
		getCheckedArea_ = JSON.parse(getCheckedArea_);
		var getAreaShop_ =getAreaShop(getCheckedArea_.id);
		//console.log("对应店铺"+getAreaShop_);
		getAreaShop_ = JSON.parse(getAreaShop_);
		$("#getAreaShop").empty();
		var getAreaShop_htmlP ="";
		for(var i = 0; i < getAreaShop_.length ; i++){
			getAreaShop_htmlP +="<div id='"+getAreaShop_[i].id+"' class='mui-col-xs-4 shopdeta'>"
									+"<img src='"+getAreaShop_[i].picture_address+"' />"
									+"<p>"+getAreaShop_[i].shop_name+"</p>"
		                          +"</div>";
		}
		$("#getAreaShop").append(getAreaShop_htmlP);
		//跳转对应的店铺详情     
		var abc_diapu =$(".shopdeta");
		for(var i = 0; i < abc_diapu.length; i++) {
			(function(e) { //自执行函数实时把i传入e
				abc_diapu[e].onclick = function() { //  通过传入的e获取到哪个按钮发生了点击事件
					 var shop_details_Id_conts =$(this).attr("id");
					 //	            alert(shop_details_Id_conts) //弹出e（此处e为i实时对应值）
					setTimeout(function() {
						mui.openWindow({
							url: 'shop_details.html?id='+shop_details_Id_conts,
							id: 'shop_details',
							showType: 'zoom-fade-out',
							showTime: 200
						});
					}, 200); 
				}
			})(i)
		}; //采用闭包和自执行函数获取i
		
		/**
		 * 轮播图集合（one_lb,zzh_lb,long_lb,sr_lb,dfh_lb）(首页轮播、周周惠轮播、龙支付轮播、善融轮播、地方汇轮播)
		 * @param location
		 * @param response
		 * @return
		 * @throws IOException 
		 */
		function getAdvertByStatus(location){
			var url = "advert/lbList.do";
			var data = {
					location:location
		    };
			async = false;
			var result = ajaxSubmit(url, data, async);
			console.log(result)
			return result;
		}
		/**
		 * 根据位置获取单个图片
		 * @param location
		 * @param response
		 * @return
		 * @throws IOException 
		 */
		function getOnePic(location){
			var url = "advert/getOne.do";
			var data = {
					location:location
		    };
			async = false;
			var result = ajaxSubmit(url, data, async);
			console.log(result)
			return result;
		}
		//轮播图
		$("#indexBannerImg").empty();
		var indexBannerImgStatus_= getAdvertByStatus("zc_lb");		
		indexBannerImgStatus_ = JSON.parse(indexBannerImgStatus_);
		var indexBannerImg ="";
		for(var i = 0 ; i < indexBannerImgStatus_.length; i++){
			indexBannerImg +="<div  onclick=\"javascript:window.location.href='"+indexBannerImgStatus_[i].ad_url+"'\" class='swiper-slide' style='background-image:url("+indexBannerImgStatus_[i].ad_path+")'></div>";
		}
		$("#indexBannerImg").append(indexBannerImg);
		
		
		 //广告图
		 $("#advertisementBoxListImg").empty();
		 //1
		  var advertisementBoxListImgStatus_1= getAdvertByStatus("zc_ad1");		
		  advertisementBoxListImgStatus_1 = JSON.parse(advertisementBoxListImgStatus_1);
		//2
		  var advertisementBoxListImgStatus_2= getAdvertByStatus("zc_ad2");		
		  advertisementBoxListImgStatus_2 = JSON.parse(advertisementBoxListImgStatus_2);
		  //3
		  var advertisementBoxListImgStatus_3= getAdvertByStatus("zc_ad3");		
		  advertisementBoxListImgStatus_3 = JSON.parse(advertisementBoxListImgStatus_3);
		//4
		  var advertisementBoxListImgStatus_4= getAdvertByStatus("zc_ad4");		
		  advertisementBoxListImgStatus_4 = JSON.parse(advertisementBoxListImgStatus_4);
		  $("#advertisementBoxListImg").append("<div onclick=\"javascript:window.location.href='"+advertisementBoxListImgStatus_1.ad_url+"'\" class='advertisementBoxList1'><img src='"+advertisementBoxListImgStatus_1.ad_path+"' /></div>");
		  $("#advertisementBoxListImg").append("<div onclick=\"javascript:window.location.href='"+advertisementBoxListImgStatus_2.ad_url+"'\" class='advertisementBoxList1'><img src='"+advertisementBoxListImgStatus_2.ad_path+"' /></div>");
		  $("#advertisementBoxListImg").append("<div onclick=\"javascript:window.location.href='"+advertisementBoxListImgStatus_3.ad_url+"'\" class='advertisementBoxList1'><img src='"+advertisementBoxListImgStatus_3.ad_path+"' /></div>");
		  $("#advertisementBoxListImg").append("<div onclick=\"javascript:window.location.href='"+advertisementBoxListImgStatus_4.ad_url+"'\" class='advertisementBoxList1'><img src='"+advertisementBoxListImgStatus_4.ad_path+"' /></div>");
		 
} 
/**
 * 获取所有文章集合
 * @returns//文章类型：1活动2精选3推荐
 */
var getAllArticle_List =getAllArticle();
//console.log("获取所有文章集合==="+getAllArticle_List)
getAllArticle_List = JSON.parse(getAllArticle_List);
$("#getAllArticle_List").empty();
var getAllArticle_List_html ="";
var getAllArticle_List_html_type ="";
for(var i = 0;  i < getAllArticle_List.length ; i++){
	if(getAllArticle_List[i].type ==1){
		getAllArticle_List_html_type ="<span class='color1'>【活动】</span>";
	}else if(getAllArticle_List[i].type ==2){
		getAllArticle_List_html_type ="<span class='color2'>【精选】</span>";
	}else{
		getAllArticle_List_html_type ="<span class='color3'>【推荐】</span>";
	}
	getAllArticle_List_html +="<p id='"+getAllArticle_List[i].id+"'>"+getAllArticle_List_html_type+getAllArticle_List[i].title+"</p>"
}
$("#getAllArticle_List").append(getAllArticle_List_html);
//拿到对应滚动的p标签
setInterval('autoScroll(".scrollList", ".sdmList")', 1500);
//	跳转对应的新闻公告详情
var abc = $(".content-toutiao-div .sdmList p")
for(var i = 0; i < abc.length; i++) {
(function(e) { //自执行函数实时把i传入e
	abc[e].onclick = function() { //  通过传入的e获取到哪个按钮发生了点击事件
		//					alert(e) //弹出e（此处e为i实时对应值）
		//alert()
		var ArticleId = $(this).attr("id");
		setTimeout(function() {
			mui.openWindow({
				url: 'news_details.html?id='+ArticleId,
				id: 'news',
				showType: 'zoom-fade-out',
				showTime: 200
			});
		}, 500);
	}
})(i)
}; //采用闭包和自执行函数获取i
	
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
/**
 * 获取当前时间
 * meiyong
 * @returns {String}
 */
function getNowFormatDate() {
    var date = new Date();
    var seperator1 = "-";
    var seperator2 = ":";
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var seconds=date.getSeconds();
    if(seconds<10){
    	seconds="0"+seconds;
    }
    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
            + " " + date.getHours() + seperator2 + date.getMinutes()
            + seperator2 + seconds;
    return currentdate;
}