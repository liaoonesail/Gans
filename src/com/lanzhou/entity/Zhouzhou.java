package com.lanzhou.entity;

public class Zhouzhou {
	private String week;//第几周
	private String start_time;//开始时间
	private String end_time;//结束时间
	public String getWeek() {
		return week;
	}
	public void setWeek(String week) {
		this.week = week;
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
	
	
	
	public Zhouzhou(String week, String start_time, String end_time) {
		super();
		this.week = week;
		this.start_time = start_time;
		this.end_time = end_time;
	}
	public Zhouzhou() {
		super();
	}
	@Override
	public String toString() {
		return "Zhouzhou [week=" + week + ", start_time=" + start_time
				+ ", end_time=" + end_time + "]";
	}
}
