package com.lanzhou.service;

import java.util.HashMap;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.lanzhou.dao.ArticleDao;
import com.lanzhou.entity.Article;
@Service
@Transactional
public class ArticleService {
	@Resource
	private ArticleDao dao;
	/**
	 * 添加
	 * @param article
	 */
	public void add(Article article) {
		// TODO Auto-generated method stub
		dao.add(article);
	}
	/**
	 * 分页
	 * @param name
	 * @return
	 */
	public int count(String name) {
		// TODO Auto-generated method stub
		return dao.count(name);
	}
	public List<Article> listpage(HashMap<String, Object> map) {
		// TODO Auto-generated method stub
		return dao.listpage(map);
	}
	/**
	 * 获取单个对象
	 * @param id
	 * @return
	 */
	public Article getid(Integer id) {
		// TODO Auto-generated method stub
		return dao.getid(id);
	}
	/**
	 * 修改
	 * @param article
	 */
	public void update(Article article) {
		// TODO Auto-generated method stub
		dao.update(article);
	}
	/**
	 * 删除
	 * @param id
	 */
	public void del(Integer id) {
		// TODO Auto-generated method stub
		dao.del(id);
	}
	/**
	 * 获取所有文章
	 * @return
	 */
	public List<Article> list(){
		return dao.list();
	}

}
