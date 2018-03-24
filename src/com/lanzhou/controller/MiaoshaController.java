package com.lanzhou.controller;

import java.io.IOException;
import java.text.NumberFormat;
import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletResponse;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.lanzhou.entity.Goods;
import com.lanzhou.entity.Miaosha;
import com.lanzhou.entity.MiaoshaDay;
import com.lanzhou.service.GoodsService;
import com.lanzhou.service.MiaoshaDayService;
import com.lanzhou.service.MiaoshaService;
import com.lanzhou.util.OrderNum;

@Controller
@RequestMapping("/miaosha")
public class MiaoshaController {
	@Resource
	private MiaoshaService miaoService;
	@Resource
	private GoodsService goodsService;
	@Resource
	private MiaoshaDayService dayService;
	/**
	 * 获取秒杀商品集合
	 * @param startTime 开始时间
	 * @param endTime   结束时间
	 * @param response
	 * @return
	 * @throws IOException
	 */
	@RequestMapping("/miaoshaList")
	public String miaoshaList(String startTime,String endTime,HttpServletResponse response) throws IOException{
		String date = OrderNum.getSystemDate();
		StringBuffer sb1 = new StringBuffer();
		StringBuffer sb2 = new StringBuffer();
		startTime = sb1.append(date).append(" ").append(startTime).toString();
		endTime = sb2.append(date).append(" ").append(endTime).toString();
		List<Miaosha> list=miaoService.list(startTime,endTime);
		System.out.println(list.size());
		for (Miaosha miaosha : list) {
			Goods goods=goodsService.getid(miaosha.getGoods_id());
			//double转百分比
			NumberFormat nt = NumberFormat.getPercentInstance();
			//设置百分数精确度0即保留0位小数
			nt.setMinimumFractionDigits(0);
			if(miaosha.getAmount()>0){
				String format = nt.format(1-(double)goods.getAmount()/miaosha.getAmount());
				miaosha.setPercent(format);
			}else{
				//秒杀库存为0
			}
		}
		JSONArray json=JSONArray.fromObject(list);
		response.getWriter().print(json);
		return null;
	}
	/**
	 *根据秒杀ID获取秒杀详情  
	 *里面包含 goods_id
	 * @param id
	 * @param response
	 * @return
	 * @throws IOException
	 */
	@RequestMapping("/getMiaoshaId")
	public String getMiaoshaId(Integer id,HttpServletResponse response) throws IOException{
		Miaosha miaosha=miaoService.getid(id);
		JSONObject json=JSONObject.fromObject(miaosha);
		response.getWriter().print(json);
		return null;
		
	}
	/**
	 * 根据商品ID获取商品详情
	 * @param goodsId
	 * @param response
	 * @return
	 * @throws IOException
	 */
	@RequestMapping("/getGoodsByGoodsID")
	public String getGoodsByGoodsID(Integer goodsId,HttpServletResponse response) throws IOException{
		Goods goods=goodsService.getid(goodsId);
		JSONObject json=JSONObject.fromObject(goods);
		response.getWriter().print(json);
		return null;
	}
	/**
	 * 根据商品Id 获取秒杀活动详情
	 * @param goodsId
	 * @param response
	 * @return
	 * @throws IOException
	 */
	@RequestMapping("/getMiaoshaByGoodsId")
	public String getMiaoshaByGoodsId(Integer goodsId,HttpServletResponse response) throws IOException{
		if(goodsId==null){
			JSONObject json=JSONObject.fromObject(null);
			response.getWriter().print(json);
			return null;
		}
		Miaosha miaosha=miaoService.getMiaoshaByGoodsId(goodsId);
		Goods goods=goodsService.getid(goodsId);
		//double转百分比
		NumberFormat nt = NumberFormat.getPercentInstance();
		//设置百分数精确度0即保留0位小数
		nt.setMinimumFractionDigits(0);
		if(miaosha!=null&&goods!=null){
			if(miaosha.getAmount()>0){
				String format = nt.format(1-goods.getAmount()/miaosha.getAmount());
				miaosha.setPercent(format);
				JSONObject json=JSONObject.fromObject(miaosha);
				response.getWriter().print(json);
			}

		}else{
			miaosha=null;
			JSONObject json=JSONObject.fromObject(miaosha);
			response.getWriter().print(json);
		}
		
		return null;
	}
	/**
	 * 获取秒杀时间段集合
	 * @return
	 * @throws IOException 
	 */
	@RequestMapping("/dayList")
	public String dayList(HttpServletResponse response) throws IOException{
		List<MiaoshaDay> list=dayService.list();
		for (MiaoshaDay miaoshaDay : list) {
			miaoshaDay.setStartTime(OrderNum.getSystemDate()+" "+miaoshaDay.getStartTime());
			miaoshaDay.setEndTime(OrderNum.getSystemDate()+" "+miaoshaDay.getEndTime());
		}
		JSONArray json=JSONArray.fromObject(list);
		response.getWriter().print(json);
		return null;
	}
}
