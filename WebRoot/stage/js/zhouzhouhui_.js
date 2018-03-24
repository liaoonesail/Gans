//让指定的DIV始终显示在屏幕正中间   
	     left_w=($(document).width()-$('#loadingicon').width())/2;  
	     top_w = $('html').scrollTop()+($(window).height()-$('#loadingicon').height())/2;  
	     $('#loadingicon').offset({top:top_w,left:left_w}); 
/**
 * 获取本月周数对象
 * @returns 获取5个周的数据
 */
var getWeek_html= getWeek();
//console.log(getWeek_html);
getWeek_html = JSON.parse(getWeek_html);

 $('#loadingicon').show();
        $('#loadingicon').offset({top:top_w,left:left_w});  
        setTimeout(function(){
	        $('#loadingicon').hide();
	        getWeekAdd();
    	},300);
function getWeekAdd(){
	//区域滚动
	mui('.mui-scroll-wrapper').scroll({
		deceleration: 0.0005, //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
		indicators: false
	});
	var getWeek_html_List ="";//加载模板
	var one_week_title ="";//第几周
	var week_riqi_start_time ="";//开始时间
	var week_end_time =""//结束时间
	for(var i = 0 ; i < getWeek_html.length; i++){
		var one_week = getWeek_html[i].start_time.split('-');//开始时间截取
		var one_week_end = getWeek_html[i].end_time.split('-');//结束时间截取
		console.log(getWeek_html[i].start_time)
		if(getWeek_html[i].week == 1){
			one_week_title ="<p>第一周</p>";
		////开始时间截取
			week_riqi_start_time =one_week[1]+"月"+one_week[2]+"日";
			console.log(week_riqi_start_time);
			//结束时间截取
			week_end_time ="-"+one_week_end[1]+"月"+one_week_end[2]+"日";
			console.log(week_end_time);
		}else if(getWeek_html[i].week == 2){
			one_week_title ="<p>第二周</p>";
			////开始时间截取
			console.log(one_week_title);
			week_riqi_start_time =one_week[1]+"月"+one_week[2]+"日";
			//console.log(week_riqi_start_time);
			//结束时间截取
			week_end_time ="-"+one_week_end[1]+"月"+one_week_end[2]+"日";
			console.log(week_end_time);
		}
		else if(getWeek_html[i].week == 3){
			one_week_title ="<p>第三周</p>";
			////开始时间截取
			console.log(one_week_title);
			week_riqi_start_time =one_week[1]+"月"+one_week[2]+"日";
			//console.log(week_riqi_start_time);
			////结束时间截取
			week_end_time ="-"+one_week_end[1]+"月"+one_week_end[2]+"日";
			console.log(week_end_time);
		}
		else if(getWeek_html[i].week == 4){
			one_week_title ="<p>第四周</p>";
			////开始时间截取
			console.log(one_week_title);
			week_riqi_start_time =one_week[1]+"月"+one_week[2]+"日";
			console.log(week_riqi_start_time);
			////结束时间截取
			week_end_time ="-"+one_week_end[1]+"月"+one_week_end[2]+"日";
			console.log(week_end_time);
		}
		else if(getWeek_html[i].week == 5){
			one_week_title ="<p>第五周</p>";
			////开始时间截取
			console.log(one_week_title);
			week_riqi_start_time =one_week[1]+"月"+one_week[2]+"日";
			//console.log(week_riqi_start_time);
			////结束时间截取
			week_end_time ="-"+one_week_end[1]+"月"+one_week_end[2]+"日";
			console.log(week_end_time);
		}
		getWeek_html_List +="<li week_='"+getWeek_html[i].week+"'>"+one_week_title+"<p>"+week_riqi_start_time+week_end_time+"</p></li>";
	}
	$("#ListNavService").append(getWeek_html_List);
	//周周惠分类左边导航对应点击样式
	var week_num_ = $("ul#ListNavService li").eq(0).attr("week_");
	$("ul#ListNavService li").eq(0).addClass("ontopOk");
	getweekDate_(week_num_);
	$("ul#ListNavService li").click(function() {
		$("ul#ListNavService  li").removeClass("ontopOk"); //siblings是循环遍历
		$(this).addClass("ontopOk");
		week_num_ =$(this).attr("week_");
		$("#zhouzhouIdList").empty();
		 $('#loadingicon').show();
	        $('#loadingicon').offset({top:top_w,left:left_w});  
	        setTimeout(function(){
		        $('#loadingicon').hide();
		        getweekDate_(week_num_);
	    	},300);

	});
	/**
	 * 获取对应周的商品数据
	 * @param week 第几周 数字 总共5周
	 * @returns 商品集合列表
	 */
	function getweekDate_(week_num_){
		$("#zhouzhouIdList").empty();
		var miaosha_ = "",getweekdata_html_List ="";
		var getweekdate_html_ =  getWeekData(week_num_);
		 console.log("商品集合列表=="+getweekdate_html_);
		getweekdate_html_ = JSON.parse(getweekdate_html_);
		console.log(getweekdate_html_);
		
		for(var i = 0; i < getweekdate_html_.length; i++){
			/*if(getweekdate_html_[i].lable == 1){//秒杀
				miaosha_ ="<img src='../img/smallImg/a4.png' />";
			}else if(getweekdate_html_[i].lable == 2){//团购
				miaosha_ ="<img src='../img/smallImg/a3.png' />";
			}else if(getweekdate_html_[i].lable == 3){//减满
				miaosha_ ="<img src='../img/smallImg/a1.png' />";
			}else if(getweekdate_html_[i].lable == 4){//龙支付
				miaosha_ ="<img src='../img/smallImg/a2.png' />";
			}else{
				miaosha_ ="<img src='../img/smallImg/a2.png' style='display: none;' />";
			}*/
			 /**
			  * 根据商品ID获取周周惠活动详情
			  * @param goodsId 商品ID
			  * @returns 活动详情对象
			  */
			 var getActivityByGoods_ =getActivityByGoods(getweekdate_html_[i].id);
			 console.log("根据商品ID获取周周惠活动详情"+getActivityByGoods_);
			 
			 if(getActivityByGoods_ != null){//周周惠价格
		   			if(getActivityByGoods_.activity_id !=0){
		   				miaosha_ ="<img width='45' height='20'  src='' alt='周周惠' style='margin-left: 6px;font-size: 12px;line-height: 20px; color:#09b6f2;text-align: center;'/>";
					}
					
				}
			 getActivityByGoods_ = JSON.parse(getActivityByGoods_);
			// console.log("商铺有效期=="+getActivityByGoods_.end_time);
			getweekdata_html_List +="<div id='"+getweekdate_html_[i].id+"' class='mui-col-xs-6 dssssdf'>"
									+"<img src='"+getweekdate_html_[i].picture_address+"' />"
									+"<p>"+getweekdate_html_[i].goods_name+"</p>"
									+"<dt>有效期:<span>"+getActivityByGoods_.end_time+"</span></dt>"
									+"<div class='picdetails'>优惠价：¥<span>"+getActivityByGoods_.real_price+"</span>元</div>"
									+"<dd class='clearfix'>"
										+"<del>市场价："+getweekdate_html_[i].cost_price+"元</del>"
										+miaosha_
									+"</dd>"
									+"<button class='picBttns'>立即购买</button>"
								+"</div>";
			
		}
		$("#zhouzhouIdList").append(getweekdata_html_List);
		//跳转对应的商品详情     
		var abc = $(".dssssdf");
		for(var i = 0; i < abc.length; i++) {
			(function(e) { //自执行函数实时把i传入e
				abc[e].onclick = function() { //  通过传入的e获取到哪个按钮发生了点击事件
					 var shop_details_Id =$(this).attr("id");
					// alert(shop_details_Id)
					//			            alert(e) //弹出e（此处e为i实时对应值）
					setTimeout(function() {
						mui.openWindow({
							url: 'details.html?id='+shop_details_Id+'&part=',
							id: 'details',
							showType: 'zoom-fade-out',
							showTime: 200
						});
					}, 200);
				}
			})(i)
		}; //采用闭包和自执行函数获取i
	}
		//轮播图
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
	var zhouzhouhuiStatus= getAdvertByStatus("zzh_lb");
	zhouzhouhuiStatus = JSON.parse(zhouzhouhuiStatus);
	console.log(zhouzhouhuiStatus);	
	$("#zhouzhouhuibannerImg").empty();
	var zhouzhouhuibannerImg_html ="";
	for(var i = 0;i < zhouzhouhuiStatus.length;i++){
		zhouzhouhuibannerImg_html +="<div onclick=\"javascript:window.location.href='"+zhouzhouhuiStatus[i].ad_url+"'\" class='swiper-slide' style=\"background-image:url('"+zhouzhouhuiStatus[i].ad_path+"')\"></div>"
	}
	$("#zhouzhouhuibannerImg").append(zhouzhouhuibannerImg_html);
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
	/*function getAdvertByStatus(status){
		var url = "advert/getAdvertByStatus.do";
		var data = {
			status:status
	    };
		async = false;
		var result = ajaxSubmit(url, data, async);
		console.log(result)
		return result;
	}
		$("#zhouzhouhuibannerImg").empty();
		var getAdvertByStatus_= getAdvertByStatus("D");
		getAdvertByStatus_ = JSON.parse(getAdvertByStatus_);
		console.log(getAdvertByStatus_);	
		var zhouzhouhuibannerImg_html ="";
		for(var i = 0 ; i < getAdvertByStatus_.length; i++){
			zhouzhouhuibannerImg_html +="<div onclick=\"javascript:window.location.href='"+getAdvertByStatus_[i].ad_url+"'\" class='swiper-slide' style=\"background-image:url('"+getAdvertByStatus_[i].ad_path+"')\"></div>"
		}
		$("#zhouzhouhuibannerImg").append(zhouzhouhuibannerImg_html);
		//轮播图
		var swiper = new Swiper('.swiper-container', {
			pagination: '.swiper-pagination',
			paginationClickable: '.swiper-pagination',
			loop: true,
			spaceBetween: 30,
			autoplay: 2500,
			autoplayDisableOnInteraction: false,
			effect: 'fade'
		});*/
}
