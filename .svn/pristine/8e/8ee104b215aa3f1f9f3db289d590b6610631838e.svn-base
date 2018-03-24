package com.lanzhou.action;

import java.io.IOException;
import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.lanzhou.entity.User;
import com.lanzhou.entity.Weibg_picture;
import com.lanzhou.service.WeibgPictureService;
import com.lanzhou.util.OrderNum;
import com.lanzhou.util.ReadWriteTxt;

@Controller
@RequestMapping("/adminbgpicture")
public class Weibg_pictureAction {
	
	@Resource
	private WeibgPictureService service;
	
	@RequestMapping("/add")
	public String add(Weibg_picture weibg_picture,HttpServletRequest request,HttpServletResponse response) throws IOException{
		if(weibg_picture.getPic_address()!=null){
			String path = weibg_picture.getPic_address();
			int a=path.indexOf("src=");
			int b=path.indexOf("alt=");
			String picture_address=null;
			if(a<b){
				 picture_address = path.substring(path.indexOf("src=")+5,path.indexOf("alt=")-2);
			}else{
				picture_address = path.substring(path.indexOf("src=")+5,path.indexOf("/>")-2);
			}
			weibg_picture.setPic_address(picture_address);
		}
		service.del();
		service.add(weibg_picture);
		response.getWriter().print(true);
		return null;
	}
	
	/**
	 * 根据用户Id获取单个用户对象
	 * @param id
	 * @param response
	 * @return
	 * @throws IOException
	 */
	@RequestMapping("/getid")
	public String getid(Integer id,HttpServletResponse response) throws IOException{
		Weibg_picture weibg_picture=service.getid(id);
		JSONObject json=JSONObject.fromObject(weibg_picture);
		response.getWriter().print(json);
		return null;
	}
	
	/*@RequestMapping("/del")
	public String del(Integer id,HttpServletResponse response,HttpServletRequest request) throws IOException{
		Weibg_picture weibg_picture=service.getid(id);
		ReadWriteTxt.del(weibg_picture.getPic_address(), request);
		service.del(id);
		response.getWriter().print(true);
		return null;
	}*/
	@RequestMapping("/list")
	public String list(HttpServletResponse response) throws IOException{
		List<Weibg_picture> list=service.list();
		Weibg_picture picture=list.get(0);
		JSONObject json=JSONObject.fromObject(picture);
		response.getWriter().print(json);
		return null;
	}
}
