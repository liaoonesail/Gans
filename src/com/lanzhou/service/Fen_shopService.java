package com.lanzhou.service;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.lanzhou.dao.Fen_shopDao;
import com.lanzhou.entity.Fen_shop;
@Service
@Transactional
public class Fen_shopService {
	@Resource
	private Fen_shopDao dao;
	/**
	 * 
	 * @param fen_shop 添加分店
	 */
	public void add(Fen_shop fen_shop) {
		// TODO Auto-generated method stub
		dao.add(fen_shop);
	}
	/**
	 * 
	 * @param shop_id 获取总店旗下的分店集合
	 * @return
	 */
	public List<Fen_shop> listByshop_id(Integer shop_id) {
		// TODO Auto-generated method stub
		return dao.listByshop_id(shop_id);
	}

}
