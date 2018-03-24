/**
 * 文章资讯相关js
 */

$(function(){
	$(document).ready(function(){
		page(1);
	})
})

/** 编辑器 **/
$(function($) {
	var editor;
	KindEditor.ready(function(K) {
		editor  = K.create('textarea[name="details"]', {
			resizeType : 1,
			allowPreviewEmoticons : false,
			items : [
            'source','undo','redo','|','formatblock','fontname', 'fontsize', '|', 'forecolor', 'hilitecolor', 'bold', 'italic', 'underline','strikethrough','removeformat', '|', 'justifyleft', 'justifycenter', 'justifyright', 'insertorderedlist','insertunorderedlist','insertorderedlist','insertunorderedlist', '|', 'emoticons', 'image', 'link','table','hr','preview'],
		});
	});
	
	/** 提交更新 **/
	$(document).on("click",".updateArticle",function(){
		var id = $("#id").val();
		var title = $("#title").val();
		var type = $("#type").val();
		var addTime = $("#addTime").val();
		var details = editor.html();
		$.ajax({
			url:'../adminarticle/update.do',
			type:'post',
			data:{"id":id,"title":title,"type":type,"addTime":addTime,"details":details},
			success:function(result){
				if(result == "true"){alert("文章更新成功！");document.location.reload();}else{alert("文章更新失败！");}
			}
		});
	});
	
	/** 提交添加 **/
	$(document).on("click",'.addArticle',function(){
		var title = $("#title").val();
		var type = $("#type").val();
		var addTime = $("#addTime").val();
		var details = editor.html();
		if(title == ""){
			alert("标题不能为空");
			$("input[name=title]").focus();
			return false;
		}
		if(details == ""){
			alert("详情不能为空");
			$("input[name=details]").focus();
			return false;
		}
		$.ajax({
			url:'../adminarticle/add.do',
			type:'post',
			data:{"title":title,"type":type,"addTime":addTime,"details":details},
			success:function(res){
				if(res == "true"){alert("添加文章成功！");document.location.reload();}else{alert("添加文章失败！");}
			},
			error:function(){alert("添加文章失败！");}
		});
	});
	
	/**文章的删除**/
	$(document).on("click","a[data-field=delete]",function(){
		
		var id = $(this).attr("data-value");
		if(id !=""){
			if(confirm("确定删除该文章吗？")){
				$.ajax({
					url:'../adminarticle/del.do',
					type:'post',
					data:{"id":id},
					success:function(res){
						if(res == "true"){
							alert("删除文章成功！");
							window.location.reload();
						}
					},error:function(){alert("删除文章失败");}
					
				});
			}else{
				alert("删除已取消");
			}
		}
	});

	/** 编辑 **/
	$(document).on("click",".ArticleEdit",function(){
		$(".seckillAddBox").hide();
		$(".seckillWin").toggle();
		$(".addArticle").html("更新");
		$(".addArticle").addClass("updateArticle");
		$(".addArticle").removeClass("addArticle");
		var id = $(this).attr("data-value");
		editArticle(editor,id);
	});

	/** 查看 **/
	$(document).on("click",".ArticleCheck",function(){
		$(".seckillAddBox").hide();
		$(".seckillWin").toggle();
		document.getElementById("add").style.display = "none";
		var id = $(this).attr("data-value");
		checkArticle(editor,id);
	});
	
	$(document).on("click",'.seckillClose',function(){
		$(".updateArticle").html("添加");
		$(".updateArticle").addClass("addArticle");
		$(".updateArticle").removeClass("updateArticle");
		//重置表单
		resetForm(editor);
	});
	
	
});

/**
 * 重置表单
 */
function resetForm(editor){
	editor.html("");
	$("form#fromAddArticle")[0].reset();
	$("#add").removeAttr("style");
}

/**
 * 编辑
 * @param editor
 * @param id
 */

function editArticle(editor,id){
	editor.html("");
	$.post("../adminarticle/getid.do",{"id":id},function(res){
		res = eval("("+res+")");
		$("input[name=id]").val(res.id);
		$("input[name=title]").val(res.title);
		$("select[name=type]").find("option").each(function(index,obj){
			if($(obj).val() == res.type){
				$(obj).attr("selected",true);
			}else{
				$(obj).removeAttr("selected");
			}
		});
		$("input[name=addTime]").val(res.addTime);
		editor.insertHtml(res.details);
		$(".addArticle").attr("data-value",res.id);
	});
	
}

/**
 * 查看
 * @param editor
 * @param id
 */
function checkArticle(editor,id){
	resetForm(editor);
	$.post("../adminarticle/getid.do",{"id":id},function(res){
		res = eval("("+res+")");
		$("input[name=id]").val(res.id);
		$("input[name=title]").val(res.title);
		$("select[name=type]").find("option").each(function(index,obj){
			if($(obj).val() == res.type){
				$(obj).attr("selected",true);
			}else{
				$(obj).removeAttr("selected");
			}
		});
		$("input[name=addTime]").val(res.addTime);
		editor.insertHtml(res.details);
		$(".addArticle").html();
		$("#add").attr("style","display:none");
	});
}



function page(curpage){
	var name = $("#articleName").val();
	var html="";
	$.ajax({
		url:'../adminarticle/listpage.do',
		type:'post',
		data:{"name":name,"curpage":curpage},
		success:function(result){
			result = eval("("+result+")");
			$(result).each(function(i,object){
				$("#article_num").html(object.count);
				$("#pageCount").html(object.page.pageCount);
				//$("#curpage").html(curpage);
				$("#curpage").html("<option value='"+object.page.currentPage+"'>"+object.page.currentPage+"<option>");
				$("#pageSize").html(object.page.pageSize);
				$(object.list).each(function(index,obj){
					html += "<tr>";
					html += "<td>"+(index+1)+"</td>";
					if(obj.type == "1"){
						html += "<td>活动</td>";
					}
					if(obj.type == "2"){
						html += "<td>精选</td>";
					}
					if(obj.type == "3"){
						html += "<td>推荐</td>";
					}
					if(obj.type == "4"){
						html += "<td>新闻</td>";
					}
					html += "<td>"+obj.title+"</td>";
					html += "<td>"+obj.addTime+"</td>";
					html += "<td><a style='cursor: pointer;' data-field='edit' data-value='"+obj.id+"' class='butBox ArticleEdit'>编辑</a>" +
							"<a style='cursor: pointer;' data-field='delete' data-value='"+obj.id+"' class='butBox'>删除</a></td>";
					html += "</tr>";
				})
				/** 写入页面 **/
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


