package com.lanzhou.controller;

import java.io.IOException;
import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletResponse;

import net.sf.json.JSONArray;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.lanzhou.entity.Prize;
import com.lanzhou.entity.User_prize;
import com.lanzhou.entity.Weiorder;
import com.lanzhou.service.PrizeService;
import com.lanzhou.service.UserPrizeService;
import com.lanzhou.service.WeiorderService;

@Controller
@RequestMapping("/userPrize")
public class UserPrizeController {
	@Resource
	private UserPrizeService upsPrizeService;
	@Resource
	private PrizeService prizeService;
	@Resource
	private WeiorderService weiorderService;
	/**
	 * 根据用户ID获取中奖list
	 * @param userId
	 * @param response
	 * @return
	 * @throws IOException 
	 */
	@RequestMapping("/listByUserId")
	public List<User_prize> listByUserId(Integer userId,HttpServletResponse response) throws IOException{
		List<User_prize> list=upsPrizeService.listByUserId(userId);
		for (User_prize user_prize : list) {
			Prize prize=prizeService.getid(user_prize.getPrize_id());
			user_prize.setPrize(prize);
		}
		JSONArray json=JSONArray.fromObject(list);
		response.getWriter().print(json);
		return null;
	}
	/**
	 * 添加中奖信息
	 * @param prizeId
	 * @param userId
	 * @param orderNum
	 * @param response
	 * @return
	 * @throws IOException
	 */
	@RequestMapping("/add")
	public String add(Integer prizeId,Integer userId,String orderNum,HttpServletResponse response) throws IOException{
		User_prize prize=new User_prize();
		prize.setPrize_id(prizeId);
		prize.setUser_id(userId);
		Weiorder weiorder=weiorderService.getorderNum(orderNum);
		weiorderService.updateisLotto(0,orderNum);
		prize.setArea(weiorder.getArea());
		prize.setPhone(weiorder.getPhone());
		upsPrizeService.add(prize);
		response.getWriter().print(true);
		return null;
	}
}
