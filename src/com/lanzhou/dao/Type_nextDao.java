package com.lanzhou.dao;

import java.util.List;

import javax.annotation.Resource;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import com.lanzhou.entity.Type_next;
@Repository
public class Type_nextDao {
	@Resource
	private SqlSessionTemplate sm;
	public void add(Type_next type) {
		// TODO Auto-generated method stub
		sm.insert("com.lanzhou.entity.Type_next.add", type);
	}
	public List<Type_next> list() {
		// TODO Auto-generated method stub
		return sm.selectList("com.lanzhou.entity.Type_next.list");
	}
	public void update(Type_next type) {
		// TODO Auto-generated method stub
		sm.update("com.lanzhou.entity.Type_next.update", type);
	}
	public void del(Integer id) {
		// TODO Auto-generated method stub
		sm.delete("com.lanzhou.entity.Type_next.id", id);
	}
	public List<Type_next> listBytype_id(Integer type_id) {
		// TODO Auto-generated method stub
		return sm.selectList("com.lanzhou.entity.Type_next.listBytype_id", type_id);
	}
	public Type_next getid(Integer id) {
		// TODO Auto-generated method stub
		return sm.selectOne("com.lanzhou.entity.Type_next.getById", id);
	}

}
