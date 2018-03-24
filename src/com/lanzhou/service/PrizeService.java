package com.lanzhou.service;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.lanzhou.dao.PrizeDao;
import com.lanzhou.entity.Prize;
@Service
@Transactional
public class PrizeService {
	@Resource
	private PrizeDao dao;
	/**
	 * 
	 * @param prize 添加奖品
	 */
	public void add(Prize prize) {
		// TODO Auto-generated method stub
		dao.add(prize);
	}
	/**
	 * 
	 * @return 奖品list
	 */
	public List<Prize> list() {
		// TODO Auto-generated method stub
		return dao.list();
	}
	/**
	 * 
	 * @param prize 修改奖品
	 */
	public void update(Prize prize) {
		// TODO Auto-generated method stub
		dao.update(prize);
	}
	/**
	 * 
	 * @param id 删除单个奖品
	 */
	public void del(Integer id){
		dao.del(id);
	}
	public Prize getid(Integer id) {
		// TODO Auto-generated method stub
		return dao.getid(id);
	}
	public Prize getLevel(int level) {
		// TODO Auto-generated method stub
		return dao.getLevel(level);
	}
	public List<Prize> getNotPrize() {
		// TODO Auto-generated method stub
		return dao.getNotPrize();
	}

}
