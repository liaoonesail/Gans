//秒杀时间段切换
/*
     * ajax 函数，处理 ajax 请求
     * @param function callback 回调函数
     * @因为要和服务器交互，所以必须在服务器环境运行，不能在硬盘上直接打开
    */
var nowdt =null;
    function ajax(callback){
        if(typeof callback!='function') return;
        var ajaxObject;
        try{
            ajaxObject=new XMLHttpRequest();
        }catch(e){
            try{
                ajaxObject=new ActiveXObject('Microsoft.XMLHTTP');
            }catch(e){
            }
        }
        if(!ajaxObject) return;
        if(ajaxObject.overrideMimeType){
            ajaxObject.overrideMimeType('text/html');
        }
        //location.href可以换成其他url，但必须是同一个站点的链接，并且文件存在
        ajaxObject.open('get',location.href);
        ajaxObject.send(null);
        ajaxObject.onreadystatechange=function(){
            if(ajaxObject.readyState==4){
                if(ajaxObject.status==200){
                    callback(ajaxObject);
                }
            }
        };
    }
//获取服务器端的时间
    /*
     * 获取时间并动态刷新
    */
    function getTime(){
        ajax(
            function(ao){
                //只需要AJAX一次，将服务器时间获取后以毫米为单位保存到一个变量中
                _timestamp=Date.parse(ao.getResponseHeader('Date'));
                _timestamp=_timestamp.toString().match(/^\d$/)?_timestamp:new Date().getTime();
                //设置定时器每过一秒动态刷新一次时间
                setInterval(
                    function(){
                        //这里可以自定义时间显示格式
                        nowdt =new Date(_timestamp);
                      // console.log(nowdt);
                        _timestamp+=1000;
                    },
                    1000
                );
            }
        );
   } 
window.onload=getTime;
var resultScreeningsStartTime = ""; //倒计时开始时间
var resultScreeningsEndTime = ""; //倒计时结束时间
var startTime = ""; //开始时间
var endTime = ""; //结束时间
var startTime_1 ="";
var endTime_1 ="";
var screenings = 0; //对应秒杀的时间段
var getTimeseckill_ =getTimeseckill();
getTimeseckill_ = JSON.parse(getTimeseckill_);
$("#ListNavService").empty();
var ListNavServiceTimeHtml_ ="";
var staroknot_="";
var miaoshazhong="";
var miaoshazhong2="";
headerTime_();
function   headerTime_(){
	
for(var i = 0 ; i < getTimeseckill_.length ; i++){
	startTime =getTimeseckill_[i].startTime.split(' ');
	endTime =getTimeseckill_[i].endTime.split(' ');
	startTime_1 =getTimeseckill_[i].startTime;
	endTime_1 =getTimeseckill_[i].endTime;
	var miaosha_star ="";
	var m1="";
 	var m2 ="";
 	var datali ="";
	var endtime_end=getTimeseckill_[i].endTime;//商品截止时间
	var startTime_star=getTimeseckill_[i].startTime;//商品开始时间
 	var systemtime_next = getNowFormatDate();//当前时间
 	//当前时间
 	systemtime_next=systemtime_next.replace("-", "").replace(" ", "").replace(":", "").replace("-", "").replace(":", "");
 	//商品截止时间
 	endtime_end=endtime_end.replace("-", "").replace(" ", "").replace(":", "").replace("-", "").replace(":", "");
 	//商品开始时间
 	startTime_star =startTime_star.replace("-", "").replace(" ", "").replace(":", "").replace("-", "").replace(":", "");
 	console.log(systemtime_next)
 	console.log(startTime_star)
	console.log(endtime_end)
    m1 =systemtime_next-startTime_star;
    m2 =systemtime_next-endtime_end;
 	console.log(m1)
	console.log(m2)
	if(m1 <0 && m2 <0) {
		miaosha_star ="即将开始"
			   datali = "not"
	}else if(m1 >0 &&  m2 <0){
		miaosha_star ="秒杀中"
					datali = "ok"
	}else{
		miaosha_star ="活动结束"
					   datali = "not"
	}
 
	ListNavServiceTimeHtml_ +="<li data-li='"+datali+"' class='staroK' startTime='"+startTime[1]+"' endTime='"+endTime[1]+"' resultScreeningsStartTime='"+getTimeseckill_[i].startTime+"' resultScreeningsEndTime='"+getTimeseckill_[i].endTime+"'>"
							    +"<input type='hidden' value='"+getTimeseckill_[i].startTime+"' />"
							    +"<input type='hidden' value='"+getTimeseckill_[i].endTime+"' />"
								+"<span class='starokTiem_a'>"+startTime[1]+"</span>"
							     +"<p>"+miaosha_star+"</p>"
							+"</li>";
}
$("#ListNavService").append(ListNavServiceTimeHtml_);
//获取默认的第一个秒杀时间段商品和时间
var data_li =$("ul#ListNavService li");
$("[data-li]").each(function () { 
	var mmm =$(this).attr("data-li");
	console.log(mmm); 
	//$("ul#ListNavService  li").removeClass("ontopOk"); //siblings是循环遍历
	if($(this).attr("data-li") =="ok"){
		console.log($(this).attr("starttime"));
		console.log($(this).attr("endtime"));
		console.log("秒杀时间中1258585"); 
		$(this).addClass("ontopOk"); //点击对应切换秒杀的时间段
		getBymiaoshaListAll($(this).attr("starttime"), $(this).attr("endtime")); //获取对应时间段秒杀商品集合
	}
}); 
//点击切换秒杀场次
$("ul#ListNavService li").click(function() {
	$("ul#ListNavService  li").removeClass("ontopOk"); //siblings是循环遍历
	$(this).addClass("ontopOk"); //点击对应切换秒杀的时间段
	var misoshanindex_ = $(this).index(); //得到秒杀切换对应的下标，下标从0开始
	if(misoshanindex_ == 0) { //开始时间08:00:00  结束时间10:00:00
		startTime = $(this).attr("startTime");
		endTime   =$(this).attr("endTime");
		getBymiaoshaListAll(startTime, endTime); //获取对应时间段秒杀商品集合
		starttimer();
	} else if(misoshanindex_ == 1) { //开始时间10:00:00  结束时间12:00:00
		startTime = $(this).attr("startTime");
		endTime   =$(this).attr("endTime");
		getBymiaoshaListAll(startTime, endTime); //获取对应时间段秒杀商品集合
		starttimer();
	} else if(misoshanindex_ == 2) { //开始时间12:00:00  结束时间14:00:00
		startTime = $(this).attr("startTime");
		endTime   =$(this).attr("endTime");
		getBymiaoshaListAll(startTime, endTime); //获取对应时间段秒杀商品集合
		starttimer();
	} else if(misoshanindex_ == 3) { //开始时间14:00:00  结束时间16:00:00
		startTime = $(this).attr("startTime");
		endTime   =$(this).attr("endTime");
		getBymiaoshaListAll(startTime, endTime); //获取对应时间段秒杀商品集合
		starttimer();
	} else if(misoshanindex_ == 4) { //开始时间16:00:00  结束时间18:00:00
		startTime = $(this).attr("startTime");
		endTime   =$(this).attr("endTime");
		getBymiaoshaListAll(startTime, endTime); //获取对应时间段秒杀商品集合
		starttimer();
	} else if(misoshanindex_ == 5) { //开始时间18:00:00  结束时间20:00:00
		startTime = $(this).attr("startTime");
		endTime   =$(this).attr("endTime");
		getBymiaoshaListAll(startTime, endTime); //获取对应时间段秒杀商品集合
		starttimer();
	} else if(misoshanindex_ == 6) { //开始时间20:00:00  结束时间22:00:00
		startTime = $(this).attr("startTime");
		endTime   =$(this).attr("endTime");
		console.log(startTime)
		console.log(endTime)
		getBymiaoshaListAll(startTime, endTime); //获取对应时间段秒杀商品集合
		starttimer();
	} else if(misoshanindex_ == 7) { //开始时间22:00:00  结束时间00:00:00
		startTime = $(this).attr("startTime");
		endTime   =$(this).attr("endTime");
		getBymiaoshaListAll(startTime, endTime); //获取对应时间段秒杀商品集合
		starttimer();
	} else if(misoshanindex_ == 8) { //开始时间00:00:00  结束时间02:00:00
		startTime = $(this).attr("startTime");
		endTime   =$(this).attr("endTime");
		getBymiaoshaListAll(startTime, endTime); //获取对应时间段秒杀商品集合
		starttimer();
	} else if(misoshanindex_ == 9) { //开始时间02:00:00  结束时间04:00:00
		startTime = $(this).attr("startTime");
		endTime   =$(this).attr("endTime");
		getBymiaoshaListAll(startTime, endTime); //获取对应时间段秒杀商品集合
		starttimer();
	} else if(misoshanindex_ == 10) { //开始时间04:00:00  结束时间06:00:00
		startTime = $(this).attr("startTime");
		endTime   =$(this).attr("endTime");
		getBymiaoshaListAll(startTime, endTime); //获取对应时间段秒杀商品集合
		starttimer();
	} else if(misoshanindex_ == 11) { //开始时间06:00:00  结束时间08:00:00
		startTime = $(this).attr("startTime");
		endTime   =$(this).attr("endTime");
		getBymiaoshaListAll(startTime, endTime); //获取对应时间段秒杀商品集合
		starttimer();
	}
});

}
starttimer();
//秒杀函数调用
var timer,timer2;
function starttimer() {
	clearInterval(timer)
	//定时器，每隔一秒获取一次
	timer = window.setInterval(showTime, 1000);
}
var getBymiaoshaAllList_;
/**
 * 获取秒杀商品集合
 * @param startTime 开始时间
 * @param endTime   结束时间
 * @param response
 * @return
 * @throws IOException
 */
function getBymiaoshaListAll(startTime, endTime) {
	$("#miaoshaHtmlConts_List").empty();
	var miaoshaHtml_ ="";
	getBymiaoshaAllList_ = getBymiaoshaAllList(startTime, endTime);
	console.log("获取对应时间段秒杀商品集合" + getBymiaoshaAllList_)
	getBymiaoshaAllList_ = JSON.parse(getBymiaoshaAllList_);
	for(var i = 0; i < getBymiaoshaAllList_.length; i++) {
		resultScreeningsStartTime = getBymiaoshaAllList_[i].start_time; //倒计时开始时间
		resultScreeningsEndTime = getBymiaoshaAllList_[i].end_time; //倒计时结束时间
		/*console.log(resultScreeningsStartTime);
		console.log(resultScreeningsEndTime);*/
		/**
		 * 根据商品ID获取商品详情
		 * @param goodsId
		 * @param response
		 * @return
		 * @throws IOException
		 */
		var getmiaoshaIdsByGoodsID_ =getmiaoshaIdsByGoodsID(getBymiaoshaAllList_[i].goods_id);
		console.log(getmiaoshaIdsByGoodsID_)
		getmiaoshaIdsByGoodsID_ = JSON.parse(getmiaoshaIdsByGoodsID_);
		
		var endtime=getBymiaoshaAllList_[i].end_time;//商品截止时间
		var startTime=getBymiaoshaAllList_[i].start_time;//商品开始时间
	 	var systemtime = getNowFormatDate();//当前时间
	 	systemtime=systemtime.replace("-", "").replace(" ", "").replace(":", "").replace("-", "").replace(":", "");
	 	endtime=endtime.replace("-", "").replace(" ", "").replace(":", "").replace("-", "").replace(":", "");
	 	startTime =startTime.replace("-", "").replace(" ", "").replace(":", "").replace("-", "").replace(":", "");
		var m1 =systemtime-startTime;
		var m2 =systemtime-endtime;
	 	console.log(startTime)
		console.log(endtime)
		console.log(systemtime)
		console.log(m1)
		console.log(m2)
	 if(m1 >0 &&  m2 <0){
			price=getBymiaoshaAllList_[i].real_price;
		}
		else{
			price=getmiaoshaIdsByGoodsID_.price
		}
		miaoshaHtml_ +="<div class='mui-row cladssImg'>"
							+"<div class='mui-col-xs-4'>"
							+"<img src='"+getmiaoshaIdsByGoodsID_.picture_address+"' />"
						+"</div>"
						+"<div class='mui-col-xs-8'>"
							+"<p>"+getmiaoshaIdsByGoodsID_.goods_describe+"</p>"
							+"<p>"+getmiaoshaIdsByGoodsID_.goods_name+"</p>"
							+"<p class='mui-pull-left clearfix'>"
									+"<span>￥"+price+"元</span>"
								+"<del>￥"+getmiaoshaIdsByGoodsID_.cost_price+"元</del>"
							+"</p>"
							+"<div class='wohISThisRight'>"
								+"<button onclick=\"miaoshaindex('"+getBymiaoshaAllList_[i].goods_id+"','-2')\">去秒杀</button>"
							+"</div>"
							+"<div class='clearfix'></div>"
							+"<div class='wohISThis clearfix'>"
								+"<div class='wohISThisLeft'>"
									+"<div  class='qiandaoL'>"
										+"<div style='width: "+getBymiaoshaAllList_[i].percent+";' class='lanlan'>"+getBymiaoshaAllList_[i].percent+"</div>"
									+"</div>"
								+"</div>"
							+"</div>"
						+"</div>"
					+" </div>";
	}
	
	$("#miaoshaHtmlConts_List").append(miaoshaHtml_);
	 
}
var url_ ="";
function miaoshaindex(shopId_,part){
	var part =part;
	if(part == -2){
    	url_ ='details.html?id='+shopId_+'&part='+part;
	}
	setTimeout(function(){
		mui.openWindow({
			url: url_,
			id: 'details',
			showType: 'zoom-fade-out',
			showTime: 200
		});
	},200);
}
//秒杀秒杀函数
var dt2=null;
function showTime() {
	//console.log(resultScreeningsStartTime);
	nowdt =nowdt;
//	console.log(nowdt);
	if(nowdt != null){
		//console.log(nowdt);
		var nowInt = nowdt.getTime();
		//-获取当前时间（这个是客户端的时间）
		//console.log(nowInt);
		if(getBymiaoshaAllList_ != null) {
			if(resultScreeningsStartTime != "" && resultScreeningsEndTime != "") {
				//获取秒杀的开始时间
				 dt2 = new Date(resultScreeningsStartTime.replace(/-/g, "/"));
				if(dt2 < nowdt) {
					//获取秒杀结束时间
					var dt = new Date(resultScreeningsEndTime.replace(/-/g, "/"));
					if(dt < nowdt){
						$("#miaoshaTiemContstar").html("秒杀结束");
						//$("#ListNavService li p").html("活动结束")
					}else{				
						$("#miaoshaTiemContstar").html(getTimerString(dt.getTime() - nowInt));
						//$("#ListNavService li p").html("秒杀中")
					}
				} else {
					$("#miaoshaTiemContstar").html(getTimerString2(dt2.getTime() - nowInt));
					//$("#ListNavService li p").html("即将开始")
				}
			}
		}
	}
	
	
}

//开始时间函数
function getTimerString2(time2) {
	//time2开始时间的时间戳
	//天
	d = Math.floor(time2 / 86400000),
		//时
		h = Math.floor((time2 % 86400000) / 3600000),
		//分
		m = Math.floor(((time2 % 86400000) % 3600000) / 60000),
		//秒
		s = Math.floor(((time2 % 86400000) % 3600000 % 60000) / 1000);
	if(time2 > 0) {
		return "距离本场开始：" + p(h) + ":" + p(m) + ":" + p(s);
	} else {
		return "starTimeEnd";
	}
};
//结束时间函数
function getTimerString(time) {
	//time结束时间的时间戳
	//天
	d = Math.floor(time / 86400000),
		//时
		h = Math.floor((time % 86400000) / 3600000),
		//分
		m = Math.floor(((time % 86400000) % 3600000) / 60000),
		//秒
		s = Math.floor(((time % 86400000) % 3600000 % 60000) / 1000);
	if(time > 0) {
		return "距离本场结束：" + p(h) + ":" + p(m) + ":" + p(s);
	} else {
		return "endTimeEnd";
	}
};
//时间不足二位补0
function p(s) {
	return s < 10 ? '0' + s : s;
};
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
    var hourDate = date.getHours();
    var minDate =date.getMinutes();
    var seconds=date.getSeconds();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
   if(hourDate<10){
    	hourDate="0"+hourDate;
   }
   if(minDate<10){
   		minDate="0"+minDate;
   }
    if(seconds<10){
    	seconds="0"+seconds;
    }
    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
            + " " + hourDate + seperator2 + minDate
            + seperator2 + seconds;
    return currentdate;
}