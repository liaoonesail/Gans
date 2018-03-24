package com.lanzhou.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.lanzhou.dao.GoodsDao;
import com.lanzhou.entity.Goods;
import com.lanzhou.entity.Zhouzhou;
import com.lanzhou.util.ZhouZhouUtil;
@Service
@Transactional
public class GoodsService {
	@Resource
	private GoodsDao dao;
	public void add(Goods goods) {
		// TODO Auto-generated method stub
		dao.add(goods);
	}
	/**
	 * 
	 * @param id 获取单个商品根据商品ID
	 * @return
	 */
	public Goods getid(int id) {
		// TODO Auto-generated method stub
		return dao.getid(id);
	}
	/**
	 * 
	 * @param goods 修改商品
	 */
	public void update(Goods goods) {
		// TODO Auto-generated method stub
		dao.update(goods);
	}
	/**
	 * 
	 * @param type_id 根据大类ID获取商品
	 * @return
	 */
	public List<Goods> listBytype_id(Integer type_id,Integer area_id) {
		// TODO Auto-generated method stub
		return dao.listBytype_id(type_id,area_id);
	}
	/**
	 * 
	 * @param type_next_id 根据二级类ID获取商品
	 * @return
	 */
	public List<Goods> listBytype_next_id(Integer type_next_id,Integer area_id) {
		// TODO Auto-generated method stub
		return dao.listBytype_next_id(type_next_id,area_id);
	}
	/**
	 * 
	 * @param type_next_next_id 根据三级类ID 获取商品
	 * @return
	 */
	public List<Goods> listBytype_next_next_id(Integer type_next_next_id,Integer area_id) {
		// TODO Auto-generated method stub
		return dao.listBytype_next_next_id(type_next_next_id,area_id);
	}
	/**
	 * @param tuijian 0否 1是
	 * @return 获取是否推荐商品
	 */
	public List<Goods> listBytuijian(Integer tuijian,Integer area_id){
		return dao.listBytuijian(tuijian,area_id);
	}
	/**
	 * 
	 * @param shop_id 根据商家ID获取商品
	 * @return
	 */
	public List<Goods> listByshop_id(Integer shop_id){
		return dao.listByshop_id(shop_id);
	}
	/**
	 * 
	 * @param lable 根据标签获取商品  标签（秒杀、团购、减满、龙支付）（1，2，3，4）
	 * @return
	 */
	public List<Goods> listBylable(Integer lable,Integer area_id){
		return dao.listBylable(lable,area_id);
	}
	/**
	 * 
	 * @param goods_brand 获取某一品牌商品
	 * @return
	 */
	public List<Goods> listBygoods_brand(String goods_brand,Integer area_id){
		return dao.listBygoods_brand(goods_brand,area_id);
	}
	/**
	 * 
	 * @param string 根据商品名和品牌名模糊查询
	 * @return
	 */
	public List<Goods> listBymohu(String string){
		return dao.listBymohu(string);
	}
	
	//模糊加分页
	public int count(String name, String goods_type, String shangjia) {
		// TODO Auto-generated method stub
		return dao.count(name,goods_type,shangjia);
	}
	public List<Goods> listpage(HashMap<String, Object> map) {
		// TODO Auto-generated method stub
		return dao.listpage(map);
	}
	/**
	 * 
	 * @param mould_id 根据模板ID查询商品
	 * @return
	 */
	public List<Goods> listBymould_id(Integer mould_id,Integer area_id) {
		// TODO Auto-generated method stub
		return dao.listBymould_id(mould_id,area_id);
	}
	/**
	 * 
	 * @param week 根据周数 获取周周惠活动商品
	 * @return
	 */
	public List<Goods> listByzhouzhou(String week,Integer area_id){
		String start_time="";
		String end_time="";
		ZhouZhouUtil zhouzhou = new ZhouZhouUtil();
		List<Zhouzhou> thisMonthWeekDate = zhouzhou.getThisMonthWeekDate();
		for (Zhouzhou zhouzhou2 : thisMonthWeekDate) {
			if(week.equals(zhouzhou2.getWeek())){
				start_time=zhouzhou2.getStart_time();
				end_time=zhouzhou2.getEnd_time();
			}
		}
		Map<String, String> map=new HashMap<String, String>();
		map.put("start_time", start_time);
		map.put("end_time", end_time);
		map.put("area_id", area_id+"");
		return dao.listByzhouzhou(map);
	}
	/**
	 * 根据地区ID查询商品
	 * @param
	 * @return
	 */
	public List<Goods> listByarea_id(HashMap<String, Object> map){
		return dao.listByarea_id(map);
	}
	/**
	 * 删除商品
	 * @param id
	 */
	public void del(Integer id) {
		// TODO Auto-generated method stub
		dao.del(id);
	}
	public void updateShangjia(Integer id, Integer shangjia) {
		// TODO Auto-generated method stub
		dao.updateShangjia(id,shangjia);
	}
	/**
	 * 搜索商品
	 * @param search
	 * @return
	 */
	public List<Goods> getGoodsBySearch(String search) {
		// TODO Auto-generated method stub
		return dao.getGoodsBySearch(search);
	}
	/**
	 * 修改商品库存 库存小于0返回false 大于等于0返回true
	 * @param payAmount 购买数量
	 * @return
	 */
	public boolean updateAmount(Integer payAmount,Integer goodsId){
		Goods goods = getid(goodsId);
		int amount=goods.getAmount()-payAmount;
		if(amount>=0){
			goods.setAmount(amount);
			dao.updateAmount(goods);		
			return true;
		}else{
			return false;
		}
	}
	public List<Goods> getInventedGoods() {
		// TODO Auto-generated method stub
		return dao.getInventedGoods();
	}
	public List<Goods> getByareaId(Integer areaId) {
		// TODO Auto-generated method stub
		return dao.getByareaId(areaId);
	}
	public void updateTuijian(Integer goodsId, Integer tuijian) {
		// TODO Auto-generated method stub
		Map<String, Integer> map=new HashMap<String, Integer>();
		map.put("goodsId", goodsId);
		map.put("tuijian", tuijian);
		dao.updateTuijian(map);
	}
	public void updateAreaByShop(int shop_id, String area_id) {
		// TODO Auto-generated method stub
		Map<String, Object> map=new HashMap<String, Object>();
		map.put("shop_id", shop_id);
		map.put("area_id", area_id);
		dao.updateAreaByShop(map);
	}

	public int areaCount(Integer area) {
		return dao.areaCount(area);
	}

	public int tuijianCount(HashMap<String, Object> map) {
		return dao.tuijianCount(map);
	}

	public List<Goods> listBytuijian(HashMap<String, Object> map) {
		return dao.listBytuijian(map);
	}
}
