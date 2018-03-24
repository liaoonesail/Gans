package com.lanzhou.controller;

import java.io.IOException;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletResponse;

import net.sf.json.JSONObject;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.lanzhou.entity.Shop;
import com.lanzhou.service.ShopService;

/**
 * 供应商
 * @author Administrator
 *
 */
@Controller
@RequestMapping("/shop")
public class ShopController {
	
	private ShopService shopService;

	public ShopService getShopService() {
		return shopService;
	}
	@Resource
	public void setShopService(ShopService shopService) {
		this.shopService = shopService;
	}
	
	/**
	 * 获取供应商详情
	 * @param id
	 * @param response
	 * @return
	 * @throws IOException
	 */
	@RequestMapping("/getShopById")
	public String getShopById(int id, HttpServletResponse response) throws IOException{
		Shop shop = shopService.getid(id);
		JSONObject json = JSONObject.fromObject(shop);
		response.getWriter().print(json);
		return null;
	}
}
