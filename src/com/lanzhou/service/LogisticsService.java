package com.lanzhou.service;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.lanzhou.dao.LogisticsDao;
import com.lanzhou.entity.Logistics;

@Service
@Transactional
public class LogisticsService {
	@Resource
	private LogisticsDao dao;
	public void add(Logistics logistics) {
		// TODO Auto-generated method stub
		dao.add(logistics);
	}
	public Logistics getByOrderId(int orderId) {
		// TODO Auto-generated method stub
		return dao.getByOrderId(orderId);
	}
	public void del(Integer orderId) {
		// TODO Auto-generated method stub
		dao.del(orderId);
	}
	public void update(Logistics logistics) {
		// TODO Auto-generated method stub
		dao.update(logistics);
	}

}
