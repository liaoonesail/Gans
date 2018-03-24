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
import com.lanzhou.entity.Mould;
import com.lanzhou.service.GoodsService;
import com.lanzhou.service.MouldService;

@Controller
@RequestMapping("/adminmould")
public class MouldAction {
	@Resource
	private MouldService service;
	@Resource
	private GoodsService service1;
	/**
	 * 
	 * @param mould
	 * @param response 添加模板
	 * @return
	 * @throws IOException 
	 */
	@RequestMapping("/add")
	public String add(Mould mould,HttpServletResponse response) throws IOException{
		service.add(mould);
		response.getWriter().print(true);
		return null;
	}
	/**
	 * 
	 * @param response 获取模板List
	 * @return
	 * @throws IOException 
	 */
	@RequestMapping("/list")
	public String list(HttpServletResponse response) throws IOException{
		List<Mould> list=service.list();
		JSONArray json=JSONArray.fromObject(list);
		response.getWriter().print(json);
		return null;
	}
	/**
	 * 
	 * @param mould 修改模板
	 * @param response
	 * @return
	 * @throws IOException 
	 */
	@RequestMapping("/update")
	public String update(Mould mould,HttpServletResponse response) throws IOException{
		service.update(mould);
		response.getWriter().print(true);
		return null;
	}
	/**
	 * 
	 * @param id
	 * @param response 删除模板
	 * @return
	 * @throws IOException 
	 */
	@RequestMapping("/del")
	public String del(Integer area_id,Integer id,HttpServletResponse response) throws IOException{
		List<Goods> list=service1.listBymould_id(id, area_id);
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
	 * @param id
	 * @param response 根据ID获取mould对象
	 * @return
	 * @throws IOException 
	 */
	@RequestMapping("/getid")
	public String getid(Integer id,HttpServletResponse response) throws IOException{
		Mould mould=service.getid(id);
		JSONObject json=JSONObject.fromObject(mould);
		response.getWriter().print(json);
		return null;
		
	}
}
