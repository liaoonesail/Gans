package com.lanzhou.controller;

import java.io.IOException;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import net.sf.json.JSONObject;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.lanzhou.entity.User;
import com.lanzhou.service.UserService;
import com.lanzhou.util.SMSUtil;
import com.lanzhou.util.Utils;

@Controller
@RequestMapping("/user")
public class UserController {
	
	private UserService userService;

	public UserService getUserService() {
		return userService;
	}
	@Resource
	public void setUserService(UserService userService) {
		this.userService = userService;
	}
	
	/**
	 * 用户登陆
	 * @param userName
	 * @param userPassword
	 * @param yzm
	 * @param request
	 * @param response
	 * @return
	 * @throws IOException
	 */
	@RequestMapping("/userLogin")
	public String userLogin(String userName, String userPassword, String yzm, HttpServletRequest request, HttpServletResponse response) throws IOException{
		if(userName == null || "".equals(userName) || userPassword == null || "".equals(userPassword)){
			response.getWriter().print("参数格式错误");
		}else{
			
			HttpSession session = request.getSession();
			
			if(yzm != null && !"".equals(yzm)){
				String captchaToken = (String)session.getAttribute("captchaToken");
				if(captchaToken == null || !yzm.equals(captchaToken)){
					response.getWriter().print("验证码错误");
					return null;
				}
			}
			
			User user = userService.getphone(userName);
			if(user == null || !user.getPassword().equals(Utils.MD5(userPassword))){
				response.getWriter().print("用户名或密码有误");
				return null;
			}
			session.setAttribute("user", user);
			response.getWriter().print("ok");
		}
		return null;
	}
	
	/**
	 * 用户注册方法
	 * @param userName
	 * @param userPassword
	 * @param userPassword2
	 * @param phone
	 * @param yzm
	 * @param phoneyzm
	 * @param request
	 * @param response
	 * @return
	 * @throws IOException
	 */
	@RequestMapping("/userReg")
	public String userReg(String userName, String userPassword, String userPassword2, String phone, String yzm, String phoneyzm, HttpServletRequest request, HttpServletResponse response) throws IOException{
		if(userPassword == null || "".equals(userPassword) || userPassword2 == null || "".equals(userPassword2) || phone == null || "".equals(phone) || !Utils.isNumeric(phone)){
			response.getWriter().print("参数格式错误");
		}else{
			User user = null;
			HttpSession session = request.getSession();
			if(!userPassword.equals(userPassword2)){
				response.getWriter().print("两次输入的密码不一致");
				return null;
			}
			if(userName != null && !"".equals(userName)){
				user = userService.getphone(userName);  //这里暂时只有通过电话号码获取，到时如果有用户名字段则要通过用户名获取
				if(user != null){
					response.getWriter().print("该用户名已被注册");
					return null;
				}
			}
			user = userService.getphone(phone);
			if(user != null){
				response.getWriter().print("该手机号已被注册");
				return null;
			}
			if(yzm != null && !"".equals(yzm)){
				String captchaToken = (String)session.getAttribute("captchaToken");
				if(captchaToken == null || !yzm.equals(captchaToken)){
					response.getWriter().print("验证码错误");
					return null;
				}
			}
			if(phoneyzm != null && !"".equals(phoneyzm)){
				String phone_ = (String)session.getAttribute("phone");
				//System.out.println("获取手机session:" + phone_);
				if(phone_ == null){
					response.getWriter().print("手机号失效");
					return null;
				}
				String phoneCode = (String)session.getAttribute("phoneCode");
				if(phoneCode != null && !phoneCode.equals(phoneyzm)){
					response.getWriter().print("手机验证码错误");
					return null;
				}
			}
			//开始创建用户
			user = new User();
			user.setPhone(phone);
			user.setPassword(Utils.MD5(userPassword));
			int i = userService.reg(user);
			if(i > 0){
				response.getWriter().print("ok");
			}else{
				response.getWriter().print("系统繁忙，请稍后再试");
			}
		}
		return null;
	}
	
	/**
	 * 短信发送
	 * @param phone
	 * @param request
	 * @param response
	 * @return
	 * @throws IOException 
	 */
	@RequestMapping("/smsSend")
	public String smsSend(String phone, HttpServletRequest request, HttpServletResponse response) throws IOException{
		if(phone == null || "".equals(phone) || !Utils.isNumeric(phone)){
			response.getWriter().print("手机号格式错误");
		}else{
			String phoneCode = Utils.getRondom() + "";
			//调用短信发送接口
			boolean flag = SMSUtil.smsSend(phone, phoneCode, 1);
			//如果成功
			if(flag){
				HttpSession session = request.getSession();
				//System.out.println("设置手机号session");
				session.setAttribute("phone", phone);
				session.setAttribute("phoneCode", phoneCode);
				response.getWriter().print("ok");
			}else{
				response.getWriter().print("短信发送失败，请检查手机号是否正确，请稍后重试");
			}
		}
		return null;
	}
	
	/**
	 * 发送短信
	 * @param phoneyzm
	 * @param request
	 * @param response
	 * @return
	 * @throws IOException
	 */
	@RequestMapping("/regPhoneyzm")
	public String regPhoneyzm(String phoneyzm, HttpServletRequest request, HttpServletResponse response) throws IOException{
		if(phoneyzm == null || "".equals(phoneyzm)){
			response.getWriter().print("手机验证码格式错误");
		}else{
			HttpSession session = request.getSession();
			String phone_ = (String)session.getAttribute("phone");
			if(phone_ == null){
				response.getWriter().print("手机号失效");
			}else{
				String phoneCode = (String)session.getAttribute("phoneCode");
				if(phoneCode == null){
					response.getWriter().print("验证码已过期，请重刷");
				}else{
					if(!phoneCode.equals(phoneyzm)){
						response.getWriter().print("验证码错误");
					}else{
						response.getWriter().print("ok");
					}
				}
			}
		}
		return null;
	}
	
	/**
	 * 获取单个用户
	 * @param id
	 * @param request
	 * @param response
	 * @return
	 * @throws IOException
	 */
	@RequestMapping("/getUserById")
	public String getUserById(int id, HttpServletRequest request, HttpServletResponse response) throws IOException{
		User user = userService.getid(id);
		if(user == null){
			response.getWriter().print("error");
			return null;
		}else{
			JSONObject json = JSONObject.fromObject(user);
			response.getWriter().print(json);
		}
		return null;
	}
	
	/**
	 * 重置密码
	 * @param phone
	 * @param yzm
	 * @param phoneyzm
	 * @param request
	 * @param response
	 * @return
	 * @throws IOException
	 */
	@RequestMapping("/resetPassword")
	public String resetPassword(String phone, String yzm, String phoneyzm, String password, String password2, HttpServletRequest request, HttpServletResponse response) throws IOException{
		if(phoneyzm == null || "".equals(phoneyzm) || !Utils.isNumeric(phoneyzm)){
			response.getWriter().print("数据格式错误");
			return null;
		}
		HttpSession session = request.getSession();
		if(yzm != null && !"".equals(yzm)){
			String yzm_ = (String)session.getAttribute("captchaToken");
			if(yzm_ == null){
				response.getWriter().print("平台验证码失效");
				return null;
			}else{
				if(!yzm.equals(yzm_)){
					response.getWriter().print("平台验证码错误");
					return null;
				}
			}
		}
		String phoneCode = (String)session.getAttribute("phoneCode");
		if(phoneCode == null){
			response.getWriter().print("手机验证码失效");
			return null;
		}
		String phone_ = (String)session.getAttribute("phone");
		if(phone_ == null){
			response.getWriter().print("手机号码失效");
			return null;
		}
		if(phone != null && !"".equals(phone)){
			if(!phone.equals(phone_)){
				response.getWriter().print("手机号码非法提交");
				return null;
			}
		}
		if(!phoneyzm.equals(phoneCode)){
			response.getWriter().print("手机验证码错误");
			return null;
		}
		if(password != null && !"".equals(password)){
			if(!password.equals(password2)){
				response.getWriter().print("两次密码不一致");
				return null;
			}
		}else{
			password = "888888";
		}
		//修改该手机号的默认密码
		User user = userService.getphone(phone_);
		if(user == null){
			response.getWriter().print("该手机号不存在");
			return null;
		}
		user.setPassword(Utils.MD5(password));
		userService.update(user, request);
		response.getWriter().print("ok");
		return null;
	}
	
	/**
	 * 获取登陆用户
	 * @param request
	 * @param response
	 * @return
	 * @throws IOException
	 */
	@RequestMapping("/getUserByLogin")
	public String getUserByLogin(HttpServletRequest request, HttpServletResponse response) throws IOException{
		HttpSession session = request.getSession();
		User user = (User)session.getAttribute("user");
		if(user == null){
			response.getWriter().print("notLogin");
		}else{
			JSONObject json = JSONObject.fromObject(user);
			response.getWriter().print(json);
		}
		return null;
	}
	
	/**
	 * 用户退出登陆
	 * @param request
	 * @param response
	 * @return
	 * @throws IOException
	 */
	@RequestMapping("/setUserLoginOut")
	public String setUserLoginOut(HttpServletRequest request, HttpServletResponse response) throws IOException{
		HttpSession session = request.getSession();
		User user = (User)session.getAttribute("user");
		if(user == null){
			response.getWriter().print("notLogin");
		}else{
			session.removeAttribute("user");
			response.getWriter().print("ok");
		}
		return null;
	}
}
