package com.lanzhou.service;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.lanzhou.dao.ActivityDao;
import com.lanzhou.entity.Activity;
import com.lanzhou.entity.Zhouzhou;
import com.lanzhou.util.ZhouZhouUtil;
@Service
@Transactional
public class ActivityService {
	@Resource
	private ActivityDao dao;
	/**
	 * 添加活动
	 * @param activity
	 */
	public void add(Activity activity) {
		// TODO Auto-generated method stub
		dao.add(activity);
	}
	/**
	 * 获取活动list
	 * @return
	 */
	public List<Activity> list() {
		// TODO Auto-generated method stub
		return dao.list();
	}
	/**
	 * 删除活动
	 * @param id
	 */
	public void del(Integer id) {
		// TODO Auto-generated method stub
		dao.del(id);
	}
	/**
	 * 获取周周惠时间
	 * @return
	 */
	public List<Zhouzhou> getweek(){
		ZhouZhouUtil zhouzhou=new ZhouZhouUtil();
		return zhouzhou.getThisMonthWeekDate();
	}

}
