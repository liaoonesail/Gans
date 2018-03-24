package com.lanzhou.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.lanzhou.dao.InschoolDao;
import com.lanzhou.entity.Inschool;
@Service
@Transactional
public class InschoolService {
	@Resource
	private InschoolDao dao;
	/**
	 * 根据商品ID获取入学季活动详情
	 * @param goodsId
	 * @return
	 */
	public Inschool getByGoodsId(int goodsId) {
		// TODO Auto-generated method stub
		return dao.getByGoodsId(goodsId);
	}
	/**
	 * 添加入学季活动详情
	 * @param inschool
	 */
	public void add(Inschool inschool) {
		// TODO Auto-generated method stub
		dao.add(inschool);
	}
	/**
	 * 后端模糊查询
	 * @return
	 */
	public int count() {
		// TODO Auto-generated method stub
		return dao.count();
	}
	public List<Inschool> listpage(HashMap<String, Object> map) {
		// TODO Auto-generated method stub
		return dao.listpage(map);
	}
	public Inschool getid(Integer id) {
		// TODO Auto-generated method stub
		return dao.getid(id);
	}
	public void update(Inschool inschool) {
		// TODO Auto-generated method stub
		dao.update(inschool);
	}
	public void del(Integer id) {
		// TODO Auto-generated method stub
		dao.del(id);
	}
	public List<Inschool> listByareaId(Integer areaId, Integer type,
			Integer goodsNum) {
		// TODO Auto-generated method stub
		Map<String, Integer> map=new HashMap<String, Integer>();
		map.put("areaId", areaId);
		map.put("type", type);
		map.put("goodsNum", goodsNum);
		return dao.listByareaId(map);
	}

}
