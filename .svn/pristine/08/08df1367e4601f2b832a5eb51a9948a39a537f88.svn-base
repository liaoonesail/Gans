package com.lanzhou.util;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * 
 * @author 廖该逼--生成订单号
 *
 */
public class OrderNum {
	public static String getOrderNum() {
		
		return System.currentTimeMillis()+""+(int)(100000+Math.random()*(999999-100000+1));
	}
	public static String getOrderNum1(){
		Date date = new Date();
		//转换提日期输出格式
		SimpleDateFormat dateFormat = new SimpleDateFormat("yyyyMMddHHmmss");
		String time=dateFormat.format(date);
		return time+""+(int)(1000+Math.random()*(9999-1000+1));
	}
	/**
	 * 
	 * @return 当前时间yyyy/MM/dd hh:mm
	 */
	public static String getSystemTime(){
		Date date=new Date();
		DateFormat format=new SimpleDateFormat("yyyy/MM/dd HH:mm");
		String time=format.format(date);
		return time;
	}
	/**
	 * 
	 * @return 当前时间yyyy-MM-dd
	 */
	public static String getSystemNum(){
		Date date=new Date();
		DateFormat format=new SimpleDateFormat("yyyyMMddHHmmss");
		String time=format.format(date);
		return time;
	}
	public static void main(String[] args) {
		System.out.println(getOrderNum1());
	}
	/**
	 * 
	 * @return 当前时间yyyy-MM-dd
	 */
	public static String getSystemDate(){
		Date date=new Date();
		DateFormat format=new SimpleDateFormat("yyyy-MM-dd");
		String time=format.format(date);
		return time;
	}
	/**
	 * 
	 * @return 当前时间yyyy-MM-dd hh:mm:ss
	 */
	public static String getregTime(){
		Date date=new Date();
		DateFormat format=new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		String time=format.format(date);
		return time;
	}
	public static boolean largerTime(String t1,String t2,String format) 
    {
        Date date1 ,date2;
        DateFormat formart = new SimpleDateFormat(format);
        try
        {
            date1 = formart.parse(t1);
            date2 = formart.parse(t2);
            if(date1.compareTo(date2)<0)
            {
                return true;
            }
            else
            {
                return false;
            }
        }
        catch (ParseException e)
        {
            System.out.println("date init fail!");
            e.printStackTrace();
            return false;
        }
         
    }
}
