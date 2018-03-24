package com.lanzhou.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import com.lanzhou.entity.User_prize;

@Repository
public class UserPrizeDao {
	@Resource
	private SqlSessionTemplate sm;
	public int count(Map<String, Object> map) {
		return sm.selectOne("com.lanzhou.entity.User_prize.count",map);
	}
	public List<User_prize> listpage(HashMap<String, Object> map) {
		return sm.selectList("com.lanzhou.entity.User_prize.listpage", map);
	}
	public int add(User_prize user_prize) {
		return sm.insert("com.lanzhou.entity.User_prize.add", user_prize);
	}
	public int updateStatus(Integer id) {
		return sm.update("com.lanzhou.entity.User_prize.updateStatus",id);
	}
	public User_prize getid(Integer id) {
		return sm.selectOne("com.lanzhou.entity.User_prize.getById", id);
	}
	public int del(Integer id) {
		return sm.delete("com.lanzhou.entity.User_prize.del", id);
	}
	public List<User_prize> listByUserId(Integer userId) {
		return sm.selectList("com.lanzhou.entity.User_prize.listByUserId", userId);
	}
	public void update(User_prize prize) {
		// TODO Auto-generated method stub
		sm.update("com.lanzhou.entity.User_prize.update", prize);
	}
	public List<User_prize> list(HashMap<String, Object> map) {
		// TODO Auto-generated method stub
		return sm.selectList("com.lanzhou.entity.User_prize.list", map);
	}
}
