document.write("<script language=javascript src='../js/publicAddress.js'></script>");
/**
 * 用户登陆信息异步提交
 * @param userName      用户名
 * @param userPassword  密码
 * @param yzm           验证码
 * @returns             "ok":登陆成功，其它则为所对应的错误提示
 */
function userLogin(userName, userPassword, yzm){
	var url = "user/userLogin.do";
	var data = {userName:userName,userPassword:userPassword,yzm:yzm};
	async = false;
	var result = ajaxSubmit(url, data, async);
	//console.log("我是登录的返回值"+result);
	return result;
}

/**
 * 用户注册异步提交基础数据
 * @param userName       用户名（非必填）
 * @param userPassword   密码
 * @param userPassword2  第二次输入的密码
 * @param phone          手机号码
 * @param yzm            验证码
 * @param phoneyzm       手机验证码（选项：1，如果注册只有一个步骤，则必填。2，如果分为两个步骤，第一步填基础数据，第二步填手机验证码则不填写）
 * @returns              "ok":注册成功，其它则为对应的错误提示
 */
function userReg(userName, userPassword, userPassword2, phone, yzm, phoneyzm){
	var url = "user/userReg.do";
	var data = {userName:userName,userPassword:userPassword,userPassword2:userPassword2,phone:phone,yzm:yzm,phoneyzm:phoneyzm};
	
	var async = false;
	var result = ajaxSubmit(url, data, async);
	//console.log("我是用户注册的返回值"+result);
	return result;
}

/**
 * 短信发送
 * @param     phone
 * @returns   "ok":发送成功，其它为发送失败
 */
function smsSend(phone){
	var url = "user/smsSend.do";
	var data = {
    	phone:phone
    };
	async = false;
	var result = ajaxSubmit(url, data, async);
	return result;
}

/**
 * 手机验证码提交验证方法
 * @param       phoneyzm
 * @returns     "ok":成功，其它为失败信息
 */
function regPhoneyzm(phoneyzm){
	var url = "user/regPhoneyzm.do";
	var data = {
		phoneyzm:phoneyzm
    };
	async = false;
	var result = ajaxSubmit(url, data, async);
	return result;
}

/**
 * 根据ID获取单个用户对象
 * @param    id
 * @returns  "error":该用户不存在，否则返回user对象的json字符串 需要用JSON.parse(data) 生成user的json对象
 */
function getUserById(id){
	var url = "user/getUserById.do";
	var data = {
		id:id
    };
	async = false;
	var result = ajaxSubmit(url, data, async);
	return result;
}

/**
 * 获取登陆用户
 * @returns 没有登陆返回字符串"notLogin" 否则返回user的JSON串
 */
function getUserByLogin(){
	var url = "user/getUserByLogin.do";
	var data = {
		
    };
	async = false;
	var result = ajaxSubmit(url, data, async);
	//console.log("我是获取登陆用户的返回值"+result);
	return result;
}

/**
 * 用户退出登陆
 * @returns 退出登陆成功返回"ok" 失败为"error"
 */
function setUserLoginOut(){
	var url = "user/setUserLoginOut.do";
	var data = {
		
    };
	async = false;
	var result = ajaxSubmit(url, data, async);
	//console.log("退出登陆成功"+result);
	return result;
}

/**
 * 重置密码
 * @param phone 电话号码，非必填
 * @param yzm   平台验证码，非必填
 * @param phoneyzm  手机验证码，必填
 * @param password  修改的密码 非必填
 * @param password2 修改的密码 非必填
 * @returns 成功返回 "ok",其余返回失败原因，可直接显示在页面上,重置后密码为 888888
 */
function resetPassword(phone, yzm, phoneyzm, password, password2){
	var url = "user/resetPassword.do";
	var data = {
		phone:phone,
		yzm:yzm,
		phoneyzm:phoneyzm,
		password:password,
		password2:password2
    };
	async = false;
	var result = ajaxSubmit(url, data, async);
	//console.log(result);
	return result;
}