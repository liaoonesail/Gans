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

import com.lanzhou.entity.Inschool;
import com.lanzhou.service.InschoolService;
import com.lanzhou.util.OrderNum;
import com.lanzhou.util.page;

@Controller
@RequestMapping("/adminInschool")
public class InschoolAction {
	@Resource
	private InschoolService service;
	/**
	 * 添加入学季商品
	 * @param inschool
	 * @param response
	 * @return
	 * @throws IOException 
	 */
	@RequestMapping("/add")
	public String add(Inschool inschool,HttpServletResponse response) throws IOException{
		String start_time = inschool.getStartTime();
		String end_time = inschool.getEndTime();
		boolean b = OrderNum.largerTime(start_time, end_time,"yyyy-MM-dd HH:mm:ss");
		Inschool inschool2=service.getByGoodsId(inschool.getGoodsId());
		if(b&&inschool2==null){
			service.add(inschool);
			response.getWriter().print(true);
		}else{
			response.getWriter().print(false);
		}
		return null;
		
	}
	/**
	 * 模糊查询分页
	 * @param curpage
	 * @param response
	 * @param request
	 * @return
	 * @throws IOException
	 */
	@RequestMapping("listpage")
	public String listpage(String curpage,HttpServletResponse response,HttpServletRequest request) throws IOException{
		int count=service.count();
		page page=new page(curpage, count, 10);
		HashMap<String,Object> map = new HashMap<String, Object>();
		map.put("startRecord", page.getStartRecord());
		map.put("pageSize", page.getPageSize());
		List<Inschool> list=service.listpage(map);
		map.put("page", page);
		map.put("list", list);
		map.put("count", count);
		JSONArray json=JSONArray.fromObject(map);
		response.getWriter().print(json);
		return null;
	}
	/**
	 * 获取单个对象根据ID
	 * @param id
	 * @param response
	 * @return
	 * @throws IOException
	 */
	@RequestMapping("/getid")
	public String getid(Integer id,HttpServletResponse response) throws IOException{
		Inschool inschool=service.getid(id);
		JSONObject json=JSONObject.fromObject(inschool);
		response.getWriter().print(json);
		return null;
		
	}
	/**
	 * 修改入学季活动
	 * @param inschool
	 * @param response
	 * @return
	 * @throws IOException
	 */
	@RequestMapping("/update")
	public String update(Inschool inschool,HttpServletResponse response) throws IOException{
		String start_time = inschool.getStartTime();
		String end_time = inschool.getEndTime();
		boolean b = OrderNum.largerTime(start_time, end_time,"yyyy-MM-dd HH:mm:ss");
		if(b){
			service.update(inschool);
			response.getWriter().print(true);	
		}else{
			response.getWriter().print(false);	
		}
		return null;
	}
	/**
	 * 删除入学季活动
	 * @param id
	 * @param response
	 * @return
	 * @throws IOException
	 */
	@RequestMapping("/del")
	public String del(Integer id,HttpServletResponse response) throws IOException{
		service.del(id);
		response.getWriter().print(true);
		return null;
		
	}

}
