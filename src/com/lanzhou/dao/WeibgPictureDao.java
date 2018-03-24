package com.lanzhou.dao;

import java.util.List;

import javax.annotation.Resource;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import com.lanzhou.entity.Weibg_picture;

@Repository
public class WeibgPictureDao {
	
	@Resource
	private SqlSessionTemplate sm;
	
	public void add(Weibg_picture weibg_picture) {
		sm.insert("com.lanzhou.entity.Weibg_picture.add", weibg_picture);
	}
	
	public Weibg_picture getid(Integer id) {
		return sm.selectOne("com.lanzhou.entity.Weibg_picture.getById", id);
	}

	public void del() {
		sm.delete("com.lanzhou.entity.Weibg_picture.del");
	}

	public List<Weibg_picture> list() {
		return sm.selectList("com.lanzhou.entity.Weibg_picture.list");
	}

}
