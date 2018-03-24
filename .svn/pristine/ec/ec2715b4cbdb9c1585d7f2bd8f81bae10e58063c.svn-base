//document.write("<script language=javascript src='../js/publicAddress.js'></script>");

/**
 * 获取所有文章集合
 * @returns
 */
function getAllArticle(){
	var url = "article/getAllArticle.do";
	var data = {
		
    };
	async = false;
	var result = ajaxSubmit(url, data, async);
	return result;
}

/**
 * 根据ID获取单个文章
 * @param id
 * @returns
 */
function getArticleById(id){
	var url = "article/getArticleById.do";
	var data = {
		id:id
    };
	async = false;
	var result = ajaxSubmit(url, data, async);
	return result;
}