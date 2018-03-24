package com.lanzhou.action;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import net.sf.json.JSONArray;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.lanzhou.entity.TwelvePrize;
import com.lanzhou.entity.UserTweprize;
import com.lanzhou.service.TwelvePrizeService;
import com.lanzhou.service.UserTweprizeService;
import com.lanzhou.util.page;

@Controller
@RequestMapping("/adminUTprize")
public class UserTweprizeAction {
	@Resource
	private UserTweprizeService service;
	@Resource
	private TwelvePrizeService service2;
	/**
	 * 分页列表及模糊查询
	 * @param name
	 * @param curpage
	 * @param request
	 * @param response
	 * @return
	 * @throws IOException
	 */
	@RequestMapping("/listpage")
	public String listpage(String name,String curpage,HttpServletRequest request,HttpServletResponse response) throws IOException{
		name=name==null?"":name;
		int count=service.count(name);
		page page=new page(curpage, count, 20);
		HashMap<String,Object> map = new HashMap<String, Object>();
		map.put("startRecord", page.getStartRecord());
		map.put("pageSize", page.getPageSize());
		map.put("name", name);
		List<UserTweprize> list=service.listpage(map);
		for (UserTweprize userTweprize : list) {
			TwelvePrize twelvePrize =service2.getLevel(userTweprize.getPrizeLevel());
			userTweprize.setTwelvePrize(twelvePrize);
		}
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
	@RequestMapping("/del")
	public String del(Integer id,HttpServletResponse response) throws IOException{
		service.del(id);
		response.getWriter().print(true);
		return null;
	}
}
