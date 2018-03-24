document.write("<script language=javascript src='../js/publicAddress.js'></script>");
/**
 * 轮播图集合（one_lb,zzh_lb,long_lb,sr_lb,dfh_lb）(首页轮播、周周惠轮播、龙支付轮播、善融轮播、地方汇轮播)
 * @param location
 * @param response
 * @return
 * @throws IOException 
 */
function getAdvertByStatus(location){
	var url = "advert/lbList.do";
	var data = {
			location:location
    };
	async = false;
	var result = ajaxSubmit(url, data, async);
	//console.log(result)
	return result;
}
/**
 * 根据位置获取单个图片
 * @param location
 * @param response
 * @return
 * @throws IOException 
 */
function getOnePic(location){
	var url = "advert/getOne.do";
	var data = {
			location:location
    };
	async = false;
	var result = ajaxSubmit(url, data, async);
	//console.log(result)
	return result;
}