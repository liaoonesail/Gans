package com.lanzhou.dao;

import java.util.List;

import javax.annotation.Resource;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import com.lanzhou.entity.Whitephone;

@Repository
public class WhitephoneDao {
	@Resource
	private SqlSessionTemplate sm;
	public void delAll(int nameId) {
		// TODO Auto-generated method stub
		sm.delete("com.lanzhou.entity.Whitephone.delAll",nameId);
	}
	public void add(Whitephone whitephone) {
		// TODO Auto-generated method stub
		sm.insert("com.lanzhou.entity.Whitephone.add", whitephone);
	}
	public List<Whitephone> getByPhone(String phone) {
		// TODO Auto-generated method stub
		return sm.selectList("com.lanzhou.entity.Whitephone.getByPhone", phone);
	}

    public void delByNameId(Integer nameId) {
		sm.delete("com.lanzhou.entity.Whitephone.delByNameId",nameId);
    }
}
