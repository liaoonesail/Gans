package com.lanzhou.controller;

import java.io.IOException;
import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.lanzhou.entity.Address;
import com.lanzhou.entity.User;
import com.lanzhou.service.AddressService;

@Controller
@RequestMapping("/address")
public class AddressController {
	
	private AddressService addressService;

	public AddressService getAddressService() {
		return addressService;
	}
	@Resource
	public void setAddressService(AddressService addressService) {
		this.addressService = addressService;
	}
	
	/**
	 * 添加发货地址
	 * @param realName
	 * @param phone
	 * @param area
	 * @param address
	 * @param request
	 * @param response
	 * @return
	 * @throws IOException
	 */
	@RequestMapping("/addAddress")
	public String addAddress(String realName, String phone, String area, String address, HttpServletRequest request, HttpServletResponse response) throws IOException{
		if(realName == null || "".equals(realName) || phone == null || "".equals(phone) || area == null || "".equals(area) || address == null || "".equals(address)){
			response.getWriter().print("所传数据的格式错误");
		}else{
			HttpSession session = request.getSession();
			User user = (User)session.getAttribute("user");
			if(user == null){
				response.getWriter().print("请先登陆");
				return null;
			}
			Address ad = new Address();
			ad.setAddress(area);
			ad.setDetails(address);
			ad.setPhone(phone);
			ad.setStatus(1);
			ad.setUser_id(user.getId());
			ad.setUser_name(realName);
			int i = addressService.add(ad);
			if(i > 0){
				response.getWriter().print("ok");
			}else{
				response.getWriter().print("添加地址失败，请稍后再试");
			}
		}
		return null;
	}
	
	/**
	 * 修改收货地址
	 * @param id
	 * @param realName
	 * @param phone
	 * @param area
	 * @param address
	 * @param request
	 * @param response
	 * @return
	 * @throws IOException
	 */
	@RequestMapping("/updateAddress")
	public String updateAddress(int id, String realName, String phone, String area, String address, HttpServletRequest request, HttpServletResponse response) throws IOException{
		if(realName == null || "".equals(realName) || phone == null || "".equals(phone) || area == null || "".equals(area) || address == null || "".equals(address)){
			response.getWriter().print("所传数据的格式错误");
		}else{
			HttpSession session = request.getSession();
			User user = (User)session.getAttribute("user");
			if(user == null){
				response.getWriter().print("请先登陆");
				return null;
			}
			Address ad = addressService.getid(id);
			if(ad == null || ad.getUser_id() != user.getId()){
				response.getWriter().print("非法修改");
				return null;
			}
			ad.setAddress(area);
			ad.setDetails(address);
			ad.setPhone(phone);
			ad.setStatus(1);
			ad.setUser_id(user.getId());
			ad.setUser_name(realName);
			int i = addressService.update(ad);
			if(i > 0){
				response.getWriter().print("ok");
			}else{
				response.getWriter().print("添加地址失败，请稍后再试");
			}
		}
		return null;
	}
	
	/**
	 * 删除收货地址
	 * @param id
	 * @param request
	 * @param response
	 * @return
	 */
	@RequestMapping("/deleteAddress")
	public String deleteAddress(int id, HttpServletRequest request, HttpServletResponse response) throws IOException{
		HttpSession session = request.getSession();
		User user = (User)session.getAttribute("user");
		if(user == null){
			response.getWriter().print("请先登陆");
			return null;
		}
		Address ad = addressService.getid(id);
		if(ad == null || ad.getUser_id() != user.getId()){
			response.getWriter().print("非法修改");
			return null;
		}
		int i = addressService.del(id);
		if(i > 0){
			response.getWriter().print("ok");
		}else{
			response.getWriter().print("删除收货地址失败，请稍后再试");
		}
		return null;
	}
	
	/**
	 * 根据Id获取单个
	 * @param id
	 * @param request
	 * @param response
	 * @return
	 * @throws IOException
	 */
	@RequestMapping("/getAddressById")
	public String getAddressById(int id, HttpServletRequest request, HttpServletResponse response) throws IOException{
		HttpSession session = request.getSession();
		User user = (User)session.getAttribute("user");
		if(user == null){
			response.getWriter().print("请先登陆");
			return null;
		}
		Address address = addressService.getid(id);
		JSONObject json = JSONObject.fromObject(address);
		response.getWriter().print(json);
		return null;
	}
	
	/**
	 * 获取登陆用户的所有收货地址
	 * @param request
	 * @param response
	 * @return
	 * @throws IOException
	 */
	@RequestMapping("/getAddressByUser")
	public String getAddressByUser(HttpServletRequest request, HttpServletResponse response) throws IOException{
		HttpSession session = request.getSession();
		User user = (User)session.getAttribute("user");
		if(user == null){
			response.getWriter().print("请先登陆");
			return null;
		}
		List<Address> addressList = addressService.list(user.getId());
		JSONArray json = JSONArray.fromObject(addressList);
		response.getWriter().print(json);
		return null;
	}
	
	/**
	 * 获取用户的默认地址
	 * @param request
	 * @param response
	 * @return
	 * @throws IOException
	 */
	@RequestMapping("/getAddressByStatus")
	public String getAddressByStatus(HttpServletRequest request, HttpServletResponse response) throws IOException{
		HttpSession session = request.getSession();
		User user = (User)session.getAttribute("user");
		if(user == null){
			response.getWriter().print("请先登陆");
			return null;
		}
		Address address = addressService.getuser_id(user.getId());
		JSONObject json = JSONObject.fromObject(address);
		response.getWriter().print(json);
		return null;
	}
}
