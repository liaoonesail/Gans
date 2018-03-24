//项目地址
var pubAddress = "/Gans/";
function  Ajax(type,url,data,dataType){
	Ajax.ajax({
		type: type,
		url: url,
		data: data,
		dataType: dataType,
		success: function(data){
		//	console.log(data);
		}
	});
}
/*function Ajax(type, url, async, cache, data, dataType) {
	var result="";
		$.ajax({
				type: type, //数据提交方式 post get
				url: pubAddress + url, //提交接口地址url
				async: async,
				   
					* 1.当async: true 时，ajax请求是异步的。但是其中有个问题：方法中的ajax请求和其后面的操作是异步执行的，那么当该方法还未执行完，就可能已经执行了 ajax请求后面的操作，
					数据是在ajax请求success后才赋值的，结果，输出时会为空。
					* 2.当async:false时为同步，该方法中的Ajax请求将整个浏览器锁死，只有执行结束后，才可以执行其它操作。
					
				cache: cache, //true的话会读缓存，可能真的到服务器上。
					//假如上次访问了a.html，第二次的时候得到的是上次访问的a.html的结果，而不是重新到服务器获取。
					//false的话会在url后面加一个时间缀，让它跑到服务器获取结果。
					//cache只有GET方式的时候有效。
				data: data, //提交的数据
				dataType: dataType, //服务器返回的数据类型 1."xml": 返回 XML 文档，可用 jQuery 处理
					//2."html": 返回纯文本 HTML 信息；包含的 script 标签会在插入 dom 时执行。
					//3."script": 返回纯文本 JavaScript 代码。不会自动缓存结果。除非设置了 "cache" 参数。注意：在远程请求时(不在同一个域下)，所有 POST 请求都将转为 GET 请求。（因为将使用 DOM 的 script标签来加载）
					//4."json": 返回 JSON 数据 。
					//5."jsonp": JSONP 格式。使用 JSONP 形式调用函数时，如 "myurl?callback=?" jQuery 将自动替换 ? 为正确的函数名，以执行回调函数。
					//6."text": 返回纯文本字符串
				success:function(data){
					result =data;
				}
		});
		return result;
}*/
/**
 * 获取单个商品
 * @param goodsId
 * @returns
 */
function getGoodsById(goodsId){
	var type ="get";
	var url = "goods/getGoodsById.do";
	var data = {
		id:goodsId
    };
	var dataType ="html";
	var result = Ajax(type,url,data,dataType);//ajax
	//console.log(result);
	return result;
}
var getGoodsById_ =getGoodsById(3);