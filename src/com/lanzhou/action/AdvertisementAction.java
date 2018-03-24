package com.lanzhou.action;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.lanzhou.entity.Advertisement;
import com.lanzhou.service.AdvertisementService;
import com.lanzhou.util.ReadWriteTxt;
import com.lanzhou.util.page;

@Controller
@RequestMapping("/advertisement")
public class AdvertisementAction {
	
	@Resource
	private AdvertisementService service;
	
	@RequestMapping("/add")
	public String add(Advertisement advertisement,HttpServletRequest request,HttpServletResponse response) throws IOException{
		Advertisement one = service.getOne(advertisement.getAd_address());
		if(one==null){
			if(advertisement.getAd_path()!=null){
				String path = advertisement.getAd_path();
				int a=path.indexOf("src=");
				int b=path.indexOf("alt=");
				String picture_address=null;
				if(a<b){
					 picture_address = path.substring(path.indexOf("src=")+5,path.indexOf("alt=")-2);
				}else{
					picture_address = path.substring(path.indexOf("src=")+5,path.indexOf("/>")-2);
				}
				advertisement.setAd_path(picture_address);
			}
			service.add(advertisement);
			response.getWriter().print(true);
		}else{
			response.getWriter().print(false);
		}
		
		return null;
	}
	
	@RequestMapping("/del")
	public String del(Integer id,HttpServletResponse response,HttpServletRequest request) throws IOException{
		Advertisement advertisement = service.getid(id);
		ReadWriteTxt.del(advertisement.getAd_path(), request);
		service.del(id);
		response.getWriter().print(true);
		return null;
	}
	
	@RequestMapping("/update")
	public String update(Advertisement advertisement,HttpServletResponse response) throws IOException{
		if(advertisement.getAd_path() != null){
			String path = advertisement.getAd_path();
			int a=path.indexOf("src=");
			int b=path.indexOf("alt=");
			String picture_address=null;
			if(a<b){
				 picture_address = path.substring(path.indexOf("src=")+5,path.indexOf("alt=")-2);
			}else{
				picture_address = path.substring(path.indexOf("src=")+5,path.indexOf("/>")-2);
			}
			advertisement.setAd_path(picture_address);
		}
		service.update(advertisement);
		response.getWriter().print(true);
		return null;
	}
	
	@RequestMapping("/listpage")
	public String listpage(String name,String curpage,HttpServletRequest request,HttpServletResponse response) throws IOException{
		name=name==null?"":name;
		int count = service.count(name);
		page page = new page(curpage,count,10);
		HashMap<String, Object> map = new HashMap<String, Object>();
		map.put("startRecord", page.getStartRecord());
		map.put("pageSize", page.getPageSize());
		map.put("name", name);
		List<Advertisement> list = service.listpage(map);
		map.put("page", page);
		map.put("list", list);
		map.put("count", count);
		JSONArray json = JSONArray.fromObject(map);
		response.getWriter().println(json);
		return null;
	}
	
	@RequestMapping("/getid")
	public String getid(Integer id,HttpServletRequest request,HttpServletResponse response) throws IOException{
		Advertisement advertisement = service.getid(id);
		JSONObject json = JSONObject.fromObject(advertisement);
		response.getWriter().print(json);
		return null;
	}
	
}
