package com.lanzhou.dao;

import java.util.List;

import javax.annotation.Resource;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import com.lanzhou.entity.Area;
@Repository
public class AreaDao {
	@Resource
	private SqlSessionTemplate sm;
	public void add(Area area) {
		// TODO Auto-generated method stub
		sm.insert("com.lanzhou.entity.Area.add", area);
	}
	public List<Area> list() {
		// TODO Auto-generated method stub
		return sm.selectList("com.lanzhou.entity.Area.list");
	}
	public void del(Integer id) {
		// TODO Auto-generated method stub
		sm.delete("com.lanzhou.entity.Area.del", id);
	}
	public Area getid(Integer id) {
		// TODO Auto-generated method stub
		return sm.selectOne("com.lanzhou.entity.Area.getById", id);
	}
	public Area getlanzhou() {
		// TODO Auto-generated method stub
		return sm.selectOne("com.lanzhou.entity.Area.getlanzhou");
	}
	public void update(Area area) {
		// TODO Auto-generated method stub
		sm.update("com.lanzhou.entity.Area.update", area);
	}

	public void updateSrAmount(Area area) {
		sm.update("com.lanzhou.entity.Area.updateSrAmount",area);
	}
}
