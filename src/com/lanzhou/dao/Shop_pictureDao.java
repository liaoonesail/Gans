package com.lanzhou.dao;


import java.util.List;

import javax.annotation.Resource;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import com.lanzhou.entity.Shop_picture;
@Repository
public class Shop_pictureDao {
	@Resource
	private SqlSessionTemplate sm;
	public void add(Shop_picture shop_picture) {
		// TODO Auto-generated method stub
		sm.insert("com.lanzhou.entity.Shop_picture.add", shop_picture);
	}
	public List<Shop_picture> listByshop_id(Integer shop_id) {
		// TODO Auto-generated method stub
		return sm.selectList("com.lanzhou.entity.Shop_picture.listByshop_id", shop_id);
	}
	public Shop_picture getid(Integer id) {
		// TODO Auto-generated method stub
		return sm.selectOne("com.lanzhou.entity.Shop_picture.getById", id);
	}
	public void del(Integer id) {
		// TODO Auto-generated method stub
		sm.delete("com.lanzhou.entity.Shop_picture.del", id);
	}
	public void update(Shop_picture shop_picture) {
		// TODO Auto-generated method stub
		sm.update("com.lanzhou.entity.Shop_picture.update", shop_picture);
	}

}
