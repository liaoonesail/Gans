$(function() {	
	 
	$(".deliverGoods_box_coles").click(function() {
		$(".notLoggedIn-0").css("transform", "translateY(-60000px)");
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
						setTimeout(function() {
							//console.log(notLogin)
							mui.openWindow({
								url: 'personalcenter.html',
								id: 'personalcenter',
								showType: 'zoom-fade-out',
								showTime: 200
							});
						}, 200);
					} else {
						$(".notLoggedIn-1").css("transform", "translateY(-60000px)");
						clearInterval(window.close_id);
					}
				}, 1000);
			};
			$("#closeBtns_login_html").html("退出登陆");
		}else{
			//登录错误信息提示
			$("#closeBtns_login_html").html("未登录");
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
	//	console.log("修改密码输入的手机号码"+phone_)
		//验证码输入
		var xiougai_yzm =$("#xiougai_yzm").val();
	//	console.log("修改密码输入的手机号码"+xiougai_yzm)
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
		//console.log("忘记密码  获取验证码倒计时值="+phone)
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
				/*$("#tishiconts2_").css("display","block");
				$("#tishiconts2_").html(smsSend_);*/
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
	/**
	 * 获取登陆用户
	 * @returns 没有登陆返回字符串"notLogin" 否则返回user的JSON串
	 */
	var notLogin = getUserByLogin();  
	login_one();
	function login_one(){
		if(notLogin =="notLogin"){
			//if(isFirst){
				$('body,html').animate({
					scrollTop: 0
				}, 300);
				$(".notLoggedIn-0").css("transform", "translateY(0px)");
				$("#closeBtns_login_html").html("未登录");
			//	isFirst =false;
			//}
			$(".personalcenterBox1").css("display","block");
			$(".personalcenterBox").css("display","none");
			$("#denglu_btn_pppoidf").click(function(){
				$(".notLoggedIn-0").css("transform", "translateY(0px)");
			});
		}else if(notLogin !="notLogin"){
			$(".personalcenterBox1").css("display","none");
			$(".personalcenterBox").css("display","block");
			$("#closeBtns_login_html").html("退出登录");
			notLogin = JSON.parse(notLogin);
			if(notLogin.nickname == ""){
					$("#userName_ok").html(notLogin.phone.substr(0, 3) + '****' + notLogin.phone.substr(7));
			}else{
				$("#userName_ok").html(notLogin.nickname);
			}
			
			
			//头像获取
			 $('#head_picture').attr('src', notLogin.head_picture);
		}
	}
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
		//	console.log("注册成功的回调值="+userReg_);
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
		//	console.log("会员注册   获取验证码倒计时手机号码注册成功的回调值="+phone)
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
					/*$("#tishiconts_").css("display","block");
					$("#tishiconts_").html(smsSend_);*/
				} else {
					return false;
				}
				
			}else{
				//提示注册信息 #tishiconts_
				$("#tishiconts_").css("display","block");
				$("#tishiconts_").html(smsSend_);
			}
			
		});	
	
	//定义一个全局变量 是不首次，开始时是true，当你onMouseUp执行后变为false
    var notLogin_325 ="";
		//未登录
		$("#closeBtns_login_html").click(function() {
			/**
			 * 用户退出登陆
			 * @returns 退出登陆成功返回"ok" 失败为"error"
			 */
			
			var setUserLoginOut_ =setUserLoginOut();
			if(setUserLoginOut_ == "ok"){
				$(".personalcenterBox1").css("display","block");
				$(".personalcenterBox").css("display","none");
				 $("#closeBtns_login_html").html("未登录");
				 //console.log("123我退出了登录"+setUserLoginOut_);
				 notLogin_325 =$("#closeBtns_login_html").html();
				 if(notLogin_325 == "未登录"){
						$("#closeBtns_login_html").click(function() {
							$(".notLoggedIn-0").css("transform", "translateY(0px)");
						});
						$("#denglu_btn_pppoidf").click(function(){
							$(".notLoggedIn-0").css("transform", "translateY(0px)");
						});
						var $backTop = $('#closeBtns_login_html');
						$window = $(window);
						$window.on('scroll', function() {
							var $this = $(this);
							var $scroll = $(this).scrollTop();
						});
						$backTop.click(function() {
							$('body,html').animate({
								scrollTop: 0
							}, 300);
						});
					}
			}
		});
		
	//待付款链接
	$(".orderAllNav1").click(function() {
	  if(notLogin !="notLogin"){
		  setTimeout(function() {
				mui.openWindow({
					url: 'MyOrder.html?id=1',
					id: 'MyOrder',
					showType: 'zoom-fade-out',
					showTime: 200
				});
			}, 200);
	  }else{
		  var $backTop = $('.orderAllNav1');
			$window = $(window);
			$window.on('scroll', function() {
				var $this = $(this);
				var $scroll = $(this).scrollTop();
			});
			$backTop.click(function() {
				$('body,html').animate({
					scrollTop: 0
				}, 300);
			});
		  $(".notLoggedIn-0").css("transform", "translateY(0px)");
	  }		
	});
	//待发货链接
	$(".orderAllNav2").click(function() {
		if(notLogin !="notLogin"){
			setTimeout(function() {
				mui.openWindow({
					url: 'MyOrder.html?id=2',
					id: 'MyOrder',
					showType: 'zoom-fade-out',
					showTime: 200
				});
			}, 200);
		}else{
			 var $backTop = $('.orderAllNav2');
				$window = $(window);
				$window.on('scroll', function() {
					var $this = $(this);
					var $scroll = $(this).scrollTop();
				});
				$backTop.click(function() {
					$('body,html').animate({
						scrollTop: 0
					}, 50);
				});
				setTimeout(function(){$(".notLoggedIn-0").css("transform", "translateY(0px)");},100);
		}
		
	});
	//待收货链接
	$(".orderAllNav3").click(function() {
		if(notLogin !="notLogin"){
			setTimeout(function() {
				mui.openWindow({
					url: 'MyOrder.html?id=3',
					id: 'MyOrder',
					showType: 'zoom-fade-out',
					showTime: 200
				});
			}, 200);
		}else{
			var $backTop = $('.orderAllNav3');
			$window = $(window);
			$window.on('scroll', function() {
				var $this = $(this);
				var $scroll = $(this).scrollTop();
			});
			$backTop.click(function() {
				$('body,html').animate({
					scrollTop: 0
				}, 50);
			});
			setTimeout(function(){$(".notLoggedIn-0").css("transform", "translateY(0px)");},100);
		}
		
	});
	//quanOrderNav1未使用链接
	$(".quanOrderNav1").click(function() {
		if(notLogin !="notLogin"){
			setTimeout(function() {
				mui.openWindow({
					url: 'quanOrder.html?idstr=1',
					id: 'quanOrder',
					showType: 'zoom-fade-out',
					showTime: 200
				});
			}, 200);
		}else{
			var $backTop = $('.quanOrderNav1');
			$window = $(window);
			$window.on('scroll', function() {
				var $this = $(this);
				var $scroll = $(this).scrollTop();
			});
			$backTop.click(function() {
				$('body,html').animate({
					scrollTop: 0
				}, 50);
			});
			setTimeout(function(){$(".notLoggedIn-0").css("transform", "translateY(0px)");},100);
		}
		
	});
	//quanOrderNav2已使用链接
	$(".quanOrderNav2").click(function() {
        if(notLogin !="notLogin"){
        	setTimeout(function() {
    			mui.openWindow({
    				url: 'quanOrder.html?idstr=2',
    				id: 'quanOrder',
    				showType: 'zoom-fade-out',
    				showTime: 200
    			});
    		}, 200);
		}else{
			var $backTop = $('.quanOrderNav2');
			$window = $(window);
			$window.on('scroll', function() {
				var $this = $(this);
				var $scroll = $(this).scrollTop();
			});
			$backTop.click(function() {
				$('body,html').animate({
					scrollTop: 0
				}, 50);
			});
			setTimeout(function(){$(".notLoggedIn-0").css("transform", "translateY(0px)");},100);
		}
		
	});
	//quanOrderNav3已过期链接
	$(".quanOrderNav3").click(function() {
        if(notLogin !="notLogin"){
        	setTimeout(function() {
    			mui.openWindow({
    				url: 'quanOrder.html?idstr=3',
    				id: 'quanOrder',
    				showType: 'zoom-fade-out',
    				showTime: 200
    			});
    		}, 200);
		}else{
			var $backTop = $('.quanOrderNav3');
			$window = $(window);
			$window.on('scroll', function() {
				var $this = $(this);
				var $scroll = $(this).scrollTop();
			});
			$backTop.click(function() {
				$('body,html').animate({
					scrollTop: 0
				}, 50);
			});
			setTimeout(function(){$(".notLoggedIn-0").css("transform", "translateY(0px)");},100);
		}
		
	});
	//contribution1我的捐款
	$(".contribution1").click(function() {
        if(notLogin !="notLogin"){
        	setTimeout(function() {
    			mui.openWindow({
    				url: 'contribution_m.html',
    				id: 'contribution_m',
    				showType: 'zoom-fade-out',
    				showTime: 200
    			});
    		}, 200);
		}else{
			var $backTop = $('.contribution1');
			$window = $(window);
			$window.on('scroll', function() {
				var $this = $(this);
				var $scroll = $(this).scrollTop();
			});
			$backTop.click(function() {
				$('body,html').animate({
					scrollTop: 0
				}, 50);
			});
			setTimeout(function(){$(".notLoggedIn-0").css("transform", "translateY(0px)");},100);
		}
		
	});
	//中奖奖品
	$(".contribution2").click(function() {
        if(notLogin !="notLogin"){
        	setTimeout(function() {
    			mui.openWindow({
    				url: 'prize.html',
    				id: 'prize',
    				showType: 'zoom-fade-out',
    				showTime: 200
    			});
    		}, 500);
		}else{
			var $backTop = $('.contribution2');
			$window = $(window);
			$window.on('scroll', function() {
				var $this = $(this);
				var $scroll = $(this).scrollTop();
			});
			$backTop.click(function() {
				$('body,html').animate({
					scrollTop: 0
				}, 50);
			});
			setTimeout(function(){$(".notLoggedIn-0").css("transform", "translateY(0px)");},100);
		}
		
	});
	//myOrderLY我的收货地址
	$("#myOrderLY").click(function() {
        if(notLogin !="notLogin"){
        	setTimeout(function() {
    			mui.openWindow({
    				url: 'address.html',
    				id: 'address',
    				showType: 'zoom-fade-out',
    				showTime: 200
    			});
    		}, 200);
		}else{
			var $backTop = $('#myOrderLY');
			$window = $(window);
			$window.on('scroll', function() {
				var $this = $(this);
				var $scroll = $(this).scrollTop();
			});
			$backTop.click(function() {
				$('body,html').animate({
					scrollTop: 0
				}, 50);
			});
			setTimeout(function(){$(".notLoggedIn-0").css("transform", "translateY(0px)");},100);
		}
		
	});
	//problemBtn常见问题
	$(".problemBtn").click(function() {
        if(notLogin !="notLogin"){
        	setTimeout(function() {
    			mui.openWindow({
    				url: 'problem.html',
    				id: 'problem',
    				showType: 'zoom-fade-out',
    				showTime: 200
    			});
    		}, 200);
		}else{
			var $backTop = $('.problemBtn');
			$window = $(window);
			$window.on('scroll', function() {
				var $this = $(this);
				var $scroll = $(this).scrollTop();
			});
			$backTop.click(function() {
				$('body,html').animate({
					scrollTop: 0
				}, 50);
			});
			setTimeout(function(){$(".notLoggedIn-0").css("transform", "translateY(0px)");},100);
		}
		
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
	//单个大的搜索框点击得到焦点清空input的内容
	$(".text-clear-content").focus(function() {
		$(".clear-button22").hide();
		$(this).next(".clear-button22").show();
	 });
	 $(".clear-button22").click(function() {
		$(this).prev().val("");
		$(this).prev().focus(); 
	 	$(".clear-button22").hide();
	});
	
});