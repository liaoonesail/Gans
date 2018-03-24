package com.lanzhou.controller;

import java.io.IOException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class Index {
	
	@RequestMapping("/index")
	public String showIndex(HttpServletRequest request){
		String zhongduan = request.getHeader("CCBWebView-User-Agent");
		if(zhongduan == null || "".equals(zhongduan)){
			zhongduan = "android";
		}else{
			if(zhongduan.indexOf("Android") > -1){
				zhongduan = "android";
			}else{
				zhongduan = "ios";
			}
		}
		HttpSession session = request.getSession();
		session.setAttribute("zhongduan", zhongduan);
		return "redirect:/index.html";
	}
	
	@RequestMapping("/showUserSystem")
	public String showUserSystem(HttpServletRequest request, HttpServletResponse response) throws IOException{
		String zhongduan = request.getParameter("zd");
		if(zhongduan == null || "".equals(zhongduan)){
			zhongduan = "android";
		}else{
			if("ios".equals(zhongduan)){
				zhongduan = "ios";
			}else{
				zhongduan = "android";
			}
		}
		HttpSession session = request.getSession();
		String zhongduan2 = (String)session.getAttribute("zhongduan");
		if(zhongduan2 == null || "".equals(zhongduan2)){
			session.setAttribute("zhongduan", zhongduan);
		}else{
			if(!zhongduan2.equals(zhongduan)){
				session.setAttribute("zhongduan", zhongduan);
			}
		}
		response.getWriter().print("ok");
		return null;
	}
}
