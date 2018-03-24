package com.lanzhou.controller.gongyi;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import org.apache.commons.lang.StringUtils;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.lanzhou.entity.Page_parameter;
import com.lanzhou.entity.Prize;
import com.lanzhou.entity.Weiorder;
import com.lanzhou.service.Page_parameterService;
import com.lanzhou.service.PrizeService;
import com.lanzhou.service.WeiorderService;
import com.lanzhou.util.CCBOrderUtils;

@Controller
@RequestMapping("/HPgongyi")
public class HPGongyiController {
	
	private Page_parameterService page_parameterService;
	private WeiorderService weiorderService;
	private PrizeService prizeService;
	
	public Page_parameterService getPage_parameterService() {
		return page_parameterService;
	}
	@Resource
	public void setPage_parameterService(Page_parameterService page_parameterService) {
		this.page_parameterService = page_parameterService;
	}

	public WeiorderService getWeiorderService() {
		return weiorderService;
	}
	@Resource
	public void setWeiorderService(WeiorderService weiorderService) {
		this.weiorderService = weiorderService;
	}
	
	public PrizeService getPrizeService() {
		return prizeService;
	}
	@Resource
	public void setPrizeService(PrizeService prizeService) {
		this.prizeService = prizeService;
	}
	
	/**
	 * 捐款
	 * @param phone 电话号码
	 * @param price 捐款金额
	 * @param response
	 * @return
	 * @throws IOException
	 */
	@RequestMapping("/juankuan")
	public String juankuan(String phone, double price, HttpServletResponse response) throws IOException{
		//获取最小捐款金额
		Page_parameter jk = page_parameterService.getNewOne();
		double minPrice = 0;
		if(jk != null){
			minPrice = jk.getMin_money();
		}
		if(price < minPrice){
			response.getWriter().print("捐款最小金额为 " + minPrice + "元");
			return null;
		}
		//生成捐款订单
		Weiorder order = new Weiorder();
		order.setPhone(phone);
		order.setPrice(price);
		weiorderService.add(order);
		response.getWriter().print(order.getId());
		
		return null;
	}
	
	/**
	 * 建行h5支付
	 * @param orderId
	 * @param response
	 * @return
	 * @throws Exception 
	 */
	@RequestMapping("/h5pay")
	public String h5pay(Integer orderId,HttpServletRequest request,HttpServletResponse response) throws Exception{
		String ipString = request.getHeader("x-forwarded-for");
	    if (StringUtils.isBlank(ipString) || "unknown".equalsIgnoreCase(ipString)) {  
	        ipString = request.getHeader("Proxy-Client-IP");  
	    }  
	    if (StringUtils.isBlank(ipString) || "unknown".equalsIgnoreCase(ipString)) {  
	        ipString = request.getHeader("WL-Proxy-Client-IP");  
	    }  
	    if (StringUtils.isBlank(ipString) || "unknown".equalsIgnoreCase(ipString)) {  
	        ipString = request.getRemoteAddr();  
	    }  
	  
	    // 多个路由时，取第一个非unknown的ip  
	    final String[] arr = ipString.split(",");  
	    for (final String str : arr) {  
	        if (!"unknown".equalsIgnoreCase(str)) {  
	            ipString = str;  
	            break;  
	        }  
	    }  
		CCBOrderUtils ccbOrderUtils = new CCBOrderUtils();
		Weiorder weiorder=weiorderService.getid(orderId);
		String url = ccbOrderUtils.createOrder(weiorder,ipString);
		Map<String, String> map=new HashMap<String, String>();
		//url=url+"&CCB_IBSVersion=V6&QRCODE=1&CHANNEL=1";
		map.put("url", url);
		map.put("ipString", ipString);
		JSONArray json=JSONArray.fromObject(map);
		response.getWriter().print(json);
		return null;
	}
	
	/**
	 * 查看是否可抽奖，如果可以，则给出几等奖，并给出奖品
	 * @param phone
	 * @param response
	 * @return
	 * @throws IOException
	 */
	@RequestMapping("/kejuankuan")
	public String kejuankuan(String phone, HttpServletResponse response) throws IOException{
		boolean flag = false;  //为true表示可抽奖
		int i = 0;
		List<Weiorder> orderList = weiorderService.getByPhone(phone);
		for(Weiorder order : orderList){
			if(order.getIsLotto() == 0){
				flag = true;
			}else{
				i++;
			}
		}
		if(flag){ //可抽奖
			int rom = (int)(Math.random()*1000);
			int jiang = 0;
			int gailvSum = 0;
			int qishus[] = {0,0,0,0,0,0};
			List<Prize> prizeList = prizeService.list();
			for(Prize prize : prizeList){
				int qishu = prize.getLevel();
				switch (qishu) {
				case 1:
					qishus[0] = prize.getProbability();
					break;
				case 2:
					qishus[1] = prize.getProbability();
					break;
				case 3:
					qishus[2] = prize.getProbability();
					break;
				case 4:
					qishus[3] = prize.getProbability();
					break;
				case 5:
					qishus[4] = prize.getProbability();
					break;
				case 6:
					qishus[5] = prize.getProbability();
					break;
				default:
					break;
				}
			}
			if(i < 5){
				//必中奖
				if(rom < 100){
					jiang = 1;
				}else if(rom < 300){
					jiang = 2;
				}else{
					jiang = 3;
				}
			}else{
				int m = 0;
				gailvSum = qishus[m];
				while(rom < gailvSum){
					m++;
					gailvSum += qishus[m];
				}
				jiang = m + 1;
			}
			Prize prize = prizeService.getLevel(jiang);
			JSONObject json = JSONObject.fromObject(prize);
			response.getWriter().print(json);
		}else{ //没有抽奖次数
			response.getWriter().print("no");
		}
		return null;
	}
	
	/**
	 * 获取所有奖品信息
	 * @param response
	 * @return
	 * @throws IOException
	 */
	@RequestMapping("/showAllPrize")
	public String showAllPrize(HttpServletResponse response) throws IOException{
		List<Prize> prizeList = prizeService.list();
		JSONArray json = JSONArray.fromObject(prizeList);
		response.getWriter().print(json);
		return null;
	}
	
	/**
	 * 查询平台捐款总额
	 * @param response
	 * @return
	 * @throws IOException
	 */
	@RequestMapping("/showAllJuankuan")
	public String showAllJuankuan(HttpServletResponse response) throws IOException{
		List<Weiorder> orderList = weiorderService.getListAll();
		double price = 0;
		for(Weiorder order : orderList){
			if(order.getStatus() == 1){
				price += order.getPrice();
			}
		}
		response.getWriter().print(price + "");
		return null;
	}
	
	/**
	 * 个人捐款记录
	 * @param phone
	 * @param response
	 * @return
	 * @throws IOException
	 */
	@RequestMapping("/showAllByPhone")
	public String showAllByPhone(String phone, HttpServletResponse response) throws IOException{
		List<Weiorder> orderList = weiorderService.getByPhone(phone);
		JSONArray json = JSONArray.fromObject(orderList);
		response.getWriter().print(json);
		return null;
	}
	
}
