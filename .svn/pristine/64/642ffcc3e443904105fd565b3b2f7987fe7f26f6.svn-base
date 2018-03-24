package com.lanzhou.dao;

import java.util.HashMap;
import java.util.List;

import javax.annotation.Resource;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import com.lanzhou.entity.Log;
@Repository
public class LogDao {
	@Resource
	private SqlSessionTemplate sm;
	public int add(Log log) {
		// TODO Auto-generated method stub
		return sm.insert("com.lanzhou.entity.Log.add", log);
	}
	public int count(String name) {
		// TODO Auto-generated method stub
		return sm.selectOne("com.lanzhou.entity.Log.count", name);
	}
	public List<Log> listpage(HashMap<String, Object> map) {
		// TODO Auto-generated method stub
		return sm.selectList("com.lanzhou.entity.Log.listpage", map);
	}
	public void del(Integer id) {
		// TODO Auto-generated method stub
		sm.delete("com.lanzhou.entity.Log.del", id);
	}

}
