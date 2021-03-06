package com.lanzhou.controller;

import java.io.IOException;
import java.net.URLDecoder;
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
import com.lanzhou.entity.Goods;
import com.lanzhou.service.AreaService;
import com.lanzhou.service.GoodsService;
import com.lanzhou.util.ReadWriteTxt;

@Controller
@RequestMapping("/goods")
public class GoodsController {

	private GoodsService goodsService;
	private AreaService areaService;

	public GoodsService getGoodsService() {
		return goodsService;
	}
	@Resource
	public void setGoodsService(GoodsService goodsService) {
		this.goodsService = goodsService;
	}
	
	public AreaService getAreaService() {
		return areaService;
	}
	@Resource
	public void setAreaService(AreaService areaService) {
		this.areaService = areaService;
	}
	
	/**
	 * 获取商品详情
	 * @param id
	 * @param response
	 * @return
	 * @throws IOException
	 */
	@RequestMapping("/getGoodsById")
	public String getGoodsById(int id, HttpServletRequest request, HttpServletResponse response) throws IOException{
		Goods goods = goodsService.getid(id);
		String read=ReadWriteTxt.read(goods.getGoods_details(),request);//读取商品商品详情
		goods.setGoods_details(read);
		JSONObject json = JSONObject.fromObject(goods);
		response.getWriter().print(json);
		return null;
	}
	
	/**
	 * 根据大类ID获取商品
	 * @param typeId
	 * @param response
	 * @return
	 * @throws IOException
	 */
	@RequestMapping("/getGoodsByType")
	public String getGoodsByType(int typeId, HttpServletRequest request, HttpServletResponse response) throws IOException{
		HttpSession session = request.getSession();
		Area area = (Area)session.getAttribute("area");
		if(area == null){
			area = areaService.getlanzhou();
		}
		List<Goods> goodsList = goodsService.listBytype_id(typeId, area.getId());
		JSONArray json = JSONArray.fromObject(goodsList);
		response.getWriter().print(json);
		return null;
	}
	
	/**
	 * 根据二级类ID获取商品
	 * @param typeId
	 * @param response
	 * @return
	 * @throws IOException
	 */
	@RequestMapping("/getGoodsByType2")
	public String getGoodsByType2(int typeId, HttpServletRequest request, HttpServletResponse response) throws IOException{
		HttpSession session = request.getSession();
		Area area = (Area)session.getAttribute("area");
		if(area == null){
			area = areaService.getlanzhou();
		}
		List<Goods> goodsList = goodsService.listBytype_next_id(typeId, area.getId());
		JSONArray json = JSONArray.fromObject(goodsList);
		response.getWriter().print(json);
		return null;
	}
	
	/**
	 * 根据三级类ID获取商品
	 * @param typeId
	 * @param response
	 * @return
	 * @throws IOException
	 */
	@RequestMapping("/getGoodsByType3")
	public String getGoodsByType3(int typeId, HttpServletRequest request, HttpServletResponse response) throws IOException{
		HttpSession session = request.getSession();
		Area area = (Area)session.getAttribute("area");
		if(area == null){
			area = areaService.getlanzhou();
		}
		List<Goods> goodsList = goodsService.listBytype_next_next_id(typeId, area.getId());
		JSONArray json = JSONArray.fromObject(goodsList);
		response.getWriter().print(json);
		return null;
	}
	
	/**
	 * 获取推荐商品
	 * @param response
	 * @return
	 * @throws IOException
	 */
	@RequestMapping("/getGoodsByTuijian")
	public String getGoodsByTuijian(String curpage,HttpServletRequest request, HttpServletResponse response) throws IOException{
		HttpSession session = request.getSession();
		Area area = (Area)session.getAttribute("area");
		if(area == null){
			area = areaService.getlanzhou();
		}
		HashMap<String,Object> map1 = new HashMap();
		map1.put("area_id",area.getId());
		map1.put("tuijian",1);
		int count=goodsService.tuijianCount(map1);
		page page=new page(curpage, count, 20);
		HashMap<String,Object> map = new HashMap();
		map.put("startRecord", page.getStartRecord());
		map.put("pageSize", page.getPageSize());
		map.put("area_id",area.getId());
		map.put("tuijian",1);
		List<Goods> goodsList = goodsService.listBytuijian(map);
		map.put("page", page);
		map.put("list", goodsList);
		map.put("count", count);
		JSONArray json = JSONArray.fromObject(map);
		response.getWriter().print(json);
		return null;
	}
	
	/**
	 * 根据商家ID获取商品
	 * @param shopId
	 * @param response
	 * @return
	 * @throws IOException
	 */
	@RequestMapping("/getGoodsByShopId")
	public String getGoodsByShopId(int shopId, HttpServletResponse response) throws IOException{
		List<Goods> goodsList = goodsService.listByshop_id(shopId);
		JSONArray json = JSONArray.fromObject(goodsList);
		response.getWriter().print(json);
		return null;
	}
	
	/**
	 * 获取秒杀中的商品
	 * @param response
	 * @return
	 * @throws IOException
	 */
	@RequestMapping("/getGoodsByMiaosha")
	public String getGoodsByMiaosha(HttpServletResponse response) throws IOException{
		/*List<Goods> goodsList = goodsService.getGoodsByMiaosha();
		JSONArray json = JSONArray.fromObject(goodsList);
		response.getWriter().print(json);*/
		return null;
	}
	
	/**
	 * 获取团购中的商品
	 * @param response
	 * @return
	 * @throws IOException
	 */
	@RequestMapping("/getGoodsByTuangou")
	public String getGoodsByTuangou(HttpServletResponse response) throws IOException{
		/*List<Goods> goodsList = goodsService.getGoodsByTuangou();
		JSONArray json = JSONArray.fromObject(goodsList);
		response.getWriter().print(json);*/
		return null;
	}
	
	/**
	 * 获取减满中的商品
	 * @param response
	 * @return
	 * @throws IOException
	 */
	@RequestMapping("/getGoodsByJianman")
	public String getGoodsByJianman(HttpServletResponse response) throws IOException{
		/*List<Goods> goodsList = goodsService.getGoodsByJianman();
		JSONArray json = JSONArray.fromObject(goodsList);
		response.getWriter().print(json);*/
		return null;
	}
	
	/**
	 * 获取龙支付中的商品
	 * @param response
	 * @return
	 * @throws IOException
	 */
	@RequestMapping("/getGoodsByLongPay")
	public String getGoodsByLongPay(HttpServletResponse response) throws IOException{
		/*List<Goods> goodsList = goodsService.getGoodsByLongPay();
		JSONArray json = JSONArray.fromObject(goodsList);
		response.getWriter().print(json);*/
		return null;
	}
	
	/**
	 * 获取品牌中的商品
	 * @param response
	 * @return
	 * @throws IOException
	 */
	@RequestMapping("/getGoodsByPingpai")
	public String getGoodsByPingpai(HttpServletResponse response) throws IOException{
		/*List<Goods> goodsList = goodsService.getGoodsByPingpai();
		JSONArray json = JSONArray.fromObject(goodsList);
		response.getWriter().print(json);*/
		return null;
	}
	
	/**
	 * 获取搜索中的商品
	 * @param search
	 * @param response
	 * @return
	 * @throws IOException
	 */
	@RequestMapping("/getGoodsBySearch")
	public String getGoodsBySearch(String search, HttpServletResponse response) throws IOException{
		search=URLDecoder.decode(search, "utf-8");
	 List<Goods> goodsList = goodsService.getGoodsBySearch(search);
		JSONArray json = JSONArray.fromObject(goodsList);
		response.getWriter().print(json);
		return null;
	}
}
