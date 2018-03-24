package com.lanzhou.action;

import java.io.IOException;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletResponse;

import net.sf.json.JSONObject;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.lanzhou.entity.Address;
import com.lanzhou.service.AddressService;

@Controller
@RequestMapping("/adminaddress")
public class AddressAction {
	@Resource
	private AddressService service;
	@RequestMapping("/getuser_id")
	/**
	 * 
	 * @param user_id 获取用户默认地址
	 * @return
	 */
	public String getuser_id(Integer user_id,HttpServletResponse response) throws IOException{
		Address address=service.getuser_id(user_id);
		JSONObject json=JSONObject.fromObject(address);
		response.getWriter().print(json);
		return null;
	}
	

}
