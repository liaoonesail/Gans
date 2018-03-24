package com.lanzhou.service;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.lanzhou.dao.Shop_pictureDao;
import com.lanzhou.entity.Shop_picture;
@Service
@Transactional
public class Shop_pictureService {
	@Resource
	private Shop_pictureDao dao;
	public void add(Shop_picture shop_picture) {
		// TODO Auto-generated method stub
		 dao.add(shop_picture);
	}
	public List<Shop_picture> listByshop_id(Integer shop_id) {
		// TODO Auto-generated method stub
		return dao.listByshop_id(shop_id);
	}
	/**
	 * 根据ID获取对象
	 * @param id
	 * @return
	 */
	public Shop_picture getid(Integer id) {
		// TODO Auto-generated method stub
		return dao.getid(id);
	}
	/**
	 * 删除
	 * @param id
	 */
	public void del(Integer id) {
		// TODO Auto-generated method stub
		dao.del(id);
	}
	/**
	 * 修改
	 * @param shop_picture
	 */
	public void update(Shop_picture shop_picture) {
		// TODO Auto-generated method stub
		dao.update(shop_picture);
	}

}
