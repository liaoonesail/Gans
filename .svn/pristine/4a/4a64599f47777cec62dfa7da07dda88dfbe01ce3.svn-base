package com.lanzhou.service;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.lanzhou.dao.GoodsCommentDao;
import com.lanzhou.entity.GoodsComment;
import com.lanzhou.util.OrderNum;

@Service
@Transactional
public class GoodsCommentService {
	@Resource
	private GoodsCommentDao dao;
	/**
	 * 添加商品评论
	 * @param goodsComment
	 * @return
	 */
	public int add(GoodsComment goodsComment){
		goodsComment.setComment_time(OrderNum.getregTime());
		return dao.add(goodsComment);
	}
	/**
	 * 获取单个商品评论list
	 * @param goods_id
	 * @return
	 */
	public List<GoodsComment> listBygoods_id(Integer goods_id){
		return dao.listBygoods_id(goods_id);
	}
	/**
	 * 获取单个用户对单个商品的评价
	 * @param goods_id
	 * @param user_id
	 * @return
	 */
	public List<GoodsComment> listByuser(Integer goods_id,Integer user_id){
		return dao.listByuser(goods_id,user_id);
	}
	/**
	 * 删除用户对单个商品的评价
	 * @param goods_id
	 * @param user_id
	 * @return
	 */
	public int del(Integer goods_id,Integer user_id){
		return dao.del(goods_id,user_id);
	}
}
