
/**
 * 显示所有常见问题
 * @param name 搜索问题名称
 * @returns 常见问题JSON字符串的集合
 */
function showProblemsByAll(name){
	var url = "problems/showProblemsByAll.do";
	var data = {
			name:name
		};
	async = false;
	var result = ajaxSubmit(url, data, async);
	return result;
}

/**
 * 通过ID查询单个常见问题
 * @param id
 * @returns 单个常见问题的JSON对象的字符串
 */
function showProblemById(id){
	var url = "problems/showProblemById.do";
	var data = {
			id:id
		};
	async = false;
	var result = ajaxSubmit(url, data, async);
	return result;
}