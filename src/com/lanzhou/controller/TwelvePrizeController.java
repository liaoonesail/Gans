package com.lanzhou.controller;

import java.io.IOException;
import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletResponse;

import net.sf.json.JSONArray;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.lanzhou.entity.TwelvePrize;
import com.lanzhou.entity.UserTweprize;
import com.lanzhou.service.TwelvePrizeService;
import com.lanzhou.service.UserTweprizeService;
/**
 * 入学季12个奖品转盘controller
 * @author Administrator
 *
 */
@Controller
@RequestMapping("/twePrize")
public class TwelvePrizeController {
	@Resource
	private TwelvePrizeService twelvePrizeService;
	@Resource
	private UserTweprizeService userTweprizeService;
	/**
	 * 获取奖品集合
	 * @param response
	 * @return
	 * @throws IOException
	 */
	@RequestMapping("/prizeList")
	public String prizeList(HttpServletResponse response) throws IOException{
		List<TwelvePrize> prizeList=twelvePrizeService.list();
		JSONArray json=JSONArray.fromObject(prizeList);
		response.getWriter().print(json);
		return null;
	}
	/**
	 * 添加中奖人信息
	 * @param userTweprize
	 * @param response
	 * @return
	 * @throws IOException 
	 */
	@RequestMapping("/add")
	public String add(UserTweprize userTweprize,HttpServletResponse response) throws IOException{
		userTweprizeService.add(userTweprize);
		response.getWriter().print(true);
		return null;
		
	}
	/**
	 * 根据用户Id获取中奖集合
	 * @param userId
	 * @param response
	 * @return
	 * @throws IOException 
	 */
	@RequestMapping("/listByPhone")
	public String listByUserId(Integer userId,HttpServletResponse response) throws IOException{
		List<UserTweprize> list=userTweprizeService.listByUserId(userId);
		for (UserTweprize userTweprize : list) {
			TwelvePrize twelvePrize=twelvePrizeService.getLevel(userTweprize.getPrizeLevel());
			userTweprize.setTwelvePrize(twelvePrize);
		}
		JSONArray json=JSONArray.fromObject(list);
		response.getWriter().print(json);
		return null;
		
	}

}
