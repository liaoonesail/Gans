package com.lanzhou.entity;

public class Page_parameter {
	private int id;
	private String name;//多少期（第一期、第二期）
	private String url;//图片地址
	private double min_money;//最小捐款金额
	private String start_time;//开始时间
	private String end_time;//结束时间
	
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	public double getMin_money() {
		return min_money;
	}

	public void setMin_money(double min_money) {
		this.min_money = min_money;
	}

	public String getStart_time() {
		return start_time;
	}

	public void setStart_time(String start_time) {
		this.start_time = start_time;
	}

	public String getEnd_time() {
		return end_time;
	}

	public void setEnd_time(String end_time) {
		this.end_time = end_time;
	}
	

	public Page_parameter(int id, String name, String url, double min_money,
			String start_time, String end_time) {
		super();
		this.id = id;
		this.name = name;
		this.url = url;
		this.min_money = min_money;
		this.start_time = start_time;
		this.end_time = end_time;
	}
	

	public Page_parameter(String name, String url, double min_money,
			String start_time, String end_time) {
		super();
		this.name = name;
		this.url = url;
		this.min_money = min_money;
		this.start_time = start_time;
		this.end_time = end_time;
	}

	public Page_parameter() {
		super();
	}
	
	

}
