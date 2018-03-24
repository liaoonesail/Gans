package com.lanzhou.service;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.lanzhou.dao.ShopDao;
import com.lanzhou.entity.Shop;
@Service
@Transactional
public class ShopService {
	@Resource
	private ShopDao dao;
	/**
	 * 
	 * @param shop 添加总店铺
	 * @return
	 */
	public void add(Shop shop) {
		// TODO Auto-generated method stub
		dao.add(shop);
	}
	/**
	 * 
	 * @return获取商家集合
	 */
	public List<Shop> list() {
		// TODO Auto-generated method stub
		return dao.list();
	}
	/**
	 * 获取地区ID
	 * @param id
	 * @return
	 */
	public int getarea_id(Integer id) {
		// TODO Auto-generated method stub
		return dao.getarea_id(id);
	}
	/**
	 * 根据地区id获取商家List
	 * @param area_id
	 * @return
	 */
	public List<Shop> getlistByarea_id(Integer area_id){
		
		return dao.getlistByarea_id(area_id);
	}
	/**
	 * 根据商家ID获取商家详情
	 * @param id
	 * @return
	 */
	public Shop getid(Integer id){
		return dao.getid(id);
	}
	/**
	 * 删除
	 * @param id
	 * @return
	 */
	public void del(Integer id) {
		// TODO Auto-generated method stub
		 dao.del(id);
	}
	/**
	 * 修改
	 * @param shop
	 */
	public void update(Shop shop) {
		// TODO Auto-generated method stub
		dao.update(shop);
	}

}
