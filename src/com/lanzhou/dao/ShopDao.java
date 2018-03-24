package com.lanzhou.dao;

import java.util.List;

import javax.annotation.Resource;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import com.lanzhou.action.AdminuserAction;
import com.lanzhou.entity.Shop;
@Repository
public class ShopDao {
	@Resource
	private SqlSessionTemplate sm;
	AdminuserAction action = new AdminuserAction();
	public void add(Shop shop) {
		sm.insert("com.lanzhou.entity.Shop.add", shop);
	}
	public List<Shop> list() {
		return sm.selectList("com.lanzhou.entity.Shop.list");
	}
	public int getarea_id(Integer id) {
		return sm.selectOne("com.lanzhou.entity.Shop.getarea_id", id);
	}
	public List<Shop> getlistByarea_id(Integer area_id) {
		return sm.selectList("com.lanzhou.entity.Shop.getlistByarea_id", area_id);
	}
	public Shop getid(Integer id) {
		return sm.selectOne("com.lanzhou.entity.Shop.getById", id);
	}
	public void del(Integer id) {
		 sm.delete("com.lanzhou.entity.Shop.del", id);
	}
	public void update(Shop shop) {
		sm.update("com.lanzhou.entity.Shop.update", shop);
	}

}
