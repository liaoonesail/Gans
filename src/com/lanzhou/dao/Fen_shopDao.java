package com.lanzhou.dao;

import java.util.List;

import javax.annotation.Resource;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import com.lanzhou.entity.Fen_shop;
@Repository
public class Fen_shopDao {
	@Resource
	private SqlSessionTemplate sm;
	public void add(Fen_shop fen_shop) {
		// TODO Auto-generated method stub
		sm.insert("com.lanzhou.entity.Fen_shop.add", fen_shop);
	}
	public List<Fen_shop> listByshop_id(Integer shop_id) {
		// TODO Auto-generated method stub
		return sm.selectList("com.lanzhou.entity.Fen_shop.listByshop_id", shop_id);
	}

}
