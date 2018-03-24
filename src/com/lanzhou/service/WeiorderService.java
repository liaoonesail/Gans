package com.lanzhou.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.lanzhou.dao.WeiorderDao;
import com.lanzhou.entity.Baobiao;
import com.lanzhou.entity.User_prize;
import com.lanzhou.entity.Weiorder;
import com.lanzhou.util.OrderNum;

@Service
@Transactional
public class WeiorderService {
	@Resource
	private WeiorderDao dao;
	/**
	 * 
	 * @param order 添加订单
	 * @return
	 */
	public int add(Weiorder order){
		order.setStatus(0);
		order.setAddTime(OrderNum.getregTime());
		order.setOrderNum(OrderNum.getOrderNum());
		dao.add(order);
		return order.getId();
	}
	/**
	 * 
	 * @param id 获取单个订单根据ID
	 * @return
	 */
	public Weiorder getid(Integer id) {
		// TODO Auto-generated method stub
		return dao.getid(id);
	}
	 /** 
	 * @param order_num 根据订单号获取订单
	 * @return
	 */
	public Weiorder getorderNum(String orderNum ){
		return dao.getorderNum(orderNum);
	}
	/**
	 * 删除
	 * @param id
	 * @return
	 */
	public int del(Integer id){
		return dao.del(id);
	}
	/**
	 * 修改订单状态 status=1
	 * @param id
	 * @param status 
	 * @return
	 */
	public int updateStatus(Integer id, Integer status){
		Map<String, Integer> map=new HashMap<String, Integer>();
		map.put("id", id);
		map.put("status", status);
		return dao.updateStatus(map);
	}
	/**
	 * 根据电话号码获取对象集合
	 * @param phone
	 * @return
	 */
	public List<Weiorder> getByPhone(String phone){
		return dao.getByPhone(phone);
	}
	/**
	 * 获取所有订单
	 * @return
	 */
	public List<Weiorder> getListAll(){
		return dao.getListALL();
	}
	
	/**
	 * 分页加模糊查询本期
	 * @return
	 */
	public int count() {
		return dao.count();
	}
	public List<Weiorder> listpage(HashMap<String, Object> map) {
		return dao.listpage(map);
	}
	
	/**
	 * 分页加模糊查询往期
	 * @return
	 */
	public int total() {
		return dao.total();
	}
	public List<Weiorder> pagelist(HashMap<String, Object> map) {
		return dao.pagelist(map);
	}
	
	/**
	 * 根据捐款价格获取往期每一期的捐款总次数
	 * @param id 
	 * @return
	 */
	public int getNumByPrice(int id) {
		return dao.getNumByPrice(id);
	}
	
	/**
	 * 根据手机号获取往期每一期的捐款总人数
	 * @return
	 */
	public int getPeopleByPhone(int id) {
		return dao.getPeopleByPhone(id);
	}
	
	/**
	 * 获取往期每一期的捐款总金额
	 * @return
	 */
	public double getSumByPrice(int id) {
		return dao.getSumByPrice(id);
	}
	/**
	 * 获取最新一期
	 * @return
	 */
	public int getNewPageId() {
		// TODO Auto-generated method stub
		return dao.getNewPageId();
	}
	/**
	 * 根据订单号更改抽奖状态
	 * @param isLotto
	 * @param orderNum
	 */
	public void updateisLotto(int isLotto, String orderNum) {
		// TODO Auto-generated method stub
		Map<String, Object> map=new HashMap<String, Object>();
		map.put("isLotto", isLotto);
		map.put("orderNum", orderNum);
		dao.updateisLotto(map);
	}
	public List<Baobiao> baobiao(Map<String, Object> map) {
		// TODO Auto-generated method stub
		return dao.baibiao(map);
	}
}
