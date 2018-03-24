package com.lanzhou.dao;

import java.util.List;

import javax.annotation.Resource;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import com.lanzhou.entity.Type_next_next;
@Repository
public class Type_next_nextDao {
	@Resource
	private SqlSessionTemplate sm;
	public void add(Type_next_next type) {
		// TODO Auto-generated method stub
		sm.insert("com.lanzhou.entity.Type_next_next.add", type);
	}
	public List<Type_next_next> list() {
		// TODO Auto-generated method stub
		return sm.selectList("com.lanzhou.entity.Type_next_next.list");
	}
	public void update(Type_next_next type) {
		// TODO Auto-generated method stub
		sm.update("com.lanzhou.entity.Type_next_next.update", type);
	}
	public void del(Integer id) {
		// TODO Auto-generated method stub
		sm.delete("com.lanzhou.entity.Type_next_next.del", id);
	}
	public List<Type_next_next> listBytype_id(Integer type_id) {
		// TODO Auto-generated method stub
		return sm.selectList("com.lanzhou.entity.Type_next_next.listBytype_id", type_id);
	}
	public List<Type_next_next> listBytype_next_id(Integer type_next_id) {
		// TODO Auto-generated method stub
		return sm.selectList("com.lanzhou.entity.Type_next_next.listBytype_next_id", type_next_id);
	}
	public Type_next_next getid(Integer id) {
		// TODO Auto-generated method stub
		return sm.selectOne("com.lanzhou.entity.Type_next_next.getById", id);
	}
	public List<Type_next_next> xuniList() {
		// TODO Auto-generated method stub
		return sm.selectList("com.lanzhou.entity.Type_next_next.xuniList");
	}

}
