/*
 * 常见问题相关js
 * 
 * */

$(function(){
	$(document).ready(function(){
		page(1);
	})
})

/** 编辑器 **/
$(function($) {
	var editor;
	KindEditor.ready(function(K) {
		editor  = K.create('textarea[name="content"]', {
			resizeType : 1,
			allowPreviewEmoticons : false,
			items : [
            'source','undo','redo','|','formatblock','fontname', 'fontsize', '|', 'forecolor', 'hilitecolor', 'bold', 'italic', 'underline','strikethrough','removeformat', '|', 'justifyleft', 'justifycenter', 'justifyright', 'insertorderedlist','insertunorderedlist','insertorderedlist','insertunorderedlist', '|', 'emoticons', 'link','hr'],
		});
	});
	
	/** 提交更新 **/
	$(document).on("click",".updateProblems",function(){
		var id = $("#id").val();
		var title = $("#title").val();
		var content = editor.html();
		$.ajax({
			url:'../adminProblems/update.do',
			type:'post',
			data:{"id":id,"title":title,"content":content},
			success:function(result){
				if(result == "true"){alert("问题更新成功！");window.location.reload();}else{alert("问题更新失败！");}
			}
		});
		return false;
	});

	/** 添加 **/
	$(document).on("click",'.addProblems',function(){
		var title = $("#title").val();
		var content = editor.html();
		if(title == ""){
			alert("标题不能为空");
			$("input[name=title]").focus();
			return false;
		}
		if(content == ""){
			alert("内容不能为空");
			$("input[name=content]").focus();
			return false;
		}
		$.ajax({
			url:'../adminProblems/add.do',
			type:'post',
			data:{"title":title,"content":content},
			success:function(res){
				if(res == "true"){alert("添加问题成功！");window.location.reload();}else{alert("添加问题失败！");}
			},
			error:function(){alert("添加问题失败！");}
		});
	});
	
	/**删除**/
	$(document).on("click","a[data-field=delete]",function(){
		
		var id = $(this).attr("data-value");
		if(id !=""){
			if(confirm("确定删除该问题吗？")){
				$.ajax({
					url:'../adminProblems/del.do',
					type:'post',
					data:{"id":id},
					success:function(res){
						if(res == "true"){
							alert("删除问题成功！");
							window.location.reload();
						}
					},error:function(){alert("删除问题失败");}
					
				});
			}else{
				alert("删除已取消");
			}
		}
	});
	
	/** 修改 **/
	$(document).on("click",".problemsUpdate",function(){
		$(".seckillAddBox").hide();
		$(".seckillWin").toggle();
		$(".addProblems").html("更新");
		$(".addProblems").addClass("updateProblems");
		$(".addProblems").removeClass("addProblems");
		var id = $(this).attr("data-value");
		editor.html("");
		$.post("../adminProblems/getid.do",{"id":id},function(res){
			res = eval("("+res+")");
			console.log(res);
			$(".id").val(res.id);
			$("input[name=title]").val(res.title);
			editor.insertHtml(res.content);
			$(".addProblems").attr("data-value",res.id);
			//$(".updateProblems").click(function(){
		});
		//UpdateProblems(editor,id);
	});
	
	$(document).on("click",'.seckillClose',function(){
		$(".updateProblems").html("添加");
		$(".updateProblems").addClass("addProblems");
		$(".updateProblems").removeClass("updateProblems");
		//重置表单
		resetForm(editor);
	});
	
});

function resetForm(editor){
	editor.html("");
	$("form#fromAddProblems")[0].reset();
}

function UpdateProblems(editor,id){
	editor.html("");
	$.post("../adminProblems/getid.do",{"id":id},function(res){
		res = eval("("+res+")");
		console.log(res);
		$("#id").val(res.id);
		$("input[name=title]").val(res.title);
		editor.insertHtml(res.content);
		$(".addProblems").attr("data-value",res.id);
		
		
		//$(".updateProblems").click(function(){
		
	});
}

function page(curpage){
	var name = $("#problemsTitle").val();
	var html="";
	$.ajax({
		url:'../adminProblems/listpage.do',
		type:'post',
		data:{"name":name,"curpage":curpage},
		success:function(result){
			result = eval("("+result+")");
			$(result).each(function(i,object){
				$(object.list).each(function(index,obj){
					html += "<tr>";
					html += "<td>"+(index+1)+"</td>";
					html += "<td>"+obj.title+"</td>";
					html += "<td>"+obj.content+"</td>";
					html += "<td><a style='cursor: pointer;' data-field='update' data-value='"+obj.id+"' class='butBox problemsUpdate'>修改</a>" +
							"<a style='cursor: pointer;' data-field='delete' data-value='"+obj.id+"' class='butBox'>删除</a></td>";
					html += "</tr>";
				})
				/** 写入页面 **/
				$("#problems_num").html(object.count);
				$("#pageCount").html(object.page.pageCount);
				$("#curpage").html("<option value='"+object.page.currentPage+"'>"+object.page.currentPage+"<option>");
				$("#pageSize").html(object.page.pageSize);
				$("table.commodityTab.orderFormTab tbody").html(html);
				$($("table.commodityTab.orderFormTab tbody").find("tr"));
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