package com.lanzhou.controller;

import java.io.IOException;
import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.lanzhou.entity.Article;
import com.lanzhou.service.ArticleService;
import com.lanzhou.util.ReadWriteTxt;

@Controller
@RequestMapping("/article")
public class ArticleController {
	
	private ArticleService articleService;

	public ArticleService getArticleService() {
		return articleService;
	}
	@Resource
	public void setArticleService(ArticleService articleService) {
		this.articleService = articleService;
	}
	
	/**
	 * 获取所有文章
	 * @param response
	 * @return
	 * @throws IOException
	 */
	@RequestMapping("/getAllArticle")
	public String getAllArticle(HttpServletResponse response) throws IOException{
		List<Article> articleList = articleService.list();
		JSONArray json = JSONArray.fromObject(articleList);
		response.getWriter().print(json);
		return null;
	}
	
	/**
	 * 根据ID获取单个文章
	 * @param id
	 * @param response
	 * @return
	 * @throws IOException
	 */
	@RequestMapping("/getArticleById")
	public String getArticleById(int id, HttpServletResponse response,HttpServletRequest request) throws IOException{
		Article article = articleService.getid(id);
		String read=ReadWriteTxt.read(article.getDetails(),request);//读取文章详情
		article.setDetails(read);
		JSONObject json = JSONObject.fromObject(article);
		response.getWriter().print(json);
		return null;
	}
}
