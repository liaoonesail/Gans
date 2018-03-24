package com.lanzhou.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.lanzhou.dao.OrderDao;
import com.lanzhou.entity.Order;
import com.lanzhou.util.OrderNum;

@Service
@Transactional
public class OrderService {
	@Resource
	private OrderDao dao;
	/**
	 * 
	 * @param order 添加订单
	 * @return
	 */
	public int add(Order order){
		order.setStatus(0);
		order.setOrder_time(OrderNum.getregTime());
		order.setOrder_num(OrderNum.getOrderNum());
		dao.add(order);
		return order.getId();
	}
	/**
	 * 
	 * @param status 根据订单状态查询订单
	 * @return
	 */
	public List<Order> list(Integer status) {
		// TODO Auto-generated method stub
		return dao.list(status);
	}
	/**
	 * 根据用户ID和订单状态查询订单
	 * @param user_id
	 * @param status
	 * @return
	 */
	public List<Order> list(Integer user_id,Integer status){
		return dao.list(user_id,status);
	}
	/**
	 * 先获取整个对象
	 * @param order 修改订单
	 */
	public void update(Order order) {
		// TODO Auto-generated method stub
		dao.update(order);
	}
	/**
	 * 
	 * @param id 获取单个订单根据ID
	 * @return
	 */
	public Order getid(Integer id) {
		// TODO Auto-generated method stub
		return dao.getid(id);
	}
	/**
	 * 
	 * @param order_num 根据订单号获取订单
	 * @return
	 */
	public Order getorder_num(String order_num){
		return dao.getorder_num(order_num);
	}
	/**
	 * 
	 * @param status 根据用户ID 和订单状态获取相对应的list
	 * @param user_id
	 * @return
	 */
	public List<Order> listByuser_id(Integer status,Integer user_id){
		return dao.listByuser_id(status,user_id);
	}
	/**
	 * 删除
	 * @param id
	 * @return
	 */
	public int del(Integer id){
		return dao.del(id);
	}
	//模糊查询加分页
	public int count(String name, Integer status) {
		// TODO Auto-generated method stub
		return dao.count(name,status);
	}
	public List<Order> listpage(HashMap<String, Object> map) {
		// TODO Auto-generated method stub
		return dao.listpage(map);
	}
	public void updatestatus(Integer id, Integer status) {
		// TODO Auto-generated method stub
		dao.updatestatus(id,status);
	}
	public String userPayNum(Integer goodsId, int userId, Integer orderId) {
		// TODO Auto-generated method stub
		Map<String, Object> map=new HashMap<String, Object>();
		map.put("goodsId", goodsId);
		map.put("userId", userId);
		map.put("orderId", orderId);
		return dao.userPayNum(map);
	}
	public List<Order> listbyName(Integer status, String name) {
		// TODO Auto-generated method stub
		Map<String, Object> map=new HashMap<String, Object>();
		map.put("status", status);
		map.put("name", name);
		return dao.listbyName(map);
	}
	
}
