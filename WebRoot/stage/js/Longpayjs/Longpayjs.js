/**
 * 获取类别集合
 * @param response
 * @return
 * @throws IOException
 */
function typeList(){
	var url = "longpay/getTypeList.do";
	var data = {};
	async = false;
	var result = ajaxSubmit(url, data, async);
	//console.log("获取类别集合 "+result);
	return result;
}
/**
 * 根据类别Id获取龙支付商品集合
 * @param typeId
 * @param response
 * @return
 * @throws IOException
 */
function getByLongpayAllList(typeId){
	var url = "longpay/longpayList.do";
	var data = {typeId:typeId};
	async = false;
	var result = ajaxSubmit(url, data, async);
	//console.log("获取类别集合 "+result);
	return result;
}
/**
 * 根据龙支付Id获取龙支付活动详情
 * @param id
 * @param response
 * @return
 * @throws IOException
 */
function getLongpayId(Longpayid){
	var url = "longpay/getLongpayId.do";
	var data = {id:Longpayid};
	async = false;
	var result = ajaxSubmit(url, data, async);
	//console.log("获取类别集合 "+result);
	return result;
}
/**
 * 根据商品ID获取商品详情
 * @param goodsId
 * @param response
 * @return
 * @throws IOException
 */
function getGoodsByGoodsID(goodsId){
	var url = "longpay/getGoodsByGoodsID.do";
	var data = {goodsId:goodsId};
	async = false;
	var result = ajaxSubmit(url, data, async);
	//console.log("获取类别集合 "+result);
	return result;
}
/**
 * 根据板块获取广告图片集合
 * @param status 板块 A:首页;B:专场活动;C:专场活动首页;D:周周惠;E:商铺详情;F:生活服务;G:限时秒杀;H:海淘;I:11.虚拟卡券;J:团购;K:9.9特卖;L:休闲娱乐;M:美食;
 * @returns
 */
function getAdvertByStatus(status){
	var url = "advert/getAdvertByStatus.do";
	var data = {
		status:status
    };
	async = false;
	var result = ajaxSubmit(url, data, async);
	//console.log(result)
	return result;
}


