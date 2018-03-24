/**
	 * 获取秒杀商品集合
	 * @param startTime 开始时间
	 * @param endTime   结束时间
	 * @param response
	 * @return
	 * @throws IOException
	 */
function getBymiaoshaAllList(startTime,endTime){
	var url = "miaosha/miaoshaList.do";
	var data = {
			startTime:startTime,
			endTime:endTime
    };
	async = false;
	var result = ajaxSubmit(url, data, async);
	//console.log("获取秒杀商品集合"+result);
	return result;
}
/**
 *根据秒杀ID获取秒杀详情  
 *里面包含 goods_id
 * @param id
 * @param response
 * @return
 * @throws IOException
 */
function getBymiaoshaIdDetails(miaoshaId){
	var url = "miaosha/getMiaoshaId.do";
	var data = {
			id:miaoshaId
    };
	async = false;
	var result = ajaxSubmit(url, data, async);
	//console.log("根据秒杀ID获取秒杀详情"+result);
	return result;
}
/**
 * 根据商品ID获取商品详情
 * @param goodsId
 * @param response
 * @return
 * @throws IOException
 */
function getmiaoshaIdsByGoodsID(goodsId){
	var url = "miaosha/getGoodsByGoodsID.do";
	var data = {
		goodsId:goodsId
    };
	async = false;
	var result = ajaxSubmit(url, data, async);
	//console.log("根据商品ID获取商品详情"+result);
	return result;
}
/**
 * 获取秒杀时间段集合
 * @return
 * @throws IOException 
 */
function getTimeseckill(){
	var url = "miaosha/dayList.do";
	var data = {};
	async = false;
	var result = ajaxSubmit(url, data, async);
	//console.log("获取秒杀时间段集合"+result);
	return result;
}