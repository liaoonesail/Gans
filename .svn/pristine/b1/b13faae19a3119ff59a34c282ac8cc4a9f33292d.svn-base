package com.lanzhou.service;

import java.util.HashMap;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.lanzhou.dao.LongpayDao;
import com.lanzhou.entity.Longpay;
import com.lanzhou.entity.Type;
@Service
@Transactional
public class LongpayService {
	@Resource
	private LongpayDao dao;
	public Longpay getByGoodsId(int goodsId) {
		// TODO Auto-generated method stub
		return dao.getByGoodsId(goodsId);
	}
	public void add(Longpay longpay) {
		// TODO Auto-generated method stub
		dao.add(longpay);
	}
	public int count() {
		// TODO Auto-generated method stub
		return dao.count();
	}
	public List<Longpay> listpage(HashMap<String, Object> map) {
		// TODO Auto-generated method stub
		return dao.listpage(map);
	}
	public Longpay getid(Integer id) {
		// TODO Auto-generated method stub
		return dao.getid(id);
	}
	public void update(Longpay longpay) {
		// TODO Auto-generated method stub
		dao.update(longpay);
	}
	public void del(Integer id) {
		// TODO Auto-generated method stub
		dao.del(id);
	}
	public List<Longpay> list(Integer typeId) {
		// TODO Auto-generated method stub
		return dao.list(typeId);
	}
	public List<Type> getTypeList() {
		// TODO Auto-generated method stub
		return dao.getTypeList();
	}

}
