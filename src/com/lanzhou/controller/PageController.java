package com.lanzhou.controller;

import java.io.IOException;
import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletResponse;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.lanzhou.entity.Page_parameter;
import com.lanzhou.service.Page_parameterService;

@Controller
@RequestMapping("/pageParameter")
public class PageController {
	@Resource
	private Page_parameterService parameterService;
	/**
	 * 获取往期爱心集合
	 * @param response
	 * @return
	 * @throws IOException
	 */
	@RequestMapping("/listParameter")
	public String listParameter(HttpServletResponse response) throws IOException{
		List<Page_parameter> list = parameterService.list();
		JSONArray json=JSONArray.fromObject(list);
		response.getWriter().print(json);
		return null;
	}
	/**
	 *根据往期爱心ID获取单个详情对象
	 * @param id
	 * @param response
	 * @return
	 * @throws IOException
	 */
	@RequestMapping("/getid")
	public String getid(Integer id,HttpServletResponse response) throws IOException{
		Page_parameter parameter = parameterService.getid(id);
		JSONObject json=JSONObject.fromObject(parameter);
		response.getWriter().print(json);
		return null;
	}

}
