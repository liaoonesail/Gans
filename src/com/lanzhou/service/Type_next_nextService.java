package com.lanzhou.service;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.lanzhou.dao.Type_next_nextDao;
import com.lanzhou.entity.Goods;
import com.lanzhou.entity.Type_next_next;
@Service
@Transactional
public class Type_next_nextService {
	@Resource
	private Type_next_nextDao dao;
	@Resource
	private GoodsService service;
	/**
	 * 
	 * @param type 添加三级类
	 */
	public void add(Type_next_next type) {
		// TODO Auto-generated method stub
		dao.add(type);
	}
	/**
	 * 
	 * @return 获取三级类list
	 */
	public List<Type_next_next> list() {
		// TODO Auto-generated method stub
		return dao.list();
	}
	/**
	 * 
	 * @param type_id 根据大类ID获取list
	 * @return
	 */
	public List<Type_next_next> listBytype_id(Integer type_id){
		return dao.listBytype_id(type_id);
	}
	/**
	 * 
	 * @param type_next_id 根据二级类ID获取list
	 * @return
	 */
	public List<Type_next_next> listBytype_next_id(Integer type_next_id){
		return dao.listBytype_next_id(type_next_id);
	}
	/**
	 * 
	 * @param type 修改三级类
	 */
	public void update(Type_next_next type) {
		// TODO Auto-generated method stub
		dao.update(type);
	}
	/**
	 * 
	 * @param id 删除三级类
	 */
	public Boolean del(Integer id,Integer area_id) {
		// TODO Auto-generated method stub
		List<Goods> list=service.listBytype_next_next_id(id, area_id);
		if(list.size()==0){
			dao.del(id);
			return true;//删除成功
		}else{
			return false;//下级不为空
		}
	}
	public Type_next_next getid(Integer id) {
		// TODO Auto-generated method stub
		return dao.getid(id);
	}
	public List<Type_next_next> xuniList() {
		// TODO Auto-generated method stub
		return dao.xuniList();
	}

}
