package com.lanzhou.service;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.lanzhou.dao.AreaDao;
import com.lanzhou.entity.Area;
@Service
@Transactional
public class AreaService {
	@Resource
	private AreaDao dao;
	/**
	 * 添加
	 * @param area
	 */
	public void add(Area area) {
		// TODO Auto-generated method stub
		dao.add(area);
	}
	/**
	 * 获取地区列表 
	 * @return
	 */
	public List<Area> list() {
		// TODO Auto-generated method stub
		return dao.list();
	}
	/**
	 * 根据ID获取单个对象
	 * @param id
	 * @return
	 */
	public Area getid(Integer id){
		return dao.getid(id);
	}
	/**
	 * 获取兰州对象
	 */
	public Area getlanzhou(){
		return dao.getlanzhou();
	}
	/**
	 * 删除
	 * @param id
	 */
	public void del(Integer id) {
		// TODO Auto-generated method stub
		dao.del(id);
	}
	public void update(Area area) {
		// TODO Auto-generated method stub
		dao.update(area);
	}


    public void updateSrAmount(Area area) {
    	dao.updateSrAmount(area);
	}
}
