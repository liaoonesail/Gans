package com.lanzhou.dao;

import java.util.List;

import javax.annotation.Resource;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import com.lanzhou.entity.MiaoshaDay;
@Repository
public class MiaoshaDayDao {
	@Resource
	private SqlSessionTemplate sm;
	public void add(MiaoshaDay miaoshaDay) {
		// TODO Auto-generated method stub
		sm.insert("com.lanzhou.entity.MiaoshaDay.add", miaoshaDay);
	}
	public void del(Integer id) {
		// TODO Auto-generated method stub
		sm.delete("com.lanzhou.entity.MiaoshaDay.del", id);
	}
	public List<MiaoshaDay> list() {
		// TODO Auto-generated method stub
		return sm.selectList("com.lanzhou.entity.MiaoshaDay.list");
	}

}
