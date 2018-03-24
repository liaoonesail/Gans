package com.lanzhou.action;

import java.io.IOException;
import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletResponse;

import net.sf.json.JSONArray;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.lanzhou.entity.MiaoshaDay;
import com.lanzhou.service.MiaoshaDayService;
import com.lanzhou.util.OrderNum;

@Controller
@RequestMapping("/adminMiaoshaDay")
public class MiaoshaDayAction {
	@Resource
	private MiaoshaDayService miaoService;
	/**
	 * 添加秒杀时间段
	 * @param miaoshaDay
	 * @param response
	 * @return
	 * @throws IOException 
	 */
	@RequestMapping("/add")
	public String add(MiaoshaDay miaoshaDay,HttpServletResponse response) throws IOException{
		String startTime=miaoshaDay.getStartTime().split(" ")[1];
		String endTime=miaoshaDay.getEndTime().split(" ")[1];
		miaoshaDay.setStartTime(startTime);
		miaoshaDay.setEndTime(endTime);
		boolean b = OrderNum.largerTime(startTime, endTime, "HH:mm:ss");
		if(b){
			miaoService.add(miaoshaDay);			
			response.getWriter().print(true);
		}else{
			response.getWriter().print(false);
		}
		return null;
	}
	/**
	 * 
	 * @param id
	 * @param response
	 * @return
	 * @throws IOException 
	 */
	@RequestMapping("/del")
	public String getid(Integer id,HttpServletResponse response) throws IOException{
		miaoService.del(id);
		response.getWriter().print(true);
		return null;
	}
	/**
	 * 获取时间段集合
	 * @param response
	 * @return
	 * @throws IOException 
	 */
	@RequestMapping("list")
	public String list(HttpServletResponse response) throws IOException{
		List<MiaoshaDay> list=miaoService.list();
		JSONArray json=JSONArray.fromObject(list);
		response.getWriter().print(json);
		return null;
	}

}
