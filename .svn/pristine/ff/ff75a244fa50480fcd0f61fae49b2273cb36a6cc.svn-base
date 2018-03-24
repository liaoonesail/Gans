package com.lanzhou.service;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.lanzhou.dao.TwelvePrizeDao;
import com.lanzhou.entity.TwelvePrize;
@Service
@Transactional
public class TwelvePrizeService {
	@Resource
	private TwelvePrizeDao dao;
	public TwelvePrize getLevel(int level) {
		// TODO Auto-generated method stub
		return dao.getLevel(level);
	}
	public List<TwelvePrize> list() {
		// TODO Auto-generated method stub
		return dao.list();
	}
	public void add(TwelvePrize twelveprize) {
		// TODO Auto-generated method stub
		dao.add(twelveprize);
	}
	public void update(TwelvePrize twelveprize) {
		// TODO Auto-generated method stub
		dao.update(twelveprize);
	}
	public void del(Integer id) {
		// TODO Auto-generated method stub
		dao.del(id);
	}
	public TwelvePrize getid(Integer id) {
		// TODO Auto-generated method stub
		return dao.getid(id);
	}

}
