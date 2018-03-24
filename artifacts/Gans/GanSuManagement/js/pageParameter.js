/*
 *页面参数相关js 
 *
 **/

$(function($){
	$(document).ready(function(){
		page(1);
	})
	
	var editor;
	KindEditor.ready(function(K) {
    	 editor  = K.create('textarea[name="url"]', {
    		 resizeType : 1,
    		 allowPreviewEmoticons : false,
             items : [
            'source','image','preview'],
    	 });
	});
	
	/** 添加 **/
	$(document).on("click",'.addParameter',function(){
		var name = $("#name").val();
		/*var url = $("#url").val();*/
		var min_money = $("#min_money").val();
		var start_time = $("#startDate").val();
		var end_time = $("#endDate").val();
		var url = editor.html();
		alert(url);
		if(name == ""){
			alert("新期名称不能为空");
			$("input[name=name]").focus();
			return false;
		}
		if(url == ""){
			alert("地址不能为空");
			$("input[name=url]").focus();
			return false;
		}
		if(min_money == ""){
			alert("最小金额不能为空");
			$("input[name=min_money]").focus();
			return false;
		}else if(!min_money.match(/^\d+(\.\d+)?$/)){
            alert("请输入正确的金额");
            return false;
         }
		if(start_time == ""){
			alert("开始时间不能为空");
			$("input[name=start_time]").focus();
			return false;
		}
		if(end_time == ""){
			alert("结束时间不能为空");
			$("input[name=end_time]").focus();
			return false;
		}
		$.ajax({
			url:'../adminpage/add.do',
			type:'post',
			data:{"name":name,"url":url,"min_money":min_money,"start_time":start_time,"end_time":end_time},
			success:function(res){
				if(res == "true"){alert("添加爱心活动成功！");document.location.reload();}else{alert("添加爱心活动失败！");}
			},
			error:function(){alert("添加爱心活动失败！");}
		});
	});
	
	/**删除**/
	$(document).on("click","a[data-field=delete]",function(){
		
		var id = $(this).attr("data-value");
		if(id !=""){
			if(confirm("确定删除该活动吗？")){
				$.ajax({
					url:'../adminpage/del.do',
					type:'post',
					data:{"id":id},
					success:function(res){
						if(res == "true"){
							alert("删除活动成功！");
							window.location.reload();
						}
					},error:function(){alert("删除活动失败");}
					
				});
			}else{
				alert("删除已取消");
			}
		}
	});
	
	$(document).on("click",'.seckillClose',function(){
		$(".updateParameter").html("添加");
		$(".updateParameter").addClass("addParameter");
		$(".updateParameter").removeClass("updateParameter");
		//重置表单
		resetForm(editor);
	});
	
	/** 修改 **/
 	$(document).on("click","a[data-field='update']",function(){
 		$(".seckillWin").hide();
 		/*$(".seckillAddBox").show();*/
 		$(".chooseCommWin").show();
 		$(".addParameter").html("更新");
 		$(".addParameter").addClass("updateParameter");
 		$(".addParameter").removeClass("addParameter");
 		var id = $(this).attr("data-value");
 		UpdateParameter(editor,id);
 	});
})

function resetForm(editor){
	editor.html("");
	$("form#fromAddParameter")[0].reset();
}

function UpdateParameter(editor,id){
	editor.html("");
	$.post("../adminpage/getid.do",{"id":id},function(res){
		res = eval("("+res+")");
		$("input[name=id]").val(res.id);
		$("input[name=name]").val(res.name);
		/*$("input[name=url]").val(res.url);*/
		$("input[name=min_money]").val(res.min_money);
		$("input[name=start_time]").val(res.start_time);
		$("input[name=end_time]").val(res.end_time);
		/*editor.insertHtml(res.url);*/
		editor.html("<img src='"+res.url+"' alt=''/>");
		
		$(".addParameter").attr("data-value",res.id);
		
		/** 提交更新 **/
		$(".updateParameter").click(function(){
			var id = $("#id").val();
			var name = $("#name").val();
			var url = editor.html();
			var min_money = $("#min_money").val();
			var start_time = $("#startDate").val();
			var end_time = $("#endDate").val();
			$.ajax({
				url:'../adminpage/update.do',
				type:'post',
				data:{"id":id,"name":name,"url":url,"min_money":min_money,"start_time":start_time,"end_time":end_time},
				success:function(result){
					if(result == "true"){alert("活动更新成功！");document.location.reload();}else{alert("活动更新失败！");}
				}
			});
		});
	});
}

function page(curpage){
	var name = $("#parameter_name").val();
	var html="";
	$.ajax({
		url:'../adminpage/listpage.do',
		type:'post',
		data:{"name":name,"curpage":curpage},
		success:function(result){
			result = eval("("+result+")");
			$(result).each(function(i,object){
				$(object.list).each(function(index,obj){
					html += "<tr>";
					html += "<td>"+(index+1)+"</td>";
					html += "<td>"+obj.name+"</td>";
					//html += "<td class='pageParameterImg'><img style='width:120px;hight:120px' src='" + obj.url + "' alt=''></td>";
					html += "<td>"+obj.url+"</td>";
					html += "<td>"+obj.min_money+"</td>";
					html += "<td>"+obj.start_time+"</td>";
					html += "<td>"+obj.end_time+"</td>";
					html += "<td><a style='cursor: pointer;' data-field='update' data-value='"+obj.id+"' class='butBox ArticleEdit'>修改</a>" +
							"<a style='cursor: pointer;' data-field='delete' data-value='"+obj.id+"' class='butBox'>删除</a></td>";
					html += "</tr>";
				})
				$("#pageParameter_num").html(object.count);
				$("#pageCount").html(object.page.pageCount);
				$("#curpage").html("<option value='"+object.page.currentPage+"'>"+object.page.currentPage+"<option>");
				$("#pageSize").html(object.page.pageSize);
				$("table.commodityTab.orderFormTab tbody").html(html);
			});
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
