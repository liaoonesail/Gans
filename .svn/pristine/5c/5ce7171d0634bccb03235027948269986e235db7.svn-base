package com.lanzhou.controller;

import java.io.IOException;
import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import net.sf.json.JSONArray;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.lanzhou.entity.GoodsComment;
import com.lanzhou.entity.User;
import com.lanzhou.service.GoodsCommentService;

@Controller
@RequestMapping("/comment")
public class GoodsCommentController {
	
	private GoodsCommentService goodsCommentService;

	public GoodsCommentService getGoodsCommentService() {
		return goodsCommentService;
	}
	@Resource
	public void setGoodsCommentService(GoodsCommentService goodsCommentService) {
		this.goodsCommentService = goodsCommentService;
	}
	
	/**
	 * 添加评论
	 * @param goodsId
	 * @param xingji
	 * @param content
	 * @param request
	 * @param response
	 * @return
	 * @throws IOException
	 */
	@RequestMapping("/addComment")
	public String addComment(int goodsId, int xingji, String content, String comment_time,HttpServletRequest request, HttpServletResponse response) throws IOException{
		HttpSession session = request.getSession();
		User user = (User)session.getAttribute("user");
		if(user == null){
			response.getWriter().print("notLogin");
		}else{
			GoodsComment comment = new GoodsComment();
			comment.setComment_time(comment_time);
			comment.setComment(content);
			comment.setGoods_id(goodsId);
			comment.setGrade(xingji);
			comment.setUser_id(user.getId());
			goodsCommentService.add(comment);
			response.getWriter().print("ok");
		}
		return null;
	}
	
	/**
	 * 获取商品的所有评价
	 * @param goodsId
	 * @param request
	 * @param response
	 * @return
	 * @throws IOException
	 */
	@RequestMapping("/getCommentByGoodsId")
	public String getCommentByGoodsId(int goodsId, HttpServletRequest request, HttpServletResponse response) throws IOException{
		List<GoodsComment> commentList = goodsCommentService.listBygoods_id(goodsId);
		JSONArray json = JSONArray.fromObject(commentList);
		response.getWriter().print(json);
		return null;
	}
}
