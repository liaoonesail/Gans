package com.lanzhou.util;

import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;

import org.springframework.beans.propertyeditors.URLEditor;

import com.lanzhou.entity.Weiorder;

public class CCBOrderUtils {
	public String createOrder(Weiorder order, String ipString) throws Exception{
		
		
		/*JSONObject result = new JSONObject();
		// 1、参数校验
        if (StringUtils.isBlank(ORDERID) || StringUtils.isBlank(PAYMENT)) {
            Log.error("建行支付统一下单请求错误：请求参数不足", null);
            result.put("status", "error");
            result.put("msg", "请求参数不足");
            result.put("obj", null);
            return result;
        }*/
		
        // 2、获取系统配置信息
       /* String MERCHANTID = PropertiesUtil.getValue("ccb.properties", "MERCHANTID");//获取统一商户代码
        String POSID = PropertiesUtil.getValue("ccb.properties", "POSID");// 商户柜台代码
        String BRANCHID = PropertiesUtil.getValue("ccb.properties", "BRANCHID");// 分行代码
        String CURCODE = PropertiesUtil.getValue("ccb.properties", "CURCODE");// 币种(01－人民币)
        String TXCODE = PropertiesUtil.getValue("ccb.properties", "TXCODE");//获取统一交易码(520100)
        String TYPE = PropertiesUtil.getValue("ccb.properties", "TYPE");//接口类型(0- 非钓鱼接口 ; 1- 防钓鱼接口)
        String PUB = PropertiesUtil.getValue("ccb.properties", "PUB");//公钥后30位
        String GATEWAY = PropertiesUtil.getValue("ccb.properties", "GATEWAY");//公钥后30位
        if (StringUtils.isBlank(MERCHANTID) || StringUtils.isBlank(POSID)
                || StringUtils.isBlank(BRANCHID) || StringUtils.isBlank(CURCODE)
                || StringUtils.isBlank(TXCODE) || StringUtils.isBlank(TYPE)
                || StringUtils.isBlank(PUB) || StringUtils.isBlank(GATEWAY)) {
            Log.error("建行支付统一下单请求错误：系统配置信息缺失", null);
            result.put("status", "error");
            result.put("msg", "系统配置信息缺失");
            result.put("obj", null);
            return result;
        }*/
        //ipString="114.115.220.106";
     // 发送报文模板,其中部分字段是可选字段
        String payurl="https://ibsbjstar.ccb.com.cn/CCBIS/ccbMain?";
        String appendurl="MERCHANTID=merchantid&POSID=posid&BRANCHID=branchid&ORDERID=orderid&PAYMENT=payment&CURCODE=01&TXCODE=520100&REMARK1=&REMARK2=&TYPE=1&PUB=&GATEWAY=Z1&CLIENTIP=clientip&REGINFO=reginfo&PROINFO=proinfo&REFERER=";
        String appendUrl="REMARK1=&CLIENTIP=clientip&REMARK2=&BRANCHID=branchid&TXCODE=520100&REGINFO=reginfo&CURCODE=01&GATEWAY=Z1&PROINFO=proinfo&MERCHANTID=merchantid&ORDERID=orderid&POSID=posid&REFERER=&PAYMENT=payment&MAC=mac&TYPE=1";
        /* String MERCHANTID = ServiceUtil.MERCHANTID;
		String POSID = ServiceUtil.POSID;
		String BRANCHID = ServiceUtil.BRANCHID;
		String PUB = ServiceUtil.PUB;*/
		String MERCHANTID = ServiceUtil.GY_MERCHANTID;
		String POSID = ServiceUtil.GY_POSID;
		String BRANCHID = ServiceUtil.GY_BRANCHID;
		String PUB = ServiceUtil.GY_PUB;
		double price = order.getPrice();
		String orderNum = order.getOrderNum();
		String reginfo=OrderNum.getOrderNum1();
		String proinfo=OrderNum.getOrderNum1();
		appendurl=appendurl.replace("merchantid", MERCHANTID);
		//appendurl=appendurl.replace("clientip", ipString);
		appendurl=appendurl.replace("posid", POSID);
		appendurl=appendurl.replace("branchid", BRANCHID);
		appendurl=appendurl.replace("orderid", orderNum);
		appendurl=appendurl.replace("payment", price+"");
		appendurl=appendurl.replace("reginfo", reginfo);
		appendurl=appendurl.replace("proinfo", proinfo);
		String md5=appendurl.replace("&PUB=", "&PUB="+PUB);
		md5=md5.replace("clientip", ipString);
		System.out.println(md5);
        MD5ONCE mac = new MD5ONCE(md5);
        mac.calc();//md5计算
        String macValue = mac.toString();//生成MAC字段字符串
        //appendurl=appendurl.replace("clientip", URLEncoder.encode(ipString,"utf-8"));
        appendUrl=appendUrl.replace("posid", POSID);
        appendUrl=appendUrl.replace("branchid", BRANCHID);
        appendUrl=appendUrl.replace("orderid", orderNum);
        appendUrl=appendUrl.replace("payment", price+"");
        appendUrl=appendUrl.replace("reginfo", reginfo);
        appendUrl=appendUrl.replace("proinfo", proinfo);
        appendUrl=appendUrl.replace("merchantid", MERCHANTID);
        appendUrl=appendUrl.replace("mac", macValue);
        appendUrl=appendUrl.replace("clientip", URLEncoder.encode(ipString,"utf-8"));
        StringBuffer str = new StringBuffer();
       // str.append(payurl);
        //str.append(appendurl.replace("&PUB=", ""));
        //str.append("&MAC="+macValue);
        str.append(payurl);
        str.append(appendUrl);
        System.out.println(str.toString());
		return str.toString();
	}
}
