package com.lanzhou.service;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.lanzhou.dao.MiaoshaDayDao;
import com.lanzhou.entity.MiaoshaDay;

@Service
@Transactional
public class MiaoshaDayService {
	@Resource
	private MiaoshaDayDao dao;
	public void add(MiaoshaDay miaoshaDay) {
		// TODO Auto-generated method stub
		dao.add(miaoshaDay);
	}
	public void del(Integer id) {
		// TODO Auto-generated method stub
		dao.del(id);
	}
	public List<MiaoshaDay> list() {
		// TODO Auto-generated method stub
		return dao.list();
	}

}
