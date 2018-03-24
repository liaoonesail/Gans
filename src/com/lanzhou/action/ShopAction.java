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

import com.lanzhou.entity.Fen_shop;
import com.lanzhou.entity.Shop;
import com.lanzhou.service.AdminuserService;
import com.lanzhou.service.Fen_shopService;
import com.lanzhou.service.GoodsService;
import com.lanzhou.service.ShopService;

@Controller
@RequestMapping("/adminshop")
public class ShopAction {
	@Resource
	private ShopService service;
	@Resource
	private Fen_shopService service1;
	@Resource
	private AdminuserService service2;
	@Resource
	private GoodsService service3;
	/**
	 * 
	 * @param shop 添加商家店铺 和 分店
	 * @return
	 * @throws IOException 
	 */
	@RequestMapping("/add")
	public String add(Shop shop,HttpServletResponse response,HttpServletRequest request) throws IOException{
		boolean addlog = service2.addlog(6, 2, request);
		if(addlog){
		if(shop.getPicture_address()!=null){
			String picture = shop.getPicture_address();
			int a=picture.indexOf("src=");
			int b=picture.indexOf("alt=");
			String picture_address=null;
			if(a<b){
				 picture_address = picture.substring(picture.indexOf("src=")+5,picture.indexOf("alt=")-2);
			}else{
				picture_address = picture.substring(picture.indexOf("src=")+5,picture.indexOf("/>")-2);
			}
			shop.setPicture_address(picture_address);
		}
			service.add(shop);
			if(!"@".equals(shop.getFen_shop())){
				String[] split = shop.getFen_shop().split("#");
				for (String string : split) {
					String[] split2 = string.split("@");
					Fen_shop fen_shop = new Fen_shop(split2[0], split2[1], shop.getId());
					service1.add(fen_shop);
				}
			}
			response.getWriter().print(true);
			return null;
		}else{
			response.getWriter().print(false);
			return null;
		}
		
	}
	/**
	 * 
	 * @param response 获取商家列表
	 * @return
	 * @throws IOException 
	 */
	@RequestMapping("list")
	public String list(HttpServletResponse response) throws IOException{
		List<Shop> list=service.list();
		JSONArray json=JSONArray.fromObject(list);
		response.getWriter().print(json);
		return null;
	}
	/**
	 * 获取地区ID
	 * @param id
	 * @param response
	 * @return
	 * @throws IOException 
	 */
	@RequestMapping("/getarea_id")
	public String getarea_id(Integer id,HttpServletResponse response) throws IOException{
		int area_id=service.getarea_id(id);
		response.getWriter().print(area_id);
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
		boolean addlog = service2.addlog(6, 4, request);
		if(addlog){
			service.del(id);
			response.getWriter().print(true);
			return null;
		}else{
			return "redirect:../GanSuManagement/index.html";
		}
		
	}
	/**
	 * 获取单个商家
	 * @param id
	 * @param response
	 * @return
	 * @throws IOException
	 */
	@RequestMapping("/getid")
	public String getid(Integer id,HttpServletResponse response) throws IOException{
		Shop shop=service.getid(id);
		JSONObject json=JSONObject.fromObject(shop);
		response.getWriter().print(json);
		return null;
	}
	/**
	 * 修改
	 * @param shop
	 * @param response
	 * @return
	 * @throws IOException 
	 */
	@RequestMapping("/update")
	public String update(Shop shop,HttpServletResponse response,HttpServletRequest request) throws IOException{
		boolean addlog = service2.addlog(6, 3, request);
		if(addlog){
		if(shop.getPicture_address()!=null){
			String picture = shop.getPicture_address();
			int a=picture.indexOf("src=");
			int b=picture.indexOf("alt=");
			String picture_address=null;
			if(a<b){
				 picture_address = picture.substring(picture.indexOf("src=")+5,picture.indexOf("alt=")-2);
			}else{
				picture_address = picture.substring(picture.indexOf("src=")+5,picture.indexOf("/>")-2);
			}
			shop.setPicture_address(picture_address);
		}
			service.update(shop);
			service3.updateAreaByShop(shop.getId(),shop.getArea_id());
			response.getWriter().print(true);
			return null;
		}else{
			response.getWriter().print(false);
			return null;
		}
	}
	/**
	 * 根据地区id获取商家集合
	 * @param areaId
	 * @param response
	 * @return
	 * @throws IOException
	 */
	@RequestMapping("/getByareaId")
	public String getByareaId(Integer areaId,HttpServletResponse response) throws IOException{
		List<Shop> list=service.getlistByarea_id(areaId);
		JSONArray json=JSONArray.fromObject(list);
		response.getWriter().print(json);
		return null;
	}
}
