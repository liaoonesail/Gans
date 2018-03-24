package com.lanzhou.service;

import java.util.HashMap;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.lanzhou.dao.AdvertisementDao;
import com.lanzhou.entity.Advertisement;

@Service
@Transactional
public class AdvertisementService {
	
	@Resource
	private AdvertisementDao dao;
	
	
	/**
	 * 添加广告
	 * @param advertisement
	 */
	public void add(Advertisement advertisement){
		dao.add(advertisement);
	}
	
	/**
	 * 删除广告
	 * @param id
	 */
	public void del(Integer id){
		dao.del(id);
	}
	
	/**
	 * 修改广告
	 * @param advertisement
	 */
	public void update(Advertisement advertisement){
		dao.update(advertisement);
	}
	
	/**
	 * 获取广告id
	 * @param id
	 * @return
	 */
	public Advertisement getid(Integer id){
		return dao.getid(id);
	}
	
	/**
	 * 
	 * @param name
	 * @return
	 */
	public int count(String name){
		return dao.count(name);
	}
	
	/**
	 * 获取广告分页列表集合
	 * @param map
	 * @return
	 */
	public List<Advertisement> listpage(HashMap<String, Object> map){
		return dao.listpage(map);
	}
	
	/**
	 * 获取广告列表
	 * @return
	 */
	public List<Advertisement> list(String ad_address){
		return dao.list(ad_address);
	}
	/**
	 * 轮播广告集合
	 * @param location
	 * @return
	 */
	public List<Advertisement> lbList(String location) {
		// TODO Auto-generated method stub
		return dao.lbList(location);
	}
	/**
	 * 获取单个图片根据图片位置
	 * @param location
	 * @return
	 */
	public Advertisement getOne(String location) {
		// TODO Auto-generated method stub
		return dao.getOne(location);
	}
	
	
}
