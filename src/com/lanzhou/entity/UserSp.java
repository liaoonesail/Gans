package com.lanzhou.entity;
/**
 * 用户领取入学季礼包信息
 * @author Administrator
 *
 */
public class UserSp {
	private int id;
	private String phone;//用户Id
	private int sp_id;//入学季Id
	private String time;//领奖时间
	private int status;//领奖状态
	
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

	public int getSp_id() {
		return sp_id;
	}

	public void setSp_id(int sp_id) {
		this.sp_id = sp_id;
	}

	public String getTime() {
		return time;
	}

	public void setTime(String time) {
		this.time = time;
	}

	public int getStatus() {
		return status;
	}

	public void setStatus(int status) {
		this.status = status;
	}

	public UserSp(int id, String phone, int sp_id, String time, int status) {
		super();
		this.id = id;
		this.phone = phone;
		this.sp_id = sp_id;
		this.time = time;
		this.status = status;
	}

	public UserSp(String phone, int sp_id, String time, int status) {
		super();
		this.phone = phone;
		this.sp_id = sp_id;
		this.time = time;
		this.status = status;
	}

	public UserSp() {
		super();
	}
	

}
