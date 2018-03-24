document.write("<script language=javascript src='../js/publicAddress.js'></script>");

/**
 * 通过供应商ID获取供应商详情
 * @param shopId 供应商ID
 * @returns 供应商对象
 */
function getShopById(shopId){
	var url = "shop/getShopById.do";
	var data = {id:shopId};
	async = false;
	var result = ajaxSubmit(url, data, async);
	return result;
}