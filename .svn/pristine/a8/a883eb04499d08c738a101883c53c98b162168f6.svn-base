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

import com.lanzhou.entity.Page_parameter;
import com.lanzhou.service.Page_parameterService;
import com.lanzhou.util.ReadWriteTxt;
import com.lanzhou.util.page;

@Controller
@RequestMapping("/adminpage")
public class Page_parameterAction {
	@Resource
	private Page_parameterService service;
	@RequestMapping("/add")
	public String add(Page_parameter parameter,HttpServletResponse response) throws IOException{
		String picture = parameter.getUrl();
		int a=picture.indexOf("src=");
		int b=picture.indexOf("alt=");
		String picture_address=null;
		if(a<b){
			 picture_address = picture.substring(picture.indexOf("src=")+5,picture.indexOf("alt=")-2);
		}else{
			picture_address = picture.substring(picture.indexOf("src=")+5,picture.indexOf("/>")-2);
		}
		parameter.setUrl(picture_address);
		service.add(parameter);
		response.getWriter().print(true);
		return null;
	}
	@RequestMapping("/list")
	public String list(HttpServletResponse response) throws IOException{
		List<Page_parameter> list=service.list();
		JSONArray json=JSONArray.fromObject(list);
		response.getWriter().print(json);
		return null;
	}
	@RequestMapping("/getid")
	public String getid(Integer id,HttpServletResponse response) throws IOException{
		Page_parameter parameter=service.getid(id);
		JSONObject json=JSONObject.fromObject(parameter);
		response.getWriter().print(json);
		return null;
	}
	@RequestMapping("/update")
	public String update(Page_parameter parameter,HttpServletResponse response) throws IOException{
		String picture = parameter.getUrl();
		int a=picture.indexOf("src=");
		int b=picture.indexOf("alt=");
		String picture_address=null;
		if(a<b){
			 picture_address = picture.substring(picture.indexOf("src=")+5,picture.indexOf("alt=")-2);
		}else{
			picture_address = picture.substring(picture.indexOf("src=")+5,picture.indexOf("/>")-2);
		}
		parameter.setUrl(picture_address);
		service.update(parameter);
		response.getWriter().print(true);
		return null;
	}
	@RequestMapping("/del")
	public String del(Integer id,HttpServletResponse response,HttpServletRequest request) throws IOException{
		Page_parameter parameter1=service.getid(id);
		ReadWriteTxt.del(parameter1.getUrl(), request);
		service.del(id);
		response.getWriter().print(true);
		return null;
	}
	
	@RequestMapping("/listpage")
	public String listpage(String name,String curpage,HttpServletRequest request,HttpServletResponse response) throws IOException{
		name=name==null?"":name;
		int count = service.count(name);
		page page = new page(curpage,count,10);
		HashMap<String, Object> map = new HashMap<String, Object>();
		map.put("startRecord", page.getStartRecord());
		map.put("pageSize", page.getPageSize());
		map.put("name", name);
		List<Page_parameter> list = service.listpage(map);
		map.put("page", page);
		map.put("list", list);
		map.put("count", count);
		JSONArray json = JSONArray.fromObject(map);
		response.getWriter().println(json);
		return null;
	}
}
