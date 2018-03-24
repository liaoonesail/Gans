package com.lanzhou.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.lanzhou.dao.WhitegoodsDao;
import com.lanzhou.entity.Whitegoods;
@Service
@Transactional
public class WhitegoodsService {
	@Resource
	private WhitegoodsDao dao;
	public void add(Whitegoods whitegoods) {
		// TODO Auto-generated method stub
		dao.add(whitegoods);
	}
	public void del(Integer id) {
		// TODO Auto-generated method stub
		dao.del(id);
	}
	public Whitegoods getid(Integer id) {
		// TODO Auto-generated method stub
		return dao.getid(id);
	}
	public int count(String name,Integer nameId) {
		// TODO Auto-generated method stub
		Map map=new HashMap();
		map.put("name",name);
		map.put("nameId",nameId);
		return dao.count(map);
	}
	public List<Whitegoods> listpage(HashMap<String, Object> map) {
		// TODO Auto-generated method stub
		return dao.listpage(map);
	}
	public List<Whitegoods> getByGoodsId(Integer goodsId) {
		// TODO Auto-generated method stub
		return dao.getByGoodsId(goodsId);
	}
	public void delByGoodsId(Integer goodsId) {
		// TODO Auto-generated method stub
		dao.delByGoodsId(goodsId);
	}

    public void delByNameId(Integer nameId) {
		dao.delByNameId(nameId);
    }
}
