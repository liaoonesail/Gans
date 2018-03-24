package com.lanzhou.dao;

import java.util.List;

import javax.annotation.Resource;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import com.lanzhou.entity.Type;
@Repository
public class TypeDao {
	@Resource
	private SqlSessionTemplate sm;
	public void add(Type type) {
		// TODO Auto-generated method stub
		sm.insert("com.lanzhou.entity.Type.add",type);
	}
	public List<Type> list() {
		// TODO Auto-generated method stub
		return sm.selectList("com.lanzhou.entity.Type.list");
	}
	public void update(Type type) {
		// TODO Auto-generated method stub
		sm.update("com.lanzhou.entity.Type.update", type);
	}
	public void del(Integer id) {
		// TODO Auto-generated method stub
		sm.delete("com.lanzhou.entity.Type.del", id);
	}
	public List<Type> xunilist() {
		// TODO Auto-generated method stub
		return sm.selectList("com.lanzhou.entity.Type.xuniList");
	}

}
