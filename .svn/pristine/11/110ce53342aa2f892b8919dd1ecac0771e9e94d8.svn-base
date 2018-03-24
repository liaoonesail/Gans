package com.lanzhou.util;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;
import java.util.List;

import com.lanzhou.entity.Zhouzhou;


public class ZhouZhouUtil {
	/**
     * 获取本月周次和日期时间段信息
     * 
     * @return
     */
    public List<Zhouzhou> getThisMonthWeekDate() {
        SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");
        List<Zhouzhou> list = new ArrayList<Zhouzhou>();

        // 1 获取本月的第一天
        Date firstDayOfMonth = getFirstDayOfMonth();
        Calendar firstDayOfMonthCal = Calendar.getInstance();
        firstDayOfMonthCal.setFirstDayOfWeek(Calendar.MONDAY);
        firstDayOfMonthCal.setTime(firstDayOfMonth);

        // 2 获取本月第一周第一天
        Date firstWeekFirstDay = getFirstDayOfFirstWeekOfMonth();
        Calendar firstWeekFirstDayCal = Calendar.getInstance();
        firstWeekFirstDayCal.setFirstDayOfWeek(Calendar.MONDAY);
        firstWeekFirstDayCal.setTime(firstWeekFirstDay);

        // 3 获取本次周期起止时间
        Date sDate = null;// 本月第一周第一天
        Date eDate = null;// 本月最后一周最后一天
        Calendar sCal = Calendar.getInstance();
        Calendar eCal = Calendar.getInstance();
        sCal.setFirstDayOfWeek(Calendar.MONDAY);
        sCal.setFirstDayOfWeek(Calendar.MONDAY);
        sDate=getNowWeekBegin();
        sCal.setTime(sDate);

        // 结束时间是起始时间+34天（5周）
        eCal.setTime(sDate);
        eDate = eCal.getTime();
        eCal.add(Calendar.DATE, 34);
        eDate = eCal.getTime();

        Date cDate = new Date();
        if (cDate.getTime() < eDate.getTime()) {
            eDate = cDate;
        }

      

        // 4 循环得到周次信息
        for (int i = 0; i < 5; i++) {// 循环5周次
        	Zhouzhou zhouzhou=new Zhouzhou();
            Calendar endTime = Calendar.getInstance();
            endTime.setFirstDayOfWeek(Calendar.MONDAY);
            endTime.setTime(sDate);
            endTime.set(Calendar.HOUR_OF_DAY, 23);
            endTime.set(Calendar.MINUTE, 59);
            endTime.set(Calendar.SECOND, 59);
            endTime.add(Calendar.DATE, 6);
           
            zhouzhou.setWeek(i+1+"");
            zhouzhou.setStart_time(format.format(sDate));
            zhouzhou.setEnd_time(format.format(endTime.getTime()));

            	
            	list.add(zhouzhou);
            
          

            sCal.add(Calendar.DATE, 7);
            sDate = sCal.getTime();
        }

        return list;
    }

    // 获取本月第一天
    public static Date getFirstDayOfMonth() {
        Calendar now = Calendar.getInstance();
//        Date date = new Date(2015 - 1900, 12 - 1, 1);
//        now.setTime(date);
        now.set(Calendar.DATE, now.getActualMinimum(Calendar.DATE));
        now.set(Calendar.HOUR_OF_DAY, 0);
        now.set(Calendar.MINUTE, 0);
        now.set(Calendar.SECOND, 0);
        return now.getTime();
    }

    // 获取本月第一周第一天
    public static Date getFirstDayOfFirstWeekOfMonth() {
        Calendar now = Calendar.getInstance();
        now.setFirstDayOfWeek(Calendar.MONDAY);
        now.setTime(getFirstDayOfMonth());

        int i = 1;
        while (now.get(Calendar.DAY_OF_WEEK) != Calendar.MONDAY) {
            now.set(Calendar.DAY_OF_MONTH, i++);// 设置这个月的星期1 为几号
        }

        Date firstMonday = now.getTime();// 取得日期和时间
        String dtStr = new SimpleDateFormat("YYYY-MM-dd").format(firstMonday);// 格式化日期
      
        return now.getTime();
    }
    
    public static Date getNowWeekBegin() {
    	int mondayPlus;
    	Calendar cd = Calendar.getInstance();
    	// 获得今天是一周的第几天，星期日是第一天，星期二是第二天......
    	int dayOfWeek = cd.get(Calendar.DAY_OF_WEEK) - 1; // 因为按中国礼拜一作为第一天所以这里减1
    	if (dayOfWeek == 1) {
    	mondayPlus = 0;
    	} else {
    	mondayPlus = 1 - dayOfWeek;
    	}
    	GregorianCalendar currentDate = new GregorianCalendar();
    	currentDate.add(GregorianCalendar.DATE, mondayPlus);
    	Date monday = currentDate.getTime();

    	return monday;
    	} 
    
    public  void main(String[] args) {
		List<Zhouzhou> thisMonthWeekDate = getThisMonthWeekDate();
		for (Zhouzhou zhouzhou : thisMonthWeekDate) {
			System.out.println(zhouzhou);
		}
		System.out.println(getNowWeekBegin());
	}

}
