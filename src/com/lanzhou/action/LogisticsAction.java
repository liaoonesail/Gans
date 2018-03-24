package com.lanzhou.action;

import com.google.gson.Gson;
import com.lanzhou.entity.Logistics;
import com.lanzhou.service.LogisticsService;
import com.lanzhou.service.OrderService;
import com.lanzhou.util.HttpUtils;
import com.lanzhou.util.OrderNum;
import net.sf.json.JSONObject;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.select.Elements;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
@RequestMapping("/adminLogistics")
public class LogisticsAction {
	@Resource
	private LogisticsService service;
	@Resource
	private OrderService service2;
	/**
	 * 添加物流信息
	 * @param logistics
	 * @param response
	 * @return
	 * @throws IOException
	 */
	@RequestMapping("/add")
	public String add(Logistics logistics,HttpServletResponse response) throws IOException{
		Logistics byOrderId = service.getByOrderId(logistics.getOrder_id());
		if(byOrderId==null){
			logistics.setTime(OrderNum.getregTime());
			service.add(logistics);
			service2.updatestatus(logistics.getOrder_id(), 3);
			response.getWriter().print(true);
		}else{
			response.getWriter().print(false);
		}

		return null;
	}
	/**
	 * 修改物流信息
	 * @param logistics
	 * @param response
	 * @return
	 * @throws IOException
	 */
	@RequestMapping("/update")
	public String update(Logistics logistics,HttpServletResponse response) throws IOException{
		logistics.setTime(OrderNum.getregTime());
		service.update(logistics);
		response.getWriter().print(true);
		return null;
	}
	/**
	 * 根据订单Id获取物流信息
	 * @param orderId
	 * @param response
	 * @return
	 * @throws IOException
	 */
	@RequestMapping("/getByOrderId")
	public String getByOrderId(Integer orderId,HttpServletResponse response) throws IOException{
		Logistics logistics=service.getByOrderId(orderId);
		JSONObject json=JSONObject.fromObject(logistics);
		response.getWriter().print(json);
		return null;
	}

	/**
	 * 查询快递物流信息
	 * @param num
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/getLogistics")
	public static @ResponseBody Map logistics(String num) throws Exception {
		String url1="http://www.kuaidi100.com/autonumber/autoComNum?text=";
		String s = HttpUtils.get(url1 + num);
		Gson gson=new Gson();
		Map map1 = gson.fromJson(s, Map.class);
		List auto = (List)map1.get("auto");
		Map map = new HashMap();
		for(int i=0;i<auto.size();i++){
			Map map2 = (Map) auto.get(i);
			if(map2.containsKey("comCode")){
				String comCode = (String)map2.get("comCode");
				String url2="http://www.kuaidi100.com/query?type=TYPE&postid=";
				url2=url2.replace("TYPE",comCode);
				String s1 = HttpUtils.get(url2 + num);
				map = gson.fromJson(s1, Map.class);
				if("ok".equals(map.get("message"))){
					String chinese = getChinese(map.get("com") + "");
					/*if(!chinese.contains("快递")){
						chinese=chinese+"快递";
					}*/
					map.put("com",chinese);
					return map;
				}
			}
		}
		map.put("message","订单号位数不符合");
		map.put("nu","");
		map.put("ischeck","0");
		map.put("condition","");
		map.put("status","201");
		map.put("state","0");
		List data=new ArrayList();
		map.put("data",data);
		return map;
	}

	/**
	 * 搜狗输入法
	 * @param s
	 * @return
	 * @throws IOException
	 */
	public static String getChinese(String s) throws IOException {
		String url="https://www.sogou.com/sogou?query="+s;
		Document doc = Jsoup.connect(url).get();
		Elements strong = doc.getElementsByTag("strong");
		String split = strong.get(0).getElementsByTag("em").get(0).text().toString().split(" ")[0];
		return split;
	}
}
