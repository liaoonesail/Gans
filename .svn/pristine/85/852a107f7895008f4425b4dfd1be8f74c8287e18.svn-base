package com.lanzhou.service;

import java.util.HashMap;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.lanzhou.dao.Activity_detailsDao;
import com.lanzhou.entity.Activity_details;

@Service
@Transactional
public class Activity_detailsService {
	@Resource
	private Activity_detailsDao dao;

	public void add(Activity_details activity_details) {
		// TODO Auto-generated method stub
		dao.add(activity_details);
	}

	public void delBygoods_id(Integer goods_id) {
		// TODO Auto-generated method stub
		dao.delBygoods_id(goods_id);
	}

	public Activity_details getid(Integer id) {
		// TODO Auto-generated method stub
		return dao.getid(id);
	}
	/**
	 * 根据商品id获取活动详情
	 * @param goods_id
	 * @return
	 */
	public Activity_details getgoods_id(Integer goods_id){
		return dao.getgoods_id(goods_id);
	}

	/**
	 * 修改活动详情
	 * @param activity_details
	 */
	public void updateBygoods_id(Activity_details activity_details) {
		// TODO Auto-generated method stub
		dao.updateBygoods_id(activity_details);
	}

	public int count(String name) {
		// TODO Auto-generated method stub
		return dao.count(name);
	}

	public List<Activity_details> listpage(HashMap<String, Object> map) {
		// TODO Auto-generated method stub
		return dao.listpage(map);
	}

	public void del(Integer id) {
		// TODO Auto-generated method stub
		dao.del(id);
	}

	public void update(Activity_details details) {
		// TODO Auto-generated method stub
		dao.update(details);
	}
}
