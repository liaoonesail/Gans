package com.lanzhou.service;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.lanzhou.dao.TypeDao;
import com.lanzhou.entity.Type;
import com.lanzhou.entity.Type_next;

@Service
@Transactional
public class TypeService {
	@Resource
	private TypeDao dao;
	@Resource
	private Type_nextService service;
	/**
	 * 
	 * @param type 添加大类
	 */
	public void add(Type type) {
		// TODO Auto-generated method stub
		dao.add(type);
	}
	/**
	 * 
	 * @return 获取大类列表
	 */
	public List<Type> list() {
		// TODO Auto-generated method stub
		return dao.list();
	}
	/**
	 * 
	 * @param type 修改大类
	 */
	public void update(Type type) {
		// TODO Auto-generated method stub
		dao.update(type);
	}
	/**
	 * 
	 * @param id 删除大类
	 */
	public Boolean del(Integer id) {
		// TODO Auto-generated method stub
		List<Type_next> list = service.listBytype_id(id);
		if(list.size()==0){
			dao.del(id);
			return true;//删除成功
		}else{
			return false;//下级不为空
		}
	}
	public List<Type> xuniList() {
		// TODO Auto-generated method stub
		return dao.xunilist();
	}

}
