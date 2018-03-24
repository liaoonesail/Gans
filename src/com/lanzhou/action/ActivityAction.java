package com.lanzhou.action;

import java.io.IOException;
import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import net.sf.json.JSONArray;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.lanzhou.entity.Activity;
import com.lanzhou.service.ActivityService;
import com.lanzhou.service.AdminuserService;

@Controller
@RequestMapping("/adminactivity")
public class ActivityAction {
	@Resource
	private ActivityService service;
	@Resource
	private AdminuserService service1;
	/**
	 * 添加
	 * @param activity
	 * @param response
	 * @return
	 * @throws IOException
	 */
	@RequestMapping("/add")
	public String add(Activity activity,HttpServletResponse response,HttpServletRequest request) throws IOException{
		boolean addlog = service1.addlog(5, 2, request);
		if(addlog){
			service.add(activity);
			response.getWriter().print(true);
			return null;
		}else{
			return "redirect:../GanSuManagement/index.html";
		}
	}
	/**
	 * 获取list
	 * @param response
	 * @return
	 * @throws IOException 
	 */
	@RequestMapping("/list")
	public String list(HttpServletResponse response) throws IOException{
		List<Activity> list=service.list();
		JSONArray json=JSONArray.fromObject(list);
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
		boolean addlog = service1.addlog(5, 4, request);
		if(addlog){
			service.del(id);
			response.getWriter().print(true);
			return null;
		}else{
			return "redirect:../GanSuManagement/index.html";
		}
	}
}
