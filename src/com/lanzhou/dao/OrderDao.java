package com.lanzhou.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import com.lanzhou.action.AdminuserAction;
import com.lanzhou.entity.Order;
@Repository
public class OrderDao {
	@Resource
	private SqlSessionTemplate sm;
	public List<Order> list(Integer status) {
		return sm.selectList("com.lanzhou.entity.Order.list", status);
	}
	public void update(Order order) {
		sm.update("com.lanzhou.entity.Order.update", order);
	}
	public int add(Order order) {
		return sm.insert("com.lanzhou.entity.Order.add", order);
	}
	public Order getid(Integer id) {
		return sm.selectOne("com.lanzhou.entity.Order.getById", id);
	}
	public List<Order> listByuser_id(Integer status, Integer user_id) {
		Map<String, Integer> map=new HashMap<String, Integer>();
		map.put("status", status);
		map.put("user_id", user_id);
		return sm.selectList("com.lanzhou.entity.Order.listByuser_id", map);
	}
	public int count(String name, Integer status) {
		Map<String, String> map=new HashMap<String, String>();
		map.put("status", status+"");
		map.put("name", name);
		return sm.selectOne("com.lanzhou.entity.Order.count", map);
	}
	public List<Order> listpage(HashMap<String, Object> map) {
		return sm.selectList("com.lanzhou.entity.Order.listpage", map);
	}
	public Order getorder_num(String order_num) {
		return sm.selectOne("com.lanzhou.entity.Order.getorder_num", order_num);
	}
	public List<Order> list(Integer user_id, Integer status) {
		Map<String, Integer> map=new HashMap<String, Integer>();
		map.put("user_id", user_id);
		map.put("status", status);
		return sm.selectList("com.lanzhou.entity.Order.listByuser_id", map);
	}
	public int del(Integer id) {
		return sm.delete("com.lanzhou.entity.Order.del", id);
	}
	public void updatestatus(Integer id, Integer status) {
		Map<String, Integer> map=new HashMap<String, Integer>();
		map.put("id", id);
		map.put("status", status);
		sm.update("com.lanzhou.entity.Order.updatestatus", map);
	}
	public String userPayNum(Map<String, Object> map) {
		// TODO Auto-generated method stub
		return sm.selectOne("com.lanzhou.entity.Order.userPayNum", map);
	}
	public List<Order> listbyName(Map<String, Object> map) {
		// TODO Auto-generated method stub
		return sm.selectList("com.lanzhou.entity.Order.listbyName", map);
	}

}
