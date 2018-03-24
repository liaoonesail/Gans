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

import com.lanzhou.entity.Activity_details;
import com.lanzhou.entity.Goods;
import com.lanzhou.service.Activity_detailsService;
import com.lanzhou.service.GoodsService;
import com.lanzhou.util.OrderNum;
import com.lanzhou.util.page;

@Controller
@RequestMapping("/adminactivity_details")
public class Activity_detailsAction {
	@Resource
	public Activity_detailsService service;
	@Resource
	public GoodsService service2;
	@RequestMapping("/getid")
	public String getid(Integer id,HttpServletResponse response) throws IOException{
		Activity_details activity_details=service.getid(id);
		JSONObject json=JSONObject.fromObject(activity_details);
		response.getWriter().print(json);
		return null;
	}
	/**
	 * 周周惠活动商品列表
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
		List<Activity_details> list=service.listpage(map);
		for (Activity_details activity_details : list) {
			Goods goods=service2.getid(activity_details.getGoods_id());
			activity_details.setGoods(goods);
		}
		map.put("page", page);
		map.put("list", list);
		map.put("count", count);
		JSONArray json=JSONArray.fromObject(map);
		response.getWriter().print(json);
		return null;
	}
	/**
	 * 删除周周惠商品
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
	/**
	 * 修改周周惠活动详情 商品不可修改 只可修改活动价格和活动时间
	 * @param details
	 * @param response
	 * @return
	 * @throws IOException 
	 */
	@RequestMapping("update")
	public String update(Activity_details details,HttpServletResponse response) throws IOException{
		boolean largerTime = OrderNum.largerTime(details.getStart_time(), details.getEnd_time(), "yyyy-MM-dd");
		if(largerTime){
			service.update(details);
			response.getWriter().print(true);
		}else{
			response.getWriter().print(false);
		}
		return null;
	}

}
