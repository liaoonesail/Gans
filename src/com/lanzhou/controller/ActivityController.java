package com.lanzhou.controller;

import java.io.IOException;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletResponse;

import net.sf.json.JSONObject;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.lanzhou.entity.Activity_details;
import com.lanzhou.service.Activity_detailsService;

/**
 * 活动相关
 * @author Administrator
 *
 */
@Controller
@RequestMapping("/activity")
public class ActivityController {
	
	private Activity_detailsService activity_detailsService;

	public Activity_detailsService getActivity_detailsService() {
		return activity_detailsService;
	}
	@Resource
	public void setActivity_detailsService(
			Activity_detailsService activity_detailsService) {
		this.activity_detailsService = activity_detailsService;
	}

	/**
	 * 根据商品ID获取活动详情
	 * @param goodsId
	 * @param response
	 * @return
	 * @throws IOException
	 */
	@RequestMapping("/getActivityByGoods")
	public String getActivityByGoods(Integer goodsId, HttpServletResponse response) throws IOException{
		Activity_details activity = activity_detailsService.getgoods_id(goodsId);
		JSONObject json = JSONObject.fromObject(activity);
		response.getWriter().print(json);
		return null;
	}
}
