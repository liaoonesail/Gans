package com.lanzhou.entity;

public class Shop_picture {
	private int id;
	private int shop_id;//商品Id
	private String picture_address;//图片地址
	private String url;//跳转连接
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getShop_id() {
		return shop_id;
	}
	public void setShop_id(int shop_id) {
		this.shop_id = shop_id;
	}
	public String getPicture_address() {
		return picture_address;
	}
	public void setPicture_address(String picture_address) {
		this.picture_address = picture_address;
	}
	public String getUrl() {
		return url;
	}
	public void setUrl(String url) {
		this.url = url;
	}
	
	public Shop_picture(int id, int shop_id, String picture_address, String url) {
		super();
		this.id = id;
		this.shop_id = shop_id;
		this.picture_address = picture_address;
		this.url = url;
	}
	
	public Shop_picture(int shop_id, String picture_address, String url) {
		super();
		this.shop_id = shop_id;
		this.picture_address = picture_address;
		this.url = url;
	}
	public Shop_picture() {
		super();
	}
	

}
