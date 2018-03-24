package com.lanzhou.controller;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.lanzhou.util.page;
import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.lanzhou.entity.Goods;
import com.lanzhou.entity.Performance;
import com.lanzhou.entity.Type;
import com.lanzhou.service.GoodsService;
import com.lanzhou.service.PerformanceService;

@Controller
/**
 * 专场除开秒杀团购的活动
 * @author Administrator
 *
 */
@RequestMapping("/performance")
public class PerformanceController {
	@Resource
	private PerformanceService perService;
	@Resource
	private GoodsService goodsService;
	/**
	 * 根据类别typeId和专场类型part 获取对应专场集合
	 * @param typeId
	 * @param part
	 * @param response
	 * @return
	 * @throws IOException 
	 */
	@RequestMapping("/performanceList")
	public String performanceList(Integer typeId,Integer part,String curpage,HttpServletResponse response) throws IOException{
		HashMap<String,Object> map1 = new HashMap();
		map1.put("typeId",typeId);
		map1.put("part",part);
		int count =perService.perCount(map1);
		page page=new page(curpage, count, 10);
		HashMap<String,Object> map = new HashMap();
		map.put("startRecord", page.getStartRecord());
		map.put("pageSize", page.getPageSize());
		map.put("typeId",typeId);
		map.put("part",part);
		List<Performance> list=perService.perList(map);
		map.put("page", page);
		map.put("list", list);
		map.put("count", count);
		JSONArray json=JSONArray.fromObject(map);
		response.getWriter().print(json);
		return null;
		
	}
	/**
	 * 根据专场Id获取专场详情
	 * @param id
	 * @param response
	 * @return
	 * @throws IOException
	 */
	@RequestMapping("getPerformanceId")
	public String getPerformanceId(Integer id,HttpServletResponse response) throws IOException{
		Performance performance=perService.getid(id);
		JSONObject json=JSONObject.fromObject(performance);
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
	 * 根据商品Id和 专场类型part 获取专场详情
	 * @param goodsId
	 * @param part
	 * @param response
	 * @return
	 * @throws IOException 
	 */
	@RequestMapping("/getByGoodsId")
	public String getByGoodsId(Integer goodsId,Integer part,HttpServletResponse response) throws IOException{
		Performance performance=perService.getByGoodsId(goodsId,part);
		JSONObject json=JSONObject.fromObject(performance);
		response.getWriter().print(json);
		return null;
	}
	/**
	 * 获所有虚拟商品（后端调用的方法）
	 * @param response
	 * @return
	 * @throws IOException 
	 */
	@RequestMapping("/getInventedGoods")
	public String getInventedGoods(HttpServletResponse response) throws IOException{
		List<Goods> list=goodsService.getInventedGoods();
		JSONArray json=JSONArray.fromObject(list);
		response.getWriter().print(json);
		return null;
	}
	/**
	 * 获取专场typelist
	 * @param part
	 * @param response
	 * @return
	 * @throws IOException 
	 */
	@RequestMapping("/getTypeList")
	public String getTypeList(String part,HttpServletResponse response) throws IOException{
		List<Type> list=perService.getTypeList(part);
		JSONArray json=JSONArray.fromObject(list);
		response.getWriter().print(json);
		return null;
	}
}
