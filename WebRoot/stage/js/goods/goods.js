document.write("<script language=javascript src='../js/publicAddress.js'></script>");

/**
 * 获取单个商品
 * @param goodsId
 * @returns
 */
function getGoodsById(goodsId){
	var url = "goods/getGoodsById.do";
	var data = {
		id:goodsId
    };
	async = false;
	var result = ajaxSubmit(url, data, async);
	//console.log(result);
	return result;
}

/**
 * 获取推荐商品
 * @returns 列表集合，需要循环取出商品
 */
function getGoodsByTuijian(){
	var url = "goods/getGoodsByTuijian.do";
	var data = {
		
    };
	async = false;
	var result = ajaxSubmit(url, data, async);
	return result;
}

/**
 * 根据供应商ID查询商品
 * @param shopId 供应商ID
 * @returns 商品集合
 */
function getGoodsByShopId(shopId){
	var url = "goods/getGoodsByShopId.do";
	var data = {shopId:shopId};
	async = false;
	var result = ajaxSubmit(url, data, async);
	//console.log(result);
	return result;
}



