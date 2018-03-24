package com.lanzhou.service;

import java.util.HashMap;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.lanzhou.dao.ProblemsDao;
import com.lanzhou.entity.Problems;
@Service
@Transactional
public class ProblemsService {
	@Resource
	private ProblemsDao dao;
	public void add(Problems problems) {
		// TODO Auto-generated method stub
		dao.add(problems);
	}
	public Problems getid(Integer id) {
		// TODO Auto-generated method stub
		return dao.getid(id);
	}
	public List<Problems> list(String name) {
		// TODO Auto-generated method stub
		return dao.list(name);
	}
	public void update(Problems problems) {
		// TODO Auto-generated method stub
		dao.update(problems);
	}
	public void del(Integer id) {
		// TODO Auto-generated method stub
		dao.del(id);
	}
	public int count(String name) {
		// TODO Auto-generated method stub
		return dao.count(name);
	}
	public List<Problems> listpage(HashMap<String, Object> map) {
		// TODO Auto-generated method stub
		return dao.listpage(map);
	}

}
