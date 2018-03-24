package com.lanzhou.service;

import java.util.HashMap;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.lanzhou.dao.Page_parameterDao;
import com.lanzhou.entity.Page_parameter;

@Service
@Transactional
public class Page_parameterService {
	@Resource
	private Page_parameterDao dao;

	/**
	 * 添加
	 * @param parameter
	 */
	public void add(Page_parameter parameter) {
		dao.add(parameter);
	}

	/**
	 * 列表
	 * @return
	 */
	public List<Page_parameter> list() {
		return dao.list();
	}

	/**
	 * 获取当前行的数据
	 * @param id
	 * @return
	 */
	public Page_parameter getid(Integer id) {
		return dao.getid(id);
	}
	/**
	 * 获取最新一期对象
	 * @return
	 */
	public Page_parameter getNewOne(){
		return dao.getNewOne();
	}
	/**
	 * 修改
	 * @param parameter
	 */
	public void update(Page_parameter parameter) {
		dao.update(parameter);
	}

	/**
	 * 删除
	 * @param id
	 */
	public void del(Integer id) {
		dao.del(id);
	}

	/**
	 * 查询分页列表
	 * @param name
	 * @param map
	 * @return
	 */
	public int count(String name) {
		return dao.count(name);
	}
	public List<Page_parameter> listpage(HashMap<String, Object> map) {
		return dao.listpage(map);
	}

}
