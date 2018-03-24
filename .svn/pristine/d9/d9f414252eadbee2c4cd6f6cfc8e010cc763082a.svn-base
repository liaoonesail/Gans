package com.lanzhou.action;

import java.io.IOException;
import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.lanzhou.entity.User;
import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.lanzhou.entity.Area;
import com.lanzhou.service.AreaService;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("/adminarea")
public class AreaAction {
	@Resource
	private AreaService service;
	@Resource
	private AreaService areaService;
	/**
	 * 添加
	 * @param area
	 * @param response
	 * @return
	 * @throws IOException
	 */
	@RequestMapping("/add")
	public String add(Area area,HttpServletResponse response) throws IOException{
		area.setSr_amount(0);
		service.add(area);
		response.getWriter().print(true);
		return null;
	}
	/**
	 * 获取列表list
	 * @param response
	 * @return
	 * @throws IOException 
	 */
	@RequestMapping("/list")
	public String list(HttpServletResponse response) throws IOException{
		List<Area> list=service.list();
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
	public String del(Integer id,HttpServletResponse response) throws IOException{
		service.del(id);
		response.getWriter().print(true);
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
		Area area=service.getid(id);
		JSONObject json=JSONObject.fromObject(area);
		response.getWriter().print(json);
		return null;
	}
	/**
	 * 修改单个地区
	 * @param area
	 * @param response
	 * @return
	 * @throws IOException 
	 */
	@RequestMapping("/update")
	public String update(Area area,HttpServletResponse response) throws IOException{
		service.update(area);
		response.getWriter().print(true);
		return null;
	}

	/**
	 * 修改善融支付点击次数
	 * @param request
	 * @return
	 */
	@RequestMapping("/updateSrAmount")
	public @ResponseBody boolean updateSrAamount(HttpServletRequest request){
		HttpSession session = request.getSession();
		Area area = (Area)session.getAttribute("area");
		if(area == null){
			area = areaService.getlanzhou();
		}
		area.setSr_amount(area.getSr_amount()+1);
		service.updateSrAmount(area);
		return true;
	}
}
