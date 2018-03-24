package com.lanzhou.dao;

import java.util.List;

import javax.annotation.Resource;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import com.lanzhou.entity.Activity;
@Repository
public class ActivityDao {
	@Resource
	private SqlSessionTemplate sm;
	public void add(Activity activity) {
		sm.insert("com.lanzhou.entity.Activity.add", activity);
	}
	public List<Activity> list() {
		return sm.selectList("com.lanzhou.entity.Activity.list");
	}
	public void del(Integer id) {
		sm.delete("com.lanzhou.entity.Activity.del", id);
	}

}
