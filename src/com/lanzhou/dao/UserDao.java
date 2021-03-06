package com.lanzhou.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import com.lanzhou.entity.Shuju;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import com.lanzhou.entity.User;

@Repository
public class UserDao {
	@Resource
	private SqlSessionTemplate sm;
	private List<Shuju> shuju;

	/**
	 * 
	 * @param user 会员注册
	 * @return
	 */
	public int reg(User user) {
		// TODO Auto-generated method stub
		return sm.insert("com.lanzhou.entity.User.reg", user);
	}
	/**
	 * 
	 * @param phone 根据用户手机号查询
	 * @return
	 */
	public User getphone(String phone) {
		// TODO Auto-generated method stub
		return sm.selectOne("com.lanzhou.entity.User.getphone", phone);
	}
	public int update(User user){
		return sm.update("com.lanzhou.entity.User.update", user);
	}
	public User getid(Integer id) {
		// TODO Auto-generated method stub
		return sm.selectOne("com.lanzhou.entity.User.getById", id);
	}
	public List<User> list() {
		// TODO Auto-generated method stub
		return sm.selectList("com.lanzhou.entity.User.list");
	}
	public int count(String name) {
		// TODO Auto-generated method stub
		return sm.selectOne("com.lanzhou.entity.User.count", name);
	}
	public List<User> listpage(HashMap<String, Object> map) {
		// TODO Auto-generated method stub
		return sm.selectList("com.lanzhou.entity.User.listpage", map);
	}
	public void del(Integer id) {
		// TODO Auto-generated method stub
		sm.delete("com.lanzhou.entity.User.del", id);
	}
	public int updateHead(User user) {
		// TODO Auto-generated method stub
		return sm.update("com.lanzhou.entity.User.updateHead", user);
	}

	public List<Shuju> getShuju(Map<String, Object> map) {
		return sm.selectList("com.lanzhou.entity.User.getShuju",map);
	}
}
