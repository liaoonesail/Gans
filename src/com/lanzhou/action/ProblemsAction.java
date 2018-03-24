package com.lanzhou.action;

import java.io.IOException;
import java.util.Date;
import java.util.HashMap;
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
import com.lanzhou.util.page;

@Controller
@RequestMapping("adminProblems")
public class ProblemsAction {
	@Resource
	private ProblemsService service;
	/**
	 * 添加
	 * @param problems
	 * @param request
	 * @param response
	 * @return
	 * @throws IOException 
	 */
	@RequestMapping("/add")
	public String add(Problems problems,HttpServletRequest request,HttpServletResponse response) throws IOException{
		String time = new Date().getTime()+"";
		String html = problems.getContent();
		ReadWriteTxt.write(html, time, request);
		problems.setContent("/upload"+request.getContextPath()+"/goods_details/"+time+".txt");
		service.add(problems);
		response.getWriter().print(true);
		return null;
	}
	/**
	 * 获取单个常见问题
	 * @param id
	 * @param response
	 * @param request
	 * @return
	 * @throws IOException 
	 */
	@RequestMapping("/getid")
	public String getid(Integer id,HttpServletResponse response,HttpServletRequest request) throws IOException{
		Problems problems= service.getid(id);
		problems.setContent(ReadWriteTxt.read(problems.getContent(), request));
		JSONObject json=JSONObject.fromObject(problems);
		response.getWriter().print(json);
		return null;
	}
	/**
	 * 分页模糊
	 * @param name
	 * @param curpage
	 * @param response
	 * @return
	 * @throws IOException 
	 */
	@RequestMapping("/listpage")
	public String listpage(String name,String curpage,HttpServletResponse response) throws IOException{
		name=name==null?"":name;
		int count=service.count(name);
		page page=new page(curpage, count, 10);
		HashMap<String,Object> map = new HashMap<String, Object>();
		map.put("startRecord", page.getStartRecord());
		map.put("pageSize", page.getPageSize());
		map.put("name", name);
		List<Problems> list=service.listpage(map);
		map.put("page", page);
		map.put("list", list);
		map.put("count", count);
		JSONArray json=JSONArray.fromObject(map);
		response.getWriter().print(json);
		return null;
		
	}
	
	/**
	 * 获取所有常见问题列表
	 * @param response
	 * @return
	 * @throws IOException 
	 */
	@RequestMapping("/list")
	public String list(String name,HttpServletResponse response) throws IOException{
		name=name==null?"":name;
		List<Problems> list=service.list(name);
		JSONArray json=JSONArray.fromObject(list);
		response.getWriter().print(json);
		return null;
	}
	/**
	 * 修改单个常见问题
	 * @param problems
	 * @param request
	 * @param response
	 * @return
	 * @throws IOException 
	 */
	@RequestMapping("/update")
	public String update(Problems problems,HttpServletRequest request,HttpServletResponse response) throws IOException{
		String time = new Date().getTime()+"";
		Problems problems2=service.getid(problems.getId());
		ReadWriteTxt.del(problems2.getContent(), request);
		ReadWriteTxt.write(problems.getContent(), time, request);
		problems.setContent("/upload"+request.getContextPath()+"/goods_details/"+time+".txt");
		service.update(problems);
		response.getWriter().print(true);
		return null;
	}
	/**
	 * 删除单个常见问题
	 * @param id
	 * @param request
	 * @param response
	 * @return
	 * @throws IOException 
	 */
	@RequestMapping("/del")
	public String del(Integer id,HttpServletRequest request,HttpServletResponse response) throws IOException{
		Problems problems2=service.getid(id);
		ReadWriteTxt.del(problems2.getContent(), request);
		service.del(id);
		response.getWriter().print(true);
		return null;
	}
}
