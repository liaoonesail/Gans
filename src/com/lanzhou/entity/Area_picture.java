package com.lanzhou.entity;

public class Area_picture {
	private int id;
	private String picture_address;//图片地址
	private int area_id;//地区ID
	private int status;//是否展示 0否 1是
	private String url;//跳转链接
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getPicture_address() {
		return picture_address;
	}
	public void setPicture_address(String picture_address) {
		this.picture_address = picture_address;
	}
	public int getArea_id() {
		return area_id;
	}
	public void setArea_id(int area_id) {
		this.area_id = area_id;
	}
	public int getStatus() {
		return status;
	}
	public void setStatus(int status) {
		this.status = status;
	}
	public String getUrl() {
		return url;
	}
	public void setUrl(String url) {
		this.url = url;
	}
	
	public Area_picture(int id, String picture_address, int area_id,
			int status, String url) {
		super();
		this.id = id;
		this.picture_address = picture_address;
		this.area_id = area_id;
		this.status = status;
		this.url = url;
	}
	public Area_picture(String picture_address, int area_id, int status,
			String url) {
		super();
		this.picture_address = picture_address;
		this.area_id = area_id;
		this.status = status;
		this.url = url;
	}
	public Area_picture() {
		super();
	}
	

}
