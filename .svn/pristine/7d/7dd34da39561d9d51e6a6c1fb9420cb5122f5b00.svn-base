package com.lanzhou.action;

import java.io.File;
import java.io.IOException;
import java.util.Date;
import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import com.lanzhou.entity.Ticket;
import com.lanzhou.service.TicketService;
import com.lanzhou.util.ExcelUtil;
import com.lanzhou.util.PropertiesUtil;

@Controller
@RequestMapping("/adminTicket")
public class TicketAction {
	@Resource
	private TicketService tkService;
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
				List<Ticket> excelData = ExcelUtil.getExcelDataTicket(filePath);
				tkService.delAll();
				for (Ticket ticket : excelData) {
					ticket.setStatus(1);
					tkService.add(ticket);
				}
			} catch (IllegalStateException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		
		return "redirect:../GanSuManagement/winingManagement.html";
	}
	/**
	 * 清空数据库中导入的Excel数据
	 * @param response
	 * @return
	 * @throws IOException 
	 */
	@RequestMapping("/delAll")
	public String delAll(HttpServletResponse response) throws IOException{
		tkService.delAll();
		response.getWriter().print(true);
		return null;
	}

}
