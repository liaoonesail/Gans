/**
* 获取往期爱心集合
* @param response
* @return
* @throws IOException
*/
function  pageType(){
	var url ="pageParameter/listParameter.do";
	var data = {};
	async = false;
	var result = ajaxSubmit(url, data, async);
	//console.log(result);
	return result;
}
/**
 *根据往期爱心ID获取单个详情对象
 * @param id
 * @param response
 * @return
 * @throws IOException
 */
function picRightId(id){
	var url ="pageParameter/getid.do";
	var data = {id:id};
	async = false;
	var result = ajaxSubmit(url, data, async);
	//console.log(result);
	return result;
}