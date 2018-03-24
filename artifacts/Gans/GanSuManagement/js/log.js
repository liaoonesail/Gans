/**
 * 日志管理相关js
 */

$(function(){
	$(document).ready(function(){
		page(1);
	})
	
	/**删除日志**/
	$(document).on("click","a[data-field=delete]",function(){
		
		var id = $(this).attr("data-value");
		if(id !=""){
			if(confirm("确定删除该日志吗？")){
				$.ajax({
					url:'../adminlog/del.do',
					type:'post',
					data:{"id":id},
					success:function(res){
						if(res == "true"){
							alert("删除日志成功！");
							window.location.reload();
						}
					},error:function(){alert("删除日志失败");}
					
				});
			}else{
				alert("删除已取消");
			}
		}
	});
});

function page(curpage){
	var name = $("#LogName").val();
	var html = "";
	$.ajax({
		url:'../adminlog/listpage.do',
		type:'post',
		data:{"name":name,"curpage":curpage},
		success:function(result){
			result = eval("("+ result +")");
			$(result).each(function(i,object){
				$(object.list).each(function(index,obj){
					html += "<tr>";
					html += "<td>" + (index+1) + "</td>";
					$.ajax({
						url:'../adminadminuser/getid.do',
						type:'post',
						async:false,
						data:{"id":obj.adminuser_id},
						success:function(result){
							if(result !== "null"){
								result = eval("("+result+")");
		                        html += "<td>"+result.username+"</td>";
		                    }else{
		                    	html += "<td></td>";
		                    }
						}
					})
					if(obj.operation == "1"){
						html += "<td>" + obj.logintime + "</td>";
						html += "<td>登录</td>";
					}
					if(obj.operation == "2"){
						html += "<td>" + obj.logintime + "</td>";
						html += "<td>退出</td>";
					}
					if(obj.operation == "3"){
						html += "<td>" + obj.logintime + "</td>";
						html += "<td>商品模块</td>";
					}
					if(obj.operation == "4"){
						html += "<td>" + obj.logintime + "</td>";
						html += "<td>订单模块</td>";
					}
					if(obj.operation == "5"){
						html += "<td>" + obj.logintime + "</td>";
						html += "<td>活动模块</td>";
					}
					if(obj.operation == "6"){
						html += "<td>" + obj.logintime + "</td>";
						html += "<td>商家模块</td>";
					}
					if(obj.operation == "7"){
						html += "<td>" + obj.logintime + "</td>";
						html += "<td>管理员模块</td>";
					}
					if(obj.way == "0"){
						html += "<td>登录</td>";
					}
					if(obj.way == "1"){
						html += "<td>退出</td>";
					}
					if(obj.way == "2"){
						html += "<td>添加</td>";
					}
					if(obj.way == "3"){
						html += "<td>修改</td>";
					}
					if(obj.way == "4"){
						html += "<td>删除</td>";
					}
					
					html += "<td><a style='cursor: pointer;' data-field='delete' data-value='"+obj.id+"' class='butBox'>删除</a></td>";
					html += "</tr>";
				})
				$("#log_num").html(object.count);
				$("#pageCount").html(object.page.pageCount);
				$("#curpage").html("<option value='"+object.page.currentPage+"'>"+object.page.currentPage+"<option>");
				$("#pageSize").html(object.page.pageSize);
				$("table.commodityTab.orderFormTab tbody").html(html);
			})
		}
		
	});
}

function firstpage(){
	var curpage = 1;
	page(curpage);
}

function prevpage(){
	var curpage=parseInt($("#curpage").val())-1;
	var pageCount=parseInt($("#pageCount").html().trim());
	if(curpage<1){
		return false;
	}if(curpage>pageCount){
		return false;
	}
	page(curpage);
}

function nextpage(){
	var curpage=parseInt($("#curpage").val())+1;
	var pageCount=parseInt($("#pageCount").html().trim());
	if(curpage<1){
		return false;
	}if(curpage>pageCount){
		return false;
	}
	page(curpage);
}

function lastpage(){
	var curpage = parseInt($("#pageCount").html().trim());
	page(curpage);
}