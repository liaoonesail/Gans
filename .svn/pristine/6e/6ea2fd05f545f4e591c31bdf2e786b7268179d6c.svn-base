package com.lanzhou.dao;

import java.util.HashMap;
import java.util.List;

import javax.annotation.Resource;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import com.lanzhou.entity.Activity_details;

@Repository
public class Activity_detailsDao {
	@Resource
	private SqlSessionTemplate sm;

	public void add(Activity_details activity_details) {
		// TODO Auto-generated method stub
		sm.insert("com.lanzhou.entity.Activity_details.add", activity_details);
	}

	public void delBygoods_id(Integer goods_id) {
		// TODO Auto-generated method stub
		sm.delete("com.lanzhou.entity.Activity_details.del", goods_id);
	}

	public Activity_details getid(Integer id) {
		// TODO Auto-generated method stub
		return sm.selectOne("com.lanzhou.entity.Activity_details.getById", id);
	}

	public Activity_details getgoods_id(Integer goods_id) {
		// TODO Auto-generated method stub
		return sm.selectOne("com.lanzhou.entity.Activity_details.getgoods_id", goods_id);
	}

	public void updateBygoods_id(Activity_details activity_details) {
		// TODO Auto-generated method stub
		sm.update("com.lanzhou.entity.Activity_details.updateBygoods_id", activity_details);
	}

	public int count(String name) {
		// TODO Auto-generated method stub
		return sm.selectOne("com.lanzhou.entity.Activity_details.count", name);
	}

	public List<Activity_details> listpage(HashMap<String, Object> map) {
		// TODO Auto-generated method stub
		return sm.selectList("com.lanzhou.entity.Activity_details.listpage", map);
	}

	public void del(Integer id) {
		// TODO Auto-generated method stub
		sm.delete("com.lanzhou.entity.Activity_details.del", id);
	}

	public void update(Activity_details details) {
		// TODO Auto-generated method stub
		sm.update("com.lanzhou.entity.Activity_details.update", details);
	}
}
