package com.lanzhou.service;

import java.util.HashMap;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.lanzhou.dao.MiaoshaDao;
import com.lanzhou.entity.Miaosha;
import com.lanzhou.entity.Tuangou;
@Service
@Transactional
public class MiaoshaService {
	@Resource
	private MiaoshaDao dao;
	public void add(Miaosha miaosha) {
		// TODO Auto-generated method stub
		dao.add(miaosha);
	}
	public int count() {
		// TODO Auto-generated method stub
		return dao.count();
	}
	public List<Miaosha> listpage(HashMap<String, Object> map) {
		// TODO Auto-generated method stub
		return dao.listpage(map);
	}
	public Miaosha getid(Integer id) {
		// TODO Auto-generated method stub
		return dao.getid(id);
	}
	public void update(Miaosha miaosha) {
		// TODO Auto-generated method stub
		dao.update(miaosha);
	}
	public void del(Integer id) {
		// TODO Auto-generated method stub
		dao.del(id);
	}
	public List<Miaosha> list(String startTime, String endTime) {
		// TODO Auto-generated method stub
		return dao.list(startTime,endTime);
	}
	public Miaosha getMiaoshaByGoodsId(Integer goodsId) {
		// TODO Auto-generated method stub
		return dao.getMiaoshaByGoodsId(goodsId);
	}

}
