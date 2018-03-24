/*document.write("<script language=javascript src='../js'></script>");*/
/**
 * 获取所有地区
 * @returns
 */
function getArea(){
	var url = "area/getArea.do";
	var data = {};
	async = false;
	var result = ajaxSubmit(url, data, async);
	//alert(result);
	return result;
}

/**
 * 获取该区域所有商品
 * @param area 区域ID
 * @returns 商品集合
 */
function getAreaGoods(area){
	//alert(area)
	var url = "area/getAreaGoods.do";
	var data = {area:area};
	async = false;
	var result = ajaxSubmit(url, data, async);
	return result;
}

/**
 * 获取该区域所有供应商
 * @param area 区域ID
 * @returns 供应商集合
 */
function getAreaShop(area){
	var url = "area/getAreaShop.do";
	var data = {area:area};
	async = false;
	var result = ajaxSubmit(url, data, async);
	return result;
}

/**
 * 修改所选地区
 * @param area 地区ID
 * @returns 成功返回"ok"
 */
function changeArea(area){
	 //console.log(area);
	var url = "area/changeArea.do";
	var data = {area:area};
	async = false;
	var result = ajaxSubmit(url, data, async);
	return result;
}

/**
 * 获取用户所选区域
 * @returns 该区域对象
 */
function getCheckedArea(){
	var url = "area/getCheckedArea.do";
	var data = {};
	async = false;
	var result = ajaxSubmit(url, data, async);
	return result;
}

/**
 * 获取该区域的广告图片
 * @param area
 * @returns 图片集合
 */
function getAreaPic(area){
	var url = "area/getAreaPic.do";
	var data = {area:area};
	async = false;
	var result = ajaxSubmit(url, data, async);
	return result;
}