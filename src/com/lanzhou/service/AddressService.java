package com.lanzhou.service;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.lanzhou.dao.AddressDao;
import com.lanzhou.entity.Address;

@Service
@Transactional
public class AddressService {
	@Resource
	private AddressDao dao;
	/**
	 * 
	 * @param address 添加地址
	 * @return
	 */
	public int add(Address address){
		updateAll(address.getUser_id());
		address.setStatus(1);
		return dao.add(address);
	}
	/**
	 * 
	 * @param user_id 查询用户默认地址
	 * @return 
	 */
	public Address getuser_id(Integer user_id) {
		// TODO Auto-generated method stub
		return dao.getuser_id(user_id);
	}
	/**
	 * 
	 * @param user_id 获取用户地址集合
	 * @return
	 */
	public List<Address> list(Integer user_id){
		return dao.list(user_id);
	}
	/**
	 * 
	 * @param id 通过ID获取单个地址
	 * @return
	 */
	public Address getid(Integer id){
		return dao.getid(id);
	}
	/**
	 * 
	 * @param id 通过ID删除地址
	 * @return
	 */
	public int del(Integer id){
		Address address1=null;
		Address address = getid(id);
		if(address.getStatus()==1){
			List<Address> list = list(address.getUser_id());
			for (Address address2 : list) {
				if(address2.getStatus()!=1){
					address1=address2;
				}
			}
		}
		if(address1!=null){
			update(address1);
		}
		return dao.del(id);
	}
	/**
	 * 
	 * @param address 修改地址
	 * @return
	 */
	public int update(Address address){
		updateAll(address.getUser_id());
		address.setStatus(1);
		return dao.update(address);
	}
	/**
	 * 
	 * @param user_id 初始化用户默认地址
	 */
	public void updateAll(Integer user_id){
		dao.updateAll(user_id);
	}

}
