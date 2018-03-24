package com.lanzhou.dao;

import java.util.HashMap;
import java.util.List;

import javax.annotation.Resource;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import com.lanzhou.entity.UserTweprize;

@Repository
public class UserTweprizeDao {
	@Resource
	private SqlSessionTemplate sm;
	public int count(String name) {
		// TODO Auto-generated method stub
		return sm.selectOne("com.lanzhou.entity.UserTweprize.count", name);
	}
	public List<UserTweprize> listpage(HashMap<String, Object> map) {
		// TODO Auto-generated method stub
		return sm.selectList("com.lanzhou.entity.UserTweprize.listpage", map);
	}
	public void add(UserTweprize userTweprize) {
		// TODO Auto-generated method stub
		sm.insert("com.lanzhou.entity.UserTweprize.add", userTweprize);
	}
	public List<UserTweprize> listByUserId(Integer userId) {
		// TODO Auto-generated method stub
		return sm.selectList("com.lanzhou.entity.UserTweprize.listByUserId", userId);
	}
	public void del(Integer id) {
		// TODO Auto-generated method stub
		sm.delete("com.lanzhou.entity.UserTweprize.del", id);
	}

}
