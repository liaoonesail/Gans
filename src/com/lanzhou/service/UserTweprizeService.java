package com.lanzhou.service;

import java.util.HashMap;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.lanzhou.dao.UserTweprizeDao;
import com.lanzhou.entity.UserTweprize;

@Service
@Transactional
public class UserTweprizeService {
	@Resource
	private UserTweprizeDao dao;
	public int count(String name) {
		// TODO Auto-generated method stub
		return dao.count(name);
	}
	public List<UserTweprize> listpage(HashMap<String, Object> map) {
		// TODO Auto-generated method stub
		return dao.listpage(map);
	}
	public void add(UserTweprize userTweprize) {
		// TODO Auto-generated method stub
		dao.add(userTweprize);
	}
	public List<UserTweprize> listByUserId(Integer userId) {
		// TODO Auto-generated method stub
		return dao.listByUserId(userId);
	}
	public void del(Integer id) {
		// TODO Auto-generated method stub
		dao.del(id);
	}

}
