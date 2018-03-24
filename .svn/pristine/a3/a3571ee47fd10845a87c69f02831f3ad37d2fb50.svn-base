package com.lanzhou.action;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.lanzhou.entity.Logistics;
import com.lanzhou.entity.Order;
import com.lanzhou.service.AdminuserService;
import com.lanzhou.service.LogisticsService;
import com.lanzhou.service.OrderService;
import com.lanzhou.util.page;

@Controller
@RequestMapping("/adminorder")
public class OrderAction {
	@Resource
	private OrderService service;
	@Resource
	private AdminuserService service1;
	@Resource
	private LogisticsService service2;
	
	/**
	 * 
	 * @param status
	 * @param response 根据订单状态查询订单
	 * @return
	 * @throws IOException 
	 */
	@RequestMapping("/list")
	public String list(Integer status,String name,HttpServletResponse response) throws IOException{
		name=name==null?"":name;
		HashMap<String,Object> map = new HashMap<String, Object>();
		List<Order> list=service.listbyName(status,name);
		for (Order order : list) {
			Logistics logistics=service2.getByOrderId(order.getId());
			order.setLogistics(logistics);
		}
		map.put("list", list);
		JSONArray json=JSONArray.fromObject(map);
		response.getWriter().print(json);
		return null;
	}
	/**
	 * 必须先获取对象的然后传order
	 * @param status
	 * @param response 修改订单状态
	 * @return
	 * @throws IOException 
	 */
	@RequestMapping("/update")
	public String update(Order order,HttpServletResponse response,HttpServletRequest request) throws IOException{
		boolean addlog = service1.addlog(4, 3, request);
		if(addlog){
			service.update(order);
			
			response.getWriter().print(true);
			return null;
		}else{
			response.getWriter().print(false);
			return null;
		}
	}
	/**
	 * 更新订单状态
	 * @param id
	 * @param status
	 * @param response
	 * @return
	 * @throws IOException 
	 */
	@RequestMapping("/updatestatus")
	public String updatestatus(Integer id,Integer status,String tuikuanInfo,HttpServletResponse response,HttpServletRequest request) throws IOException{
		Order order=service.getid(id);
		if(status==6){
			order.setTuikuanInfo(tuikuanInfo);
		}
		//service.updatestatus(id,status);
		order.setStatus(status);
		service.update(order);
		response.getWriter().print(true);
		return null;
		
	}
	/**
	 * 
	 * @param id 根据订单ID获取订单
	 * @param response
	 * @return
	 * @throws IOException 
	 */
	@RequestMapping("getid")
	public String getid(Integer id,HttpServletResponse response) throws IOException{
		Order order=service.getid(id);
		Logistics logistics=service2.getByOrderId(order.getId());
		order.setLogistics(logistics);
		JSONObject json=JSONObject.fromObject(order);
		response.getWriter().print(json);
		return null;
	}
	/**
	 * 订单模糊查询加分页
	 * @param status
	 * @param name
	 * @param curpage
	 * @param request
	 * @param response
	 * @return
	 * @throws IOException 
	 */
	@RequestMapping("/listpage")
	public String listpage(Integer status,String name,String curpage,HttpServletRequest request,HttpServletResponse response) throws IOException{
		name=name==null?"":name;
		int count=service.count(name,status);
		page page=new page(curpage, count, 10);
		HashMap<String,Object> map = new HashMap<String, Object>();
		map.put("startRecord", page.getStartRecord());
		map.put("pageSize", page.getPageSize());
		map.put("name", name);
		map.put("status", status);
		List<Order> list=service.listpage(map);
		for (Order order : list) {
			Logistics logistics=service2.getByOrderId(order.getId());
			order.setLogistics(logistics);
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
	public String del(Integer id,HttpServletResponse response,HttpServletRequest request) throws IOException{
		boolean addlog = service1.addlog(4, 4, request);
		if(addlog){
			service.del(id);
			service2.del(id);//根据订单Id删除物流信息
			response.getWriter().print(true);
			return null;
		}else{
			response.getWriter().print(false);
			return null;
		}
	}
	/**
	 * 根据订单状态获取订单数量
	 * @param response
	 * @return
	 * @throws IOException
	 */
	@RequestMapping("orderCount")
	public String goodsCount(HttpServletResponse response) throws IOException{
		List<Integer> list=new ArrayList<Integer>();
		int a=service.count("", -1);
		int b=service.count("", 0);
		int c=service.count("", 1);
		int d=service.count("", 2);
		int e=service.count("", 3);
		int f=service.count("", 4);
		int g=service.count("", 5);
		int h=service.count("", 6);
		list.add(a);
		list.add(b);
		list.add(c);
		list.add(d);
		list.add(e);
		list.add(f);
		list.add(g);
		list.add(h);
		JSONArray json=JSONArray.fromObject(list);
		response.getWriter().print(json);
		return null;
	}
	
}
