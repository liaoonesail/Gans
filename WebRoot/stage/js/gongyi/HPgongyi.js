//document.write("<script language=javascript src='../js/publicAddress.js'></script>");

/**
 * 提交抽奖检查
 * @param phone 电话号码
 * @param price 捐款金额
 * @returns 允许本次捐款返回 捐款订单ID(为全数字),否则返回对应错误信息(带中文数据)
 */
function juankuan(phone, price){
	var HPurl=null;
	var url = "gongyi/juankuan.do";
	var data = {
		phone:phone,
		price:price
    };
	async = false;
	var result = ajaxSubmit(url, data, async);
if(!isNaN(result)){
		$.post(
		"HPgongyi/h5pay.do",
		{"orderId":result},
		function(data){
			$.each(data,function(index,obj) {
				window.location.href=obj.url;
		       });
		},
		"json"
		);
	}else{
		return result;
	}
}
//抽奖次数检测
function jiance(phone){
	var url ="gongyi/kejuankuan.do";
	var data = {phone:phone};
	async = false;
	var result = ajaxSubmit(url, data, async);
	//console.log(result);
	return result;
}
//获取抽奖集合List
function choujiangList(){
	var url ="gongyi/showAllPrize.do";
	var data = {};
	async = false;
	var result = ajaxSubmit(url, data, async);
	//console.log(result);
	return result;
}
//捐款总额  没有参数
function juankuaAll(){
	var url ="gongyi/showAllJuankuan.do";
	var data = {};
	async = false;
	var result = ajaxSubmit(url, data, async);
	//console.log(result);
	return result;
}
// 个人捐款记录 参数：phone    返回捐款集合  参考weiorder
function personalcenter(phone){
	var url ="gongyi/showAllByPhone.do";
	var data = {phone:phone};
	async = false;
	var result = ajaxSubmit(url, data, async);
	//console.log(result);
	return result;
}
/**
 * 根据用户ID获取中奖list
 * @param userId
 * @param response
 * @return
 * @throws IOException 
 */
function userIdPrize(userId){
	var url ="userPrize/listByUserId.do";
	var data = {userId:userId};
	async = false;
	var result = ajaxSubmit(url, data, async);
	//console.log(result);
	return result;
}
/*添加中奖信息*/
function  addLuckOk(prizeId,userId,orderNum){
	var url ="userPrize/add.do";
	var data = {prizeId:prizeId,userId:userId,orderNum:orderNum};
	async = false;
	var result = ajaxSubmit(url, data, async);
	//console.log(result);
	return result;
}


