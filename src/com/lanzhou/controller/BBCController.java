package com.lanzhou.controller;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.lanzhou.util.PropertiesUtil;
import net.sf.json.JSON;
import net.sf.json.JSONObject;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.lanzhou.entity.Goods;
import com.lanzhou.entity.Order;
import com.lanzhou.entity.User;
import com.lanzhou.service.GoodsService;
import com.lanzhou.service.OrderService;
import com.lanzhou.util.MD5ONCE;
import com.lanzhou.util.OrderNum;
import com.lanzhou.util.ServiceUtil;

@Controller
@RequestMapping("/ccb")
public class BBCController {
	
	private GoodsService goodsService;
	private OrderService orderService;
	//Orderser


	public GoodsService getGoodsService() {
		return goodsService;
	}
	@Resource
	public void setGoodsService(GoodsService goodsService) {
		this.goodsService = goodsService;
	}
	
	public OrderService getOrderService() {
		return orderService;
	}
	@Resource
	public void setOrderService(OrderService orderService) {
		this.orderService = orderService;
	}
	
	@RequestMapping("/pay")
	public String pay(int orderId,String remarks1,String remarks2, HttpServletRequest request){
		//HttpSession session = request.getSession();
		//User user = (User)session.getAttribute("user");
		//if(user == null){
			
		//}
		Order order = orderService.getid(orderId);
		order.setRemarks1(remarks1);
		order.setRemarks2(remarks2);
		orderService.update(order);
		Goods goods = goodsService.getid(order.getGoods_id());
		int goodsamount=goods.getAmount();
		int payamount=order.getAmount();
		if(goodsamount>=payamount){
			//String orderNum = OrderNum.getOrderNum();
			//double price = 0.01;
			//double price = goods.getPrice();
			double price=order.getTotal();
			String orderNum = order.getOrder_num();
			
			
			String MERCHANTID = ServiceUtil.MERCHANTID;
			String POSID = ServiceUtil.POSID;
			String BRANCHID = ServiceUtil.BRANCHID;
			String PUB = ServiceUtil.PUB;
			
			MD5ONCE mac = new MD5ONCE("SP7010" + MERCHANTID + orderNum + price);
			mac.calc();
			String MAGIC = mac.toString();
			
			request.setAttribute("MERCHANTID", MERCHANTID);
			request.setAttribute("POSID", POSID);
			request.setAttribute("BRANCHID", BRANCHID);
			request.setAttribute("PUB", PUB);
			request.setAttribute("ORDERID", orderNum);
			request.setAttribute("PAYMENT", price+"");
			request.setAttribute("MAGIC", MAGIC);
			request.setAttribute("ErrorMessage", "ok");
			return "stage/ccb/pay2";
		}else{
			request.setAttribute("ErrorMessage", "no");
			return "stage/ccb/pay2";
		}
		
	}
	@RequestMapping("/fqlPay")
	public String fqlPay(Integer orderId,HttpServletRequest request,HttpServletResponse response) throws IOException {
		Order order = orderService.getid(orderId);
		Goods goods = goodsService.getid(order.getGoods_id());
		int goodsAmount=goods.getAmount();
		int payAmount=order.getAmount();
		if(goodsAmount>=payAmount){
			String app_id= PropertiesUtil.getValue("location.properties","app_id");
			String channel= PropertiesUtil.getValue("location.properties","channel");
			String openid= PropertiesUtil.getValue("location.properties","openid");
			String notify_url= PropertiesUtil.getValue("location.properties","notify_url");
			String return_url= PropertiesUtil.getValue("location.properties","return_url");
			Map<String,Object> map=new HashMap<>();
			map.put("app_id",app_id);
			map.put("channel",channel);
			map.put("openid",openid);
			map.put("notify_url",notify_url);
			map.put("return_url",return_url);
			map.put("subject",goods.getGoods_name());
			map.put("order_no",order.getOrder_num());
			map.put("amount",order.getTotal());
			JSONObject json = JSONObject.fromObject(map);
			response.getWriter().print(json);
			return null;
		}else{
			request.setAttribute("ErrorMessage", "no");
			return "stage/ccb/pay2";
		}
	}
	
	/**
	 * CCB同步回调地址
	 * @param request
	 * @return
	 * @throws IOException
	 */
	@RequestMapping("/callback")
	public String callback(HttpServletRequest request) throws IOException{
		return "forward:callbackF.do";
	}
	@RequestMapping("/callbackF")
	public String callbackF(HttpServletRequest request){
		return "redirect:../stage/discountgo/personalcenter.html";
	}
	/**
	 * CCB异步返回地址
	 * @param request
	 * @param response
	 * @return
	 * @throws IOException
	 */
	@RequestMapping("/notify")
	public String notify(HttpServletRequest request, HttpServletResponse response) throws IOException{
		String SUCCESS = request.getParameter("SUCCESS");
		String ORDERID = request.getParameter("ORDERID");
		if("Y".equals(SUCCESS)){
			Order order = orderService.getorder_num(ORDERID);
			orderService.updatestatus(order.getId(), 1);
			goodsService.updateAmount(order.getAmount(), order.getGoods_id());
		}
		//response.getWriter().print(SUCCESS);
		return null;
	}

}
