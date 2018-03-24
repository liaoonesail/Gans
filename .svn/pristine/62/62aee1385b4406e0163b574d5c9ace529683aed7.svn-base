package com.lanzhou.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import com.lanzhou.entity.Whitegoods;
@Repository
public class WhitegoodsDao {
	@Resource
	private SqlSessionTemplate sm;
	public void add(Whitegoods whitegoods) {
		// TODO Auto-generated method stub
		sm.insert("com.lanzhou.entity.Whitegoods.add",whitegoods);
	}
	public void del(Integer id) {
		// TODO Auto-generated method stub
		sm.delete("com.lanzhou.entity.Whitegoods.del", id);
	}
	public Whitegoods getid(Integer id) {
		// TODO Auto-generated method stub
		return sm.selectOne("com.lanzhou.entity.Whitegoods.getById", id);
	}
	public int count(Map map) {
		// TODO Auto-generated method stub
		return sm.selectOne("com.lanzhou.entity.Whitegoods.count",map);
	}
	public List<Whitegoods> listpage(HashMap<String, Object> map) {
		// TODO Auto-generated method stub
		return sm.selectList("com.lanzhou.entity.Whitegoods.listpage", map);
	}
	public List<Whitegoods> getByGoodsId(Integer goodsId) {
		// TODO Auto-generated method stub
		return sm.selectList("com.lanzhou.entity.Whitegoods.getByGoodsId", goodsId);
	}
	public void delByGoodsId(Integer goodsId) {
		// TODO Auto-generated method stub
		sm.delete("com.lanzhou.entity.Whitegoods.delByGoodsId", goodsId);
	}

    public void delByNameId(Integer nameId) {
		sm.delete("com.lanzhou.entity.Whitegoods.delByNameId",nameId);
    }
}
