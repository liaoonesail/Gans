/**
 * 统计报表相关js
 */

$(function($){
	$(document).ready(function(){
		list("","","");
	});
	
	$(document).on("click",".query",function(){
		var startTime = $("#startDate").val();
		var endTime = $("#endDate").val();
		var days = $("input[name='days']:checked").val();
		if(days=="周"){
			days=7;
		}
		if(days=="月"){
			days=30;
		}
		if(days=="季"){
			days=90;
		}
		list(startTime,endTime,days);
		
	});
});

function list(startTime,endTime,days){
	var html = "";
	$.ajax({
		url:'../adminWeiorder/baobiao.do',
		type:'post',
		data:{"startTime":startTime,"endTime":endTime,"days":days},
		success:function(result){
			if(result=="时间格式不对"){
				$("table.infoTabShow.statisticalTab tbody").html("");
				alert("当前所选时间错误！");
			}else{
				result = eval("(" + result + ")");
				console.log(result);
				$(result).each(function(index,obj){
					html += "<tr>";
					html += "<td>" + obj.area + "</td>";
					html += "<td>" + obj.countNum + "</td>";
					html += "<td>" + obj.countPerson + "</td>";
					html += "<td>" + (obj.totlePrice*1).toFixed(2) + "</td>";
					html += "<td>" + obj.zcountNum + "</td>";
					html += "<td>" + obj.zcountPerson + "</td>";
					html += "<td>" + (obj.ztotlePrice*1).toFixed(2) + "</td>";
					html += "</tr>";
				});
				$("table.infoTabShow.statisticalTab tbody").html(html);
				$($("table.infoTabShow.statisticalTab tbody").find("tr"));
			}
		}
	})
}



