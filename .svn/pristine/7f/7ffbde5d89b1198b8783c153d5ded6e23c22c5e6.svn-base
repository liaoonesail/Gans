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

import com.lanzhou.entity.Miaosha;
import com.lanzhou.entity.Tuangou;
import com.lanzhou.service.GoodsService;
import com.lanzhou.service.MiaoshaService;
import com.lanzhou.util.OrderNum;
import com.lanzhou.util.page;

@Controller
@RequestMapping("/adminmiaosha")
public class MiaoShaAction {
	@Resource
	private MiaoshaService service;
	@Resource
	private GoodsService goodsService;
	@RequestMapping("/add")
	public String add(Miaosha miaosha, HttpServletResponse response) throws IOException{
		String start_time = miaosha.getStart_time();
		String end_time = miaosha.getEnd_time();
		Miaosha miaosha1=service.getMiaoshaByGoodsId(miaosha.getGoods_id());
		boolean b = OrderNum.largerTime(start_time, end_time,"yyyy-MM-dd HH:mm:ss");
		if(b&&miaosha1==null){
			miaosha.setAmount(goodsService.getid(miaosha.getGoods_id()).getAmount());
			service.add(miaosha);
			response.getWriter().print(true);	
		}else{
			response.getWriter().print(false);	
		}
		return null;
	}
	@RequestMapping("listpage")
	public String listpage(String curpage,HttpServletResponse response,HttpServletRequest request) throws IOException{
		int count=service.count();
		page page=new page(curpage, count, 10);
		HashMap<String,Object> map = new HashMap<String, Object>();
		map.put("startRecord", page.getStartRecord());
		map.put("pageSize", page.getPageSize());
		List<Miaosha> list=service.listpage(map);
		map.put("page", page);
		map.put("list", list);
		map.put("count", count);
		JSONArray json=JSONArray.fromObject(map);
		response.getWriter().print(json);
		return null;
	}
	@RequestMapping("/getid")
	public String getid(Integer id,HttpServletResponse response) throws IOException{
		Miaosha miaosha=service.getid(id);
		JSONObject json=JSONObject.fromObject(miaosha);
		response.getWriter().print(json);
		return null;
		
	}
	@RequestMapping("/update")
	public String update(Miaosha miaosha,HttpServletResponse response) throws IOException{
		String start_time = miaosha.getStart_time();
		String end_time = miaosha.getEnd_time();
		boolean b = OrderNum.largerTime(start_time, end_time,"yyyy-MM-dd HH:mm:ss");
		if(b){
			service.update(miaosha);
			response.getWriter().print(true);	
		}else{
			response.getWriter().print(false);	
		}
		return null;
	}
	@RequestMapping("/del")
	public String del(Integer id,HttpServletResponse response) throws IOException{
		service.del(id);
		response.getWriter().print(true);
		return null;
		
	}

}
