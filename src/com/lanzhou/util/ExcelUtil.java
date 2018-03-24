package com.lanzhou.util;

import java.io.File;
import java.io.FileInputStream;
import java.io.InputStream;
import java.text.DecimalFormat;
import java.util.ArrayList;
import java.util.List;

import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

import com.lanzhou.entity.SchoolPrize;
import com.lanzhou.entity.Ticket;
import com.lanzhou.entity.Whitephone;

/**
 * 读取excel数据
 * 
 * @author zs
 * @param <SchoolPrize>
 * 
 */
public class ExcelUtil {

	/**
	 * 获取Excel表格里的数据
	 * 
	 * @param filePath
	 *            文件路径
	 * @return 手机号码与奖品的集合
	 */
	public static List<SchoolPrize> getExcelData(String filePath) {
		File file = new File(filePath);
		List<SchoolPrize> list = new ArrayList<SchoolPrize>();
		Workbook wb = null;
		try {
			InputStream inputStream = new FileInputStream(file);
			String fileName = file.getName();
			if (fileName.endsWith("xls")) {
				wb = new HSSFWorkbook(inputStream);
			} else if (fileName.endsWith("xlsx")) {
				wb = new XSSFWorkbook(inputStream);
			}
			Sheet sheet = wb.getSheetAt(0);
			int firstRowNum = sheet.getFirstRowNum() + 1;// 避免重复读取首行
			int lastRowNum = sheet.getLastRowNum() + 1;// 获取最后一行的下标
			// 循环读取每一行数据
			for (int rowIndex = firstRowNum; rowIndex < lastRowNum; rowIndex++) {
				SchoolPrize sp = new SchoolPrize();
				int index = 0;
				// 获取当前行数据对象
				Row row = sheet.getRow(rowIndex);
				short firstCellNum = row.getFirstCellNum();// 得到第一列
				short lastCellNum = row.getLastCellNum();// 得到最后一列
				for (int cIndex = firstCellNum; cIndex < lastCellNum; cIndex++) {
					Cell cell = row.getCell(cIndex);
					if (cell != null) {
						if(index == 0){
							index++;
							DecimalFormat df = new DecimalFormat("0");  
							String str = df.format(cell.getNumericCellValue());
							sp.setPhone(str.toString());
						}else if(index == 1){
							index++;
							sp.setPrize(cell.toString());
						}else if(index == 2){
							index++;
							sp.setLabel((int)cell.getNumericCellValue());
						}
					} else {
						index++;
						continue;
					}
				}
				list.add(sp);// 添加一行数据
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return list;
	}
	/**
	 * 定向券导入
	 * @param filePath
	 * @return
	 */
	public static List<Ticket> getExcelDataTicket(String filePath) {
		File file = new File(filePath);
		List<Ticket> list = new ArrayList<Ticket>();
		Workbook wb = null;
		try {
			InputStream inputStream = new FileInputStream(file);
			String fileName = file.getName();
			if (fileName.endsWith("xls")) {
				wb = new HSSFWorkbook(inputStream);
			} else if (fileName.endsWith("xlsx")) {
				wb = new XSSFWorkbook(inputStream);
			}
			Sheet sheet = wb.getSheetAt(0);
			int firstRowNum = sheet.getFirstRowNum() + 1;// 避免重复读取首行
			int lastRowNum = sheet.getLastRowNum() + 1;// 获取最后一行的下标
			// 循环读取每一行数据
			for (int rowIndex = firstRowNum; rowIndex < lastRowNum; rowIndex++) {
				Ticket tk=new Ticket();
				int index = 0;
				// 获取当前行数据对象
				Row row = sheet.getRow(rowIndex);
				short firstCellNum = row.getFirstCellNum();// 得到第一列
				short lastCellNum = row.getLastCellNum();// 得到最后一列
				for (int cIndex = firstCellNum; cIndex < lastCellNum; cIndex++) {
					Cell cell = row.getCell(cIndex);
					if (cell != null) {
						if(index == 0){
							index++;
							//DecimalFormat df = new DecimalFormat("0");  
							//String str = df.format(cell.getNumericCellValue());
							tk.setTicketNum(cell.toString());
						}else if(index == 1){
							index++;
							tk.setValidateNum(cell.toString());
						}else if(index == 2){
							index++;
							tk.setTime(cell.toString());
						}
					} else {
						index++;
						continue;
					}
				}
				list.add(tk);// 添加一行数据
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return list;
	}
	/**
	 * 导入白名单手机号
	 * @param filePath
	 * @return
	 */
	public static List<Whitephone> getExcelDataPhone(String filePath){
		File file = new File(filePath);
		List<Whitephone> list = new ArrayList<Whitephone>();
		Workbook wb = null;
		try {
			InputStream inputStream = new FileInputStream(file);
			String fileName = file.getName();
			if (fileName.endsWith("xls")) {
				wb = new HSSFWorkbook(inputStream);
			} else if (fileName.endsWith("xlsx")) {
				wb = new XSSFWorkbook(inputStream);
			}
			Sheet sheet = wb.getSheetAt(0);
			int firstRowNum = sheet.getFirstRowNum() + 1;// 避免重复读取首行
			int lastRowNum = sheet.getLastRowNum() + 1;// 获取最后一行的下标
			// 循环读取每一行数据
			for (int rowIndex = firstRowNum; rowIndex < lastRowNum; rowIndex++) {
				Whitephone wp=new Whitephone();
				int index = 0;
				// 获取当前行数据对象
				Row row = sheet.getRow(rowIndex);
				short firstCellNum = row.getFirstCellNum();// 得到第一列
				short lastCellNum = row.getLastCellNum();// 得到最后一列
				for (int cIndex = firstCellNum; cIndex < lastCellNum; cIndex++) {
					Cell cell = row.getCell(cIndex);
					if (cell != null) {
						if(index == 0){
							DecimalFormat df = new DecimalFormat("0");  
							String str = df.format(cell.getNumericCellValue());
							wp.setPhone(str.toString());
						}/*else if(index == 1){
							index++;
							wp.setValidateNum(cell.toString());
						}else if(index == 2){
							index++;
							wp.setTime(cell.toString());
						}*/
					} else {
						index++;
						continue;
					}
				}
				list.add(wp);// 添加一行数据
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return list;
	}
}
