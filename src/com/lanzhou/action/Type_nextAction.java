package com.lanzhou.action;

import java.io.IOException;
import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletResponse;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.lanzhou.entity.Type_next;
import com.lanzhou.entity.Type_next_next;
import com.lanzhou.service.Type_nextService;
import com.lanzhou.service.Type_next_nextService;

@Controller
@RequestMapping("/admintype_next")
public class Type_nextAction {
	@Resource
	private Type_nextService service;
	@Resource
	private Type_next_nextService service1;
	/**
	 * 
	 * @param type
	 * @param response 添加
	 * @return
	 * @throws IOException
	 */
	@RequestMapping("/add")
	public String add(Type_next type,HttpServletResponse response) throws IOException{
		service.add(type);
		response.getWriter().print(true);
		return null;
	}
	/**
	 * 
	 * @param response 二级类别list
	 * @return
	 * @throws IOException
	 */
	@RequestMapping("/list")
	public String list(HttpServletResponse response) throws IOException{
		List<Type_next> list=service.list();
		JSONArray json=JSONArray.fromObject(list);
		response.getWriter().print(json);
		return null;
	}
	/**
	 * 
	 * @param type 修改二级类别
	 * @param response
	 * @return
	 * @throws IOException
	 */
	@RequestMapping("/update")
	public String update(Type_next type,HttpServletResponse response) throws IOException{
		service.update(type);
		response.getWriter().print(true);
		return null;
	}
	/**
	 * 
	 * @param id
	 * @param response 删除二级类别
 	 * @return
	 * @throws IOException
	 */
	@RequestMapping("/del")
	public String del(Integer id,HttpServletResponse response) throws IOException{
		List<Type_next_next> list = service1.listBytype_next_id(id);
		if(list.size()==0){
			service.del(id);
			response.getWriter().print(true);
		}else{
			response.getWriter().print(false);
		}
		return null;
	}
	/**
	 * 
	 * @return 根据顶级ID查询二级类别
	 * @throws IOException 
	 */
	@RequestMapping("/listBytype_id")
	public String listBytype_id(Integer type_id,HttpServletResponse response) throws IOException{
		List<Type_next> list=service.listBytype_id(type_id);
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
		Type_next type_next=service.getid(id);
		JSONObject json=JSONObject.fromObject(type_next);
		response.getWriter().print(json);
		return null;
	}
}
