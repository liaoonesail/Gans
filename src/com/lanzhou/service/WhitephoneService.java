package com.lanzhou.service;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.lanzhou.dao.WhitephoneDao;
import com.lanzhou.entity.Whitephone;

@Service
@Transactional
public class WhitephoneService {
	@Resource
	private WhitephoneDao dao;
	public void delAll(int nameId) {
		// TODO Auto-generated method stub
		dao.delAll(nameId);
	}
	public void add(Whitephone whitephone) {
		// TODO Auto-generated method stub
		dao.add(whitephone);
	}
	public List<Whitephone> getByPhone(String phone) {
		// TODO Auto-generated method stub
		return dao.getByPhone(phone);
	}

    public void delByNameId(Integer nameId) {
		dao.delByNameId(nameId);
    }
}
