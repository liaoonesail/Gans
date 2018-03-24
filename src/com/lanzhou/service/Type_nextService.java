package com.lanzhou.service;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.lanzhou.dao.Type_nextDao;
import com.lanzhou.entity.Type_next;
import com.lanzhou.entity.Type_next_next;
@Service
@Transactional
public class Type_nextService {
	@Resource
	private Type_nextDao dao;
	@Resource
	private Type_next_nextService service;
	/**
	 * 
	 * @param type 添加二级类
	 */
	public void add(Type_next type) {
		// TODO Auto-generated method stub
		dao.add(type);
	}
	/**
	 * 
	 * @return 获取二级类list
	 */
	public List<Type_next> list() {
		// TODO Auto-generated method stub
		return dao.list();
	}
	/**
	 * 
	 * @param type_id 根据大类获取二级类别集合
	 * @return
	 */
	public List<Type_next> listBytype_id(Integer type_id){
		return dao.listBytype_id(type_id);
	}
	/**
	 * 
	 * @param type 修改二级类
	 */
	public void update(Type_next type) {
		// TODO Auto-generated method stub
		dao.update(type);
	}
	/**
	 * 
	 * @param id 删除二级类
	 */
	public Boolean del(Integer id) {
		// TODO Auto-generated method stub
		List<Type_next_next> list=service.listBytype_next_id(id);
		if(list.size()==0){
			dao.del(id);
			return true;//删除成功
		}else{
			return false;//下级不为空
		}
	}
	public Type_next getid(Integer id) {
		// TODO Auto-generated method stub
		return dao.getid(id);
	}

}
