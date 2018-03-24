package com.lanzhou.util;

public class SMSUtil {

	/**
	 * 
	 * @param phone    电话号码
	 * @param content  各种短信内容的主要信息部分
	 * @param i        板块标识  1：注册短信
	 * @return
	 */
	public static boolean smsSend(String phone, String content, int i){
		boolean flag = false;
		switch (i) {
		case 1:
			//1为发送注册短信内容，传入的为验证码
			//content = getRegMessage(content);
			flag = JuheDemo.send(phone, content);
			break;

		default:
			break;
		}
		return flag;
	}
	
	public static String getRegMessage(String phoneCode){
		String content = "尊敬的用户，您正在本平台注册，验证码为："+phoneCode+",如非本人操作，请不要忽视本信息。";
		return content;
	}
}
