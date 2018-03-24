document.write("<script language=javascript src='../js/publicAddress.js'></script>");

/**
 * 添加商品评价
 * @param goodsId 商品ID
 * @param xingji  星级
 * @param content 评价内容
 * @returns       成功返回"ok" 失败返回对应失败信息
 */
function addComment(goodsId, xingji, content){
	var url = "comment/addComment.do";
	var data = {
		goodsId:goodsId,
		xingji:xingji,
		content:content
    };
	async = false;
	var result = ajaxSubmit(url, data, async);
	return result;
}

/**
 * 通过商品ID获取该商品的所有评价
 * @param goodsId 商品Id
 * @returns 评价集合json字符串
 */
function getCommentByGoodsId(goodsId){
	var url = "comment/getCommentByGoodsId.do";
	var data = {
		goodsId:goodsId
    };
	async = false;
	var result = ajaxSubmit(url, data, async);
	//console.log(result)
	return result;
}