package com.lanzhou.controller;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.lanzhou.util.page;
import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.lanzhou.entity.Area;
import com.lanzhou.entity.Area_picture;
import com.lanzhou.entity.Goods;
import com.lanzhou.entity.Shop;
import com.lanzhou.service.AreaService;
import com.lanzhou.service.Area_pictureService;
import com.lanzhou.service.GoodsService;
import com.lanzhou.service.ShopService;

/**
 * 区域-城市
 * @author Administrator
 *
 */
@Controller
@RequestMapping("/area")
public class AreaController {
	
	private AreaService areaService;
	private GoodsService goodsService;
	private ShopService shopService;
	private Area_pictureService area_pictureService;

	public AreaService getAreaService() {
		return areaService;
	}
	@Resource
	public void setAreaService(AreaService areaService) {
		this.areaService = areaService;
	}

	public GoodsService getGoodsService() {
		return goodsService;
	}
	@Resource
	public void setGoodsService(GoodsService goodsService) {
		this.goodsService = goodsService;
	}
	
	public ShopService getShopService() {
		return shopService;
	}
	@Resource
	public void setShopService(ShopService shopService) {
		this.shopService = shopService;
	}
	
	public Area_pictureService getArea_pictureService() {
		return area_pictureService;
	}
	@Resource
	public void setArea_pictureService(Area_pictureService area_pictureService) {
		this.area_pictureService = area_pictureService;
	}
	
	/**
	 * 获取所有区域
	 * @param response
	 * @return
	 * @throws IOException
	 */
	@RequestMapping("/getArea")
	public String getArea(HttpServletResponse response) throws IOException{
		List<Area> areaList = areaService.list();
		JSONArray json = JSONArray.fromObject(areaList);
		response.getWriter().print(json);
		return null;
	}
	
	/**
	 * 获取该区域的所有商品
	 * @param area
	 * @param response
	 * @return
	 * @throws IOException
	 */
	@RequestMapping("/getAreaGoods")
	public String getAreaGoods(String curpage,Integer area, HttpServletResponse response) throws IOException{
		int count=goodsService.areaCount(area);
		page page=new page(curpage, count, 20);
		HashMap<String,Object> map = new HashMap();
		map.put("startRecord", page.getStartRecord());
		map.put("pageSize", page.getPageSize());
		map.put("area_id",area);
		List<Goods> goodsList = goodsService.listByarea_id(map);
		map.put("page", page);
		map.put("list", goodsList);
		map.put("count", count);
		JSONArray json = JSONArray.fromObject(map);
		response.getWriter().print(json);
		return null;
	}
	
	/**
	 * 获取该区域的所有供应商
	 * @param area 区域ID
	 * @param response
	 * @return
	 * @throws IOException
	 */
	@RequestMapping("/getAreaShop")
	public String getAreaShop(Integer area, HttpServletResponse response) throws IOException{
		List<Shop> shopList = shopService.getlistByarea_id(area);
		JSONArray json = JSONArray.fromObject(shopList);
		response.getWriter().print(json);
		return null;
	}
	
	/**
	 * 改变区域选择
	 * @param area
	 * @param request
	 * @param response
	 * @return
	 * @throws IOException
	 */
	@RequestMapping("/changeArea")
	public String changeArea(Integer area, HttpServletRequest request, HttpServletResponse response) throws IOException{
		Area area2 = areaService.getid(area);
		if(area2 != null){
			HttpSession session = request.getSession();
			session.setAttribute("area", area2);
			response.getWriter().print("ok");
		}else{
			response.getWriter().print("error");
		}
		return null;
	}
	
	/**
	 * 获取用户选择的区域
	 * @param request
	 * @param response
	 * @return
	 * @throws IOException
	 */
	@RequestMapping("/getCheckedArea")
	public String getCheckedArea(HttpServletRequest request, HttpServletResponse response) throws IOException{
		HttpSession session = request.getSession();
		Area area = (Area)session.getAttribute("area");
		if(area == null){
			area = areaService.getlanzhou();
		}
		JSONObject json = JSONObject.fromObject(area);
		response.getWriter().print(json);
		return null;
	}
	
	/**
	 * 获取该区域的广告图片
	 * @param area
	 * @param response
	 * @return
	 * @throws IOException
	 */
	@RequestMapping("/getAreaPic")
	public String getAreaPic(Integer area, HttpServletResponse response) throws IOException{
		List<Area_picture> areaPicList = area_pictureService.getByarea_id(area);
		JSONArray json = JSONArray.fromObject(areaPicList);
		response.getWriter().print(json);
		return null;
	}
}
