$(function(){
	var typeorder=null;
	/*表单内容删除按钮*/
	$(".text-clear-content").focus(function() {
		$(".clear-button").hide();
		$(this).next(".clear-button").show();

	});
	$(".clear-button").click(function() {
		$(this).prev().val("");
		$(this).prev().focus();
	});
	$(".text-clear-code").click(function() {
		$(".clear-button").hide();
	});
	//截取Url里面的参数   
    function GetRequest() {  
        var url = location.search; //获取url中"?"符后的字串  
        var theRequest = new Object();  
        if (url.indexOf("?") != -1) {  
            var str = url.substr(1);  
            //alert(str);  
            strs = str.split("&");  
            for (var i = 0; i < strs.length; i++) {  
                theRequest[strs[i].split("=")[0]] = decodeURI(strs[i].split("=")[1]);//获取中文参数转码<span style="font-family: Arial, Helvetica, sans-serif;">decodeURI</span>，（unescape只针对数字，中文乱码)  
            }  
        }  
        return theRequest;  
    }  
        //通过url取数  
          
        var request = new Object();  
        request = GetRequest();  
          
        var shop_details_Id = request['id'] ;  // 获取商品ID 
        var part = request['part'] ;  // 获取活动Id 
	//让指定的DIV始终显示在屏幕正中间   
    left_w=($(document).width()-$('#loadingicon').width())/2;  
    top_w = $('html').scrollTop()+($(window).height()-$('#loadingicon').height())/2;  
    $('#loadingicon').offset({top:top_w,left:left_w}); 
	/* 商品详情数据 */
    $('#loadingicon').show();
    $('#loadingicon').offset({top:top_w,left:left_w});  
    setTimeout(function(){
        $('#loadingicon').hide();
        detail_conts();
	},300);
	function detail_conts(){
		var DataImg ="";
		var details_id_html = getGoodsById(shop_details_Id);
		details_id_html = JSON.parse(details_id_html);
        $("#shopGoods").click(function () {
            window.location.href='shop_details.html?id='+details_id_html.shop_id
        })
		/*.click(function () {
        	alert(1)
           //
        });*/
		//$("#shopGoods").attr("onclick","javascript:);
		//console.log(details_id_html);
		$("#delPirc").html(details_id_html.cost_price+"元")
		 //善融支付
		$(".yellow-color").click(function() {
			if(details_id_html.pay_url == ""){
				alert("该商品站不支持善融支付")
			}else{
				setTimeout(function(){
									mui.openWindow({
										url: details_id_html.pay_url,
										id: 'order',
										showType: 'zoom-fade-out',
									showTime: 200
									});
								},500);
					$.post(
						"../../adminarea/updateSrAmount.do"
					);
			}
			
		})
		DataImg ="<div class='swiper-slide'><img src='"+details_id_html.picture_address+"' /></div>"
		$("#details_Img").append(DataImg);
		var Pird ="<div class='swiper-pagination'></div>";
		$("#pridCop").append(Pird);
		//商品详情轮播图
		var swiper = new Swiper('.swiper-container', {
			pagination: '.swiper-pagination',
			loop: true,
			paginationType: 'fraction'
		});
		 /**
		  * 根据商品ID获取周周惠活动详情
		  * @param goodsId 商品ID
		  * @returns 活动详情对象
		  */
		 var getActivityByGoods_ =getActivityByGoods(shop_details_Id);
		 //console.log("根据商品ID获取周周惠活动详情"+getActivityByGoods_);
		 getActivityByGoods_ = JSON.parse(getActivityByGoods_);
		 /**
		  * 根据商品Id获取团购活动详情
		  * @param goodsId
		  * @param response
		  * @return
		  * @throws IOException 
		  */
		 var getTuangouByGoodsId_=getTuangouByGoodsId(shop_details_Id);
		// console.log("根据商品Id获取团购活动详情"+getTuangouByGoodsId_);
		 getTuangouByGoodsId_ = JSON.parse(getTuangouByGoodsId_);
		// console.log(getTuangouByGoodsId_);
		$("#goods_name_").html(details_id_html.goods_name);//商品名称
		$("#goods_details_conts_").html(details_id_html.goods_describe)//商品描述
		   /**
				 * 根据商品ID获取龙支付活详情
				 * @param goodsId
				 * @param response
				 * @return
				 * @throws IOException
				 */
				var  getLongpayhuodongByGoodsId_ =getLongpayhuodongByGoodsId(shop_details_Id);
				//console.log("根据商品ID获取龙支付活详情"+getLongpayhuodongByGoodsId_);
				getLongpayhuodongByGoodsId_ = JSON.parse(getLongpayhuodongByGoodsId_);
				// console.log(getLongpayhuodongByGoodsId_);
		/**
		 * 根据商品Id和 专场类型part 获取专场其它活动详情
		 * @param goodsId
		 * @param part
		 * @param response
		 * @return
		 * @throws IOException 
		 */
		var getlifeserviceByGoodsId_ =getlifeserviceByGoodsId(shop_details_Id,part);
		// console.log("根据商品Id和 专场类型part 获取专场其它活动详情"+getlifeserviceByGoodsId_);
		 getlifeserviceByGoodsId_ = JSON.parse(getlifeserviceByGoodsId_);
		// console.log(getlifeserviceByGoodsId_);
		 /**
		  * 根据商品Id 获取秒杀活动详情
		  * @param goodsId
		  * @param response
		  * @return
		  * @throws IOException
		  */
		 var getseckillByGoodsId_ =getseckillByGoodsId(shop_details_Id);
		// console.log("根据商品Id 获取秒杀活动详情"+getseckillByGoodsId_);
		 getseckillByGoodsId_ = JSON.parse(getseckillByGoodsId_);
		// console.log(getseckillByGoodsId_);
		//周周惠价格
		 if(part ==""){
			 if(getActivityByGoods_ != null){//周周惠价格
					$("#price_goods").html("¥"+getActivityByGoods_.real_price+"元")//售价
					if(getActivityByGoods_.activity_id !=0){
                        $(".yellow-color").css("display","none");//显示手机支付还是善融支付
                        $(".red-color").css({width:"70%",float: "right", display: "block"});
						/*$(".red-color").css("display","none");//显示手机支付还是善融支付
						 $(".yellow-color").css({width:"70%",float: "right", display: "block"});*/
						$(".zhuangtai_1").css("display","none");
						$(".zhuangtai_2").css("display","none");
						$(".zhuangtai_3").css("display","block");
						$(".zhuangtai_4").css("display","none");
						$("#youxiaoqiList").html("有效期： "+getActivityByGoods_.end_time);
                        typeorder =2;
					}
				}
		 }
		//团购价格
		 if(part ==0){
			 if(getTuangouByGoodsId_ !=null){//团购价格
					$("#price_goods").html("¥"+getTuangouByGoodsId_.real_price+"元")//售价
					if(getTuangouByGoodsId_.label ==2){
						$(".yellow-color").css("display","none");//显示手机支付还是善融支付
						 $(".red-color").css({width:"70%",float: "right", display: "block"});
						$(".zhuangtai_1").css("display","none");
						$(".zhuangtai_2").css("display","block");
						$(".zhuangtai_3").css("display","none");
						$(".zhuangtai_4").css("display","none");
						$("#youxiaoqiList").html("有效期： "+getTuangouByGoodsId_.end_time);
						typeorder =3;
					} 
				}
		 }
		//龙支付
		 if(part == -1){
			 if(getLongpayhuodongByGoodsId_ != null){//龙支付
					$("#price_goods").html("¥"+getLongpayhuodongByGoodsId_.real_price+"元")//售价
					if(getLongpayhuodongByGoodsId_.label ==3){
						$(".yellow-color").css("display","none");//显示手机支付还是善融支付
						 $(".red-color").css({width:"70%",float: "right", display: "block"});
						$(".zhuangtai_1").css("display","none");
						$(".zhuangtai_2").css("display","none");
						$(".zhuangtai_3").css("display","none");
						$(".zhuangtai_4").css("display","block");
						$("#youxiaoqiList").html("有效期： "+getLongpayhuodongByGoodsId_.end_time);
						typeorder =5;
					}
				}
		 }
		 //秒杀活动
		 if(part == -2){
			 if(getseckillByGoodsId_ !=null){//秒杀活动价格
				 	var endtime=getseckillByGoodsId_.end_time;
				 	var startime =getseckillByGoodsId_.start_time;
				 	var systemtime = getNowFormatDate();
				 	systemtime=systemtime.replace("-", "").replace(" ", "").replace(":", "").replace("-", "").replace(":", "");
				 	endtime=endtime.replace("-", "").replace(" ", "").replace(":", "").replace("-", "").replace(":", "");
					startime =startime.replace("-", "").replace(" ", "").replace(":", "").replace("-", "").replace(":", "");
					var m1 =systemtime-startime;
					var m2 =systemtime-endtime;
					//console.log(startime)
					//console.log(endtime)
					//console.log(systemtime);
					//console.log(m1)
					//console.log(m2)
					if(m1 >0 &&  m2 <0){
						$("#price_goods").html("¥"+getseckillByGoodsId_.real_price+"元")//售价	
					}else{
						var goods123 =getGoodsById(getseckillByGoodsId_.goods_id);
						goods123=JSON.parse(goods123);
						//console.log(goods123)
						$("#price_goods").html("¥"+goods123.price+"元")//售价
					}
					if(getseckillByGoodsId_.label ==1){
						$(".yellow-color").css("display","none");//显示手机支付还是善融支付
						 $(".red-color").css({width:"70%",float: "right", display: "block"});
						$(".zhuangtai_1").css("display","block");
						$(".zhuangtai_2").css("display","none");
						$(".zhuangtai_3").css("display","none");
						$(".zhuangtai_4").css("display","none");
						$("#youxiaoqiList").html("有效期： "+getseckillByGoodsId_.end_time);
						typeorder =4;
					} 
				}
		 }
		 if(part ==1){//获取专场的生活服务活动详情
			 if(getlifeserviceByGoodsId_ !=null){
				 typeorder ="6#"+part+"";
				// console.log(typeorder)
				 $("#price_goods").html("¥"+getlifeserviceByGoodsId_.real_price+"元")//售价
				 $("#youxiaoqiList").html("");
				// console.log("创建订单类型"+typeorder);
				 $(".yellow-color").css("display","none");//显示手机支付还是善融支付
				 $(".red-color").css({width:"70%",float: "right", display: "block"});
			 }
		 }
		 if(part ==2){//获取专场的海涛活动详情
			 if(getlifeserviceByGoodsId_ !=null){
				 typeorder ="6#"+part+"";
				// console.log(typeorder)
				 $("#price_goods").html("¥"+getlifeserviceByGoodsId_.real_price+"元")//售价
				 $("#youxiaoqiList").html("");
				// console.log("创建订单类型"+typeorder);
				 $(".yellow-color").css("display","none");//显示手机支付还是善融支付
				 $(".red-color").css({width:"70%",float: "right", display: "block"});
			 }
		 }
		 if(part ==3){//获取专场的9.9特卖活动详情
			 if(getlifeserviceByGoodsId_ !=null){
				 typeorder ="6#"+part+"";
				// console.log(typeorder)
				 $("#price_goods").html("¥"+getlifeserviceByGoodsId_.real_price+"元")//售价
				 $("#youxiaoqiList").html("");
				 //console.log("创建订单类型"+typeorder);
				 $(".yellow-color").css("display","none");//显示手机支付还是善融支付
				 $(".red-color").css({width:"70%",float: "right", display: "block"});
			 }
		 }
		 if(part ==4){//获取专场的休闲娱乐活动详情
			 if(getlifeserviceByGoodsId_ !=null){
				 typeorder ="6#"+part+"";
				// console.log(typeorder)
				 $("#price_goods").html("¥"+getlifeserviceByGoodsId_.real_price+"元")//售价
				 $("#youxiaoqiList").html("");
				// console.log("创建订单类型"+typeorder);
				 $(".yellow-color").css("display","none");//显示手机支付还是善融支付
				 $(".red-color").css({width:"70%",float: "right", display: "block"});
			 }
		 }
		 if(part ==5){//获取专场的美食活动详情
			 if(getlifeserviceByGoodsId_ !=null){
				 typeorder ="6#"+part+"";
				 //console.log(typeorder)
				 $("#price_goods").html("¥"+getlifeserviceByGoodsId_.real_price+"元")//售价
				 $("#youxiaoqiList").html("");
				// console.log("创建订单类型"+typeorder);
				 $(".yellow-color").css("display","none");//显示手机支付还是善融支付
				 $(".red-color").css({width:"70%",float: "right", display: "block"});
			 }
		 }
		 if(part ==6){//获取专场的虚拟卡卷活动详情
			 if(getlifeserviceByGoodsId_ !=null){
				 typeorder ="6#"+part+"";
			//	 console.log(typeorder)
				 $("#price_goods").html("¥"+getlifeserviceByGoodsId_.real_price+"元")//售价
				 $("#youxiaoqiList").html("");
			//	 console.log("创建订单类型"+typeorder);
				 $(".yellow-color").css("display","none");//显示手机支付还是善融支付
				 $(".red-color").css({width:"70%",float: "right", display: "block"});
			 }
		 }
		 if(part ==-4){//普通商品详情
			 $(".yellow-color").css("display","none");//显示手机支付还是善融支付
			 $(".red-color").css({width:"70%",float: "right", display: "block"});
			$("#price_goods").html("¥"+details_id_html.price+"元")//售价
			$("#youxiaoqiList").html("");
			$(".yellow-color").css("display","none");//显示手机支付还是善融支付
			 $(".red-color").css({width:"70%",float: "right", display: "block"});
			typeorder =1;
		 }
		$("#amoutNum").html(details_id_html.amount)//库存
		$("#describekkk_122").append(details_id_html.goods_details);
		
		
		/**
		 * 获取单个商品
		 * @param goodsId
		 * @returns
		 */
		var getGoodsById_ =getGoodsById(shop_details_Id)
		getGoodsById_ = JSON.parse(getGoodsById_);
		//var getShopById_ =getShopById(shop_details_Id);
		var shop_id_sx =getGoodsById_.shop_id;
		//console.log("通过单个商品"+getGoodsById_)
		/**
		 * 通过供应商ID获取供应商详情
		 * @param shopId 供应商ID
		 * @returns 供应商对象
		 */
		var getShopById_K =getShopById(shop_id_sx);
		//console.log("通过供应商ID获取供应商"+getShopById_K)
		getShopById_K = JSON.parse(getShopById_K);
		//console.log("通过供应商ID获取供应商电话"+getShopById_K.phone);
		//客服电话
		var datekefu = getShopById_K.phone;
		$("#kefu").click(function() {
			if(confirm(getShopById_K.phone+"确定拨打该商家的电话？")) {
				window.location.href = 'tel:' + datekefu;
				//console.log(window.location.href)
			}
		});
		
		//red-color手机支付
		var url_ ="";
		$(".red-color").click(function() {		
			var getUserByLogin_ = getUserByLogin();
			//console.log(getUserByLogin_)
			if(getUserByLogin_ != "notLogin"){
				        /*console.log("订单类型==="+typeorder);*/
			        	var order_Id =addOrder(shop_details_Id,typeorder);
			        	if(order_Id.length>=8){
			        		alert(order_Id);
			        	}else{
			        		order_Id = JSON.parse(order_Id);
				        	//console.log(order_Id)
							//console.log("传到订单页面的id==="+order_Id);
				        	if(part){
				        		url_ ='order.html?id='+order_Id+'&part='+part
				        	}else{
				        		url_ ='order.html?id='+order_Id+'&part='+part
				        	}
							setTimeout(function() {
								mui.openWindow({
									url: url_,
									id: 'order',
									showType: 'zoom-fade-out',
									showTime: 200
								});
							}, 500);
			        	}
			        	
					
			}else{
				$(".notLoggedIn-0").css("transform", "translateY(0px)");
				
			}			
		})	
	}

	/**
	 * 通过商品ID获取该商品的所有评价
	 * @param goodsId 商品Id
	 * @returns 评价集合json字符串
	 */
	 $('#loadingicon').show();
	    $('#loadingicon').offset({top:top_w,left:left_w});  
	    setTimeout(function(){
	        $('#loadingicon').hide();
	        getCommentByGoodsId_(shop_details_Id);
		},300);
 
	function getCommentByGoodsId_(shop_details_Id){
		//console.log("获取该商品的评价idd==="+shop_details_Id)
		var getCommentByGoodsId_List =getCommentByGoodsId(shop_details_Id);
		//console.log("获取该商品的所有评价==="+getCommentByGoodsId_List)
		getCommentByGoodsId_List = JSON.parse(getCommentByGoodsId_List);
		//console.log(getCommentByGoodsId_List)
	
		
		$("#pinlun_html_5").empty();
		var pinlunbox_html ="";
		var grade ="";
		for(var i =0 ; i < getCommentByGoodsId_List.length; i++){
			
			/**
			 * 根据ID获取单个用户对象
			 * @param    id
			 * @returns  "error":该用户不存在，否则返回user对象的json字符串 需要用JSON.parse(data) 生成user的json对象
			 */
			var getUserById_ =getUserById(getCommentByGoodsId_List[i].user_id);
			getUserById_ = JSON.parse(getUserById_);
			//console.log(getUserById_)
			if(getCommentByGoodsId_List[i].grade ==1){
				grade="<i  class='mui-icon mui-icon-star-filled' style='color: #ffcc00;font-size: 22px;'></i>";
			}
			else if(getCommentByGoodsId_List[i].grade ==2){
				grade="<i  class='mui-icon mui-icon-star-filled' style='color: #ffcc00;font-size: 22px;'></i>" 
						+"<i  class='mui-icon mui-icon-star-filled' style='color: #ffcc00;font-size: 22px;'></i>" ;
			}
			else if(getCommentByGoodsId_List[i].grade ==3){
				grade="<i  class='mui-icon mui-icon-star-filled' style='color: #ffcc00;font-size: 22px;'></i>" 
						+"<i  class='mui-icon mui-icon-star-filled' style='color: #ffcc00;font-size: 22px;'></i>" 
						+"<i  class='mui-icon mui-icon-star-filled' style='color: #ffcc00;font-size: 22px;'></i>" ;
			}
			else if(getCommentByGoodsId_List[i].grade ==4){
				grade="<i  class='mui-icon mui-icon-star-filled' style='color: #ffcc00;font-size: 22px;'></i>" 
						+"<i  class='mui-icon mui-icon-star-filled' style='color: #ffcc00;font-size: 22px;'></i>" 
						+"<i  class='mui-icon mui-icon-star-filled' style='color: #ffcc00;font-size: 22px;'></i>" 
						+"<i  class='mui-icon mui-icon-star-filled' style='color: #ffcc00;font-size: 22px;'></i>" ;
			}else if(getCommentByGoodsId_List[i].grade ==5){
				grade="<i  class='mui-icon mui-icon-star-filled' style='color: #ffcc00;font-size: 22px;'></i>" 
					+"<i  class='mui-icon mui-icon-star-filled' style='color: #ffcc00;font-size: 22px;'></i>" 
					+"<i  class='mui-icon mui-icon-star-filled' style='color: #ffcc00;font-size: 22px;'></i>" 
					+"<i  class='mui-icon mui-icon-star-filled' style='color: #ffcc00;font-size: 22px;'></i>"
					+"<i  class='mui-icon mui-icon-star-filled' style='color: #ffcc00;font-size: 22px;'></i>";
		}else{
			grade="";
		}
			var  head_picture ="";
			if(getUserById_.head_picture == ""){
				head_picture="<img style='border-radius: 50%;vertical-align: middle;'  style='font-size: 12px; text-align: center;overflow: hidden;line-height: 17px;' src=''  alt='头像不存在' width='20' height='20'/>"
			}
			else{
				head_picture="<img style='border-radius: 50%;vertical-align: middle;' src='"+getUserById_.head_picture+"' width='20' height='20'/>"
			}
			pinlunbox_html +="<div class='mui-col-xs-12 clearfix'>"
								+"<div class='mui-content-padded' style='margin: 11px 10px;'>"
								+"<div class='icons mui-inline' style='margin-left: 6px;float:left;'>"
									+grade
								+"</div>"
																																			//+getUserById_.head_picture+                
								+"<p class='mui-pull-right' style='float:right;'>" +head_picture+getUserById_.phone.substr(0, 3) + '****' + getUserById_.phone.substr(7)+"</p>"
							+"</div>"
							+"<div class='clearfix'></div>"
							+"<p>"+getCommentByGoodsId_List[i].comment+"</p>"
							+"<div class='clearfix'></div>"
							+"<p style='color:#666;text-align: right;'>"+getCommentByGoodsId_List[i].comment_time+"</p>"				
						+"</div>";
		}
		$("#pinlun_html_5").append(pinlunbox_html);
	}


	$(".deliverGoods_box_coles").click(function() {
		$(".notLoggedIn-0").css("transform", "translateY(-60000px)");
	});
	$window = $(window);
	var $backTop = $('.red-color');
	$window.on('scroll', function() {
		var $this = $(this);
		var $scroll = $(this).scrollTop();
	});
	$backTop.click(function() {
		$('body,html').animate({
			scrollTop: 0
		}, 300);
	});
	//登录之后
	$("#submit_ok").click(function() {
		/**
		 * 用户登陆信息异步提交
		 * @param userName      用户名
		 * @param userPassword  密码
		 * @param yzm           验证码
		 * @returns             "ok":登陆成功，其它则为所对应的错误提示
		 */
		/*获取页面上输入的内容
		请输入手机银行签约手机号 #user_phop_1 
		请输入密码 #user_password1_1*/
		var user_phop_1 =$("#user_phop_1").val();//手机银行签约手机号
		var user_password1_1 = $("#user_password1_1").val();//请输入密码
		
		/*登录验证内容
		userName      手机号  
		userPassword  密码
		yzm           验证码
		userLogin(userName, userPassword, yzm)*/
		
		var use_denglu_ = userLogin(user_phop_1, user_password1_1, "");
		if(use_denglu_ == "ok"){
			$(".notLoggedIn-0").css("transform", "translateY(-60000px)");
			$(".notLoggedIn-1").css("transform", "translateY(0px)");
			var i = 3;
			if(i != 0) {
				window.close_id = setInterval(function() {
					if(i > 0) {
						document.getElementById('time').innerHTML = i;
						i = i - 1;
					} else {
						$(".notLoggedIn-1").css("transform", "translateY(-60000px)");
						clearInterval(window.close_id);
					}
				}, 1000);
			};
			$("#closeBtns_login button").html("退出登陆");
		}else{
			//登录错误信息提示
			$("#closeBtns_login button").html("未登录");
	    	$("#shuru_alert2").css("display","block");
	    	$("#shuru_alert2").html(use_denglu_);
	    	user_phop_1 ="";
	    	user_password1_1="";
		}
		/**/
	});
	$("#shouye_btns").click(function() {
		$(".notLoggedIn-1").css("transform", "translateY(-60000px)");
	});
	$(".deliverGoods_box_coles").click(function() {
		$(".notLoggedIn-1").css("transform", "translateY(-60000px)");
	});
	
	//忘记密码 
	$(".wangjipassWordr_m").click(function() {
		$(".notLoggedIn-0").css("transform", "translateY(-60000px)");
		$(".not_passWordBox").css("transform", "translateY(0px)");
	});
	$(".deliverGoods_box_coles").click(function() {
		$(".not_passWordBox").css("transform", "translateY(-60000px)");
	});

	//修改密码成功后
	$(".wangjipass_ok").click(function() {
		/**
		 * 重置密码
		 * @param phone 电话号码，非必填
		 * @param yzm   平台验证码，非必填
		 * @param phoneyzm  手机验证码，必填
		 * @param password  修改的密码 非必填
		 * @param password2 修改的密码 非必填
		 * @returns 成功返回 "ok",其余返回失败原因，可直接显示在页面上,重置后密码为 888888
		 */
		//手机号码
		var xiougai_phone =$("#xiougai_phone").val();
		//console.log("修改密码输入的手机号码"+phone_)
		//验证码输入
		var xiougai_yzm =$("#xiougai_yzm").val();
		//console.log("修改密码输入的手机号码"+xiougai_yzm)
		// 密码
		var xiougai_password = $("#xiougai_password").val();
		// 第二次输入的密码
		var xiougai_password2 = $("#xiougai_password2").val();
		var resetPassword_ =resetPassword(xiougai_phone, "", xiougai_yzm, xiougai_password, xiougai_password2);
		if(resetPassword_ == "ok"){
			$(".notLoggedIn-2").css("transform", "translateY(0px)");
			$(".not_passWordBox").css("transform", "translateY(-60000px)");
			var i = 3;
			if(i != 0) {
				window.close_id = setInterval(function() {
					if(i > 0) {
						document.getElementById('time2').innerHTML = i;
						i = i - 1;
					} else {
						clearInterval(window.close_id);
						$(".notLoggedIn-2").css("transform", "translateY(-60000px)");
						$(".notLoggedIn-0").css("transform", "translateY(0px)");
					}
				}, 1000);
			};
		}else{
			//提示注册信息 #tishiconts_
			$("#tishiconts2_").css("display","block");
			$("#tishiconts2_").html(resetPassword_);
		}
		/**/
	});
//	忘记密码  获取验证码倒计时
	var yzm_22_off = true;
	var timer = null;
	$(".yzm_box22").click(function() {
		var phone_ =$("#xiougai_phone").val();
		var phone = phone_;		
		/**
		 * 短信发送
		 * @param     phone
		 * @returns   "ok":发送成功，其它为发送失败
		 */
		var smsSend_ =smsSend(phone);
		//console.log(smsSend_)
	//	console.log("忘记密码  获取验证码倒计时值="+phone)
		if(smsSend_ == "ok"){
			if(yzm_boxMj_off) {
				yzm_boxMj_off = false;
				var i = 120;				
				timer2 = setInterval(function() {
					
					i--;
					$(".yzm_box22").html(i + '重新发送');
					if(i == 0) {
						clearInterval(timer2);
						$(".yzm_box22").html('获取验证码');
						yzm_boxMj_off = true;
					}
				}, 1000)
				//提示注册信息 #tishiconts_
				$("#tishiconts2_").css("display","block");
				$("#tishiconts2_").html(smsSend_);
			} else {
				return false;
			}
			
		}else{
			//提示注册信息 #tishiconts_
			$("#tishiconts2_").css("display","block");
			$("#tishiconts2_").html(smsSend_);
		}
		
	});
	$(".deliverGoods_box_coles").click(function() {
		$(".notLoggedIn-2").css("transform", "translateY(-60000px)");
	});
	$("#shouye_btns2").click(function() {
		$(".notLoggedIn-2").css("transform", "translateY(-60000px)");
	});

	
	//会员注册
	$(".rengzuce_btns").click(function() {
		$(".notLoggedIn-0").css("transform", "translateY(-60000px)");
		$(".not_passWordBox").css("transform", "translateY(-60000px)");
		$(".ILoveYou_money").css("transform", "translateY(0px)");
	});
	$(".deliverGoods_box_coles").click(function() {
		$(".ILoveYou_money").css("transform", "translateY(-60000px)");
	});

	//注册成功
	
	$(".deliverGoods_box_coles").click(function() {
		$(".notLoggedIn-3").css("transform", "translateY(-60000px)");
	});
	$("#shouye_btns3").click(function() {
		$(".notLoggedIn-3").css("transform", "translateY(-60000px)");
	});
		//注册成功
		$(".zuce_ok").click(function() {
			
			/**
			 * 用户注册异步提交基础数据
			 * @param userName       用户名（非必填）
			 * @param userPassword   密码
			 * @param userPassword2  第二次输入的密码
			 * @param phone          手机号码
			 * @param yzm            验证码
			 * @param phoneyzm       手机验证码（选项：1，如果注册只有一个步骤，则必填。2，如果分为两个步骤，第一步填基础数据，第二步填手机验证码则不填写）
			 * @returns              "ok":注册成功，其它则为对应的错误提示
			 */
			//手机号码
			var phone_ =$("#phone_").val();
			//console.log("输入的手机号码"+phone_)
			//验证码输入
			var yzm_ =$("#yzm_").val();
			// 密码
			var userPassword_ = $("#userPassword_").val();
			// 第二次输入的密码
			var userPassword2_ = $("#userPassword2_").val();
			var userReg_ =userReg("", userPassword_, userPassword2_, phone_, "", yzm_);
			//console.log("注册成功的回调值="+userReg_);
			if(userReg_ == "ok"){
				$("#closeBtns_login_html").html("退出登陆");
				$(".ILoveYou_money").css("transform", "translateY(-60000px)");
				$(".notLoggedIn-3").css("transform", "translateY(0px)");
				var i = 3;
				if(i != 0) {
					window.close_id = setInterval(function() {
						if(i > 0) {
							document.getElementById('time3').innerHTML = i;
							i = i - 1;
						} else {
							clearInterval(window.close_id);
							$(".notLoggedIn-3").css("transform", "translateY(-60000px)");
						}
					}, 1000);
				};
			}else{
				//提示注册信息 #tishiconts_
				$("#tishiconts_").css("display","block");
				$("#tishiconts_").html(userReg_);
			}
			
			

		});
		//会员注册   获取验证码倒计时
		var yzm_boxMj_off = true;
		var timer2 = null;
		$(".yzm_boxMj").click(function() {				
			var phone_ =$("#phone_").val();
			var phone = phone_;		
			/**
			 * 短信发送
			 * @param     phone
			 * @returns   "ok":发送成功，其它为发送失败
			 */
			var smsSend_ =smsSend(phone);
			//console.log(smsSend_)
			//console.log("会员注册   获取验证码倒计时手机号码注册成功的回调值="+phone)
			if(smsSend_ == "ok"){
				if(yzm_boxMj_off) {
					yzm_boxMj_off = false;
					var i = 120;				
					timer2 = setInterval(function() {						
						i--;
						$(".yzm_boxMj").html(i + '重新发送');
						if(i == 0) {
							clearInterval(timer2);
							$(".yzm_boxMj").html('获取验证码');
							yzm_boxMj_off = true;
						}
					}, 1000)
					//提示注册信息 #tishiconts_
					$("#tishiconts_").css("display","block");
					$("#tishiconts_").html(smsSend_);
				} else {
					return false;
				}
				
			}else{
				//提示注册信息 #tishiconts_
				$("#tishiconts_").css("display","block");
				$("#tishiconts_").html(smsSend_);
			}
			
		});
});




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



