package com.lanzhou.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import com.lanzhou.entity.SchoolPrize;
@Repository
public class SchoolPrizeDao {
	@Resource
	private SqlSessionTemplate sm;
	public void add(SchoolPrize prize) {
		// TODO Auto-generated method stub
		sm.insert("com.lanzhou.entity.SchoolPrize.add", prize);
	}
	public void delAll() {
		// TODO Auto-generated method stub
		sm.delete("com.lanzhou.entity.SchoolPrize.delAll");
	}
	public int count(String name) {
		// TODO Auto-generated method stub
		return sm.selectOne("com.lanzhou.entity.SchoolPrize.count", name);
	}
	public List<SchoolPrize> listpage(HashMap<String, Object> map) {
		// TODO Auto-generated method stub
		return sm.selectList("com.lanzhou.entity.SchoolPrize.listpage", map);
	}
	public List<SchoolPrize> getPrize(Map<String, Object> map) {
		// TODO Auto-generated method stub
		return sm.selectList("com.lanzhou.entity.SchoolPrize.getPrize", map);
	}
	public List<SchoolPrize> getList(Integer label) {
		// TODO Auto-generated method stub
		return sm.selectList("com.lanzhou.entity.SchoolPrize.getList",label);
	}
	public SchoolPrize getid(Integer id) {
		// TODO Auto-generated method stub
		return sm.selectOne("com.lanzhou.entity.SchoolPrize.getById", id);
	}

}
