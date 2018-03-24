package com.lanzhou.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import com.lanzhou.entity.Performance;
import com.lanzhou.entity.Type;

@Repository
public class PerformanceDao {
	@Resource
	private SqlSessionTemplate sm;
	public void add(Performance performance) {
		// TODO Auto-generated method stub
		sm.insert("com.lanzhou.entity.Performance.add",performance);
	}
	public int count(Integer part) {
		// TODO Auto-generated method stub
		return sm.selectOne("com.lanzhou.entity.Performance.count", part);
	}
	public List<Performance> listpage(HashMap<String, Object> map) {
		// TODO Auto-generated method stub
		return sm.selectList("com.lanzhou.entity.Performance.listpage", map);
	}
	public Performance getid(Integer id) {
		// TODO Auto-generated method stub
		return sm.selectOne("com.lanzhou.entity.Performance.getById", id);
	}
	public void update(Performance performance) {
		// TODO Auto-generated method stub
		sm.update("com.lanzhou.entity.Performance.update", performance);
	}
	public void del(Integer id) {
		// TODO Auto-generated method stub
		sm.delete("com.lanzhou.entity.Performance.del", id);
	}
	public List<Performance> list(Integer typeId, Integer part) {
		// TODO Auto-generated method stub
		Map<String, Integer> map=new HashMap<String, Integer>();
		map.put("typeId", typeId);
		map.put("part", part);
		return sm.selectList("com.lanzhou.entity.Performance.list", map);
	}
	public Performance getByGoodsId(Integer goodsId, Integer part) {
		// TODO Auto-generated method stub
		Map<String, Integer> map=new HashMap<String, Integer>();
		map.put("goodsId", goodsId);
		map.put("part", part);
		return sm.selectOne("com.lanzhou.entity.Performance.getByGoodsId", map);
	}
	public List<Type> getTypeList(String part) {
		// TODO Auto-generated method stub
		return sm.selectList("com.lanzhou.entity.Performance.getTypeList", part);
	}

	public int perCount(HashMap<String, Object> map) {
		return sm.selectOne("com.lanzhou.entity.Performance.perCount",map);
	}

	public List<Performance> perList(HashMap<String, Object> map) {
		return sm.selectList("com.lanzhou.entity.Performance.perList",map);
	}
}
