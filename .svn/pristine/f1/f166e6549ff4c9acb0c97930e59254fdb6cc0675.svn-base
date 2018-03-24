package com.lanzhou.action;

import java.io.IOException;
import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletResponse;

import net.sf.json.JSONArray;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.lanzhou.entity.Gift;
import com.lanzhou.service.GiftService;

@Controller
@RequestMapping("/admingift")
public class GiftAction {
	@Resource
	private GiftService service;
	/**
	 * 
	 * @param page_parameter_id 根据每期捐款的id查询捐款list
	 * @param response
	 * @return
	 */
	@RequestMapping("/listBypage_id")
	public List<Gift> listBypage_id(Integer page_parameter_id,HttpServletResponse response) throws IOException{
		List<Gift> list=service.listBypage_id(page_parameter_id);
		JSONArray json=JSONArray.fromObject(list);
		response.getWriter().print(json);
		return null;
	}
	@RequestMapping("/listByuser_id")
	public List<Gift> listByuser_id(Integer user_id,HttpServletResponse response) throws IOException{
		List<Gift> list=service.listByuser_id(user_id);
		JSONArray json=JSONArray.fromObject(list);
		response.getWriter().print(json);
		return null;
	}
}
