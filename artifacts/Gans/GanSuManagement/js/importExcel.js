/**
 * 入学季 奖品管理js
 * @author zs
 * @time 2017年7月28日11:43:47
 */
$(function(){

	$(document).ready(function(){
		var name = "";
		var curpage = "1";
		getTabelData(name,curpage);
		
	});
	
	 /**点击分页(第一页)**/
    $(".commPage1").click(function(){
    	var part = "";
    	$("div.commodityClass.orderFormOption a").each(function(index,obj){
    		if($(obj).hasClass("bgGreen")){
    			part = $(obj).attr("type");
    		}
    	});
		var name = "";
    	if(part == "1"){
    		var curpage = "1";
    		getTabelData(name,curpage);
    	}else{
    		getTabelPrize(name,curpage);
    	}
        return false;
    });
    /**点击分页(上一页)**/
    $(".commPage2").click(function(){
    	var part = "";
    	$("div.commodityClass.orderFormOption a").each(function(index,obj){
    		if($(obj).hasClass("bgGreen")){
    			part = $(obj).attr("type");
    		}
    	});
    	var page = $("select[name=curpage]").attr("curpage");
    	page = Number(page);
    	if(page == 1){
    		alert("当前是第一页");
    		return false;
    	}
		var name = "";
    	if(part == "1"){//入学季
    		getTabelData(name,page-1);
    	}else{//中奖名单
    		getTabelPrize(name,page-1);
    	}
        return false;
    });
    /**点击分页(下一页)**/
    $(".commPage3").click(function(){
    	var part = "";
    	$("div.commodityClass.orderFormOption a").each(function(index,obj){
    		if($(obj).hasClass("bgGreen")){
    			part = $(obj).attr("type");
    		}
    	});
    	var page = $("select[name=curpage]").attr("curpage");
    	var lastPage = $(".pageCount").html().trim();
    	lastPage = Number(lastPage);
    	page = Number(page);
    	if(page == lastPage){
    		alert("当前是最后一页");
    		return false;
    	}
		var name = "";
    	if(part == "1"){//入学季
    		getTabelData(name,page+1);
    	}else{//中奖名单
    		getTabelPrize(name,page+1);
    	}
        return false;
    });
    
    /**点击分页(最后一页)**/
    $(".commPage4").click(function(){
    	var part = "";
    	$("div.commodityClass.orderFormOption a").each(function(index,obj){
    		if($(obj).hasClass("bgGreen")){
    			part = $(obj).attr("type");
    		}
    	});
    	var page = $(".pageCount").html().trim();
    	var name = "";
    	if(part == "1"){//入学季
    		getTabelData(name,page);
    	}else{//中奖名单
    		getTabelPrize(name,page);
    	}
        return false;
    });
	
});


/**
 * 加载奖品的数据列表
 * @param name 手机哈
 * @param curpage 当前页码
 */
function getTabelPrize(name,curpage){
	var url = "../adminSchoolPrize/listpage.do";
	var data = {
			name:name,
			curpage:curpage
	};
	var result = ajaxSubmit(url,data,false);
	console.log(result);
	var headHtml = "<tr><td>序号</td><td>手机号</td><td>礼包</td><td>标识(学生/家长)</td></tr>";
	$("thead").html(headHtml);
	var html = "";
	$(result).each(function(index,object){
		$(object.list).each(function(index,obj){
			html += "<tr><td>"+(index+1)+"</td><td>"+obj.phone+"</td><td>"+obj.prize+"</td><td>"+(obj.label=='1'?"学生":"家长")+"</td></tr>";
		});
	});
	$(".count").html(result[0].count);//总记录数
	$(".pageCount").html(result[0].page.pageCount);//总的页数
	$(".pageSize").html(result[0].page.pageSize);//每页大小
	$("select[name=curpage]").attr("curpage",result[0].page.currentPage);//设置当前页
	$("select[name=curpage]").html("<option>"+result[0].page.currentPage+"</option>");//设置当前页
	$("tbody").html(html);
}


/**
 * 加载入学季数据列表
 * @param name 手机号码
 * @param curpage 当前页码
 */
function getTabelData(name,curpage){
	var url = "../adminUserSp/listpage.do";
	var data = {
			name:name,
			curpage:curpage
	};
	var async = false;
	var result = ajaxSubmit(url,data,async);
	
	var html = "";
	$(result).each(function(index,object){
		//console.log(object);
		$(object.list).each(function(index,obj){
			//console.log(obj);
			var schoolPrize = ajaxSubmit("../adminSchoolPrize/getid.do",{id:obj.sp_id},false);
			
			html += "<tr><td>"+(index+1)+"</td><td>"+schoolPrize.prize+"</td><td>"+schoolPrize.phone+"</td><td>"+obj.time+"</td></tr>";
		});
	});
	//console.log(result[0].count);
	$(".count").html(result[0].count);//总记录数
	$(".pageCount").html(result[0].page.pageCount);//总的页数
	$(".pageSize").html(result[0].page.pageSize);//每页大小
	$("select[name=curpage]").attr("curpage",result[0].page.currentPage);//设置当前页
	$("select[name=curpage]").html("<option>"+result[0].page.currentPage+"</option>");//设置当前页
	$("tbody").html(html);
}

/**
 * 显示弹窗
 */
function showFormBox(){
	if(confirm("本次导入会覆盖之前的数据")){
		$(".chooseCommWin").hide();
		$(".seckillAddBox").hide();
		$(".seckillWin").toggle();
	}
}

/**
 * 上传excel文件 
 */
function uploadExcelFile(){
	var filePath = $("input[name=filePath]").val();
	if(filePath == ""){
		alert("请上传您的数据！");
		return false;
	}
	$("form#uploadExcel").submit();
}

/**
 * 显示table表头
 */
function showTableHead(){
	var headHtml = "<tr><td>序列号</td><td>礼包名称</td><td>手机号</td><td>中奖时间</td></tr>";
	$("thead").html(headHtml);
}

/**
 * 显示按钮
 */
function showBtn(){
	$(".btnBox").show();
}

/**
 * 隐藏按钮
 */
function hideBtn(){
	$(".btnBox").hide();
}

/**
 * ajax方法
 */
function ajaxSubmit(url,data,async){
	var result = "";
	async = async==true?true:false;
	$.ajax({
		type : "POST",
		url : url,
		data:data,
		async:async,
		dataType:'json',
		success : function(data) {
			result = data;
		}
	});
	return result;
}