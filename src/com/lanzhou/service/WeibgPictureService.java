package com.lanzhou.service;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.lanzhou.dao.WeibgPictureDao;
import com.lanzhou.entity.Weibg_picture;

@Service
@Transactional
public class WeibgPictureService {

	@Resource
	private WeibgPictureDao dao;
	
	public void add(Weibg_picture weibg_picture) {
		dao.add(weibg_picture);
	}

	public Weibg_picture getid(Integer id) {
		return dao.getid(id);
	}

	public void del() {
		dao.del();
	}

	public List<Weibg_picture> list() {
		return dao.list();
	}

}
