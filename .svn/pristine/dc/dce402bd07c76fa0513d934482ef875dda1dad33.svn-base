/*
 * 捐款相关js
 * */
$(function(){
	$(document).ready(function(){
		page(1);
		pagelist(1);
	});
});

/**
 * 获取本期列表
 * @param curpage
 */
function page(curpage){
	var name = "";
	var html = "";
	$.ajax({
		url:'../adminWeiorder/listpage.do',
		type:'post',
		data:{"name":name ,"curpage":curpage},
		success:function(result){
			result = eval("(" + result + ")");
			$(result).each(function(i,object){
				$(object.list).each(function(index,obj){
					html += "<tr>";
					html += "<td>" + (index+1) + "</td>";
					html += "<td>" + obj.phone + "</td>";
					html += "<td>" + obj.area + "</td>";
					html += "<td>" + obj.price + "</td>";
					html += "<td>" + obj.addTime + "</td>";
					html += "</tr>";
				});
				$("#donation_num1").html(object.count);
				$("#pageCount1").html(object.page.pageCount);
				$("#curpage1").html("<option value='"+object.page.currentPage+"'>"+object.page.currentPage+"</option>");
				$("#pageSize1").html(object.page.pageSize);
				$("table.infoTabShow.donationTab.new tbody").html(html);
				$($("table.infoTabShow.donationTab.new tbody").find("tr"));
			});
		}
	})
}

/**
 * 获取往期列表
 * @param curpage
 */
function pagelist(curpage){
	var name = "";
	var html = "";
	$.ajax({
		url:'../adminWeiorder/pagelist.do',
		type:'post',
		data:{"name":name ,"curpage":curpage},
		success:function(result){
			result = eval("(" + result + ")");
			$(result).each(function(i,object){
				$(object.list).each(function(index,obj){
					console.log(object.list);
					html += "<tr>";
					html += "<td>" + (index+1) + "</td>";
					$.ajax({
						url:'../adminpage/getid.do',
						type:'post',
						async:false,
						data:{"id":obj.pageId},
						success:function(res){
							if(res !== "null"){
								res = eval("("+res+")");
		                        html += "<td>"+res.name+"</td>";
		                        html += "<td>"+res.start_time+"</td>";
		                        html += "<td>"+res.end_time+"</td>";
		                    }else{
		                    	html += "<td></td>";
		                    }
						}
					})
					html += "<td>" + obj.num + "</td>";
					html += "<td>" + obj.people + "</td>";
					html += "<td>" + obj.sum + "</td>";
					html += "</tr>";
				});
				$("#donation_num").html(object.count);
				$("#pageCount").html(object.page.pageCount);
				$("#curpage").html("<option value='"+object.page.currentPage+"'>"+object.page.currentPage+"</option>");
				$("#pageSize").html(object.page.pageSize);
				$("table.infoTabShow.donationTab.before tbody").html(html);
				$($("table.infoTabShow.donationTab.before tbody").find("tr"));
			});
		}
	})
}

function firstpage(){
	var curpage = 1;
	pagelist(curpage);
}

function prevpage(){
	var curpage=parseInt($("#curpage").val())-1;
	var pageCount=parseInt($("#pageCount").html().trim());
	if(curpage<1){
		return false;
	}if(curpage>pageCount){
		return false;
	}
	pagelist(curpage);
}

function nextpage(){
	var curpage=parseInt($("#curpage").val())+1;
	var pageCount=parseInt($("#pageCount").html().trim());
	if(curpage<1){
		return false;
	}if(curpage>pageCount){
		return false;
	}
	pagelist(curpage);
}

function lastpage(){
	var curpage = parseInt($("#pageCount").html().trim());
	pagelist(curpage);
	
}

function firstpage1(){
	var curpage = 1;
	page(curpage);
}

function prevpage1(){
	var curpage=parseInt($("#curpage1").val())-1;
	var pageCount=parseInt($("#pageCount1").html().trim());
	if(curpage<1){
		return false;
	}if(curpage>pageCount){
		return false;
	}
	page(curpage);
}

function nextpage1(){
	var curpage=parseInt($("#curpage1").val())+1;
	var pageCount=parseInt($("#pageCount1").html().trim());
	if(curpage<1){
		return false;
	}if(curpage>pageCount){
		return false;
	}
	page(curpage);
}

function lastpage1(){
	var curpage = parseInt($("#pageCount1").html().trim());
	page(curpage);
}

