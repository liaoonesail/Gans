package com.lanzhou.controller;

import java.io.IOException;
import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.lanzhou.entity.Problems;
import com.lanzhou.service.ProblemsService;
import com.lanzhou.util.ReadWriteTxt;

@Controller
@RequestMapping("/problems")
public class ProblemsController {
	
	private ProblemsService problemsService;
	
	public ProblemsService getProblemsService() {
		return problemsService;
	}
	@Resource
	public void setProblemsService(ProblemsService problemsService) {
		this.problemsService = problemsService;
	}

	/**
	 * 获取单个常见问题
	 * @param id
	 * @param response
	 * @param request
	 * @return
	 * @throws IOException 
	 */
	@RequestMapping("/showProblemById")
	public String showProblemById(Integer id, HttpServletResponse response,HttpServletRequest request) throws IOException{
		Problems problems= problemsService.getid(id);
		problems.setContent(ReadWriteTxt.read(problems.getContent(), request));
		JSONObject json=JSONObject.fromObject(problems);
		response.getWriter().print(json);
		return null;
	}
	
	/**
	 * 获取所有常见问题列表
	 * @param name 查询所传字段
	 * @param response
	 * @return
	 * @throws IOException 
	 */
	@RequestMapping("/showProblemsByAll")
	public String showProblemsByAll(String name, HttpServletResponse response) throws IOException{
		name=name==null?"":name;
		List<Problems> list = problemsService.list(name);
		JSONArray json = JSONArray.fromObject(list);
		response.getWriter().print(json);
		return null;
	}
}
