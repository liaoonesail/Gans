document.write("<script language=javascript src='../js/publicAddress.js'></script>");
document.write("<script language=javascript src='../js/userjs/user.js'></script>");

/**
 * 添加订单
 * @param goodsId
 * @returns 成功则返回订单ID
 */
function addOrder(goodsId,typeorder,num){
		num=1;
		orderId=0;
		var result=limitPay(goodsId,num,orderId);
		if(result=="true"){
			var url = "order/createOrder.do";
			var data = {
				goodsId:goodsId,
				type:typeorder
		    };
			async = false;
			var result = ajaxSubmit(url, data, async);
			//console.log(result);
			//console.log("没超出限购数量哟！");
			return result;
		}else{
			alert("您购买此商品的总数量已达上限！");
		}
}
/**
 * 判断是否购买数量上限
 * @param goodsId
 * @param num
 * @returns
 */
function limitPay(goodsId,num,orderId){
	var user=getUserByLogin();
	user=JSON.parse(user);
	var result=false;
	$.ajax({
		url:'../../order/limitPay.do',
		data:{"userId":user.id,"goodsId":goodsId,"amount":num,"orderId":orderId},
		type:'post',
		async:false,
		success:function(data){
			result=data;
		}
	})
	return result;
}

/**
 * 获取单个订单
 * @param id
 * @returns 成功返回订单对象
 */
function getOrderById(id){
	var url = "order/getOrderById.do";
	var data = {
		id:id
    };
	async = false;
	var result = ajaxSubmit(url, data, async);
	//console.log(result)
	return result;
}

/**
 * 获取登陆用户对应状态的订单个数
 * @param status 0:待付款 1：待发货 2：待收货 3：待评价
 * @returns 订单数量
 */
function getOrderByUserAndStatusNum(status){
	var url = "order/getOrderByUserAndStatusNum.do";
	var data = {
		status:status
    };
	async = false;
	var result = ajaxSubmit(url, data, async);
	return result;
}

/**
 * 获取登陆用户对应状态的订单集合
 * @param status -1:所有 0:待付款 1：待发货 2：待退款 3:待收货 5：已收货
 * @returns 订单集合
 */
function getOrderByUserAndStatus(status){
	var url = "order/getOrderByUserAndStatus.do";
	var data = {
		status:status
    };
	async = false;
	var result = ajaxSubmit(url, data, async);
	return result;
}

/**
 * 删除订单
 * @param orderId
 * @returns 删除成功返回 ok,其余直接返回错误信息
 */
function deleteOrder(orderId){
	var url = "order/deleteOrder.do";
	var data = {
		orderId:orderId
    };
	async = false;
	var result = ajaxSubmit(url, data, async);
	return result;
}

/**
 * 申请退款
 * @param orderId
 * @returns 申请成功返回 "ok" 其余直接返回错误信息
 */
function tuikuan(orderId){
	var url = "order/tuikuan.do";
	var data = {
		orderId:orderId
    };
	async = false;
	var result = ajaxSubmit(url, data, async);
	return result;
}

/**
 * 修改订单为已收货或者关闭状态
 * @param orderId 订单ID
 * @param status 要修改的状态 4为关闭，5为已收货
 * @returns 成功返回"ok" ,失败返回对应的错误详情信息
 */
function updateOrderStatus(typeorder,orderId,status){
	var url = "order/updateOrderStatus.do";
	var data = {type:typeorder,orderId:orderId,status:status};
	async = false;
	var result = ajaxSubmit(url, data, async);
	return result;
}

/**
 * 修改订单数量
 * @param orderId 订单ID
 * @param num 商品数量
 * @returns 成功返回"ok" ,失败返回对应的错误详情信息
 */
var realnum=0;
function updateOrderNum(ordertype,orderId, num){
	var order=getOrderById(orderId);
	order=JSON.parse(order);
	var x=limitPay(order.goods_id,num,orderId);
	if(x=="true"){
		var url = "order/updateOrderNum.do";
		var data = {
			type:ordertype,
			orderId:orderId,
			num:num
	    };
		$(".inp").text(num);
		realnum=num;
		async = false;
		var result = ajaxSubmit(url, data, async);
		return result;
	}else{
		$(".inp").text(realnum);
		allRMB();
	}
}
