package com.lanzhou.action;

import java.io.IOException;
import java.util.Date;
import java.util.HashMap;
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
import com.lanzhou.util.OrderNum;
import com.lanzhou.util.ReadWriteTxt;
import com.lanzhou.util.page;

@Controller
@RequestMapping("/adminarticle")
public class ArticleAction {
	@Resource
	private ArticleService service;
	/**
	 * 添加文章
	 * @param article
	 * @param request
	 * @param response
	 * @return
	 * @throws IOException 
	 */
	@RequestMapping("/add")
	public String add(Article article,HttpServletRequest request,HttpServletResponse response) throws IOException{
		String html=article.getDetails();
		String time = new Date().getTime()+"";
		ReadWriteTxt.write(html, time, request);
		article.setDetails("/upload"+request.getContextPath()+"/goods_details/"+time+".txt");
		service.add(article);
		response.getWriter().print(true);
		return null;
	}
	/**
	 * 模糊查询加分页
	 * @param name
	 * @param curpage
	 * @param request
	 * @param response
	 * @return
	 * @throws IOException
	 */
	@RequestMapping("/listpage")
	public String listpage(String name,String curpage,HttpServletRequest request,HttpServletResponse response) throws IOException{
		name=name==null?"":name;
		int count=service.count(name);
		page page=new page(curpage, count, 10);
		HashMap<String,Object> map = new HashMap<String, Object>();
		map.put("startRecord", page.getStartRecord());
		map.put("pageSize", page.getPageSize());
		map.put("name", name);
		List<Article> list=service.listpage(map);
		map.put("page", page);
		map.put("list", list);
		map.put("count", count);
		JSONArray json=JSONArray.fromObject(map);
		response.getWriter().print(json);
		return null;
	}
	/**
	 * 根据ID获取文章对象
	 * @param id
	 * @param request
	 * @param response
	 * @return
	 * @throws IOException 
	 */
	@RequestMapping("/getid")
	public String getid(Integer id,HttpServletRequest request,HttpServletResponse response) throws IOException{
		Article article=service.getid(id);
		String read=ReadWriteTxt.read(article.getDetails(),request);//读取文章详情
		article.setDetails(read);
		JSONObject json=JSONObject.fromObject(article);
		response.getWriter().print(json);
		return null;
	}
	@RequestMapping("/update")
	public String update(Article article,HttpServletRequest request,HttpServletResponse response) throws IOException{
		ReadWriteTxt.del(article.getDetails(), request);
		String html=article.getDetails();
		String time = new Date().getTime()+"";
		ReadWriteTxt.write(html, time, request);
		article.setDetails("/upload"+request.getContextPath()+"/goods_details/"+time+".txt");
		service.update(article);
		System.out.println(article.getDetails());
		response.getWriter().print(true);
		return null;
	}
	@RequestMapping("/del")
	public String del(Integer id,HttpServletResponse response,HttpServletRequest request) throws IOException{
		Article article=service.getid(id);
		ReadWriteTxt.del(article.getDetails(), request);
		service.del(id);
		response.getWriter().print(true);
		return null;
	}

}
