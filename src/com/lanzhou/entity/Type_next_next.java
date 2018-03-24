package com.lanzhou.entity;

public class Type_next_next {
	private int id;
	private String name;//类别
	private int type_next_id;//上级类别ID
	private int type_id;//上上类别ID
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
	public int getType_next_id() {
		return type_next_id;
	}
	public void setType_next_id(int type_next_id) {
		this.type_next_id = type_next_id;
	}
	public int getType_id() {
		return type_id;
	}
	public void setType_id(int type_id) {
		this.type_id = type_id;
	}
	
	public Type_next_next(int id, String name, int type_next_id, int type_id) {
		super();
		this.id = id;
		this.name = name;
		this.type_next_id = type_next_id;
		this.type_id = type_id;
	}
	
	public Type_next_next(String name, int type_next_id, int type_id) {
		super();
		this.name = name;
		this.type_next_id = type_next_id;
		this.type_id = type_id;
	}
	public Type_next_next() {
		super();
	}
	

}
