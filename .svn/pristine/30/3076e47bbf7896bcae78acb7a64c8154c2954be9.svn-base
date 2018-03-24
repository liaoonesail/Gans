package com.lanzhou.dao;

import javax.annotation.Resource;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import com.lanzhou.entity.Logistics;
@Repository
public class LogisticsDao {
	@Resource
	private SqlSessionTemplate sm;
	public void add(Logistics logistics) {
		// TODO Auto-generated method stub
		sm.insert("com.lanzhou.entity.Logistics.add", logistics);
	}
	public Logistics getByOrderId(int orderId) {
		// TODO Auto-generated method stub
		return sm.selectOne("com.lanzhou.entity.Logistics.getByOrderId", orderId);
	}
	public void del(Integer orderId) {
		// TODO Auto-generated method stub
		sm.delete("com.lanzhou.entity.Logistics.del", orderId);
	}
	public void update(Logistics logistics) {
		// TODO Auto-generated method stub
		sm.update("com.lanzhou.entity.Logistics.update", logistics);
	}
	

}
