package com.lanzhou.entity;
/**
 * 部分专场活动
 * @author Administrator
 *
 */
public class Performance {
	private int id;
	private int goods_id;//商品ID
	private double real_price;//真实价格
	private int label;//标签（无、秒杀、团购、龙支付、专场类型）（0,1,2,3,4）如果label等于4就不是团购和秒杀的活动
	private int part;//专场类型(1,2,3,4,5,6)生活服务，海淘，9.9特卖，休闲娱乐，美食,虚拟卡卷
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getGoods_id() {
		return goods_id;
	}
	public void setGoods_id(int goods_id) {
		this.goods_id = goods_id;
	}
	public double getReal_price() {
		return real_price;
	}
	public void setReal_price(double real_price) {
		this.real_price = real_price;
	}
	public int getLabel() {
		return label;
	}
	public void setLabel(int label) {
		this.label = label;
	}
	public int getPart() {
		return part;
	}
	public void setPart(int part) {
		this.part = part;
	}
	public Performance(int id, int goods_id, double real_price, int label,
			int part) {
		super();
		this.id = id;
		this.goods_id = goods_id;
		this.real_price = real_price;
		this.label = label;
		this.part = part;
	}
	public Performance(int goods_id, double real_price, int label, int part) {
		super();
		this.goods_id = goods_id;
		this.real_price = real_price;
		this.label = label;
		this.part = part;
	}
	public Performance() {
		super();
	}
	

}
