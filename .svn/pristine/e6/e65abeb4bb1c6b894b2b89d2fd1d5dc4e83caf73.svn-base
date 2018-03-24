package com.lanzhou.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import com.lanzhou.entity.Inschool;
@Repository
public class InschoolDao {
	@Resource
	private SqlSessionTemplate sm;
	public Inschool getByGoodsId(int goodsId) {
		// TODO Auto-generated method stub
		return sm.selectOne("com.lanzhou.entity.Inschool.getByGoodsId", goodsId);
	}
	public void add(Inschool inschool) {
		// TODO Auto-generated method stub
		sm.insert("com.lanzhou.entity.Inschool.add", inschool);
	}
	public int count() {
		// TODO Auto-generated method stub
		return sm.selectOne("com.lanzhou.entity.Inschool.count");
	}
	public List<Inschool> listpage(HashMap<String, Object> map) {
		// TODO Auto-generated method stub
		return sm.selectList("com.lanzhou.entity.Inschool.listpage", map);
	}
	public Inschool getid(Integer id) {
		// TODO Auto-generated method stub
		return sm.selectOne("com.lanzhou.entity.Inschool.getById", id);
	}
	public void update(Inschool inschool) {
		// TODO Auto-generated method stub
		sm.update("com.lanzhou.entity.Inschool.update", inschool);
	}
	public void del(Integer id) {
		// TODO Auto-generated method stub
		sm.delete("com.lanzhou.entity.Inschool.del",id);
	}
	public List<Inschool> listByareaId(Map<String, Integer> map) {
		// TODO Auto-generated method stub
		return sm.selectList("com.lanzhou.entity.Inschool.listByareaId", map);
	}

}
