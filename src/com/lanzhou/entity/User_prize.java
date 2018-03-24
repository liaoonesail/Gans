package com.lanzhou.entity;

public class User_prize {
	private int id;
	private int prize_id;// 奖品ID
	private int user_id;// 用户ID
	private String time;// 中奖时间
	private String prize_describe;// 获奖描述
	private int status;// 领奖状态
	private Prize prize;//奖品
	private String phone;//中奖手机号
	private String area;//手机所属地区
	private String ticketNum;//电子券编号
	private String validateNum;//验证码
	private String ticketTime;//有效期
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getPrize_id() {
		return prize_id;
	}

	public void setPrize_id(int prize_id) {
		this.prize_id = prize_id;
	}

	public int getUser_id() {
		return user_id;
	}

	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}

	public String getTime() {
		return time;
	}

	public void setTime(String time) {
		this.time = time;
	}

	public String getPrize_describe() {
		return prize_describe;
	}

	public void setPrize_describe(String prize_describe) {
		this.prize_describe = prize_describe;
	}

	public int getStatus() {
		return status;
	}

	public void setStatus(int status) {
		this.status = status;
	}

	public Prize getPrize() {
		return prize;
	}

	public void setPrize(Prize prize) {
		this.prize = prize;
	}
	public String getArea() {
		return area;
	}

	public void setArea(String area) {
		this.area = area;
	}
	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}
	
	public String getTicketNum() {
		return ticketNum;
	}

	public void setTicketNum(String ticketNum) {
		this.ticketNum = ticketNum;
	}

	public String getValidateNum() {
		return validateNum;
	}

	public void setValidateNum(String validateNum) {
		this.validateNum = validateNum;
	}

	public String getTicketTime() {
		return ticketTime;
	}

	public void setTicketTime(String ticketTime) {
		this.ticketTime = ticketTime;
	}

	

	public User_prize(int id, int prize_id, int user_id, String time,
			String prize_describe, int status, Prize prize, String phone,
			String area, String ticketNum, String validateNum, String ticketTime) {
		super();
		this.id = id;
		this.prize_id = prize_id;
		this.user_id = user_id;
		this.time = time;
		this.prize_describe = prize_describe;
		this.status = status;
		this.prize = prize;
		this.phone = phone;
		this.area = area;
		this.ticketNum = ticketNum;
		this.validateNum = validateNum;
		this.ticketTime = ticketTime;
	}

	public User_prize(int id, int prize_id, int user_id, String time,
			String prize_describe, int status, Prize prize, String phone,
			String area) {
		super();
		this.id = id;
		this.prize_id = prize_id;
		this.user_id = user_id;
		this.time = time;
		this.prize_describe = prize_describe;
		this.status = status;
		this.prize = prize;
		this.phone = phone;
		this.area = area;
	}

	public User_prize() {
		super();
	}
}
