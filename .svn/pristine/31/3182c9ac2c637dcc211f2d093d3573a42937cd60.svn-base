package com.lanzhou.action;

import java.io.IOException;
import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletResponse;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.lanzhou.entity.TwelvePrize;
import com.lanzhou.service.TwelvePrizeService;

@Controller
@RequestMapping("/twelvePrize")
public class TwelvePrizeAction {
	@Resource
	private TwelvePrizeService service;
	@RequestMapping("/add")
	/**
	 * 
	 * @param prize 奖品添加
	 * @return
	 */
	public String add(TwelvePrize twelveprize,HttpServletResponse response) throws IOException{
		TwelvePrize twelveprize2=service.getLevel(twelveprize.getLevel());
		int a=0;
		if(twelveprize2==null){
			if(twelveprize.getLevel()==12){
				List<TwelvePrize> list=service.list();
				for (TwelvePrize twelveprize3 : list) {
					a+=twelveprize3.getProbability();
				}
				twelveprize.setProbability(1000-a);
			}
			
			twelveprize.setOverplus(twelveprize.getAmount());
			service.add(twelveprize);
			response.getWriter().print(true);
		}else{
			response.getWriter().print(false);
		}
	
		return null;
	}
	/**
	 * 
	 * @param response 获取奖品list
	 * @return
	 * @throws IOException 
	 */
	@RequestMapping("/list")
	public String list(HttpServletResponse response) throws IOException{
		List<TwelvePrize> list=service.list();
		JSONArray json=JSONArray.fromObject(list);
		response.getWriter().print(json);
		return null;
	}
	/**
	 * 
	 * @param prize 修改奖品
	 * @return
	 * @throws IOException 
	 */
	@RequestMapping("update")
	public String update(TwelvePrize twelveprize,HttpServletResponse response) throws IOException{
		int a=0;
		service.update(twelveprize);
		TwelvePrize twelveprize12 = service.getLevel(12);
		if(twelveprize12!=null){
			List<TwelvePrize> list=service.list();
			for (TwelvePrize twelveprize3 : list) {
				if(twelveprize3.getLevel()!=12){
					a+=twelveprize3.getProbability();
				}
			}
			twelveprize12.setProbability(1000-a);
			service.update(twelveprize12);
		}
		response.getWriter().print(true);
		return null;
	}
	/**
	 * 
	 * @param id 删除单个奖品
	 * @return
	 * @throws IOException 
	 */
	@RequestMapping("/del")
	public String del(Integer id,HttpServletResponse response) throws IOException{
		service.del(id);
		response.getWriter().print(true);
		return null;
	}
	/**
	 * 获取单个奖品
	 * @param id
	 * @param response
	 * @return
	 * @throws IOException 
	 */
	@RequestMapping("/getid")
	public String getid(Integer id,HttpServletResponse response) throws IOException{
		TwelvePrize twelveprize=service.getid(id);
		JSONObject json=JSONObject.fromObject(twelveprize);
		response.getWriter().print(json);
		return null;
		}
	}


