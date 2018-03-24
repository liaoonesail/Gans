package com.lanzhou.action;

import java.io.IOException;
import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletResponse;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.lanzhou.entity.Goods;
import com.lanzhou.entity.Type_next_next;
import com.lanzhou.service.GoodsService;
import com.lanzhou.service.Type_next_nextService;

@Controller
@RequestMapping("/admintype_next_next")
public class Type_next_nextAction {
	@Resource
	private Type_next_nextService service;
	@Resource
	private GoodsService service1;
	/**
	 * 
	 * @param type
	 * @param response 添加三级类别
	 * @return
	 * @throws IOException
	 */
	@RequestMapping("/add")
	public String add(Type_next_next type,HttpServletResponse response) throws IOException{
		service.add(type);
		response.getWriter().print(true);
		return null;
	}
	/**
	 * 
	 * @param response
	 * @return          获取三级list
	 * @throws IOException
	 */
	@RequestMapping("/list")
	public String list(HttpServletResponse response) throws IOException{
		List<Type_next_next> list=service.list();
		JSONArray json=JSONArray.fromObject(list);
		response.getWriter().print(json);
		return null;
	}
	/**
	 * 
	 * @param type
	 * @param response 修改
	 * @return
	 * @throws IOException
	 */
	@RequestMapping("/update")
	public String update(Type_next_next type,HttpServletResponse response) throws IOException{
		service.update(type);
		response.getWriter().print(true);
		return null;
	}
	/**
	 * 
	 * @param id
	 * @param response 删除
	 * @return
	 * @throws IOException
	 */
	@RequestMapping("/del")
	public String del(Integer area_id,Integer id,HttpServletResponse response) throws IOException{
		List<Goods> list = service1.listBytype_next_next_id(id, area_id);
		if(list.size()==0){
			service.del(id, area_id);
			response.getWriter().print(true);
		}else{
			response.getWriter().print(false);
		}
		return null;
	}
	/**
	 * 
	 * @param type_next_id 根据二级ID获取三级类别LIST
	 * @param response
	 * @return
	 * @throws IOException
	 */
	@RequestMapping("listBytype_next_id")
	public String listBytype_next_id(Integer type_next_id,HttpServletResponse response) throws IOException{
		List<Type_next_next> list=service.listBytype_next_id(type_next_id);
		JSONArray json=JSONArray.fromObject(list);
		response.getWriter().print(json);
		return null;
	}
	/**
	 * 获取单个对象
	 * @param id
	 * @param response
	 * @return
	 * @throws IOException 
	 */
	@RequestMapping("/getid")
	public String getid(Integer id,HttpServletResponse response) throws IOException{
		Type_next_next type_next_next=service.getid(id);
		JSONObject json=JSONObject.fromObject(type_next_next);
		response.getWriter().print(json);
		return null;
	}
}
