package com.lanzhou.action;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.lanzhou.entity.Adminuser;
import com.lanzhou.entity.Log;
import com.lanzhou.service.AdminuserService;
import com.lanzhou.service.LogService;
import com.lanzhou.util.OrderNum;
import com.lanzhou.util.Utils;
import com.lanzhou.util.page;

@Controller
@RequestMapping("/adminadminuser")
public class AdminuserAction {
	
	@Resource
	private AdminuserService service;
	/**
	 * 添加新的管理员
	 * @param adminuser
	 * @param response
	 * @return
	 * @throws IOException
	 */
	@RequestMapping("/add")
	public String add(Adminuser adminuser,HttpServletResponse response) throws IOException{
		Adminuser adminuser2=service.getByusername(adminuser.getUsername());
		if(adminuser2!=null){
			response.getWriter().print(false);
		}else{
			adminuser.setReg_time(OrderNum.getregTime());
			adminuser.setPassword(Utils.MD5(adminuser.getPassword()));
			service.add(adminuser);
			response.getWriter().print(true);
		}
		return null;
	}
	/**
	 * 获取管理员list 分页
	 * @param name
	 * @param curpage
	 * @param response
	 * @return
	 * @throws IOException 
	 */
	@RequestMapping("/listpage")
	public String listpage(String name,String curpage,HttpServletResponse response) throws IOException{
		name=name==null?"":name;
		int count=service.count(name);
		page page=new page(curpage, count, 10);
		HashMap<String,Object> map = new HashMap<String, Object>();
		map.put("startRecord", page.getStartRecord());
		map.put("pageSize", page.getPageSize());
		map.put("name", name);
		List<Adminuser> list=service.listpage(map);
		map.put("page", page);
		map.put("list", list);
		map.put("count", count);
		JSONArray json=JSONArray.fromObject(map);
		response.getWriter().print(json);
		return null;
	}
	/**
	 * 根据ID获取管理员对象
	 * @param id
	 * @param response
	 * @return
	 * @throws IOException 
	 */
	@RequestMapping("/getid")
	public String getid(Integer id,HttpServletResponse response) throws IOException{
		Adminuser adminuser=service.getid(id);
		JSONObject json=JSONObject.fromObject(adminuser);
		response.getWriter().print(json);
		return null;
	}
	/**
	 * 修改
	 * @param adminuser
	 * @param response
	 * @return
	 * @throws IOException
	 */
	@RequestMapping("/update")
	public String update(Adminuser adminuser,HttpServletResponse response) throws IOException{
		adminuser.setPassword(Utils.MD5(adminuser.getPassword()));
		service.update(adminuser);
		response.getWriter().print(true);
		return null;
	}
	/**
	 * 删除
	 * @param id
	 * @param response
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
	 * 登陆
	 * @param adminname
	 * @param password
	 * @param request
	 * @return
	 * @throws IOException 
	 */
	@RequestMapping("/login")
	public String login(String username,String password,HttpServletResponse response,HttpServletRequest request) throws IOException{
		Adminuser adminuser=service.getadmin(username);
		if(adminuser==null){
			response.getWriter().print(false);
			return null;
		}else if(adminuser.getPassword().equals(Utils.MD5(password))){
			String time=OrderNum.getregTime();
			adminuser.setLogin_time(time);
			service.update(adminuser);
			//request.getSession().invalidate();
			request.getSession().setAttribute("adminuser", adminuser);
			service.addlog(1, 0, request);
			response.getWriter().print(true);
			return null;
			}else{
				response.getWriter().print(false);
				return null;
			}
	}
	/**
	 * 退出登陆
	 * @param response
	 * @param request
	 * @return
	 * @throws IOException
	 */
	@RequestMapping("/logout")
	public String logout(HttpServletResponse response,HttpServletRequest request) throws IOException{
		service.addlog(2, 1,request);
		request.getSession().removeAttribute("adminuser");
		response.getWriter().print(true);
		return null;
	}
	
}
