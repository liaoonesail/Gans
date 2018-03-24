package com.lanzhou.action;

import java.io.File;
import java.io.IOException;
import java.util.Date;
import java.util.HashMap;
import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import com.lanzhou.entity.SchoolPrize;
import com.lanzhou.service.SchoolPrizeService;
import com.lanzhou.util.ExcelUtil;
import com.lanzhou.util.PropertiesUtil;
import com.lanzhou.util.page;

@Controller
@RequestMapping("/adminSchoolPrize")
public class SchoolPrizeAction {
	@Resource
	private SchoolPrizeService spService;
	@RequestMapping("/importExcel")
	public String importExcel(HttpServletRequest request) throws IOException{
		String top_path=PropertiesUtil.getValue("location.properties", "Top_path");
		MultipartHttpServletRequest mul=(MultipartHttpServletRequest) request;
		MultipartFile file = mul.getFile("excel");
		String time = new Date().getTime()+"";
		if(file!=null&&file.getSize()>0){
			String realPath = top_path+"/upload"+request.getContextPath()+"/excel/";
			File dir = new File(realPath);
			if(!dir.exists()){
				dir.mkdirs();
			}
			File destFile = new File(dir, time+file.getOriginalFilename());
			try {
				file.transferTo(destFile);
				String filePath=top_path+"/upload"+request.getContextPath()+"/excel/"+time+file.getOriginalFilename();
				List<SchoolPrize> excelData = ExcelUtil.getExcelData(filePath);
				spService.delAll();
				for (SchoolPrize schoolPrize : excelData) {
					spService.add(schoolPrize);
				}
			} catch (IllegalStateException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		
		return "redirect:../GanSuManagement/schoolPrice.html";
	}
	/**
	 * 分页模糊查询集合
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
		int count=spService.count(name);
		page page=new page(curpage, count, 20);
		HashMap<String,Object> map = new HashMap<String, Object>();
		map.put("startRecord", page.getStartRecord());
		map.put("pageSize", page.getPageSize());
		map.put("name", name);
		List<SchoolPrize> list=spService.listpage(map);
		map.put("page", page);
		map.put("list", list);
		map.put("count", count);
		JSONArray json=JSONArray.fromObject(map);
		response.getWriter().print(json);
		return null;
	}
	/**
	 * 获取单个对象
	 * @param id
	 * @param response
	 * @return
	 * @throws IOException 
	 */
	@RequestMapping("getid")
	public String getid(Integer id,HttpServletResponse response) throws IOException{
		SchoolPrize prize=spService.getid(id);
		JSONObject json=JSONObject.fromObject(prize);
		response.getWriter().print(json);
		return null;
	}
	/**
	 * 清空数据库中导入的Excel数据
	 * @param response
	 * @return
	 * @throws IOException 
	 */
	@RequestMapping("/delAll")
	public String delAll(HttpServletResponse response) throws IOException{
		spService.delAll();
		response.getWriter().print(true);
		return null;
	}

}
