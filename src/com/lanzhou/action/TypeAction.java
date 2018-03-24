package com.lanzhou.action;

import java.io.IOException;
import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletResponse;

import net.sf.json.JSONArray;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.lanzhou.entity.Type;
import com.lanzhou.entity.Type_next;
import com.lanzhou.service.TypeService;
import com.lanzhou.service.Type_nextService;

@Controller
@RequestMapping("/admintype")
public class TypeAction {
	@Resource
	private TypeService service;
	@Resource
	private Type_nextService service1;
	/**
	 *  添加
	 * @param type
	 * @param response
	 * @return
	 * @throws IOException
	 */
	@RequestMapping("/add")
	public String add(Type type,HttpServletResponse response) throws IOException{
		service.add(type);
		response.getWriter().print(true);
		return null;
	}
	/**
	 * 获取顶级类别list
	 * @param response
	 * @return
	 * @throws IOException
	 */
	@RequestMapping("/list")
	public String list(HttpServletResponse response) throws IOException{
		List<Type> list=service.list();
		JSONArray json=JSONArray.fromObject(list);
		response.getWriter().print(json);
		return null;
	}
	/**
	 * 修改顶级类别
	 * @param type
	 * @param response
	 * @return
	 * @throws IOException
	 */
	@RequestMapping("/update")
	public String update(Type type,HttpServletResponse response) throws IOException{
		service.update(type);
		response.getWriter().print(true);
		return null;
	}
	/**
	 * 删除顶级类别
	 * @param id
	 * @param response
	 * @return
	 * @throws IOException
	 */
	@RequestMapping("/del")
	public String del(Integer id,HttpServletResponse response) throws IOException{
		List<Type_next> list = service1.listBytype_id(id);
		if(list.size()==0){
			service.del(id);
			response.getWriter().print(true);
		}else{
			response.getWriter().print(false);
		}
		return null;
	}

}
