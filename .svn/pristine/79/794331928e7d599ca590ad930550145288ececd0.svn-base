//项目地址
var pubAddress = "/Gans/";

/**
 * 异步上传公共方法
 * @param url    访问地址
 * @param data   访问参数
 * @param async  是否同步 true:异步 false:同步
 * @returns      返回接口通知数据
 */
function ajaxSubmit(url, data, async){
	var result = "";
	$.ajax({
        type: "POST",
        url: pubAddress + url,
        data: data,
        cache:false,  
		dataType:'html',
		async:async,
		complete: function(data){
        	result= data;
        }
    });
	return result;
}
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
	async = true;
	var result = ajaxSubmit(url, data, async);
	console.log(result);
	return result;
}
var getGoodsById_ =getGoodsById(3);