package com.lanzhou.action;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import net.sf.json.JSONArray;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.lanzhou.entity.Baobiao;
import com.lanzhou.entity.Order;
import com.lanzhou.entity.Weiorder;
import com.lanzhou.service.WeiorderService;
import com.lanzhou.util.OrderNum;
import com.lanzhou.util.page;

@Controller
@RequestMapping("adminWeiorder")
public class WeiOrderAction {
	@Resource
	private WeiorderService service;
	
	/**
	 * 分页列表及模糊查询本期
	 * @param name
	 * @param curpage
	 * @param request
	 * @param response
	 * @return
	 * @throws IOException
	 */
	@RequestMapping("/listpage")
	public String listpage(String name,String curpage,HttpServletRequest request,HttpServletResponse response) throws IOException{
		name=name==null?"":name;
		int count=service.count();
		page page=new page(curpage, count, 20);
		HashMap<String,Object> map = new HashMap<String, Object>();
		map.put("startRecord", page.getStartRecord());
		map.put("pageSize", page.getPageSize());
		map.put("name", name);
		List<Weiorder> list=service.listpage(map);
		map.put("page", page);
		map.put("list", list);
		map.put("count", count);
		JSONArray json=JSONArray.fromObject(map);
		response.getWriter().print(json);
		return null;
	}
	
	
	/**
	 * 分页列表及模糊查询往期
	 * @param name
	 * @param curpage
	 * @param request
	 * @param response
	 * @return
	 * @throws IOException
	 */
	@RequestMapping("/pagelist")
	public String pagelist(String name,String curpage,HttpServletRequest request,HttpServletResponse response) throws IOException{
		name=name==null?"":name;
		int count=service.total();
		
		page page=new page(curpage, count, 20);
		HashMap<String,Object> map = new HashMap<String, Object>();
		map.put("startRecord", page.getStartRecord());
		map.put("pageSize", page.getPageSize());
		map.put("name", name);
		List<Weiorder> list=service.pagelist(map);
		for (Weiorder weiorder : list) {
			int num =service.getNumByPrice(weiorder.getPageId());
			int people = service.getPeopleByPhone(weiorder.getPageId());
			double sum = service.getSumByPrice(weiorder.getPageId());
			weiorder.setNum(num);
			weiorder.setPeople(people);
			weiorder.setSum(sum);
		}
		map.put("page", page);
		map.put("list", list);
		map.put("count", count);
		JSONArray json=JSONArray.fromObject(map);
		response.getWriter().print(json);
		return null;
	}
	
	/**
	 * 异步返回地址
	 * @param response
	 * @return
	 */
	@RequestMapping("/notify")
	public String notify(HttpServletRequest request){
		String SUCCESS = request.getParameter("SUCCESS");
		String ORDERID = request.getParameter("ORDERID");
		if("Y".equals(SUCCESS)){
			Weiorder order=service.getorderNum(ORDERID);
			service.updateStatus(order.getId(),1);
			service.updateisLotto(1, order.getOrderNum());
		}
		//response.getWriter().print(SUCCESS);
		return null;
	}
	
	/**
	 * 同步回调地址
	 * @param request
	 * @return
	 */
	@RequestMapping("/callback")
	public String callback(HttpServletRequest request){
		
		return "forward:callbackF.do";
	}
	@RequestMapping("/callbackF")
	public String callbackF(HttpServletRequest request){
		
		return "redirect:../stage/discountgo/luck.html";
	}
	/**
	 * 捐款报表信息
	 * @param response
	 * @return
	 * @throws IOException 
	 */
	@RequestMapping("/baobiao")
	public String baobiao(String startTime,String endTime,String days,HttpServletResponse response) throws IOException{
		startTime=startTime==null?"":startTime;
		endTime=endTime==null?"":endTime;
		days=days==null?"":days;
		int status=0;
		if("".equals(startTime)&&"".equals(endTime)&&!"".equals(days)){
			status=1;
		}else if(!"".equals(startTime)||!"".equals(endTime)){
			status=2;
			if("".equals(startTime)){
				startTime="2017-05-04";
			}
			if("".equals(endTime)){
				endTime=OrderNum.getSystemDate();
			}
			if(!startTime.equals(endTime)){

				boolean b = OrderNum.largerTime(startTime, endTime, "yyyy-MM-dd");
				if(b){
					
				}else{
					response.getWriter().print("时间格式不对");
					return null;
				}
			}
		}
		
			Map<String, Object> map=new HashMap<String, Object>();
			map.put("startTime", startTime);
			map.put("endTime", endTime);
			map.put("days", days);
			map.put("status", status);
			List<Baobiao> list=service.baobiao(map);
			String area="合计";
			int countNum=0;
			double totlePrice=0;
			int countPerson=0;
			int ZcountNum=0;
			double ZtotlePrice=0;
			int ZcountPerson=0;
			for (Baobiao baobiao : list) {
				countNum+=baobiao.getCountNum();
				totlePrice+=baobiao.getTotlePrice();
				countPerson+=baobiao.getCountPerson();
				ZcountNum+=baobiao.getZcountNum();
				ZtotlePrice+=baobiao.getZtotlePrice();
				ZcountPerson+=baobiao.getZcountPerson();
			}
			list.add(new Baobiao(area, countNum, totlePrice, countPerson, ZcountNum, ZtotlePrice, ZcountPerson));
			JSONArray json=JSONArray.fromObject(list);
			response.getWriter().print(json);
		
		return null;
		
	}
}
