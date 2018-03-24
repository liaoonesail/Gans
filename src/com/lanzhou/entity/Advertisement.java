package com.lanzhou.entity;

public class Advertisement {
	private int id;
	private String ad_name;// 广告名称             F:生活服务;H:海淘;K:9.9特卖;L:休闲娱乐;M:美食;
	private String ad_address;// A:首页轮播;B:专场活动轮播;C:专场活动首页;D:周周惠;E:商铺详情;F:生活服务;G:限时秒杀;H:海淘;I:虚拟卡券;J:团购;K:9.9特卖;L:休闲娱乐;M:美食;N:地方汇广告;O:首页广告;P:专场活动广告;Q:善融轮播;R:善融广告;S:龙支付广告;
	private String ad_path;// 图片路径
	private String ad_url;//广告链接

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getAd_name() {
		return ad_name;
	}

	public void setAd_name(String ad_name) {
		this.ad_name = ad_name;
	}

	public String getAd_address() {
		return ad_address;
	}

	public void setAd_address(String ad_address) {
		this.ad_address = ad_address;
	}

	public String getAd_path() {
		return ad_path;
	}

	public void setAd_path(String ad_path) {
		this.ad_path = ad_path;
	}
	
	public String getAd_url() {
		return ad_url;
	}

	public void setAd_url(String ad_url) {
		this.ad_url = ad_url;
	}

	@Override
	public String toString() {
		return "Advertisement [id=" + id + ", ad_name=" + ad_name
				+ ", ad_address=" + ad_address + ", ad_path=" + ad_path
				+ ", ad_url=" + ad_url + "]";
	}
}
