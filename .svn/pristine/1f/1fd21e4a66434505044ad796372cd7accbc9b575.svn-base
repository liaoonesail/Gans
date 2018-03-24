package com.lanzhou.dao;

import java.util.HashMap;
import java.util.List;

import javax.annotation.Resource;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import com.lanzhou.entity.Page_parameter;

@Repository
public class Page_parameterDao {
	@Resource
	private SqlSessionTemplate sm;

	public void add(Page_parameter parameter) {
		sm.insert("com.lanzhou.entity.Page_parameter.add", parameter);
	}

	public List<Page_parameter> list() {
		return sm.selectList("com.lanzhou.entity.Page_parameter.list");
	}

	public Page_parameter getid(Integer id) {
		return sm.selectOne("com.lanzhou.entity.Page_parameter.getById", id);
	}

	public void update(Page_parameter parameter) {
		sm.update("com.lanzhou.entity.Page_parameter.update", parameter);
	}

	public void del(Integer id) {
		sm.delete("com.lanzhou.entity.Page_parameter.del", id);
	}

	public int count(String name) {
		return sm.selectOne("com.lanzhou.entity.Page_parameter.count", name);
	}

	public List<Page_parameter> listpage(HashMap<String, Object> map) {
		return sm.selectList("com.lanzhou.entity.Page_parameter.listpage", map);
	}

	public Page_parameter getNewOne() {
		// TODO Auto-generated method stub
		return sm.selectOne("com.lanzhou.entity.Page_parameter.getNewOne");
	}

}
