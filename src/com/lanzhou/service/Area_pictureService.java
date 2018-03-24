package com.lanzhou.service;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.lanzhou.dao.Area_pictureDao;
import com.lanzhou.entity.Area_picture;
@Service
@Transactional
public class Area_pictureService {
	@Resource
	private Area_pictureDao dao;
	/**
	 * 添加
	 * @param area_picture
	 */
	public void add(Area_picture area_picture) {
		// TODO Auto-generated method stub
		dao.add(area_picture);
	}
	/**
	 * 根据区域ID获取区域图片对象
	 * @param area_id
	 * @return
	 */
	public List<Area_picture> getByarea_id(Integer area_id){
		return dao.getByarea_id(area_id);
	}
	/**
	 * 根据id获取对象
	 * @param id
	 * @return
	 */
	public Area_picture getid(Integer id){
		return dao.getid(id);
	}
	/**
	 * 删除
	 * @param id
	 */
	public void del(Integer id) {
		// TODO Auto-generated method stub
		dao.del(id);
	}
	/**
	 * 修改
	 * @param area_picture
	 */
	public void update(Area_picture area_picture) {
		// TODO Auto-generated method stub
		dao.update(area_picture);
	}

}
