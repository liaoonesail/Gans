package com.lanzhou.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import com.lanzhou.entity.Miaosha;
import com.lanzhou.entity.Tuangou;
@Repository
public class MiaoshaDao {
	@Resource
	private SqlSessionTemplate sm;
	public void add(Miaosha miaosha) {
		// TODO Auto-generated method stub
		sm.insert("com.lanzhou.entity.Miaosha.add", miaosha);
	}
	public int count() {
		// TODO Auto-generated method stub
		return sm.selectOne("com.lanzhou.entity.Miaosha.count");
	}
	public List<Miaosha> listpage(HashMap<String, Object> map) {
		// TODO Auto-generated method stub
		return sm.selectList("com.lanzhou.entity.Miaosha.listpage", map);
	}
	public Miaosha getid(Integer id) {
		// TODO Auto-generated method stub
		return sm.selectOne("com.lanzhou.entity.Miaosha.getById", id);
	}
	public void update(Miaosha miaosha) {
		// TODO Auto-generated method stub
		sm.update("com.lanzhou.entity.Miaosha.update", miaosha);
	}
	public void del(Integer id) {
		// TODO Auto-generated method stub
		sm.delete("com.lanzhou.entity.Miaosha.del", id);
	}
	public List<Miaosha> list(String startTime, String endTime) {
		// TODO Auto-generated method stub
		Map<String, String> map=new HashMap<String, String>();
		map.put("startTime", startTime);
		map.put("endTime", endTime);
		return sm.selectList("com.lanzhou.entity.Miaosha.list",map);
	}
	public Miaosha getMiaoshaByGoodsId(Integer goodsId) {
		// TODO Auto-generated method stub
		return sm.selectOne("com.lanzhou.entity.Miaosha.getMiaoshaByGoodsId", goodsId);
	}

}
