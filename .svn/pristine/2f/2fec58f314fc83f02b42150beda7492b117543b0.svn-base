/**
 * 奖品相关js
 */

$(function() {
	
	/**文档就绪函数**/
	$(document).ready(function(){
		
		/**
		 * 异步加载奖品管理列表
		 */
		$.post("../adminprize/list.do",{},function(res){
			res = eval("("+res+")");
			var html = "";
			$(res).each(function(index,obj){
				html += "<tr>";
				/*html += "<td>"+obj.level+"</td>";*/
				if(obj.level == "1"){
					html += "<td>一等奖</td>";
				}
				if(obj.level == "2"){
					html += "<td>二等奖</td>";
				}
				if(obj.level == "3"){
					html += "<td>三等奖</td>";
				}
				if(obj.level == "4"){
					html += "<td>四等奖</td>";
				}
				if(obj.level == "5"){
					html += "<td>五等奖</td>";
				}
				if(obj.level == "6"){
					html += "<td>六等奖</td>";
				}
				html += "<td>"+obj.name+"</td>";
				html += "<td>"+obj.probability+"</td>";
				html += "<td>"+obj.overplus+"</td>";
				html += "<td>"+obj.amount+"</td>";
				html += "<td><a href='javascript:;' data-field='modifyPrize' data-id='"+obj.id+"' class='butBox'>修改</a>&nbsp;&nbsp;<a href='javascript:;' data-field='delete' data-id='"+obj.id+"' class='butBox'>删除</a></td>";
				html += "</tr>";
			});
			$("table.infoTabShow.przeInKind tbody").html(html);
		});
		
		
		/**
		 * 异步加载中奖人信息列表
		 */
		/*$.post("/GanShu/",{},function(res){
			res = eval("("+res+")");
			var html = "";
			$(res).each(function(index,obj){
				html += "<tr>";
				html += "<td>"+obj.level+"</td>";
				html += "<td>"+obj.name+"</td>";
				html += "<td>"+obj.probability+"</td>";
				//同步加载中奖人姓名
				html += "<td>"+obj.amount+"</td>";
				html += "<td>"+obj.overplus+"</td>";
				html += "<td><a href='javascript:;' data-field='modifyPrize' data-id='"+obj.id+"' class='butBox'>修改</a></td>";
				html += "</tr>";
			});
			$("table.infoTabShow.przeVirtual.mt30 tbody").html(html);
		});*/
	});
	
	/**添加奖项**/
	$(document).on("click",'.submitAddPrize',function(){
		var name = $("input[name=name]").val();
		var probability = $("input[name=probability]").val();
		var amount = $("input[name=amount]").val();
		
		if(name == ""){
			alert("奖品名称不能为空");
			$("input[name=name]").focus();
			return false;
		}
		if(probability == ""){
			alert("中奖概率不能为空");
			$("input[name=probability]").focus();
			return false;
		}
		if(amount == ""){
			alert("奖品数量不能为空");
			$("input[name=amount]").focus();
			return false;
		}
		
		var data = $("form#addPrize").serialize();
		
		$.ajax({
			url:"../adminprize/add.do",
			type:"post",
			data:data,success:function(res){
				alert("奖品添加成功！");
				window.location.reload();
			},error:function(){alert("请检查您的网络连接");}
		});
		
		return false;
		/*$("form#addPrize").submit();*/
	});
	
	/**奖项更新的提交**/
	$(document).on("click",".updatePrize",function(){
		var id = $(this).attr("data-id");
		var name = $("input[name=name]").val();
		var probability = $("input[name=probability]").val();
		var amount = $("input[name=amount]").val();
		var overplus = $("input[name=overplus]").val();
		//var level = $("select[name=level]").find("option:selected").val();
		$("select[name=level]").css("display","none");
		if((overplus-amount)>0){
			alert("奖品数不能低于剩余数量");
			$("input[name=amount]").focus();
			return false;
		}
		if(name == ""){
			alert("奖品名称不能为空");
			$("input[name=name]").focus();
			return false;
		}
		if(probability == ""){
			alert("中奖概率不能为空");
			$("input[name=probability]").focus();
			return false;
		}
		if(amount == ""){
			alert("奖品数量不能为空");
			$("input[name=amount]").focus();
			return false;
		}
		if(overplus == ""){
			alert("奖品剩余数量不能为空");
			$("input[name=overplus]").focus();
			return false;
		}
		
		$.ajax({
			url:"../adminprize/update.do",
			type:"post",
			data:{
				"id":id,
				"name":name,
				'probability':probability,
				"amount":amount,
				"overplus":overplus,
			},success:function(res){
				//resetForm();//重置表单
				alert("奖品更新成功！");
				window.location.reload();
			},error:function(){alert("请检查您的网络连接");}
		});
	});
	
	/**奖项的更新获取该奖项的数据**/
	$(document).on("click","a[data-field=modifyPrize]",function(){
		
		$(".seckillAddBox").hide();
		$(".seckillWin").toggle();
		var id = $(this).attr("data-id");
		$("form#addPrize ul").find("li").each(function(index,obj){
			if($(obj).attr("class") == "shengyu"){
				$(this).remove();
			}
		});
		
		var html = "<li class='shengyu'><span><i class='colorRed'>*</i>剩余数量：</span><input type='text' class='seckillUpInp w120' placeholder='请输入奖品剩余数量' name='overplus' value=''/></li>";
		$("form#addPrize ul").find("li").eq(3).after(html);
		$.post("../adminprize/getid.do",{"id":id},function(res){
			res = eval("("+res+")");
			$("select[name=level]").find("option").each(function(index,obj){
				if($(obj).val() == res.level){
					$(obj).attr("selected",true);
				}else{
					$(obj).removeAttr("selected");
				}
			});
			$("form#addPrize ul").find("li").eq(0).css("display","none");
			$("input[name=name]").val(res.name);
			$("input[name=probability]").val(res.probability);
			$("input[name=amount]").val(res.amount);
			$("input[name=overplus]").val(res.overplus);
			$(".submitAddPrize").html("更新");
			$(".submitAddPrize").attr("data-id",res.id);
			$(".submitAddPrize").addClass("updatePrize");
			$(".submitAddPrize").removeClass("submitAddPrize");
		});
	
	});
	
	/**奖品的删除**/
	$(document).on("click","a[data-field=delete]",function(){
		var id = $(this).attr("data-id");
		deletePrize(id);
	});
	
	/**关闭弹窗时重置表单**/
	$(document).on("click",'.seckillClose',function(){
		//重置表单
		resetForm();
	});
	
	/**
	 * 重置表单
	 */
	function resetForm(){
		$("form#addPrize")[0].reset();
		$("form#addPrize ul").find("li").each(function(index,obj){
			if($(obj).hasClass("shengyu")){
				$(obj).remove();
			}
		});
		$(".updatePrize").html("提交");
		$(".updatePrize").addClass("submitAddPrize");
		$(".updatePrize").removeClass("updatePrize");
		
	}
	
	/**
	 * 奖品的删除
	 */
	function deletePrize(id){
		if(confirm("您确定删除该奖项吗？")){
			$.post("../adminprize/del.do",{"id":id},function(res){
				if(res == "true"){
					alert("奖项删除成功！");
					window.location.reload();
				}
			});
		}else{
			alert("删除已取消");
		}
		
	}
});