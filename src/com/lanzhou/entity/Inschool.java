package com.lanzhou.entity;
/**
 * 入学季活动商品
 * @author Administrator
 *
 */
public class Inschool {
	private int id;
	private int goodsId;//商品ID
	private int areaId;//地区ID
	private int type;//一元购、生活优惠（1、2）
	private double realPrice;//真实价格
	private String startTime;//开始时间
	private String endTime;//结束时间
	private Goods goods;//商品详情
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getGoodsId() {
		return goodsId;
	}
	public void setGoodsId(int goodsId) {
		this.goodsId = goodsId;
	}
	public int getAreaId() {
		return areaId;
	}
	public void setAreaId(int areaId) {
		this.areaId = areaId;
	}
	public int getType() {
		return type;
	}
	public void setType(int type) {
		this.type = type;
	}
	public double getRealPrice() {
		return realPrice;
	}
	public void setRealPrice(double realPrice) {
		this.realPrice = realPrice;
	}
	public String getStartTime() {
		return startTime;
	}
	public void setStartTime(String startTime) {
		this.startTime = startTime;
	}
	public String getEndTime() {
		return endTime;
	}
	public void setEndTime(String endTime) {
		this.endTime = endTime;
	}
	public Goods getGoods() {
		return goods;
	}
	public void setGoods(Goods goods) {
		this.goods = goods;
	}
	public Inschool(int id, int goodsId, int areaId, int type,
			double realPrice, String startTime, String endTime) {
		super();
		this.id = id;
		this.goodsId = goodsId;
		this.areaId = areaId;
		this.type = type;
		this.realPrice = realPrice;
		this.startTime = startTime;
		this.endTime = endTime;
	}
	public Inschool(int goodsId, int areaId, int type, double realPrice,
			String startTime, String endTime) {
		super();
		this.goodsId = goodsId;
		this.areaId = areaId;
		this.type = type;
		this.realPrice = realPrice;
		this.startTime = startTime;
		this.endTime = endTime;
	}
	
	public Inschool(int id, int goodsId, int areaId, int type,
			double realPrice, String startTime, String endTime, Goods goods) {
		super();
		this.id = id;
		this.goodsId = goodsId;
		this.areaId = areaId;
		this.type = type;
		this.realPrice = realPrice;
		this.startTime = startTime;
		this.endTime = endTime;
		this.goods = goods;
	}
	public Inschool() {
		super();
	}
	
	

}
