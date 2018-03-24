package com.lanzhou.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import com.lanzhou.entity.Baobiao;
import com.lanzhou.entity.User_prize;
import com.lanzhou.entity.Weiorder;
@Repository
public class WeiorderDao {
	@Resource
	private SqlSessionTemplate sm;
	public void add(Weiorder order) {
		// TODO Auto-generated method stub
		sm.insert("com.lanzhou.entity.Weiorder.add", order);
	}
	public Weiorder getid(Integer id) {
		// TODO Auto-generated method stub
		return sm.selectOne("com.lanzhou.entity.Weiorder.getById", id);
	}
	public Weiorder getorderNum(String orderNum) {
		// TODO Auto-generated method stub
		return sm.selectOne("com.lanzhou.entity.Weiorder.getorder_num", orderNum);
	}
	public int del(Integer id) {
		// TODO Auto-generated method stub
		return sm.delete("com.lanzhou.entity.Weiorder.del", id);
	}
	public int updateStatus(Map<String, Integer> map) {
		// TODO Auto-generated method stub
		return sm.update("com.lanzhou.entity.Weiorder.updateStatus", map);
	}
	public List<Weiorder> getByPhone(String phone) {
		// TODO Auto-generated method stub
		return sm.selectList("com.lanzhou.entity.Weiorder.getByPhone", phone);
	}
	public List<Weiorder> getListALL() {
		// TODO Auto-generated method stub
		return sm.selectList("com.lanzhou.entity.Weiorder.getListALL");
	}
	public int count() {
		return sm.selectOne("com.lanzhou.entity.Weiorder.count");
	}
	public List<Weiorder> listpage(HashMap<String, Object> map) {
		return sm.selectList("com.lanzhou.entity.Weiorder.listpage", map);
	}
	
	public int total() {
		return sm.selectOne("com.lanzhou.entity.Weiorder.total");
	}
	public List<Weiorder> pagelist(HashMap<String, Object> map) {
		return sm.selectList("com.lanzhou.entity.Weiorder.pagelist", map);
	}
	
	public int getNumByPrice(int id){
		return sm.selectOne("com.lanzhou.entity.Weiorder.getNumByPrice",id);
	}
	
	public int getPeopleByPhone(int id){
		return sm.selectOne("com.lanzhou.entity.Weiorder.getPeopleByPhone",id);
	}
	
	public double getSumByPrice(int id){
		return sm.selectOne("com.lanzhou.entity.Weiorder.getSumByPrice",id);
	}
	public int getNewPageId() {
		// TODO Auto-generated method stub
		return sm.selectOne("com.lanzhou.entity.Weiorder.getNewPageId");
	}
	public void updateisLotto(Map<String, Object> map) {
		// TODO Auto-generated method stub
		sm.update("com.lanzhou.entity.Weiorder.updateisLotto", map);
	}
	public List<Baobiao> baibiao(Map<String, Object> map) {
		// TODO Auto-generated method stub
		return sm.selectList("com.lanzhou.entity.Weiorder.baibiao",map);
	}

}
