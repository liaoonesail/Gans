package com.lanzhou.action;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import net.sf.json.JSONArray;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.lanzhou.entity.Prize;
import com.lanzhou.entity.Ticket;
import com.lanzhou.entity.User_prize;
import com.lanzhou.service.PrizeService;
import com.lanzhou.service.TicketService;
import com.lanzhou.service.UserPrizeService;
import com.lanzhou.util.page;

@Controller
@RequestMapping("adminUserPrize")
public class UserPrizeAction {
	@Resource
	private UserPrizeService service;
	@Resource
	private TicketService service2;
	@Resource
	private PrizeService service3;
	/**
	 * 分页列表及模糊查询
	 * @param name
	 * @param curpage
	 * @param status//是否中獎 1是,0否
	 * @param request
	 * @param response
	 * @return
	 * @throws IOException
	 */
	@RequestMapping("/listpage")
	public String listpage(String name,String curpage,Integer status,HttpServletRequest request,HttpServletResponse response) throws IOException{
		String ids="";
		List<Prize> list1=service3.getNotPrize();//获取(谢谢参与)奖品list
		for (Prize prize : list1) {
			ids=ids+","+prize.getId();
		}
		ids=ids.substring(1);
		System.out.println(ids);
		name=name==null?"":name;
		int count=service.count(status,ids);
		page page=new page(curpage, count, 20);
		HashMap<String,Object> map = new HashMap<String, Object>();
		map.put("startRecord", page.getStartRecord());
		map.put("pageSize", page.getPageSize());
		map.put("name", name);
		map.put("status", status);
		map.put("ids", ids);
		List<User_prize> list=service.listpage(map);
		map.put("page", page);
		map.put("list", list);
		map.put("count", count);
		JSONArray json=JSONArray.fromObject(map);
		response.getWriter().print(json);
		return null;
	}
	/**
	 * excel导出所有获奖信息
	 * @param status
	 * @param response
	 * @return
	 * @throws IOException 
	 */
	@RequestMapping("/list")
	public String list(Integer status,HttpServletResponse response) throws IOException{
		String ids="";
		List<Prize> list1=service3.getNotPrize();//获取(谢谢参与)奖品list
		for (Prize prize : list1) {
			ids=ids+","+prize.getId();
		}
		ids=ids.substring(1);
		HashMap<String,Object> map = new HashMap<String, Object>();
		map.put("status", status);
		map.put("ids", ids);
		List<User_prize> list=service.list(map);
		map.put("list", list);
		JSONArray json=JSONArray.fromObject(map);
		response.getWriter().print(json);
		return null;
	}
	/**
	 * 修改领奖状态
	 * @param id 中奖信息ID
	 * @param isTicket 是否是定向券 0否 1是
	 * @param response
	 * @return
	 * @throws IOException 
	 */
	@RequestMapping("/updateStatus")
	public String updateStatus(Integer id,Integer isTicket,HttpServletResponse response) throws IOException{
		User_prize prize = service.getid(id);
		if(isTicket==0){
			service.updateStatus(id);
		}else if(isTicket==1){
			Ticket ticket=service2.getByStatus(1);
			if(ticket!=null){
				prize.setTicketNum(ticket.getTicketNum());
				prize.setValidateNum(ticket.getValidateNum());
				prize.setTicketTime(ticket.getTime());
				prize.setStatus(1);
				service.update(prize);
				ticket.setStatus(0);
				service2.update(ticket);
			}else{
				response.getWriter().print("定向卷已经用完！");
				return null;
			}
		}
		response.getWriter().print("已发放");
		return null;
	}
	
	
}
