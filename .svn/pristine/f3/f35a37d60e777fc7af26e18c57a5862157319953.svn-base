package com.lanzhou.controller;

import java.io.IOException;
import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import net.sf.json.JSONArray;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.lanzhou.entity.Area;
import com.lanzhou.entity.Goods;
import com.lanzhou.entity.Zhouzhou;
import com.lanzhou.service.ActivityService;
import com.lanzhou.service.AreaService;
import com.lanzhou.service.GoodsService;

/**
 * 周周惠
 * @author Administrator
 *
 */
@Controller
@RequestMapping("/weeks")
public class WeekController {

	private GoodsService goodsService;
	private ActivityService activityService;
	private AreaService areaService;

	public GoodsService getGoodsService() {
		return goodsService;
	}
	@Resource
	public void setGoodsService(GoodsService goodsService) {
		this.goodsService = goodsService;
	}
	
	public ActivityService getActivityService() {
		return activityService;
	}
	@Resource
	public void setActivityService(ActivityService activityService) {
		this.activityService = activityService;
	}
	
	public AreaService getAreaService() {
		return areaService;
	}
	@Resource
	public void setAreaService(AreaService areaService) {
		this.areaService = areaService;
	}
	
	/**
	 * 获取最近5周的时间详情
	 * @param response
	 * @return
	 * @throws IOException
	 */
	@RequestMapping("/getWeek")
	public String getWeek(HttpServletResponse response) throws IOException{
		List<Zhouzhou> weekList = activityService.getweek();
		JSONArray json = JSONArray.fromObject(weekList);
		response.getWriter().print(json);
		return null;
	}
	
	/**
	 * 获取对应周的商品列表
	 * @param week 周序号
	 * @param response
	 * @return
	 * @throws IOException
	 */
	@RequestMapping("/getWeekData")
	public String getWeekData(int week, HttpServletRequest request, HttpServletResponse response) throws IOException{
		HttpSession session = request.getSession();
		Area area = (Area)session.getAttribute("area");
		if(area == null){
			area = areaService.getlanzhou();
		}
		List<Goods> goodsList = goodsService.listByzhouzhou(week+"", area.getId());
		JSONArray json = JSONArray.fromObject(goodsList);
		response.getWriter().print(json);
		return null;
	}
}
