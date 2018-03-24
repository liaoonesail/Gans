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

import com.lanzhou.entity.Performance;
import com.lanzhou.service.PerformanceService;
import com.lanzhou.util.OrderNum;
import com.lanzhou.util.page;

@Controller
@RequestMapping("/adminPerformance")
public class PerformanceAction {
	@Resource
	private PerformanceService service;
	@RequestMapping("/add")
	public String add(Performance performance, HttpServletResponse response) throws IOException{
		Performance performance1=service.getByGoodsId(performance.getGoods_id(), performance.getPart());
		if(performance1==null){
			service.add(performance);
			response.getWriter().print(true);	
		}else{
			response.getWriter().print(false);	
		}
		return null;
	}
	@RequestMapping("listpage")
	public String listpage(Integer part,String curpage,HttpServletResponse response,HttpServletRequest request) throws IOException{
		int count=service.count(part);
		page page=new page(curpage, count, 10);
		HashMap<String,Object> map = new HashMap<String, Object>();
		map.put("startRecord", page.getStartRecord());
		map.put("pageSize", page.getPageSize());
		map.put("part", part);
		List<Performance> list=service.listpage(map);
		map.put("page", page);
		map.put("list", list);
		map.put("count", count);
		JSONArray json=JSONArray.fromObject(map);
		response.getWriter().print(json);
		return null;
	}
	@RequestMapping("/getid")
	public String getid(Integer id,HttpServletResponse response) throws IOException{
		Performance performance=service.getid(id);
		JSONObject json=JSONObject.fromObject(performance);
		response.getWriter().print(json);
		return null;
		
	}
	@RequestMapping("/update")
	public String update(Performance performance,HttpServletResponse response) throws IOException{
			service.update(performance);
			response.getWriter().print(true);
		return null;
	}
	@RequestMapping("/del")
	public String del(Integer id,HttpServletResponse response) throws IOException{
		service.del(id);
		response.getWriter().print(true);
		return null;
		
	}

}
