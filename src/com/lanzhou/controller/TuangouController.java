package com.lanzhou.controller;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletResponse;

import com.lanzhou.entity.Type;
import com.lanzhou.util.page;
import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.lanzhou.entity.Goods;
import com.lanzhou.entity.Tuangou;
import com.lanzhou.service.GoodsService;
import com.lanzhou.service.TuangouService;

@Controller
@RequestMapping("/tuangou")
public class TuangouController {
	@Resource
	private TuangouService tuangouService;
	@Resource
	private GoodsService goodsService;
	/**
	 * 根据类别ID获取团购商品集合
	 * @param typeId
	 * @param response
	 * @return
	 * @throws IOException
	 */
	@RequestMapping("/tuangouList")
	public String tuangouList(Integer typeId,String curpage,HttpServletResponse response) throws IOException{
		int count =tuangouService.tuanCount(typeId);
		page page =new page(curpage,count,10);
		Map map = new HashMap();
		map.put("startRecord", page.getStartRecord());
		map.put("pageSize", page.getPageSize());
		map.put("typeId",typeId);
		List<Tuangou> list=tuangouService.tuangouList(map);
		map.put("page", page);
		map.put("list", list);
		map.put("count", count);
		JSONArray json=JSONArray.fromObject(map);
		response.getWriter().print(json);
		return null;
	}
	/**
	 *根据团购ID获取团购详情  
	 *里面包含 goods_id
	 * @param id
	 * @param response
	 * @return
	 * @throws IOException
	 */
	@RequestMapping("/getTuangouId")
	public String getTuangouId(Integer id,HttpServletResponse response) throws IOException{
		Tuangou tuangou=tuangouService.getid(id);
		JSONObject json=JSONObject.fromObject(tuangou);
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
	 * 根据商品Id获取团购活动详情
	 * @param goodsId
	 * @param response
	 * @return
	 * @throws IOException 
	 */
	@RequestMapping("/getTuangouByGoodsId")
	public String getTuangouByGoodsId(Integer goodsId,HttpServletResponse response) throws IOException{
		Tuangou tuangou=tuangouService.getByGoodsId(goodsId);
		JSONObject json=JSONObject.fromObject(tuangou);
		response.getWriter().print(json);
		return null;
	}

	/**
	 * 获取团购type集合
	 * @param response
	 * @return
	 */
	@RequestMapping("/getTypeList")
	public String getTypeList(HttpServletResponse response) throws IOException {
		List<Type> typeList=tuangouService.getTypeList();
		JSONArray jsonArray = JSONArray.fromObject(typeList);
		response.getWriter().print(jsonArray);
		return null;
	}
}
