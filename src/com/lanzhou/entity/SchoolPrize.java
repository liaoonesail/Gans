package com.lanzhou.entity;
/**
 * 入学季活动信息
 * @author Administrator
 *
 */
public class SchoolPrize {
	private int id;
	private String phone;//建行签约手机号
	private String prize;//获得奖品
	private int label;//标签1、2 学生 家长
	private String time;//领取时间
	
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getPrize() {
		return prize;
	}

	public void setPrize(String prize) {
		this.prize = prize;
	}

	public int getLabel() {
		return label;
	}

	public void setLabel(int label) {
		this.label = label;
	}

	public String getTime() {
		return time;
	}

	public void setTime(String time) {
		this.time = time;
	}

	public SchoolPrize(int id, String phone, String prize, int label) {
		super();
		this.id = id;
		this.phone = phone;
		this.prize = prize;
		this.label = label;
	}

	public SchoolPrize(String phone, String prize, int label) {
		super();
		this.phone = phone;
		this.prize = prize;
		this.label = label;
	}
	

	public SchoolPrize(int id, String phone, String prize, int label,
			String time) {
		super();
		this.id = id;
		this.phone = phone;
		this.prize = prize;
		this.label = label;
		this.time = time;
	}

	public SchoolPrize() {
		super();
	}
	
	
}
