package com.lanzhou.dao;

import java.util.HashMap;
import java.util.List;

import javax.annotation.Resource;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import com.lanzhou.entity.Problems;
@Repository
public class ProblemsDao {
	@Resource
	private SqlSessionTemplate sm;
	public void add(Problems problems) {
		// TODO Auto-generated method stub
		sm.insert("com.lanzhou.entity.Problems.add", problems);
	}
	public Problems getid(Integer id) {
		// TODO Auto-generated method stub
		return sm.selectOne("com.lanzhou.entity.Problems.getById", id);
	}
	public List<Problems> list(String name) {
		// TODO Auto-generated method stub
		return sm.selectList("com.lanzhou.entity.Problems.list",name);
	}
	public void update(Problems problems) {
		// TODO Auto-generated method stub
		sm.update("com.lanzhou.entity.Problems.update", problems);
	}
	public void del(Integer id) {
		// TODO Auto-generated method stub
		sm.delete("com.lanzhou.entity.Problems.del", id);
	}
	public int count(String name) {
		// TODO Auto-generated method stub
		return sm.selectOne("com.lanzhou.entity.Problems.count", name);
	}
	public List<Problems> listpage(HashMap<String, Object> map) {
		// TODO Auto-generated method stub
		return sm.selectList("com.lanzhou.entity.Problems.listpage", map);
	}

}
