document.write("<script language=javascript src='../js/publicAddress.js'></script>");

/**
 * 获取所有大类别
 * @returns
 */
function getAllLeibie(){
	var url = "leibie/getAllType.do";
	var data = {
		
    };
	async = false;
	var result = ajaxSubmit(url, data, async);
	return result;
}

/**
 * 获取所有二级分类
 * @returns
 */
function getAllLeibie2(){
	var url = "leibie/getAllType_next.do";
	var data = {
		
    };
	async = false;
	var result = ajaxSubmit(url, data, async);
	return result;
}

/**
 * 获取所有三级分类
 * @returns
 */
function getAllLeibie3(){
	var url = "leibie/getAllType_next_next.do";
	var data = {
		
    };
	async = false;
	var result = ajaxSubmit(url, data, async);
	return result;
}

/**
 * 根据大类ID获取所有二级分类
 * @param superId
 * @returns
 */
function getLeibie2ByLeibie(superId){
	var url = "leibie/getType2ByType.do";
	var data = {
		superId:superId
    };
	async = false;
	var result = ajaxSubmit(url, data, async);
	return result;
}

/**
 * 根据二级类ID获取所有三级分类
 * @param superId
 * @returns
 */
function getLeibie3ByLeibie2(superId){
	var url = "leibie/getLeibie3ByLeibie2.do";
	var data = {
		superId:superId
    };
	async = false;
	var result = ajaxSubmit(url, data, async);
	return result;
}

/**
 * 根据大类ID获取所有三级分类
 * @param superId
 * @returns
 */
function getLeibie3ByLeibie(superId){
	var url = "leibie/getType3ByType.do";
	var data = {
		superId:superId
    };
	async = false;
	var result = ajaxSubmit(url, data, async);
	return result;
}