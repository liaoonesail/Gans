package com.lanzhou.controller;

import java.io.IOException;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.lanzhou.entity.User;
import com.lanzhou.service.UserService;

@Controller
@RequestMapping("/person")
public class PersonController {

	private UserService userService;

	public UserService getUserService() {
		return userService;
	}
	@Resource
	public void setUserService(UserService userService) {
		this.userService = userService;
	}
	
	/**
	 * 修改个人资料
	 * @param request
	 * @param response
	 * @return
	 * @throws IOException
	 */
	@RequestMapping("/updatePerson")
	public String updatePerson(HttpServletRequest request, HttpServletResponse response) throws IOException{
		HttpSession session = request.getSession();
		User user = (User)session.getAttribute("user");
		if(user == null){
			response.getWriter().print("notLogin");
			return null;
		}
		String nickName = (String)request.getParameter("nickName");
		String sex = (String)request.getParameter("sex");
		String birthday = (String)request.getParameter("birthday");
		String area = (String)request.getParameter("area");
		String email = (String)request.getParameter("email");
		
		user.setNickname(nickName);
		user.setSex(sex);
		user.setBirthday(birthday);
		user.setArea(area);
		user.setEmail(email);
		userService.update(user, request);
		response.getWriter().print("ok");
		return null;
	}
}
