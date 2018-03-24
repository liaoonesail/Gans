package com.lanzhou.dao;

import java.util.List;

import javax.annotation.Resource;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import com.lanzhou.entity.Mould;
@Repository
public class MouldDao {
	@Resource
	private SqlSessionTemplate sm;
	public void add(Mould mould) {
		// TODO Auto-generated method stub
		sm.insert("com.lanzhou.entity.Mould.add", mould);
	}
	public List<Mould> list() {
		// TODO Auto-generated method stub
		return sm.selectList("com.lanzhou.entity.Mould.list");
	}
	public void update(Mould mould) {
		// TODO Auto-generated method stub
		sm.update("com.lanzhou.entity.Mould.update", mould);
	}
	public void del(Integer id) {
		// TODO Auto-generated method stub
		sm.delete("com.lanzhou.entity.Mould.del", id);
	}
	public Mould getid(Integer id) {
		// TODO Auto-generated method stub
		return sm.selectOne("com.lanzhou.entity.Mould.getById", id);
	}

}
