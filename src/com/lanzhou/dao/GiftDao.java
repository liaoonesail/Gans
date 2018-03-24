package com.lanzhou.dao;

import java.util.List;

import javax.annotation.Resource;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import com.lanzhou.entity.Gift;

@Repository
public class GiftDao {
	@Resource
	private SqlSessionTemplate sm;

	public int add(Gift gift) {
		// TODO Auto-generated method stub
		return sm.insert("com.lanzhou.entity.Gift.gift", gift);
	}

	public List<Gift> listBypage_id(Integer page_parameter_id) {
		// TODO Auto-generated method stub
		return sm.selectList("com.lanzhou.entity.Gift.listBypage_id", page_parameter_id);
	}

	public List<Gift> listByuser_id(Integer user_id) {
		// TODO Auto-generated method stub
		return sm.selectList("com.lanzhou.entity.Gift.listByuser_id", user_id);
	}
}
