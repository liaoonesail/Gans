package com.lanzhou.dao;

import java.util.List;

import javax.annotation.Resource;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import com.lanzhou.entity.TwelvePrize;
@Repository
public class TwelvePrizeDao {
	@Resource
	private SqlSessionTemplate sm;
	public TwelvePrize getLevel(int level) {
		// TODO Auto-generated method stub
		return sm.selectOne("com.lanzhou.entity.TwelvePrize.getLevel", level);
	}
	public List<TwelvePrize> list() {
		// TODO Auto-generated method stub
		return sm.selectList("com.lanzhou.entity.TwelvePrize.list");
	}
	public void add(TwelvePrize twelveprize) {
		// TODO Auto-generated method stub
		sm.insert("com.lanzhou.entity.TwelvePrize.add", twelveprize);
	}
	public void update(TwelvePrize twelveprize) {
		// TODO Auto-generated method stub
		sm.update("com.lanzhou.entity.TwelvePrize.update", twelveprize);
	}
	public void del(Integer id) {
		// TODO Auto-generated method stub
		sm.delete("com.lanzhou.entity.TwelvePrize.del", id);
	}
	public TwelvePrize getid(Integer id) {
		// TODO Auto-generated method stub
		return sm.selectOne("com.lanzhou.entity.TwelvePrize.getById",id);
	}

}
