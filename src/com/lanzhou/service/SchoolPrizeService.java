package com.lanzhou.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.lanzhou.dao.SchoolPrizeDao;
import com.lanzhou.entity.SchoolPrize;
@Service
@Transactional
public class SchoolPrizeService {
	@Resource
	private SchoolPrizeDao dao;
	/**
	 * excel导入入学季 添加单个方法
	 * @param prize
	 */
	public void add(SchoolPrize prize) {
		// TODO Auto-generated method stub
		dao.add(prize);
	}
	/**
	 * 清空schoolprize表
	 */
	public void delAll(){
		dao.delAll();
	}
	/**
	 * 获取导入excel表的数据数量
	 * @param name
	 * @return
	 */
	public int count(String name) {
		// TODO Auto-generated method stub
		return dao.count(name);
	}
	/**
	 * 模糊分页查询集合
	 * @param map
	 * @return
	 */
	public List<SchoolPrize> listpage(HashMap<String, Object> map) {
		// TODO Auto-generated method stub
		return dao.listpage(map);
	}
	public List<SchoolPrize> getPrize(String phone, Integer label) {
		// TODO Auto-generated method stub
		Map<String, Object> map=new HashMap<String, Object>();
		map.put("phone", phone);
		map.put("label", label);
		return dao.getPrize(map);
	}
	public List<SchoolPrize> getList(Integer label) {
		// TODO Auto-generated method stub
		return dao.getList(label);
	}
	public SchoolPrize getid(Integer id) {
		// TODO Auto-generated method stub
		return dao.getid(id);
	}

}
