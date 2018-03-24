package com.lanzhou.entity;
/**
 * 购买商品白名单
 * @author Administrator
 *
 */
public class Whitephone {
	private int id;
	private String phone;//手机白名单
	private int nameId;
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

	public int getNameId() {
		return nameId;
	}

	public void setNameId(int nameId) {
		this.nameId = nameId;
	}

	public Whitephone(int id, String phone, int nameId) {
		this.id = id;
		this.phone = phone;
		this.nameId = nameId;
	}

	public Whitephone() {
		super();
	}
	

}
