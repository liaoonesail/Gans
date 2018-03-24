//document.write("<script language=javascript src='../js/publicAddress.js'></script>");

/**
 * 修改个人资料
 * @param sex 性别
 * @param birthday 生日
 * @param area 城市
 * @param email 邮箱
 * @returns 成功返回 ok
 */
function updatePerson(nickName, sex, birthday, area, email){
	var url = "person/updatePerson.do";
	var data = {
			nickName:nickName,
			sex:sex,
			birthday:birthday,
			area:area,
			email:email
		};
	async = false;
	var result = ajaxSubmit(url, data, async);
	//console.log("我是修改个人资料的返回值"+result);
	return result;
}

