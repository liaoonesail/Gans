package com.lanzhou.service;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.lanzhou.dao.GiftDao;
import com.lanzhou.entity.Gift;
import com.lanzhou.util.OrderNum;

@Service
@Transactional
public class GiftService {
	@Resource
	private GiftDao dao;
	/**
	 * 
	 * @param gift 添加中奖信息
	 * @return
	 */
	public int add(Gift gift){
		gift.setTime(OrderNum.getregTime());
		return dao.add(gift);
	}
	/**
	 * 
	 * @param page_parameter_id 根据每期捐款的id查询捐款list
	 * @return
	 */
	public List<Gift> listBypage_id(Integer page_parameter_id) {
		// TODO Auto-generated method stub
		return dao.listBypage_id(page_parameter_id);
	}
	/**
	 * 
	 * @param user_id 根据捐款的user_id查询所有期的捐款list
	 * @return
	 */
	public List<Gift> listByuser_id(Integer user_id) {
		// TODO Auto-generated method stub
		return dao.listByuser_id(user_id);
	}
}
