package com.lanzhou.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.lanzhou.dao.UserPrizeDao;
import com.lanzhou.entity.User_prize;
import com.lanzhou.util.OrderNum;

@Service
@Transactional
public class UserPrizeService {
	@Resource
	private UserPrizeDao dao;
	/**
	 * 分页加模糊查询
	 * @param status 
	 * @param ids 
	 * @return
	 */
	public int count(Integer status, String ids) {
		Map<String, Object> map=new HashMap<String, Object>();
		map.put("status", status);
		map.put("ids", ids);
		return dao.count(map);
	}
	public List<User_prize> listpage(HashMap<String, Object> map) {
		return dao.listpage(map);
	}
	/**
	 * 添加中奖人信息
	 * 开始状态默认为0未领取 中奖时间已经set
	 * @param user_prize
	 */
	public int add(User_prize user_prize) {
		user_prize.setTime(OrderNum.getregTime());
		user_prize.setStatus(0);
	    return dao.add(user_prize);
	}
	/**
	 * 修改中奖状态为1 已经领取
	 * @return
	 */
	public int updateStatus(Integer id){
		return dao.updateStatus(id);
	}
	/**
	 * 根据Id 获取中奖信息对象
	 * @param id
	 * @return
	 */
	public User_prize getid(Integer id){
		return dao.getid(id);
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
	 * 根据用户ID获取中奖list
	 * @param userId
	 * @return
	 */
	public List<User_prize> listByUserId(Integer userId) {
		// TODO Auto-generated method stub
		return dao.listByUserId(userId);
	}
	/**
	 * 修改微公益抽奖信息
	 * @param prize
	 */
	public void update(User_prize prize) {
		// TODO Auto-generated method stub
		dao.update(prize);
	}
	public List<User_prize> list(HashMap<String, Object> map) {
		// TODO Auto-generated method stub
		return dao.list(map);
	}
}
