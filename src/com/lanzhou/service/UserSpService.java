package com.lanzhou.service;

import java.util.HashMap;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.lanzhou.dao.UserSpDao;
import com.lanzhou.entity.UserSp;

@Service
@Transactional
public class UserSpService {
	@Resource
	private UserSpDao dao;
	/**
	 * 获取入学季用户获奖数量
	 * @param name
	 * @return
	 */
	public int count(String name) {
		// TODO Auto-generated method stub
		return dao.count(name);
	}
	public List<UserSp> listpage(HashMap<String, Object> map) {
		// TODO Auto-generated method stub
		return dao.listpage(map);
	}
	public void add(UserSp userSp) {
		// TODO Auto-generated method stub
		dao.add(userSp);
	}
	public UserSp getPhone(String phone) {
		// TODO Auto-generated method stub
		return dao.getPhone(phone);
	}

}
