package com.lanzhou.controller;

import java.io.IOException;
import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletResponse;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.lanzhou.entity.SchoolPrize;
import com.lanzhou.entity.UserSp;
import com.lanzhou.service.SchoolPrizeService;
import com.lanzhou.service.UserSpService;
import com.lanzhou.util.OrderNum;

@Controller
@RequestMapping("/userSp")
public class UserSpController {
	@Resource
	private UserSpService uspService;
	@Resource
	private SchoolPrizeService spService;
	/**
	 * 前端异步调用 输入签约手机号 成功返回中奖信息 失败返回（失败有两种情况一种是手机号错误，另一种是此手机号已经领取）
	 * @param phone
	 * @param user_id
	 * @param response
	 * @return
	 * @throws IOException
	 */
	@RequestMapping("/getPrize")
	public String getPrize(String phone,Integer label,HttpServletResponse response) throws IOException{
		List<SchoolPrize> list=spService.getPrize(phone,label);
		if(list.size()>0){
			UserSp userSp=uspService.getPhone(phone);
			if(userSp==null){
				SchoolPrize schoolPrize=list.get(0);
				uspService.add( new UserSp(phone, schoolPrize.getId(), OrderNum.getregTime(), 1));
				JSONObject json=JSONObject.fromObject(schoolPrize);
				response.getWriter().print(true);
			}else{
				response.getWriter().print("此手机号已经领取礼品！");
			}
			
		}else{
			response.getWriter().print("签约手机号或领取区域选择错误！");
		}
		return null;
	}
	/**
	 * 根据label标签（1、2）{学生、家长}获取所有中奖人的信息
	 * @param response
	 * @param label
	 * @return
	 * @throws IOException 
	 */
	@RequestMapping("/getList")
	public String getList(Integer label,HttpServletResponse response) throws IOException{
		List<SchoolPrize> spList=spService.getList(label);
		for (SchoolPrize schoolPrize : spList) {
			UserSp userSp = uspService.getPhone(schoolPrize.getPhone());
			schoolPrize.setTime(userSp.getTime());
		}
		JSONArray json=JSONArray.fromObject(spList);
		response.getWriter().print(json);
		return null;
	}
	
}
