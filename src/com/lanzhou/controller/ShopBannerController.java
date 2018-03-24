package com.lanzhou.controller;

import java.io.IOException;
import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletResponse;

import net.sf.json.JSONArray;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.lanzhou.entity.Shop_picture;
import com.lanzhou.service.Shop_pictureService;

@Controller
@RequestMapping("/shopBanner")
public class ShopBannerController {
	@Resource
	private Shop_pictureService pictureService;
	/**
	 * 根据店铺Id获取轮播图集合
	 * @param shop_id
	 * @param response
	 * @return
	 * @throws IOException
	 */
	@RequestMapping("/listByShopId")
	public String listByshop_id(Integer shop_id,HttpServletResponse response) throws IOException{
		List<Shop_picture> list=pictureService.listByshop_id(shop_id);
		JSONArray json=JSONArray.fromObject(list);
		response.getWriter().print(json);
		return null;
	}

}
