document.write("<script language=javascript src='../js/publicAddress.js'></script>");    
/**
 * 获取类别集合
 * @param response
 * @return
 * @throws IOException
 */
function typeList(part){
	var url = "performance/getTypeList.do";
	var data = {part:part};
	async = false;
	var result = ajaxSubmit(url, data, async);
	//console.log("获取类别集合 "+result);
	return result;
}
/**
 * 根据类别typeId和专场类型part 获取对应专场集合
 * @param typeId
 * @param part
 * @param response
 * @return
 * @throws IOException 
 */
function getBylifeserviceList(typeId,part,curpage){
	var url = "performance/performanceList.do";
	var data = {
		typeId:typeId,
		part:part,
		curpage:curpage
    };
	async = false;
	var result = ajaxSubmit(url, data, async);
	//console.log("根据类别typeId和专场类型part 获取对应专场集合"+result);
	return result;
}
/**
 * 根据专场Id获取专场详情
 * @param id
 * @param response
 * @return
 * @throws IOException
 */
function getlifeserviceListById(id){
	var url = "performance/getPerformanceId.do";
	var data = {
		id:id
    };
	async = false;
	var result = ajaxSubmit(url, data, async);
	//console.log("根据专场Id获取专场详情"+result);
	return result;
}
/**
 * 根据商品ID获取商品详情
 * @param goodsId
 * @param response
 * @return
 * @throws IOException
 */
function shopAlldetails(goodsId){
	var url = "performance/getGoodsByGoodsID.do";
	var data = {
		goodsId:goodsId
    };
	async = false;
	var result = ajaxSubmit(url, data, async);
	//console.log(" 根据商品ID获取商品详情"+result);
	return result;
}

//获取虚拟卡卷类别
function xuniTypeList(){
	var url = "type/xuniTypeList.do";
	var data = {};
	async = false;
	var result = ajaxSubmit(url, data, async);
	//console.log("获取类别集合 "+result);
	return result;
}







