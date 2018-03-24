package com.lanzhou.dao;

import java.util.HashMap;
import java.util.List;

import javax.annotation.Resource;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import com.lanzhou.entity.UserSp;

@Repository
public class UserSpDao {
	@Resource
	private SqlSessionTemplate sm;
	public int count(String name) {
		// TODO Auto-generated method stub
		return sm.selectOne("com.lanzhou.entity.UserSp.count", name);
	}
	public List<UserSp> listpage(HashMap<String, Object> map) {
		// TODO Auto-generated method stub
		return sm.selectList("com.lanzhou.entity.UserSp.listpage", map);
	}
	public void add(UserSp userSp) {
		// TODO Auto-generated method stub
		sm.insert("com.lanzhou.entity.UserSp.add", userSp);
	}
	public UserSp getPhone(String phone) {
		// TODO Auto-generated method stub
		return sm.selectOne("com.lanzhou.entity.UserSp.getPhone", phone);
	}

}
