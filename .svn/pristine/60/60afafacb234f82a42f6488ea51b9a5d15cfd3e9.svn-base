package com.lanzhou.controller;

import java.io.IOException;
import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletResponse;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.lanzhou.entity.Advertisement;
import com.lanzhou.service.AdvertisementService;

/**
 * 广告图片
 * @author Administrator
 *
 */
@Controller
@RequestMapping("/advert")
public class AdvertController {

	private AdvertisementService advertisementService;

	public AdvertisementService getAdvertisementService() {
		return advertisementService;
	}
	@Resource
	public void setAdvertisementService(AdvertisementService advertisementService) {
		this.advertisementService = advertisementService;
	}
	
	/**
	 * 轮播图集合（one_lb,zzh_lb,long_lb,sr_lb,dfh_lb,shfw_lb,ht_lb,xnkj_lb,tg_lb,tm_lb,xxyl_lb,ms_lb,zc_lb）
	 *        (首页轮播、周周惠轮播、龙支付轮播、善融轮播、地方汇轮播、生活服务轮播、海淘轮播、虚拟卡卷、团购轮播、9.9特卖轮播、休闲娱乐轮播、美食轮播、专场轮播)
	 * @param location
	 * @param response
	 * @return
	 * @throws IOException 
	 */
	@RequestMapping("/lbList")
	public String lbList(String location,HttpServletResponse response) throws IOException{
		List<Advertisement> lbList=advertisementService.lbList(location);
		JSONArray json = JSONArray.fromObject(lbList);
		response.getWriter().print(json);
		return null;
	}
	/**
	 * 根据位置获取单个图片
	 * @param location
	 * @param response
	 * @return
	 * @throws IOException 
	 */
	@RequestMapping("/getOne")
	public String getOne(String location,HttpServletResponse response) throws IOException{
		Advertisement advertisement=advertisementService.getOne(location);
		JSONObject json=JSONObject.fromObject(advertisement);
		response.getWriter().print(json);
		return null;
		
	}
}
