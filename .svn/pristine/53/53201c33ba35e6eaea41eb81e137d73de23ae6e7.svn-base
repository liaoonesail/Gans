package com.lanzhou.service;

import java.util.HashMap;
import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.lanzhou.dao.AdminuserDao;
import com.lanzhou.entity.Adminuser;
import com.lanzhou.entity.Log;
import com.lanzhou.util.OrderNum;
@Service
@Transactional
public class AdminuserService {
	@Resource
	private AdminuserDao dao;
	@Resource
	private LogService service;
	/**
	 * 根据username获取对象
	 * @param username
	 * @return
	 */
	public Adminuser getByusername(String username) {
		return dao.getByusername(username);
	}
	/**
	 * 添加
	 * @param adminuser
	 */
	public void add(Adminuser adminuser) {
		dao.add(adminuser);
	}
	//模糊查询
	public int count(String name) {
		return dao.count(name);
	}
	public List<Adminuser> listpage(HashMap<String, Object> map) {
		return dao.listpage(map);
	}
	public Adminuser getid(Integer id) {
		return dao.getid(id);
	}
	public void update(Adminuser adminuser) {
		dao.update(adminuser);
	}
	public void del(Integer id) {
		dao.del(id);
	}
	public Adminuser getadmin(String username) {
		return dao.getadmin(username);
	}
	/**
	 * 添加日志
	 * @param operation操作 1登陆 2退出 3商品模块 4 订单模块 5 活动模块 6商家模块 7管理员模块
	 * @param way 0登陆 1退出 2添加 3修改 4删除
	 */
	public boolean addlog(int operation,int way,HttpServletRequest request){
		Adminuser adminuser = (Adminuser) request.getSession().getAttribute("adminuser");
		if(adminuser!=null){
			String time=OrderNum.getregTime();
			Log log=new Log(time, operation, adminuser.getId(),way);
			service.add(log);
			return true;
		}else{
			//return false;
			return true;
		}
	}

}
