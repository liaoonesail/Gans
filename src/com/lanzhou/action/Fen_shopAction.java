package com.lanzhou.action;

import java.io.IOException;
import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletResponse;

import net.sf.json.JSONArray;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.lanzhou.entity.Fen_shop;
import com.lanzhou.service.Fen_shopService;

@Controller
@RequestMapping("/adminfen_shop")
public class Fen_shopAction {
	@Resource
	private Fen_shopService service;
	/**
	 * 
	 * @param shop_id
	 * @param response 根据总店ID获取其分店集合
 	 * @return
	 * @throws IOException 
	 */
	@RequestMapping("/listByshop_id")
	public String listByshop_id(Integer shop_id,HttpServletResponse response) throws IOException{
		List<Fen_shop> list=service.listByshop_id(shop_id);
		JSONArray json=JSONArray.fromObject(list);
		response.getWriter().print(json);
		return null;
	}
}
