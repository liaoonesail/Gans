package com.lanzhou.dao;

import java.util.List;

import javax.annotation.Resource;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import com.lanzhou.entity.Address;

@Repository
public class AddressDao {
	@Resource
	private SqlSessionTemplate sm;
	public Address getuser_id(Integer user_id) {
		// TODO Auto-generated method stub
		return sm.selectOne("com.lanzhou.entity.Address.getuser_id", user_id);
	}
	public int add(Address address) {
		// TODO Auto-generated method stub
		return sm.insert("com.lanzhou.entity.Address.add", address);
	}
	public void updateAll(Integer user_id) {
		// TODO Auto-generated method stub
		sm.update("com.lanzhou.entity.Address.updateAll",user_id);
	}
	public int update(Address address) {
		// TODO Auto-generated method stub
		return sm.update("com.lanzhou.entity.Address.update", address);
	}
	public List<Address> list(Integer user_id) {
		// TODO Auto-generated method stub
		return sm.selectList("com.lanzhou.entity.Address.getListBy_user_id", user_id);
	}
	public Address getid(Integer id) {
		// TODO Auto-generated method stub
		return sm.selectOne("com.lanzhou.entity.Address.getById", id);
	}
	public int del(Integer id) {
		// TODO Auto-generated method stub
		return sm.delete("com.lanzhou.entity.Address.del", id);
	}

}
