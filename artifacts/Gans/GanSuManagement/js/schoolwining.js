/**
 * 入学季中奖相关js
 */
$(function(){
	$(document).ready(function(){
		page(1);
	});
	
	/**文章的删除**/
	$(document).on("click","a[data-field=delete]",function(){
		var id = $(this).attr("data-value");
		if(id !=""){
			if(confirm("确定删除该用户中奖情况吗？")){
				$.ajax({
					url:'../adminUTprize/del.do',
					type:'post',
					data:{"id":id},
					success:function(res){
						if(res == "true"){
							alert("删除用户中奖情况成功！");
							window.location.reload();
						}
					},error:function(){alert("删除用户中奖情况失败");}
					
				});
			}else{
				alert("删除已取消");
			}
		}
	});
});

function page(curpage){
	var name = "";
	var html = "";
	$.ajax({
		url:'../adminUTprize/listpage.do',
		type:'post',
		data:{"name":name ,"curpage":curpage},
		success:function(result){
			result = eval("(" + result + ")");
			$(result).each(function(i,object){
				$(object.list).each(function(index,obj){
					html += "<tr>";
					html += "<td>" + (index+1) + "</td>";
					html += "<td>" + obj.twelvePrize.name + "</td>";
					html += "<td>" + obj.userPhone + "</td>";
					html += "<td>" + obj.time + "</td>";
					if(obj.status == "0"){
						html += "<td>否</td>";
					}
					if(obj.status == "1"){
						html += "<td>是</td>";
					}
					html += "<td><a style='cursor: pointer;' data-field='delete' data-value='"+obj.id+"' class='butBox'>删除</a></td>";
				});
				$("#schoolwining_num").html(object.count);
				$("#pageCount").html(object.page.pageCount);
				$("#curpage").html("<option value='"+object.page.currentPage+"'>"+object.page.currentPage+"</option>");
				$("#pageSize").html(object.page.pageSize);
				$("tbody").html(html);
				$($("table.infoTabShow.userInformation tbody").find("tr"));
			});
		}
	})
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
