package com.lanzhou.action;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletResponse;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.lanzhou.entity.User;
import com.lanzhou.entity.Whitegoods;
import com.lanzhou.service.WhitegoodsService;
import com.lanzhou.util.page;

@Controller
@RequestMapping("adminWhitegoods")
public class WhitegoodsAction {
	@Resource
	private WhitegoodsService service;
	@RequestMapping("/add")
	public String add(Whitegoods whitegoods,HttpServletResponse response) throws IOException{
		service.add(whitegoods);
		response.getWriter().print(true);
		return null;
	}
	@RequestMapping("/del")
	public String del(Integer id,HttpServletResponse response) throws IOException{
		service.del(id);
		response.getWriter().print(true);
		return null;
	}
	@RequestMapping("/getid")
	public String getid(Integer id,HttpServletResponse response) throws IOException{
		Whitegoods whitegoods=service.getid(id);
		JSONObject json=JSONObject.fromObject(whitegoods);
		response.getWriter().print(json);
		return null;
	}
	@RequestMapping("/listpage")
	public String listpage(String name,String curpage,Integer nameId,HttpServletResponse response) throws IOException{
		name=name==null?"":name;
		int count=service.count(name,nameId);
		page page=new page(curpage, count, 10);
		HashMap<String,Object> map = new HashMap<String, Object>();
		map.put("startRecord", page.getStartRecord());
		map.put("pageSize", page.getPageSize());
		map.put("name", name);
		map.put("nameId", nameId);
		List<Whitegoods> list=service.listpage(map);
		map.put("page", page);
		map.put("list", list);
		map.put("count", count);
		JSONArray json=JSONArray.fromObject(map);
		response.getWriter().print(json);
		return null;
	}

}
