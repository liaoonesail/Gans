package com.lanzhou.controller;

import java.io.IOException;
import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletResponse;

import net.sf.json.JSONArray;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;


import com.lanzhou.entity.Type;
import com.lanzhou.entity.Type_next;
import com.lanzhou.entity.Type_next_next;
import com.lanzhou.service.TypeService;
import com.lanzhou.service.Type_nextService;
import com.lanzhou.service.Type_next_nextService;

@Controller
@RequestMapping("/leibie")
public class LeibieController {

	private TypeService typeService;
	private Type_nextService type_nextService;
	private Type_next_nextService type_next_nextService;
	public TypeService getTypeService() {
		return typeService;
	}
	@Resource
	public void setTypeService(TypeService typeService) {
		this.typeService = typeService;
	}
	public Type_nextService getType_nextService() {
		return type_nextService;
	}
	@Resource
	public void setType_nextService(Type_nextService type_nextService) {
		this.type_nextService = type_nextService;
	}
	public Type_next_nextService getType_next_nextService() {
		return type_next_nextService;
	}
	@Resource
	public void setType_next_nextService(Type_next_nextService type_next_nextService) {
		this.type_next_nextService = type_next_nextService;
	}
	
	/**
	 * 获取所有大类
	 * @param response
	 * @return
	 * @throws IOException
	 */
	@RequestMapping("/getAllType")
	public String getAllType(HttpServletResponse response) throws IOException{
		List<Type> typeList = typeService.list();
		JSONArray json = JSONArray.fromObject(typeList);
		response.getWriter().print(json);
		return null;
	}
	
	/**
	 * 获取所有二级类
	 * @param response
	 * @return
	 * @throws IOException
	 */
	@RequestMapping("/getAllType_next")
	public String getAllType_next(HttpServletResponse response) throws IOException{
		List<Type_next> type_nextList = type_nextService.list();
		JSONArray json = JSONArray.fromObject(type_nextList);
		response.getWriter().print(json);
		return null;
	}
	
	/**
	 * 获取所有三级类
	 * @param response
	 * @return
	 * @throws IOException
	 */
	@RequestMapping("/getAllType_next_next")
	public String getAllType_next_next(HttpServletResponse response) throws IOException{
		List<Type_next_next> type_next_nextList = type_next_nextService.list();
		JSONArray json = JSONArray.fromObject(type_next_nextList);
		response.getWriter().print(json);
		return null;
	}
	
	/**
	 * 根据大类ID获取二级类
	 * @param superId
	 * @param response
	 * @return
	 * @throws IOException
	 */
	@RequestMapping("/getType2ByType")
	public String getType2ByType(int superId, HttpServletResponse response) throws IOException{
		List<Type_next> type_nextList = type_nextService.listBytype_id(superId);
		JSONArray json = JSONArray.fromObject(type_nextList);
		response.getWriter().print(json);
		return null;
	}
	
	/**
	 * 根据大类ID获取三级类
	 * @param superId
	 * @param response
	 * @return
	 * @throws IOException
	 */
	@RequestMapping("/getType3ByType")
	public String getType3ByType(int superId, HttpServletResponse response) throws IOException{
		List<Type_next_next> type_next_nextList = type_next_nextService.listBytype_id(superId);
		JSONArray json = JSONArray.fromObject(type_next_nextList);
		response.getWriter().print(json);
		return null;
	}
	
	/**
	 * 根据二级ID获取三级类
	 * @param superId
	 * @param response
	 * @return
	 * @throws IOException
	 */
	@RequestMapping("/getType3ByType2")
	public String getType3ByType2(int superId, HttpServletResponse response) throws IOException{
		List<Type_next_next> type_next_nextList = type_next_nextService.listBytype_next_id(superId);
		JSONArray json = JSONArray.fromObject(type_next_nextList);
		response.getWriter().print(json);
		return null;
	}
}
