package com.lanzhou.action;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.lanzhou.entity.Article;
import com.lanzhou.entity.User;
import com.lanzhou.service.UserService;
import com.lanzhou.util.ReadWriteTxt;
import com.lanzhou.util.page;

@Controller
@RequestMapping("/adminuser")
public class UserAction {
	@Resource
	private UserService service;
	/**
	 * 
	 * @return 获取用户列表
	 * @throws IOException 
	 */
	@RequestMapping("/list")
	public List<User> list(HttpServletResponse response) throws IOException{
		List<User> list=service.list();
		JSONArray json=JSONArray.fromObject(list);
		response.getWriter().print(json);
		return null;
	}
	/**
	 * 模糊查询加分页
	 * @param name
	 * @param curpage
	 * @param request
	 * @param response
	 * @return
	 * @throws IOException 
	 */
	@RequestMapping("/listpage")
	public List<User> listpage(String name,String curpage,HttpServletResponse response) throws IOException{
		name=name==null?"":name;
		int count=service.count(name);
		page page=new page(curpage, count, 10);
		HashMap<String,Object> map = new HashMap<String, Object>();
		map.put("startRecord", page.getStartRecord());
		map.put("pageSize", page.getPageSize());
		map.put("name", name);
		List<User> list=service.listpage(map);
		map.put("page", page);
		map.put("list", list);
		map.put("count", count);
		JSONArray json=JSONArray.fromObject(map);
		response.getWriter().print(json);
		return null;
	}
	
	@RequestMapping("/del")
	public String del(Integer id,HttpServletResponse response,HttpServletRequest request) throws IOException{
		User user=service.getid(id);
		ReadWriteTxt.del(user.getPhone(), request);
		service.del(id);
		response.getWriter().print(true);
		return null;
	}
	/**
	 * 根据用户Id获取单个用户对象
	 * @param id
	 * @param response
	 * @return
	 * @throws IOException
	 */
	@RequestMapping("/getid")
	public String getid(Integer id,HttpServletResponse response) throws IOException{
		User user=service.getid(id);
		JSONObject json=JSONObject.fromObject(user);
		response.getWriter().print(json);
		return null;
		
	}

}
