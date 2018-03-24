package com.lanzhou.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import com.lanzhou.entity.GoodsComment;
@Repository
public class GoodsCommentDao {
	@Resource
	private SqlSessionTemplate sm;
	public int add(GoodsComment goodsComment) {
		// TODO Auto-generated method stub
		return sm.insert("com.lanzhou.entity.GoodsComment.add", goodsComment);
	}
	public List<GoodsComment> listBygoods_id(Integer goods_id) {
		// TODO Auto-generated method stub
		return sm.selectList("com.lanzhou.entity.GoodsComment.listBygoods_id", goods_id);
	}
	public List<GoodsComment> listByuser(Integer goods_id, Integer user_id) {
		// TODO Auto-generated method stub
		Map<String, Integer> map=new HashMap<String, Integer>();
		map.put("user_id", user_id);
		map.put("goods_id", goods_id);
		return sm.selectList("com.lanzhou.entity.GoodsComment.listByuser", map);
	}
	public int del(Integer goods_id, Integer user_id) {
		// TODO Auto-generated method stub
		Map<String, Integer> map=new HashMap<String, Integer>();
		map.put("user_id", user_id);
		map.put("goods_id", goods_id);
		return sm.delete("com.lanzhou.entity.GoodsComment.del", map);
	}

}
