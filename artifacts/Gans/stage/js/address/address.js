document.write("<script language=javascript src='../js/publicAddress2.js'></script>");

/**
 * 添加地址
 * @param realName 姓名
 * @param phone    电话
 * @param area     三级区域
 * @param address  详细地址
 * @returns
 */
function addAddress(realName, phone, area, address){
	var url = "address/addAddress.do";
	var data = {realName:realName,phone:phone,area:area,address:address};
	async = false;
	var result = ajaxSubmit(url, data, async);
//	console.log(data);
	//console.log(result);
	return result;
}

/**
 * 修改地址
 * @param realName 姓名
 * @param phone    电话
 * @param area     三级区域
 * @param address  详细地址
 * @returns
 */
function updateAddress(id, realName, phone, area, address){
	var url = "address/updateAddress.do";
	var data = {id:id,realName:realName,phone:phone,area:area,address:address};
	async = false;
	var result = ajaxSubmit(url, data, async);
	return result;
}

/**
 * 删除地址
 * @param id 地址ID
 * @returns
 */
function deleteAddress(id){
	var url = "address/deleteAddress.do";
	var data = {id:id};
	async = false;
	var result = ajaxSubmit(url, data, async);
	return result;
}

/**
 * 通过ID获取单个地址
 * @param id
 * @returns
 */
function getAddressById(id){
	var url = "address/getAddressById.do";
	var data = {id:id};
	async = false;
	var result = ajaxSubmit(url, data, async);
	return result;
}

/**
 * 获取登陆用户所有地址
 * @returns
 */
function getAddressByUser(){
	var url = "address/getAddressByUser.do";
	var data = {};
	async = false;
	var result = ajaxSubmit(url, data, async);
	return result;
}

/**
 * 获取登陆用户的默认地址
 * @returns
 */
function getAddressByStatus(){
	var url = "address/getAddressByStatus.do";
	var data = {};
	async = false;
	var result = ajaxSubmit(url, data, async);
	return result;
}