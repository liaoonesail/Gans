package com.lanzhou.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import com.lanzhou.entity.Type;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.lanzhou.dao.TuangouDao;
import com.lanzhou.entity.Tuangou;
@Service
@Transactional
public class TuangouService {
	@Resource
	private TuangouDao dao;
	public void add(Tuangou tuangou) {
		// TODO Auto-generated method stub
		dao.add(tuangou);
	}
	public int count() {
		// TODO Auto-generated method stub
		return dao.count();
	}
	public List<Tuangou> listpage(HashMap<String, Object> map) {
		// TODO Auto-generated method stub
		return dao.listpage(map);
	}
	public Tuangou getid(Integer id) {
		// TODO Auto-generated method stub
		return dao.getid(id);
	}
	public void update(Tuangou tuangou) {
		// TODO Auto-generated method stub
		dao.update(tuangou);
	}
	public void del(Integer id) {
		// TODO Auto-generated method stub
		dao.del(id);
	}
	public List<Tuangou> list(Integer typeId) {
		// TODO Auto-generated method stub
		return dao.list(typeId);
	}
	public Tuangou getByGoodsId(Integer goodsId) {
		// TODO Auto-generated method stub
		return dao.getByGoodsId(goodsId);
	}

	public List<Type> getTypeList() {
		return dao.getTypeList();
	}

	public int tuanCount(Integer typeId) {
		return dao.tuanCount(typeId);
	}

	public List<Tuangou> tuangouList(Map map) {
		return dao.tuangouList(map);
	}
}
