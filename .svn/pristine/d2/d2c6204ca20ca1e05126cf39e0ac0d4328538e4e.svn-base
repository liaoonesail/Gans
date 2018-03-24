package com.lanzhou.controller;

import java.io.IOException;
import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletResponse;

import net.sf.json.JSONArray;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.lanzhou.entity.Type;
import com.lanzhou.entity.Type_next_next;
import com.lanzhou.service.TypeService;
import com.lanzhou.service.Type_next_nextService;

@Controller
@RequestMapping("/type")
public class TypeController {
	@Resource
	private TypeService service;
	/**
	 * 获取类别集合
	 * @param response
	 * @return
	 * @throws IOException
	 */
	@RequestMapping("/typeList")
	public String typeList(HttpServletResponse response) throws IOException{
		List<Type> list=service.list();
		JSONArray json=JSONArray.fromObject(list);
		response.getWriter().print(json);
		return null;
	}
	/**
	 * 虚拟卡卷类别集合
	 * @param response
	 * @return
	 * @throws IOException 
	 */
	@RequestMapping("/xuniTypeList")
	public String xuniTypeList(HttpServletResponse response) throws IOException{
		List<Type> list=service.xuniList();
		JSONArray json=JSONArray.fromObject(list);
		response.getWriter().print(json);
		return null;
	}
}
