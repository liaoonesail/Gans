package com.lanzhou.dao;

import java.util.HashMap;
import java.util.List;

import javax.annotation.Resource;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import com.lanzhou.entity.Advertisement;

@Repository
public class AdvertisementDao {
	@Resource
	private SqlSessionTemplate sm;
	
	public void add(Advertisement advertisement){
		sm.insert("com.lanzhou.entity.Advertisement.add",advertisement);
	}
	
	public void del(Integer id){
		sm.delete("com.lanzhou.entity.Advertisement.del", id);
	}
	
	public void update(Advertisement advertisement){
		sm.update("com.lanzhou.entity.Advertisement.update", advertisement);
	}
	
	public Advertisement getid(Integer id){
		return sm.selectOne("com.lanzhou.entity.Advertisement.getById", id);
	}
	
	public int count(String name){
		return sm.selectOne("com.lanzhou.entity.Advertisement.count",name);
	}
	
	public List<Advertisement> listpage(HashMap<String, Object> map){
		return sm.selectList("com.lanzhou.entity.Advertisement.listpage", map);
	}

	public List<Advertisement> list(String ad_address) {
		return sm.selectList("com.lanzhou.entity.Advertisement.list",ad_address);
	}

	public List<Advertisement> lbList(String location) {
		// TODO Auto-generated method stub
		return sm.selectList("com.lanzhou.entity.Advertisement.lbList", location);
	}

	public Advertisement getOne(String location) {
		// TODO Auto-generated method stub
		return sm.selectOne("com.lanzhou.entity.Advertisement.getOne", location);
	}
}
