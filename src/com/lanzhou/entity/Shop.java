package com.lanzhou.entity;

public class Shop {
	private int id;
	private String shop_name;//供应商名
	private String province;//省
	private String city;//市
	private String county;//区
	private String address;//总店地址
	private String phone;//联系电话
	private String content;//活动说明
	private String fen_shop;//分店拼串
	private String area_id;//地区ID
	private String youhui;//优惠度
	private String picture_address;//图片地址
	
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getShop_name() {
		return shop_name;
	}

	public void setShop_name(String shop_name) {
		this.shop_name = shop_name;
	}

	public String getProvince() {
		return province;
	}

	public void setProvince(String province) {
		this.province = province;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getCounty() {
		return county;
	}

	public void setCounty(String county) {
		this.county = county;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public String getFen_shop() {
		return fen_shop;
	}

	public void setFen_shop(String fen_shop) {
		this.fen_shop = fen_shop;
	}

	public String getArea_id() {
		return area_id;
	}

	public void setArea_id(String area_id) {
		this.area_id = area_id;
	}

	public String getYouhui() {
		return youhui;
	}

	public void setYouhui(String youhui) {
		this.youhui = youhui;
	}

	public String getPicture_address() {
		return picture_address;
	}

	public void setPicture_address(String picture_address) {
		this.picture_address = picture_address;
	}
	
	public Shop(int id, String shop_name, String province, String city,
			String county, String address, String phone, String content,
			String fen_shop, String area_id, String youhui,
			String picture_address) {
		super();
		this.id = id;
		this.shop_name = shop_name;
		this.province = province;
		this.city = city;
		this.county = county;
		this.address = address;
		this.phone = phone;
		this.content = content;
		this.fen_shop = fen_shop;
		this.area_id = area_id;
		this.youhui = youhui;
		this.picture_address = picture_address;
	}
	
	public Shop(String shop_name, String province, String city, String county,
			String address, String phone, String content, String fen_shop,
			String area_id, String youhui, String picture_address) {
		super();
		this.shop_name = shop_name;
		this.province = province;
		this.city = city;
		this.county = county;
		this.address = address;
		this.phone = phone;
		this.content = content;
		this.fen_shop = fen_shop;
		this.area_id = area_id;
		this.youhui = youhui;
		this.picture_address = picture_address;
	}

	public Shop() {
		super();
	}
	
}
