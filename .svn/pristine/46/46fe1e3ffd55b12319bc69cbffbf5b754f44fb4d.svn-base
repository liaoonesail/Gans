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

import com.lanzhou.entity.Area_picture;
import com.lanzhou.service.Area_pictureService;
import com.lanzhou.util.ReadWriteTxt;

@Controller
@RequestMapping("/adminarea_picture")
public class Area_pictureAction {
	@Resource
	private Area_pictureService service;
	@RequestMapping("/add")
	public String add(Area_picture area_picture,HttpServletResponse response) throws IOException{
		if(area_picture.getPicture_address()!=null){
			String picture = area_picture.getPicture_address();
			int a=picture.indexOf("src=");
			int b=picture.indexOf("alt=");
			String picture_address=null;
			if(a<b){
				 picture_address = picture.substring(picture.indexOf("src=")+5,picture.indexOf("alt=")-2);
			}else{
				picture_address = picture.substring(picture.indexOf("src=")+5,picture.indexOf("/>")-2);
			}
			area_picture.setPicture_address(picture_address);
		}
		service.add(area_picture);
		response.getWriter().print(true);
		return null;
	}
	@RequestMapping("/listByarea_id")
	public String getByarea_id(Integer area_id,HttpServletResponse response) throws IOException{
		List<Area_picture> list=service.getByarea_id(area_id);
		JSONArray json=JSONArray.fromObject(list);
		response.getWriter().print(json);
		return null;
	}
	@RequestMapping("/getid")
	public String getid(Integer id,HttpServletResponse response) throws IOException{
		Area_picture area_picture=service.getid(id);
		JSONObject json=JSONObject.fromObject(area_picture);
		response.getWriter().print(json);
		return null;
	}
	@RequestMapping("/del")
	public String del(Integer id,HttpServletResponse response,HttpServletRequest request) throws IOException{
		Area_picture area_picture=service.getid(id);
		ReadWriteTxt.del(area_picture.getPicture_address(), request);
		service.del(id);
		response.getWriter().print(true);
		return null;
	}
	@RequestMapping("/update")
	public String update(Area_picture area_picture,HttpServletResponse response,HttpServletRequest request) throws IOException{
		if(area_picture.getPicture_address()!=null){
			String picture = area_picture.getPicture_address();
			int a=picture.indexOf("src=");
			int b=picture.indexOf("alt=");
			String picture_address=null;
			if(a<b){
				 picture_address = picture.substring(picture.indexOf("src=")+5,picture.indexOf("alt=")-2);
			}else{
				picture_address = picture.substring(picture.indexOf("src=")+5,picture.indexOf("/>")-2);
			}
			area_picture.setPicture_address(picture_address);
		}
		service.update(area_picture);
		response.getWriter().print(true);
		return null;
	}
}
