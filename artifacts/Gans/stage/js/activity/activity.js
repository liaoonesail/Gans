/*document.write("<script language=javascript src='../js/publicAddress.js'></script>");*/

/**
 * 根据商品ID获取周周惠活动详情
 * @param goodsId 商品ID
 * @returns 活动详情对象
 */
function getActivityByGoods(goodsId){
	var url = "activity/getActivityByGoods.do";
	var data = {
		goodsId:goodsId
    };
	async = false;
	var result = ajaxSubmit(url, data, async);
	return result;
}
/**
 * 根据商品Id获取团购活动详情
 * @param goodsId
 * @param response
 * @return
 * @throws IOException 
 */
function getTuangouByGoodsId(goodsId){
	var url = "tuangou/getTuangouByGoodsId.do";
	var data = {
		goodsId:goodsId
    };
	async = false;
	var result = ajaxSubmit(url, data, async);
	return result;
}
/**
 * 根据商品Id和 专场类型part 获取专场详情
 * @param goodsId
 * @param part
 * @param response
 * @return
 * @throws IOException 
 */
function getlifeserviceByGoodsId(goodsId,part){
	var url = "performance/getByGoodsId.do";
	var data = {
		goodsId:goodsId,
		part:part
    };
	async = false;
	var result = ajaxSubmit(url, data, async);
	//console.log("根据商品Id和 专场类型part 获取专场详情"+result);
	return result;
}
/**
 * 根据商品Id 获取秒杀活动详情
 * @param goodsId
 * @param response
 * @return
 * @throws IOException
 */
function getseckillByGoodsId(goodsId){
	var url = "miaosha/getMiaoshaByGoodsId.do";
	var data = {
		goodsId:goodsId
    };
	async = false;
	var result = ajaxSubmit(url, data, async);
	//console.log("根据商品Id和 专场类型part 获取专场详情"+result);
	return result;
}
/**
 * 根据商品ID获取龙支付活详情
 * @param goodsId
 * @param response
 * @return
 * @throws IOException
 */
function getLongpayhuodongByGoodsId(goodsId){
	var url = "longpay/getLongpayByGoodsId.do";
	var data = {goodsId:goodsId};
	async = false;
	var result = ajaxSubmit(url, data, async);
	//console.log("获取类别集合 "+result);
	return result;
}