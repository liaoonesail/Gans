/**
 * 地区相关js
 * @author zs
 */
$(function(){
	
	/**文档加载函数**/
	$(document).ready(function(){
		ajaxLoadTabelData();
	});
	
	/**添加地区**/
	$(document).on("click",".submitAddArea",function(){
		addArea();
		return false;
	});
	
	/**删除地区**/
	$(document).on("click","a[data-field=delete]",function(){
		var id = $(this).attr("data-id");
		ajaxDeleteArea(id);
	});
	$(".seckillClose").click(function(){
		$("input[name=id]").remove();
		$("input[name=name]").removeAttr("disabled");
		$("input[name=name]").val("");
		$("input[name=sort]").val("");
		return false;
	});
	
	$(document).on("click","a[data-field=edit]",function(){
		var id = $(this).attr("data-id");
		$(".chooseCommWin").hide();
		$(".seckillAddBox").hide();
		$(".seckillWin").toggle();
		$.ajax({
			  url:'../adminarea/getid.do',
			  data:{id:id},
			  type:'post',
			  async:false,
			  dataType:'json',
			  success:function(res){
				  console.log(res);
				  $("ul").after("<input name='id' value='"+res.id+"' type='hidden'>");
				  $("input[name=name]").attr("disabled","disabled");
				  $("input[name=name]").val(res.name);
				  $("input[name=sort]").val(res.sort);
				  $(".submitAddArea").addClass('update');
				  $(".submitAddArea").removeClass("submitAddArea");
			  }
		});
		return false;
	});
	
	$(document).on("click",".update",function(){
		var id = $("input[name=id]").val();
		var sort = $("input[name=sort]").val();
		$.ajax({
			url:'../adminarea/update.do',
			type:'post',
			data:{id:id,sort:sort},
			success:function(res){
				if(res == "true"){
					alert("更新成功！");
					window.location.reload();
				}
			}
		});
		return false;
	});
	
	/**
	 * 添加地区
	 */
	function addArea(){var name = $("input[name=name]").val();var sort = $("input[name=sort]").val();if(name == ""){alert("名称不能为空");return false;}var data = $("form#addArea").serialize();$.ajax({url:'../adminarea/add.do',type:'post',data:data,success:function(res){if(res == 'true'){alert("地区添加成功！");window.location.reload();}else{alert("地区添加失败！");}},error:function(){alert("网络连接错误，添加地区失败!");}});}
	
	/**
	 * 异步加载table表数据
	 */
	function ajaxLoadTabelData(){
		$.post("../adminarea/list.do",{},function(res){
			res = eval("("+res+")");
			var html = "";
			$(res).each(function(index,obj){
				html += "<tr>";
				html += "<td>"+(index+1)+"</td>";
				html += "<td>"+obj.name+"</td>";
				html += "<td>"+obj.sort+"</td>";
				html += "<td><a href='javascript:;' data-field='edit' data-id='"+obj.id+"' class='butBox'>修改</a><a href='javascript:;' data-field='delete' data-id='"+obj.id+"' class='butBox'>删除</a></td>";
				html += "</tr>";
			});
			$("table.infoTabShow.przeInKind tbody").html(html);
		});
	}

	/**
	 * 地区的删除
	 */
	function ajaxDeleteArea(id){
		if(confirm("确认删除该地区码？")){
			$.ajax({
				url:'../adminarea/del.do',type:'post',data:{"id":id},success:function(res){
					if(res == "true"){
						alert("地区删除成功！");
						window.location.reload();
					}
				},error:function(){alert("网络连接错误,删除失败!");}
			});
		}else{
			alert("删除已取消");
		}
	}
	
});