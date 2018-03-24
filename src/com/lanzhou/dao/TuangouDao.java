package com.lanzhou.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import com.lanzhou.entity.Type;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import com.lanzhou.entity.Tuangou;
@Repository
public class TuangouDao {
	@Resource
	private SqlSessionTemplate sm;
	public void add(Tuangou tuangou) {
		// TODO Auto-generated method stub
		sm.insert("com.lanzhou.entity.Tuangou.add", tuangou);
	}
	public int count() {
		// TODO Auto-generated method stub
		return sm.selectOne("com.lanzhou.entity.Tuangou.count");
	}
	public List<Tuangou> listpage(HashMap<String, Object> map) {
		// TODO Auto-generated method stub
		return sm.selectList("com.lanzhou.entity.Tuangou.listpage", map);
	}
	public Tuangou getid(Integer id) {
		// TODO Auto-generated method stub
		return sm.selectOne("com.lanzhou.entity.Tuangou.getById", id);
	}
	public void update(Tuangou tuangou) {
		// TODO Auto-generated method stub
		sm.update("com.lanzhou.entity.Tuangou.update", tuangou);
	}
	public void del(Integer id) {
		// TODO Auto-generated method stub
		sm.delete("com.lanzhou.entity.Tuangou.del", id);
	}
	public List<Tuangou> list(Integer typeId) {
		// TODO Auto-generated method stub
		return sm.selectList("com.lanzhou.entity.Tuangou.list",typeId);
	}
	public Tuangou getByGoodsId(Integer goodsId) {
		// TODO Auto-generated method stub
		return sm.selectOne("com.lanzhou.entity.Tuangou.getByGoodsId", goodsId);
	}

	public List<Type> getTypeList() {
		return sm.selectList("com.lanzhou.entity.Tuangou.getTypeList");
	}

	public int tuanCount(Integer typeId) {
		return sm.selectOne("com.lanzhou.entity.Tuangou.tuanCount",typeId);
	}

	public List<Tuangou> tuangouList(Map map) {
		return sm.selectList("com.lanzhou.entity.Tuangou.tuangouList",map);
	}
}
