package com.lanzhou.entity;

public class Order_details {
	private int id;
	private int goods_id;//商品ID
	private int amount;//购买商品数量
	private int order_id;//订单ID
	private double real_price;//商品实际价格
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
	public int getAmount() {
		return amount;
	}
	public void setAmount(int amount) {
		this.amount = amount;
	}
	public int getOrder_id() {
		return order_id;
	}
	public void setOrder_id(int order_id) {
		this.order_id = order_id;
	}
	public double getReal_price() {
		return real_price;
	}
	public void setReal_price(double real_price) {
		this.real_price = real_price;
	}
	public Order_details(int id, int goods_id, int amount, int order_id,
			double real_price) {
		super();
		this.id = id;
		this.goods_id = goods_id;
		this.amount = amount;
		this.order_id = order_id;
		this.real_price = real_price;
	}
	public Order_details(int goods_id, int amount, int order_id,
			double real_price) {
		super();
		this.goods_id = goods_id;
		this.amount = amount;
		this.order_id = order_id;
		this.real_price = real_price;
	}
	public Order_details() {
		super();
	}
	
}
