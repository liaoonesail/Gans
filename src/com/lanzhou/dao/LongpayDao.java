package com.lanzhou.dao;

import java.util.HashMap;
import java.util.List;

import javax.annotation.Resource;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import com.lanzhou.entity.Longpay;
import com.lanzhou.entity.Type;
@Repository
public class LongpayDao {
	@Resource
	private SqlSessionTemplate sm;
	public Longpay getByGoodsId(int goodsId) {
		// TODO Auto-generated method stub
		return sm.selectOne("com.lanzhou.entity.Longpay.getByGoodsId", goodsId);
	}
	public void add(Longpay longpay) {
		// TODO Auto-generated method stub
		sm.insert("com.lanzhou.entity.Longpay.add", longpay);
	}
	public int count() {
		// TODO Auto-generated method stub
		return sm.selectOne("com.lanzhou.entity.Longpay.count");
	}
	public List<Longpay> listpage(HashMap<String, Object> map) {
		// TODO Auto-generated method stub
		return sm.selectList("com.lanzhou.entity.Longpay.listpage", map);
	}
	public Longpay getid(Integer id) {
		// TODO Auto-generated method stub
		return sm.selectOne("com.lanzhou.entity.Longpay.getById", id);
	}
	public void update(Longpay longpay) {
		// TODO Auto-generated method stub
		sm.update("com.lanzhou.entity.Longpay.update", longpay);
	}
	public void del(Integer id) {
		// TODO Auto-generated method stub
		sm.delete("com.lanzhou.entity.Longpay.del", id);
	}
	public List<Longpay> list(Integer typeId) {
		// TODO Auto-generated method stub
		return sm.selectList("com.lanzhou.entity.Longpay.list", typeId);
	}
	public List<Type> getTypeList() {
		// TODO Auto-generated method stub
		return sm.selectList("com.lanzhou.entity.Longpay.getTypeList");
	}

}
