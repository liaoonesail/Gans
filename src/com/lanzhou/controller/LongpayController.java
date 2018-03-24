package com.lanzhou.controller;

import java.io.IOException;
import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletResponse;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.lanzhou.entity.Goods;
import com.lanzhou.entity.Longpay;
import com.lanzhou.entity.Type;
import com.lanzhou.service.GoodsService;
import com.lanzhou.service.LongpayService;

@Controller
@RequestMapping("/longpay")
public class LongpayController {
	@Resource
	private LongpayService longService;
	@Resource
	private GoodsService goodsService;
	/**
	 * 获取龙支付typelist
	 * @param part
	 * @param response
	 * @return
	 * @throws IOException 
	 */
	@RequestMapping("/getTypeList")
	public String getTypeList(HttpServletResponse response) throws IOException{
		List<Type> list=longService.getTypeList();
		JSONArray json=JSONArray.fromObject(list);
		response.getWriter().print(json);
		return null;
	}
	/**
	 * 根据类别Id获取龙支付商品集合
	 * @param typeId
	 * @param response
	 * @return
	 * @throws IOException
	 */
	@RequestMapping("/longpayList")
	public String longpayList(Integer typeId,HttpServletResponse response) throws IOException{
		List<Longpay> list=longService.list(typeId);
		JSONArray json=JSONArray.fromObject(list);
		response.getWriter().print(json);
		return null;
	}
	/**
	 * 根据龙支付Id获取龙支付活动详情
	 * @param id
	 * @param response
	 * @return
	 * @throws IOException
	 */
	@RequestMapping("/getLongpayId")
	public String getLongpayId(Integer id,HttpServletResponse response) throws IOException{
		Longpay longpay=longService.getid(id);
		JSONObject json=JSONObject.fromObject(longpay);
		response.getWriter().print(json);
		return null;
		
	}
	/**
	 * 根据商品ID获取商品详情
	 * @param goodsId
	 * @param response
	 * @return
	 * @throws IOException
	 */
	@RequestMapping("/getGoodsByGoodsID")
	public String getGoodsByGoodsID(Integer goodsId,HttpServletResponse response) throws IOException{
		Goods goods=goodsService.getid(goodsId);
		JSONObject json=JSONObject.fromObject(goods);
		response.getWriter().print(json);
		return null;
	}
	/**
	 * 根据商品ID获取龙支付活详情
	 * @param goodsId
	 * @param response
	 * @return
	 * @throws IOException
	 */
	@RequestMapping("/getLongpayByGoodsId")
	public String getLongpayByGoodsId(Integer goodsId,HttpServletResponse response) throws IOException{
		if(goodsId==null){
			JSONObject json=JSONObject.fromObject(null);
			response.getWriter().print(json);
			return null;
		}
		Longpay longpay=longService.getByGoodsId(goodsId);
		JSONObject json=JSONObject.fromObject(longpay);
		response.getWriter().print(json);
		return null;
	}
	

}
