package com.lanzhou.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import com.lanzhou.action.AdminuserAction;
import com.lanzhou.entity.Adminuser;
import com.lanzhou.entity.Goods;
@Repository
public class GoodsDao {
	@Resource
	private SqlSessionTemplate sm;
	public void add(Goods goods) {
		sm.insert("com.lanzhou.entity.Goods.add", goods);
	}
	public Goods getid(int id) {
		// TODO Auto-generated method stub
		return sm.selectOne("com.lanzhou.entity.Goods.getById", id);
	}
	public void update(Goods goods) {
		sm.update("com.lanzhou.entity.Goods.update", goods);
	}
	public List<Goods> listBytype_next_next_id(Integer type_next_next_id, Integer area_id) {
		Map<String, Integer> map=new HashMap<String, Integer>();
		map.put("type_next_next_id", type_next_next_id);
		map.put("area_id", area_id);
		return sm.selectList("com.lanzhou.entity.Goods.listBytype_next_next_id", map);
	}
	public List<Goods> listBytype_id(Integer type_id, Integer area_id) {
		Map<String, Integer> map=new HashMap<String, Integer>();
		map.put("type_id", type_id);
		map.put("area_id", area_id);
		return sm.selectList("com.lanzhou.entity.Goods.listBytype_id", map);
	}
	public List<Goods> listBytype_next_id(Integer type_next_id, Integer area_id) {
		Map<String, Integer> map=new HashMap<String, Integer>();
		map.put("type_next_id", type_next_id);
		map.put("area_id", area_id);
		return sm.selectList("com.lanzhou.entity.Goods.listBytype_next_id", map);
	}
	public List<Goods> listBytuijian(Integer tuijian, Integer area_id) {
		Map<String, Integer> map=new HashMap<String, Integer>();
		map.put("tuijian", tuijian);
		map.put("area_id", area_id);
		return sm.selectList("com.lanzhou.entity.Goods.listBytuijian",map);
	}
	public List<Goods> listByshop_id(Integer shop_id) {
		return sm.selectList("com.lanzhou.entity.Goods.listByshop_id", shop_id);
	}
	public List<Goods> listBylable(Integer lable, Integer area_id) {
		Map<String, Integer> map=new HashMap<String, Integer>();
		map.put("lable", lable);
		map.put("area_id", area_id);
		return sm.selectList("com.lanzhou.entity.Goods.listBylable", map);
	}
	public List<Goods> listBygoods_brand(String goods_brand, Integer area_id) {
		Map<String, String> map=new HashMap<String, String>();
		map.put("goods_brand", goods_brand);
		map.put("area_id", area_id+"");
		return sm.selectList("com.lanzhou.entity.Goods.listBygoods_brand", map);
	}
	public List<Goods> listBymohu(String string) {
		return sm.selectList("com.lanzhou.entity.Goods.listBymohu", string);
	}
	public int count(String name, String goods_type, String shangjia) {
		Map<String, String> map=new HashMap<String, String>();
		map.put("name", name);
		map.put("goods_type", goods_type);
		map.put("shangjia", shangjia);
		return sm.selectOne("com.lanzhou.entity.Goods.count", map);
	}
	public List<Goods> listpage(HashMap<String, Object> map) {
		return sm.selectList("com.lanzhou.entity.Goods.listpage", map);
	}
	public List<Goods> listBymould_id(Integer mould_id, Integer area_id) {
		Map<String, Integer> map=new HashMap<String, Integer>();
		map.put("mould_id", mould_id);
		map.put("area_id", area_id);
		return sm.selectList("com.lanzhou.entity.Goods.listBymould_id", mould_id);
	}
	public List<Goods> listByzhouzhou(Map<String, String> map) {
		return sm.selectList("com.lanzhou.entity.Goods.listByzhouzhou", map);
	}
	public List<Goods> listByarea_id(HashMap<String, Object> map) {
		return sm.selectList("com.lanzhou.entity.Goods.listByarea_id", map);
	}
	public void del(Integer id) {
		sm.delete("com.lanzhou.entity.Goods.del", id);
	}
	public void updateShangjia(Integer id, Integer shangjia) {
		// TODO Auto-generated method stub
		Map<String, Integer> map=new HashMap<String, Integer>();
		map.put("id", id);
		map.put("shangjia", shangjia);
		sm.update("com.lanzhou.entity.Goods.updateShangjia", map);
	}
	public List<Goods> getGoodsBySearch(String search) {
		// TODO Auto-generated method stub
		return sm.selectList("com.lanzhou.entity.Goods.getGoodsBySearch", search);
	}
	public void updateAmount(Goods goods) {
		// TODO Auto-generated method stub
		sm.update("com.lanzhou.entity.Goods.updateAmount", goods);
	}
	public List<Goods> getInventedGoods() {
		// TODO Auto-generated method stub
		return sm.selectList("com.lanzhou.entity.Goods.getInventedGoods");
	}
	public List<Goods> getByareaId(Integer areaId) {
		// TODO Auto-generated method stub
		return sm.selectList("com.lanzhou.entity.Goods.getByareaId", areaId);
	}
	public void updateTuijian(Map<String, Integer> map) {
		// TODO Auto-generated method stub
		sm.update("com.lanzhou.entity.Goods.updateTuijian", map);
	}
	public void updateAreaByShop(Map<String, Object> map) {
		// TODO Auto-generated method stub
		sm.update("com.lanzhou.entity.Goods.updateAreaByShop", map);
	}

	public int areaCount(Integer area_id) {
		return sm.selectOne("com.lanzhou.entity.Goods.areaCount",area_id);
	}

	public int tuijianCount(HashMap<String, Object> map) {
		return sm.selectOne("com.lanzhou.entity.Goods.tuijianCount",map);
	}

	public List<Goods> listBytuijian(HashMap<String, Object> map) {
		return sm.selectList("com.lanzhou.entity.Goods.listBytuijian2",map);
	}
}
