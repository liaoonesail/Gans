package com.lanzhou.dao;

import java.util.List;

import javax.annotation.Resource;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import com.lanzhou.entity.Prize;

@Repository
public class PrizeDao {
	@Resource
	private SqlSessionTemplate sm;
	/**
	 * 
	 * @param prize 添加奖品
	 */
	public void add(Prize prize) {
		// TODO Auto-generated method stub
		sm.insert("com.lanzhou.entity.Prize.add", prize);
	}
	/**
	 * 
	 * @return 获取奖品
	 */
	public List<Prize> list() {
		// TODO Auto-generated method stub
		return sm.selectList("com.lanzhou.entity.Prize.list");
	}
	public void update(Prize prize) {
		// TODO Auto-generated method stub
		sm.update("com.lanzhou.entity.Prize.update", prize);
	}
	public void del(Integer id) {
		// TODO Auto-generated method stub
		sm.delete("com.lanzhou.entity.Prize.del", id);
	}
	public Prize getid(Integer id) {
		// TODO Auto-generated method stub
		return sm.selectOne("com.lanzhou.entity.Prize.getById", id);
	}
	public Prize getLevel(int level) {
		// TODO Auto-generated method stub
		return sm.selectOne("com.lanzhou.entity.Prize.getLevel", level);
	}
	public List<Prize> getNotPrize() {
		// TODO Auto-generated method stub
		return sm.selectList("com.lanzhou.entity.Prize.getNotPrize");
	}

}
