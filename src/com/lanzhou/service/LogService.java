package com.lanzhou.service;

import java.util.HashMap;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.lanzhou.dao.LogDao;
import com.lanzhou.entity.Log;

@Service
@Transactional
public class LogService {
	@Resource
	private LogDao dao;
	/**
	 * 添加日志
	 * @param log
	 * @return
	 */
	public int add(Log log){
		return dao.add(log);
	}
	/**
	 * 分页查询
	 * @param name
	 * @return
	 */
	public int count(String name) {
		// TODO Auto-generated method stub
		return dao.count(name);
	}
	public List<Log> listpage(HashMap<String, Object> map) {
		// TODO Auto-generated method stub
		return dao.listpage(map);
	}
	/**
	 * 删除
	 * @param id
	 */
	public void del(Integer id) {
		// TODO Auto-generated method stub
		dao.del(id);
	}
}
