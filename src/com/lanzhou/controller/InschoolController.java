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
import com.lanzhou.entity.Inschool;
import com.lanzhou.service.GoodsService;
import com.lanzhou.service.InschoolService;

@Controller
@RequestMapping("/inschool")
public class InschoolController {
	@Resource
	private InschoolService insService;
	@Resource
	private GoodsService goodsService;
	/**
	 * 根据地区Id 和 入学季类别type 和 goodsNum=1获取两个商品（当goodsNum=0时获取所有商品）
	 * @param areaId
	 * @param type 一元、优惠（1、2） 
	 * @param response
	 * @return
	 * @throws IOException 
	 */
	@RequestMapping("/listByareaId")
	public String listByareaId(Integer areaId,Integer type,Integer goodsNum,HttpServletResponse response) throws IOException{
		List<Inschool> list=insService.listByareaId(areaId,type,goodsNum);
		for (Inschool inschool : list) {
			Goods goods=goodsService.getid(inschool.getGoodsId());
			inschool.setGoods(goods);
		}
		JSONArray json=JSONArray.fromObject(list);
		response.getWriter().print(json);
		return null;
	}
	/**
	 * 根据商品Id获取入学季活动详情和商品详情
	 * @param goodsId
	 * @param response
	 * @return
	 * @throws IOException 
	 */
	@RequestMapping("/getByGoodsId")
	public String getByGoodsId(Integer goodsId,HttpServletResponse response) throws IOException{
		Inschool byGoodsId = insService.getByGoodsId(goodsId);
		Goods goods=goodsService.getid(goodsId);
		byGoodsId.setGoods(goods);
		JSONObject json=JSONObject.fromObject(byGoodsId);
		response.getWriter().print(json);
		return null;
		
	}
}
