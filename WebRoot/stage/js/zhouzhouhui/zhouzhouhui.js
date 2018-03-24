document.write("<script language=javascript src='../js/publicAddress.js'></script>");

/**
 * 获取本月周数对象
 * @returns 获取5个周的数据
 */
function getWeek(){
	var url = "weeks/getWeek.do";
	var data = {};
	async = false;
	var result = ajaxSubmit(url, data, async);
	return result;
}

/**
 * 获取对应周的商品数据
 * @param week 第几周 数字 总共5周
 * @returns 商品集合列表
 */
function getWeekData(week){
	var url = "weeks/getWeekData.do";
	var data = {week:week};
	async = false;
	var result = ajaxSubmit(url, data, async);
	return result;
}