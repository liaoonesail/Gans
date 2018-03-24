package com.lanzhou.service;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.lanzhou.dao.MouldDao;
import com.lanzhou.entity.Mould;
@Service
@Transactional
public class MouldService {
	@Resource
	private MouldDao dao;
	/**
	 * 
	 * @param mould 添加模板
	 */
	public void add(Mould mould) {
		// TODO Auto-generated method stub
		dao.add(mould);
	}
	/**
	 * 
	 * @return 获取模板list
	 */
	public List<Mould> list() {
		// TODO Auto-generated method stub
		return dao.list();
	}
	/**
	 * 
	 * @param mould 修改模板
	 */
	public void update(Mould mould) {
		// TODO Auto-generated method stub
		dao.update(mould);
	}
	/**
	 * 
	 * @param id 删除
	 */
	public void del(Integer id) {
		// TODO Auto-generated method stub
		dao.del(id);
	}
	/**
	 * 
	 * @param id 获取单个对象mould
	 * @return
	 */
	public Mould getid(Integer id) {
		// TODO Auto-generated method stub
		return dao.getid(id);
	}

}
