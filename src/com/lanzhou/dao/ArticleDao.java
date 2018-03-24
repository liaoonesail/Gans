package com.lanzhou.dao;

import java.util.HashMap;
import java.util.List;

import javax.annotation.Resource;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import com.lanzhou.entity.Article;
@Repository
public class ArticleDao {
	@Resource
	private SqlSessionTemplate sm;
	public void add(Article article) {
		// TODO Auto-generated method stub
		sm.insert("com.lanzhou.entity.Article.add", article);
	}
	public int count(String name) {
		// TODO Auto-generated method stub
		return sm.selectOne("com.lanzhou.entity.Article.count", name);
	}
	public List<Article> listpage(HashMap<String, Object> map) {
		// TODO Auto-generated method stub
		return sm.selectList("com.lanzhou.entity.Article.listpage", map);
	}
	public Article getid(Integer id) {
		// TODO Auto-generated method stub
		return sm.selectOne("com.lanzhou.entity.Article.getById", id);
	}
	public void update(Article article) {
		// TODO Auto-generated method stub
		sm.update("com.lanzhou.entity.Article.update", article);
	}
	public void del(Integer id) {
		// TODO Auto-generated method stub
		sm.delete("com.lanzhou.entity.Article.del", id);
	}
	public List<Article> list() {
		// TODO Auto-generated method stub
		return sm.selectList("com.lanzhou.entity.Article.list");
	}

}
