package com.lanzhou.action;

import java.io.IOException;
import java.util.*;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.lanzhou.entity.Activity_details;
import com.lanzhou.entity.Goods;
import com.lanzhou.service.Activity_detailsService;
import com.lanzhou.service.AdminuserService;
import com.lanzhou.service.GoodsService;
import com.lanzhou.service.ShopService;
import com.lanzhou.service.WhitegoodsService;
import com.lanzhou.util.OrderNum;
import com.lanzhou.util.ReadWriteTxt;
import com.lanzhou.util.page;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("/admingoods")
public class GoodsAction {
	@Resource
	private GoodsService service;
	@Resource
	private Activity_detailsService service1;
	@Resource
	private ShopService service3;
	@Resource
	private AdminuserService service4;
	@Resource
	private WhitegoodsService service5;
	/**
	 * 
	 * @param goods
	 * @param request 添加商品
	 * @return
	 * @throws IOException 
	 */
	@RequestMapping("/add")
	public String add(Goods goods,HttpServletRequest request) throws IOException{
		boolean addlog = service4.addlog(3, 2, request);
		if(addlog){
		//获取地区ID
		goods.setArea_id(service3.getarea_id(goods.getShop_id()));
		//生成商品编号
		goods.setGoods_num(OrderNum.getSystemNum());
		String html=goods.getGoods_details();
		String picture = goods.getPicture_address();
		int a=picture.indexOf("src=");
		int b=picture.indexOf("alt=");
		String picture_address=null;
		if(a<b){
			 picture_address = picture.substring(picture.indexOf("src=")+5,picture.indexOf("alt=")-2);
		}else{
			picture_address = picture.substring(picture.indexOf("src=")+5,picture.indexOf("/>")-2);
		}
		String time = new Date().getTime()+"";
		ReadWriteTxt.write(html, time, request);
		goods.setPicture_address(picture_address);
		goods.setGoods_details("/upload"+request.getContextPath()+"/goods_details/"+time+".txt");
			service.add(goods);
			int activity_id=goods.getActivity_id();
			if(activity_id!=0){
				Activity_details getgoods_id = service1.getgoods_id(goods.getId());
				if(getgoods_id==null){
					String start_time=request.getParameter("start_time");
					String end_time=request.getParameter("end_time");
					double real_price=Double.parseDouble(request.getParameter("real_price"));
					Activity_details activity_details = new Activity_details(activity_id, start_time, end_time, real_price, goods.getId());
					//添加活动详情
					service1.add(activity_details);
				}
			}
			return "redirect:../GanSuManagement/commodityManagement.html";
		}else{
			return "redirect:../GanSuManagement/404.html";
		}
		
	}
	@RequestMapping("/update")
	public String update(Goods goods,HttpServletRequest request) throws IOException{
		boolean addlog = service4.addlog(3, 3, request);
		if(addlog){
		//获取此商品的以前信息
		Goods goods2=service.getid(goods.getId());
		//删除以前的商品详情.txt
		ReadWriteTxt.del(goods2.getGoods_details(), request);
		//添加修改的商品信息
		String html=goods.getGoods_details();
		String picture = goods.getPicture_address();
		int a=picture.indexOf("src=");
		int b=picture.indexOf("alt=");
		String picture_address=null;
		if(a<b){
			 picture_address = picture.substring(picture.indexOf("src=")+5,picture.indexOf("alt=")-2);
		}else{
			picture_address = picture.substring(picture.indexOf("src=")+5,picture.indexOf("/>")-2);
		}
		String time = new Date().getTime()+"";
		ReadWriteTxt.write(html, time, request);
		goods.setPicture_address(picture_address);
		goods.setGoods_details("/upload"+request.getContextPath()+"/goods_details/"+time+".txt");
		//获取地区ID
		goods.setArea_id(service3.getarea_id(goods.getShop_id()));
			service.update(goods);
			int activity_id=goods.getActivity_id();
			if(activity_id!=0){
				Activity_details getgoods_id = service1.getgoods_id(goods.getId());
				if(getgoods_id==null){
				String start_time=request.getParameter("start_time");
				String end_time=request.getParameter("end_time");
				double real_price=Double.parseDouble(request.getParameter("real_price"));
				Activity_details activity_details = new Activity_details(activity_id, start_time, end_time, real_price, goods.getId());
				//添加活动详情
				service1.add(activity_details);
				}
			}else{
				service1.delBygoods_id(goods.getId());
			}
			return "redirect:../GanSuManagement/commodityManagement.html";
		}else{
			return "redirect:../GanSuManagement/404.html";
		}
		
	}
	/**
	 * 
	 * @param id
	 * @param request 获取单个商品根据ID
	 * @param response
	 * @return
	 * @throws IOException
	 */
	@RequestMapping("/getid")
	public String getid(Integer id,HttpServletRequest request,HttpServletResponse response) throws IOException{
		Goods goods=service.getid(id);
		if(goods!=null){
			String read=ReadWriteTxt.read(goods.getGoods_details(),request);//读取商品商品详情
			goods.setGoods_details(read);
			
		}
		JSONObject json=JSONObject.fromObject(goods);
		response.getWriter().print(json);
		return null;
	}
	/**
	 * 商品模糊查询加分页
	 * @param name 查询字段
	 * @param curpage 当前页
	 * @param request
	 * @param response
	 * @return
	 * @throws IOException 
	 */
	@RequestMapping("/listpage")
	public String listpage(String goods_type,String shangjia,String name,String curpage,HttpServletRequest request,HttpServletResponse response) throws IOException{
		name=name==null?"":name;
		int count=service.count(name,goods_type,shangjia);
		page page=new page(curpage, count, 10);
		HashMap<String,Object> map = new HashMap<String, Object>();
		map.put("startRecord", page.getStartRecord());
		map.put("pageSize", page.getPageSize());
		map.put("name", name);
		map.put("goods_type", goods_type);
		map.put("shangjia", shangjia);
		List<Goods> list=service.listpage(map);
		map.put("page", page);
		map.put("list", list);
		map.put("count", count);
		JSONArray json=JSONArray.fromObject(map);
		response.getWriter().print(json);
		return null;
	}
	/**
	 * 删除商品
	 * @param id
	 * @param response
	 * @return
	 * @throws IOException 
	 */
	@RequestMapping("/del")
	public String del(Integer id,HttpServletResponse response,HttpServletRequest request) throws IOException{
		boolean addlog = service4.addlog(3, 4, request);
		if(addlog){
			//获取此商品的以前信息
			Goods goods2=service.getid(id);
			//删除以前的图片和商品详情.txt
			ReadWriteTxt.del(goods2.getPicture_address(), request);
			ReadWriteTxt.del(goods2.getGoods_details(), request);
			service1.delBygoods_id(id);//删除绑定此商品的活动详情
			service.del(id);//删除商品
			service5.delByGoodsId(id);
			response.getWriter().print(true);
			return null;
		}else{
			response.getWriter().print(false);
			return null;
		}
		
		
	}
	/**
	 * 修改商品状态 shangjia
	 * @param id
	 * @param status
	 * @param response
	 * @return
	 * @throws IOException 
	 */
	@RequestMapping("/updateshangjia")
	public String updateShangjia(Integer id,Integer shangjia,HttpServletResponse response) throws IOException{
		service.updateShangjia(id,shangjia);
		response.getWriter().print(true);
		return null;
	}
	/**
	 * 根据三级类别获取商品
	 * @param area_id
	 * @param id
	 * @param response
	 * @return
	 * @throws IOException
	 */
	@RequestMapping("getGoodsBySanNextId")
	public String getGoodsBySanNextId(Integer area_id,Integer id,HttpServletResponse response) throws IOException{
		List< Goods> list=service.listBytype_next_next_id(id, area_id);
		JSONArray json=JSONArray.fromObject(list);
		response.getWriter().print(json);
		return null;
	}
	/**
	 * 根据地区Id获取商品集合
	 * @param areaId
	 * @param response
	 * @return
	 * @throws IOException 
	 */
	@RequestMapping("/getByareaId")
	public String getByareaId(Integer areaId,HttpServletResponse response) throws IOException{
		List<Goods> list=service.getByareaId(areaId);
		JSONArray json=JSONArray.fromObject(list);
		response.getWriter().print(json);
		return null;
	}
	/**
	 * 按照商品状态和是否上架获取商品数量
	 * @param response
	 * @return
	 * @throws IOException
	 */
	@RequestMapping("goodsCount")
	public String goodsCount(HttpServletResponse response) throws IOException{
		List<Integer> list=new ArrayList<Integer>();
		int a=service.count("", 1+"", 1+"");
		int b=service.count("", 2+"", 1+"");
		int c=service.count("", 1+"", 0+"");
		int d=service.count("", 2+"", 0+"");
		list.add(a);
		list.add(b);
		list.add(c);
		list.add(d);
		JSONArray json=JSONArray.fromObject(list);
		response.getWriter().print(json);
		return null;
	}
	/**
	 * 修改商品推荐状态
	 * @param goodsId
	 * @param tuijian
	 * @param response
	 * @return
	 * @throws IOException 
	 */
	@RequestMapping("updateTuijian")
	public String updateTuijian(Integer goodsId,Integer tuijian,HttpServletResponse response) throws IOException{
		service.updateTuijian(goodsId,tuijian);
		response.getWriter().print(true);
		return null;
	}

	/**
	 * 根据商品名称模糊查询
	 * @param name
	 * @return
	 */
	@RequestMapping("/searchName")
	public @ResponseBody List<Goods> searchName(String name){
		name=name==null?"":name;
		List<Goods> list=service.getGoodsBySearch(name);
		return list;
	}
}
