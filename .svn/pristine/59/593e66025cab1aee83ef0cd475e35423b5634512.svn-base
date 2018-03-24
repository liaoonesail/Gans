package com.lanzhou.action;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletResponse;

import net.sf.json.JSONArray;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.lanzhou.entity.Log;
import com.lanzhou.service.LogService;
import com.lanzhou.util.page;

@Controller
@RequestMapping("/adminlog")
public class LogAction {
	@Resource
	private LogService service;
	/**
	 * 分页查询
	 * @param name
	 * @param curpage
	 * @param response
	 * @return
	 * @throws IOException
	 */
	@RequestMapping("/listpage")
	public String listpage(String name,String curpage,HttpServletResponse response) throws IOException{
		name = name==null?"":name;
		int count=service.count(name);
		page page=new page(curpage, count, 10);
		HashMap<String,Object> map = new HashMap<String, Object>();
		map.put("startRecord", page.getStartRecord());
		map.put("pageSize", page.getPageSize());
		map.put("name", name);
		List<Log> list=service.listpage(map);
		map.put("page", page);
		map.put("list", list);
		map.put("count", count);
		JSONArray json=JSONArray.fromObject(map);
		response.getWriter().print(json);
		return null;
	}
	/**
	 * 删除
	 * @param id
	 * @param response
	 * @return
	 * @throws IOException
	 */
	@RequestMapping("del")
	public String del(Integer id,HttpServletResponse response) throws IOException{
		service.del(id);
		response.getWriter().print(true);
		return null;
	}

}
