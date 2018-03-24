package com.lanzhou.action;

import java.io.IOException;
import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletResponse;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.lanzhou.entity.Prize;
import com.lanzhou.service.PrizeService;

@Controller
@RequestMapping("/adminprize")
public class PrizeAction {
	@Resource
	private PrizeService service;
	@RequestMapping("/add")
	/**
	 * 
	 * @param prize 奖品添加
	 * @return
	 */
	public String add(Prize prize,HttpServletResponse response) throws IOException{
		Prize prize2=service.getLevel(prize.getLevel());
		int a=0;
		if(prize2==null){
			if(prize.getLevel()==6){
				List<Prize> list=service.list();
				for (Prize prize3 : list) {
					a+=prize3.getProbability();
				}
				prize.setProbability(1000-a);
			}
			
			prize.setOverplus(prize.getAmount());
			service.add(prize);
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
		List<Prize> list=service.list();
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
	public String update(Prize prize,HttpServletResponse response) throws IOException{
		int a=0;
		service.update(prize);
		Prize prize6 = service.getLevel(6);
		if(prize6!=null){
			List<Prize> list=service.list();
			for (Prize prize3 : list) {
				if(prize3.getLevel()!=6){
					a+=prize3.getProbability();
				}
			}
			prize6.setProbability(1000-a);
			service.update(prize6);
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
		Prize prize=service.getid(id);
		JSONObject json=JSONObject.fromObject(prize);
		response.getWriter().print(json);
		return null;
		}
	}
