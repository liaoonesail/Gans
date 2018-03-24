package com.lanzhou.dao;

import java.util.List;

import javax.annotation.Resource;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import com.lanzhou.entity.Area_picture;
@Repository
public class Area_pictureDao {
	@Resource
	private SqlSessionTemplate sm;
	public void add(Area_picture area_picture) {
		// TODO Auto-generated method stub
		sm.insert("com.lanzhou.entity.Area_picture.add", area_picture);
	}
	public List<Area_picture> getByarea_id(Integer area_id) {
		// TODO Auto-generated method stub
		return sm.selectList("com.lanzhou.entity.Area_picture.getByarea_id", area_id);
	}
	public Area_picture getid(Integer id) {
		// TODO Auto-generated method stub
		return sm.selectOne("com.lanzhou.entity.Area_picture.getById", id);
	}
	public void del(Integer id) {
		// TODO Auto-generated method stub
		sm.delete("com.lanzhou.entity.Area_picture.del", id);
	}
	public void update(Area_picture area_picture) {
		// TODO Auto-generated method stub
		sm.update("com.lanzhou.entity.Area_picture.update", area_picture);
	}

}
