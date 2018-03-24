package com.lanzhou.dao;

import java.util.HashMap;
import java.util.List;

import javax.annotation.Resource;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import com.lanzhou.action.AdminuserAction;
import com.lanzhou.entity.Adminuser;
@Repository
public class AdminuserDao {
	@Resource
	private SqlSessionTemplate sm;
	public Adminuser getByusername(String username) {
		return sm.selectOne("com.lanzhou.entity.Adminuser.getByusername", username);
	}
	public void add(Adminuser adminuser) {
		sm.insert("com.lanzhou.entity.Adminuser.add", adminuser);
	}
	public int count(String name) {
		return sm.selectOne("com.lanzhou.entity.Adminuser.count", name);
	}
	public List<Adminuser> listpage(HashMap<String, Object> map) {
		return sm.selectList("com.lanzhou.entity.Adminuser.listpage", map);
	}
	public Adminuser getid(Integer id) {
		return sm.selectOne("com.lanzhou.entity.Adminuser.getById", id);
	}
	public void update(Adminuser adminuser) {
		sm.update("com.lanzhou.entity.Adminuser.update", adminuser);
	}
	public void del(Integer id) {
		sm.delete("com.lanzhou.entity.Adminuser.del", id);
	}
	public Adminuser getadmin(String username) {
		return sm.selectOne("com.lanzhou.entity.Adminuser.getByusername", username);
	}

}
