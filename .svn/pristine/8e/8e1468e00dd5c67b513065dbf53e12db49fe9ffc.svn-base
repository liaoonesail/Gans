package com.lanzhou.util;

import java.io.IOException;


import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

/**
 * 手机号码地区接口
 * @author Administrator
 *
 */
public class PhoneAddress {
	public static String selectPhone(String phone) throws IOException{
		String url=PropertiesUtil.getValue("location.properties", "Phone_Address").replace("MOBILE", phone);
		System.out.println(url);
		Document doc =Jsoup.connect(url).get();
		Elements elementsByClass = doc.getElementsByClass("tdc2");
		int x=1;
		String html="";
		for (Element link : elementsByClass) {
			if(x==2){
				html = link.html();
				if(html.length()>html.indexOf(";")+2){
					html=html.substring(html.indexOf(";")+1);
				}else{
					html=html.substring(html.lastIndexOf(">")+1, html.indexOf("&"));
				}
			}
			x++;
		}

		return html;
	}
	public static String selectProvince(String phone) throws IOException{
		String url=PropertiesUtil.getValue("location.properties", "Phone_Address").replace("MOBILE", phone);
		System.out.println(url);
		Document doc =Jsoup.connect(url).get();
		Elements elementsByClass = doc.getElementsByClass("tdc2");
		int x=1;
		String html="";
		for (Element link : elementsByClass) {
			if(x==2){
				html = link.html();
				/*if(html.length()>html.indexOf(";")+2){
					html=html.substring(html.indexOf(";")+1);
				}else{*/
					html=html.substring(html.lastIndexOf(">")+1, html.indexOf("&"));
				/*}*/
			}
			x++;
		}

		return html;
		
	}
}
