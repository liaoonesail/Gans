/**
 * 类目js
 */
$(function(){
	
	/**文档加载函数**/
	$(document).ready(function(){
		/**文档加载时异步加载一级类别**/
		$.ajax({
			url:'../admintype/list.do',
			type:'post',
			success:function(res){
				res = eval("("+res+")");
				var html = "";
				$(res).each(function(index,obj){
					html += "<tr>";
					html += "<td>"+(index+1)+"</td>";
					html += "<td>"+obj.name+"</td>";
					html += "<td><a href='javascript:;' data-field='update' data-value='"+obj.id+"' class='butBox ml10'>修改</a><a href='javascript:;' data-field='del' data-value='"+obj.id+"' class='butBox ml10'>删除</a></td>";
					html += "</tr>";
				});
				$("table.infoTabShow.przeInKind.typeTabelList tbody").html(html);
			},error(){console.log("加载一级类别失败!请检查网络");}
		});
		
	});
	
	/**提交添加类别**/
	$(".submitAddType").click(function(){
		
		var level = $("li.typeLevel input:checked").val();
		var name = $("input[name=name]").val();
		var type_id = $("select[name=firstLevel]").find("option:selected").val();
		var type_next_id = $("select[name=secondLevel]").find("option:selected").val();
		var url = "";
		var data = "";
		
		if(level == "1"){
			url = "../admintype/add.do";
			data = "name="+name;
		}
		if(level == "2"){			
			url = "../admintype_next/add.do";
			data = "name="+name+"&type_id="+type_id;
			
			if($("select[name=firstLevel]").find("option:selected").val() == "0"){
				alert("请选择上级类别");
				return false;
			}
		}
		if(level == "3"){
			url = "../admintype_next_next/add.do";
			data = "name="+name+"&type_id="+type_id+"&type_next_id="+type_next_id;
			
			if($("select[name=firstLevel]").find("option:selected").val() == "0" && $("select[name=secondLevel]").find("option:selected").val() == "0"){
				alert("请选择上级类别");
				return false;
			}
		}

		if(name == ""){
			alert("请输入您要添加的类别名称");
			return false;
		}
		
		/**ajax提交**/
		$.ajax({
			url:url,
			type:'post',
			data:data,
			success:function(){alert("添加类别成功!");window.location.reload();},error:function(){alert("网络连接错误,添加类别失败");}
		});
		
		return false;
	});
	
	/**list页面类别下拉列表**/
	$("select[name=type]").change(function(){
		var flag = $(this).find("option:selected").val();
		
		if(flag == "1"){
			$(".upSelect").hide();
			window.location.reload();
		}
		if(flag == "2"){
			$(".secondList").hide();
			$(".upSelect").show();
			
			/*加载一级下拉框*/
			ajaxLoadUpFirstSelect();
		}
		if(flag == "3"){
			$(".secondList").show();
			$(".upSelect").show();
			
			/*加载一级下拉框*/
			ajaxLoadUpFirstSelect();
		}
		
	});
	
	/**添加时类别的选择**/
	$("li.typeLevel input").click(function(){
		var level = $(this).val();
		if(level == "1"){
			$(".upLevel").hide();
		}
		if(level == "2"){
			$(".upLevel").show();
			$("select[name=firstLevel]").html("<option value='0'>请选择一级类别</option>");
			$("select[name=secondLevel]").html("");
		}
		if(level == "3"){
			/*获取一级 二级的数据*/

			$(".upLevel").show();

			/*滞空下拉框数据*/
			$("select[name=firstLevel]").html("<option value='0'>请选择一级类别</option>");
			$("select[name=secondLevel]").html("<option value='0'>请选择二级类别</option>");
		}
		
		/*获取一级的数据*/
		ajaxLoadFirstSelectData();
		
	});
	
	
	/**
	 * list 页面一级下拉框数据
	 */
	$("select[name=firstList]").change(function(){
		var id = $(this).val();
		var name = $(this).find(":selected").html();
		if(id!="0"){
			$("select[name=secondList]").html("<option value='0'>请选择二级类别</option>");
			/*异步加载二级数据*/
			$.ajax({
				url:'../admintype_next/listBytype_id.do',
				data:{'type_id':id},
				success:function(res){
					res = eval("("+res+")");
					var html = "";
					$(res).each(function(index,obj){
						html += "<option value='"+obj.id+"'>"+obj.name+"</option>";
					});
					$("select[name=secondList]").append(html);
					
					$(".location").html(name);
					$(".location2").html("");
				},error:function(){console.log("加载二级数据失败");}
			});
			
			/**
			 * 判断是否是查看
			 **/
			var type = $("select[name=type]").find("option:selected").val();
			if(type == "2"){
				/*ajax获取数据并渲染数据列表*/
				$.ajax({
					url:'../admintype_next/listBytype_id.do',
					data:{'type_id':id},
					success:function(res){
						res = eval("("+res+")");
						renderDataList(res);
					},error:function(){console.log("加载一级类别对应的二级类别失败！请检查您的网络");}
				});
			}
		}
	});
	/**
	 * list 页面二级下拉框数据
	 */
	$("select[name=secondList]").change(function(){
		var id = $(this).val();
		var name = $(this).find(":selected").html();
		var type = $("select[name=type]").find("option:selected").val();
		if(id!="0" && type=="3"){
			/*ajax获取数据并渲染数据列表*/
			$.ajax({
				url:'../admintype_next_next/listBytype_next_id.do',
				data:{'type_next_id':id},
				success:function(res){
					res = eval("("+res+")");
					if(res.length == 0){
						alert("没有找到相关数据");
					}else{
						renderDataList(res,name);
					}
					
				},error:function(){console.log("加载一级类别对应的二级类别失败！请检查您的网络");}
			});
		}
	});
	
	/**
	 * 删除类别
	 */
	//$("a[data-field=del]").click(function(){
	$(document).on("click","a[data-field=del]",function(){
		var id = $(this).attr("data-value");
		var type = $("select[name=type]").find('option:selected').val();
		var url = "";
		
		if(type == "1"){
			url = "../admintype/del.do";
		}
		if(type == "2"){
			url = "../admintype_next/del.do";
		}
		if(type == "3"){
			url = "../admintype_next_next/del.do";
		}
		console.log(url);
		console.log(type);
		if(confirm("此操作将删除该类别,是否继续？")){
			$.ajax({
				url:url,
				type:'post',
				data:{"id":id},
				success:function(res){
					if(res == "true"){
						alert("删除成功");
						window.location.reload();
					}else{
						alert("删除失败");
					}
				},error:function(){console.log("删除类别失败！请检查您的网络");}
			});
		}else{
			alert("删除已取消");
		}
	});
	
	/**
	 * 渲染类型的数据列表
	 * @arg0 res json数据对象
	 */
	function renderDataList(res,name){
		var html = "";
		$(res).each(function(index,obj){
			html += "<tr>";
			html += "<td>"+(index+1)+"</td>";
			html += "<td>"+obj.name+"</td>";
			html += "<td><a href='javascript:;' data-field='update' data-value='"+obj.id+"' class='butBox ml10'>修改</a><a href='javascript:;' data-field='del' data-value='"+obj.id+"' class='butBox ml10'>删除</a></td>";
			html += "</tr>";
		});
		$(".location2").html("&nbsp;&nbsp;>>&nbsp;&nbsp;"+name);
		$("table.infoTabShow.przeInKind.typeTabelList tbody").html(html);
	}
	
	/**二级类别的下拉框获取数据**/
	//function firstLevelChange(){
		$("select[name=firstLevel]").change(function(){
			var id = $(this).find("option:selected").val();
			$("select[name=secondLevel]").html("<option value='0'>请选择二级类别</option>");
			ajaxLoadSecondSelectData(id);
		})
	//}
	
	/**
	 * ajax异步获取一级数据
	 */
	function ajaxLoadFirstSelectData(){
		$.ajax({
			url:"../admintype/list.do",
			success:function(res){
				res = eval("("+res+")");
				var html = "";
				$(res).each(function(index,obj){
					html += "<option value="+obj.id+">"+obj.name+"</option>";
				});
				$("select[name=firstLevel]").append(html);
			}
		});
	}
	/**
	 * ajax异步获取二级数据
	 */
	function ajaxLoadSecondSelectData(id){
		
		$.ajax({
			url:'../admintype_next/listBytype_id.do',
			type:'post',
			data:{"type_id":id},
			success:function(res){
				console.log(res);
				res = eval("("+res+")");
				var html = "";
				$(res).each(function(index,obj){
					html += "<option value="+obj.id+">"+obj.name+"</option>";
				});
				$("select[name=secondLevel]").append(html);
			}
		});
	}
	
	/**
	 * ajax异步加载一级的select
	 */
	function ajaxLoadUpFirstSelect(){
		/**ajax异步获取上级类别数据**/
		$.ajax({
			url:'../admintype/list.do',
			success:function(res){
				$("select[name=firstList]").html("<option value='0'>请选择一级类别</option>");
				res = eval("("+res+")");
				var html = "";
				$(res).each(function(index,obj){
					html += "<option value='"+obj.id+"'>"+obj.name+"</option>";
				});
				$("select[name=firstList]").append(html);
			},error:function(){console.log("加载一级类别失败！请检查您的网络");}
		});
	}
	/**
	 * ajax异步加载一级的select
	 */
	function ajaxLoadUpSecondSelect(id){
		/**ajax异步获取上级类别数据**/
		$.ajax({
			url:'../admintype_next/listBytype_id.do',
			data:{"type_id":id},
			success:function(res){
			$("select[name=secondList]").html("<option value='0'>请选择二级类别</option>");
			res = eval("("+res+")");
			var html = "";
			$(res).each(function(index,obj){
				html += "<option value='"+obj.id+"'>"+obj.name+"</option>";
			});
			$("select[name=secondList]").append(html);
		},error:function(){console.log("加载二级类别失败！请检查您的网络");}
		});
	}
		
	
	
	
});