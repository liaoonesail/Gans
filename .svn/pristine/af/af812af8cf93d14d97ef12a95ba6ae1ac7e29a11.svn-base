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

import com.lanzhou.entity.Shop_picture;
import com.lanzhou.service.Shop_pictureService;
import com.lanzhou.util.ReadWriteTxt;

@Controller
@RequestMapping("/adminshop_picture")
public class Shop_pictureAction {
	@Resource
	private Shop_pictureService service;
	@RequestMapping("/add")
	public String add(Shop_picture shop_picture,HttpServletResponse response) throws IOException{
		if(shop_picture.getPicture_address()!=null){
			String picture = shop_picture.getPicture_address();
			int a=picture.indexOf("src=");
			int b=picture.indexOf("alt=");
			String picture_address=null;
			if(a<b){
				 picture_address = picture.substring(picture.indexOf("src=")+5,picture.indexOf("alt=")-2);
			}else{
				picture_address = picture.substring(picture.indexOf("src=")+5,picture.indexOf("/>")-2);
			}
			shop_picture.setPicture_address(picture_address);
		}
		service.add(shop_picture);
		response.getWriter().print(true);
		return null;
	}
	@RequestMapping("/listByshop_id")
	public String listByshop_id(Integer shop_id,HttpServletResponse response) throws IOException{
		List<Shop_picture> list=service.listByshop_id(shop_id);
		JSONArray json=JSONArray.fromObject(list);
		response.getWriter().print(json);
		return null;
	}
	@RequestMapping("/getid")
	public String getid(Integer id,HttpServletResponse response) throws IOException{
		Shop_picture shop_picture=service.getid(id);
		JSONObject json=JSONObject.fromObject(shop_picture);
		response.getWriter().print(json);
		return null;
	}
	@RequestMapping("/del")
	public String del(Integer id,HttpServletResponse response,HttpServletRequest request) throws IOException{
		Shop_picture shop_picture=service.getid(id);
		ReadWriteTxt.del(shop_picture.getPicture_address(), request);
		service.del(id);
		response.getWriter().print(true);
		return null;
	}
	@RequestMapping("/update")
	public String update(Shop_picture shop_picture,HttpServletRequest request,HttpServletResponse response) throws IOException{
		if(shop_picture.getPicture_address()!=null){
			String picture = shop_picture.getPicture_address();
			int a=picture.indexOf("src=");
			int b=picture.indexOf("alt=");
			String picture_address=null;
			if(a<b){
				 picture_address = picture.substring(picture.indexOf("src=")+5,picture.indexOf("alt=")-2);
			}else{
				picture_address = picture.substring(picture.indexOf("src=")+5,picture.indexOf("/>")-2);
			}
			shop_picture.setPicture_address(picture_address);
		}
		service.update(shop_picture);
		response.getWriter().print(true);
		return null;
	}
}
