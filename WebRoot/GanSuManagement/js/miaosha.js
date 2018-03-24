/**
 * 秒杀管理相关js
 */

$(function(){
	$(document).ready(function(){
		page(1);
	});
	
	$(".seckillAdd").click(function(){
		initForm();//初始化表单
		return false;
	});
	
	/** 添加秒杀商品 **/
	$(document).on("click",'.addMiaoshaGoods',function(){
		var url ="../adminmiaosha/add.do";
		var msg = "添加活动商品成功！";
		addOrUpdate(url,msg);
	});
	
	/** 编辑秒杀商品**/
	$(document).on("click","a[data-field=edit]",function(){
		var id = $(this).attr("data-value");
		$("li.seckillUpBut").css("display","block");
		returnFormData(id);//还原表单数据
	});
	
	/**查看秒杀商品**/
	$(document).on("click","a[data-field=check]",function(){
		var id = $(this).attr("data-value");
		returnFormData(id);//还原表单数据
		$("li.seckillUpBut").css("display","none");
	});
	
	/*原价的显示*/
	$(document).on("change","select[name=goods_id]",function(){
		var id = $(this).find("option:selected").val();
		priceChange(id);
	});
	
	$(document).on("click","a[data-field=delete]",function(){
		var id = $(this).attr("data-value");
		if(id !=""){
			if(confirm("确定删除该秒杀活动吗？")){
				$.ajax({
					url:'../adminmiaosha/del.do',
					type:'post',
					data:{"id":id},
					success:function(res){
						if(res == "true"){
							alert("删除秒杀活动成功！");
							window.location.reload();
						}
					},error:function(){alert("删除秒杀活动失败");}
					
				});
			}else{
				alert("删除已取消");
			}
		}
	});
	

	/*二级分类选择的监听*/
	$(document).on("change","select[name=type2]",function(){
		$("select[name=goods_id]").html("<option value='0'>请选择</option>");//重置商品
		$("input[name=price]").val("");//重置原价
		var type_next_id = $("select[name=type2]").find("option:selected").val();
		var data = {
				type_next_id:type_next_id
		};
		var result = ajaxSubmit("../admintype_next_next/listBytype_next_id.do",data);
		var html = "<option value=''>请选择三级分类</option>";
		$(result).each(function(index,obj){
			html += "<option value='"+obj.id+"'>"+obj.name+"</option>";
		});
		$("select[name=type3]").html(html);
		return false;
	});

	/*获取商品*/
	$(document).on("change","select[name=type3]",function(){
		var id = $(this).find("option:selected").val();
		var goods_ = ajaxSubmit("../admingoods/getGoodsBySanNextId.do",{"id":id,"area_id":"0"});
		var goodsHtml = "<option value='0'>请选择</option>";
		$(goods_).each(function(index,obj){
			goodsHtml+="<option value='"+obj.id+"'>"+obj.goods_name+"</option>";
		});
		$("select[name=goods_id]").html(goodsHtml);
		return false;
	});
	
	/*关闭弹窗事件*/
	$(".seckillClose").click(function(){
		clearForm();//清理表单
		return false;
	});
	
});

/**
 * 初始化表单(包含分类的选择,商品的选择,活动时间的选择)
 */
function initForm(){
	clearForm();
	/*分类*/
	var result = ajaxSubmit("../admintype_next/list.do",{});
	var html = "<option>请选择</option>";
	$(result).each(function(index,obj){
		html += "<option value='"+obj.id+"'>"+obj.name+"</option>";
	});
	$("select[name=type2]").html(html);
	$("li.seckillUpBut").css("display","block");
	$("select").removeAttr("disabled");
	$("select[name=type3]").html("");
	$("select[name=goods_id]").html("<option value='0'>请选择</option>");
}

/**
 * ajax方法
 */
function ajaxSubmit(url,data,asycn){
	var result = "";
	async = asycn==true?true:false;
	$.ajax({
		type : "POST",
		url : url,
		data:data,
		async:async,
		dataType:'json',
		success : function(data) {
			result = data;
		}
	});
	return result;
}

function priceChange(id){
	if(id != ""){
		var result = ajaxSubmit("../admingoods/getid.do",{id:id},false);
		$("input[name=price]").val(result.price);
		$("input[name=price]").attr("disabled","disabled");
	}
}

function addOrUpdate(url,msg){
	var id = $("#id").val();
	var goods_id = $("select[name=goods_id]").find("option:selected").val();
	var label = $("select[name=label]").find("option:selected").val();
	var start_time = $("#startDate").val();
	var end_time = $("#endDate").val();
	var real_price = $("#real_price").val();
	if(goods_id == "0"){
		alert("请选择秒杀商品！");
		return false;
	}
	if(label == "0"){
		alert("请选择活动标签！");
		return false;
	}
	if(start_time == ""){
		alert("请选择开始时间！");
		return false;
	}
	if(end_time == ""){
		alert("请选择结束！");
		return false;
	}
	if(real_price == ""){
		alert("请输入秒杀价格！");
		return false;
	}
	if(!real_price.match(/^\d+(\.\d+)?$/)){
        alert("请输入正确的秒杀价格！");
        return false;
     }
	
	var data = {};
	if(id == ""){
		data = {
			goods_id:goods_id,
			start_time:start_time,
			end_time:end_time,
			real_price:real_price,
			label:label
		};
	}else{
		url = "../adminmiaosha/update.do";
		msg = "更新活动商品成功！";
		data = {
			id:id,
			goods_id:goods_id,
			start_time:start_time,
			end_time:end_time,
			real_price:real_price,
			label:label
		};
	}
	
	$.ajax({
		url:url,
		type:'post',
		data:data,
		success:function(res){
			if(res == "true"){alert(msg);window.location.reload();}else{alert("您操作的数据有误或已存在该商品的或活动时间不正确,请检查后再提交！");}
		},
		error:function(){alert("操作失败！");}
	});
}

/**
 * 还原表单数据
 */
function returnFormData(id){
	//显示弹窗
	$(".chooseCommWin").hide();
	$(".seckillAddBox").hide();
	$(".seckillWin").toggle();
	var result = ajaxSubmit("../adminmiaosha/getid.do",{id:id});
	var goods = ajaxSubmit("../admingoods/getid.do",{id:result.goods_id});
	var type2 = ajaxSubmit("../admintype_next/getid.do",{id:goods.type_next_id});
	var type3 = ajaxSubmit("../admintype_next_next/getid.do",{id:goods.type_next_next_id});
	$("select[name=type2]").html("<option>"+type2.name+"</option>");
	$("select[name=type2]").attr("disabled","disabled");
	$("select[name=type3]").html("<option>"+type3.name+"</option>");
	$("select[name=type3]").attr("disabled","disabled");
	$("select[name=goods_id]").html("<option value='"+goods.id+"'>"+goods.goods_name+"</option>");
	$("select[name=label]").find("option").each(function(index,obj){
		if($(obj).val() == result.label){
			$(obj).attr("selected",true);
		}else{
			$(obj).removeAttr("selected");
		}
	});
	/*$("select[name=label]").find("option:selected").val();*/
	$("select[name=goods_id]").attr("disabled","disabled");
	$("input[name=start_time]").val(result.start_time);
	$("input[name=end_time]").val(result.end_time);
	$("input[name=real_price]").val(result.real_price);
	$("input[name=price]").val(goods.price);
	$("input[name=id]").val(result.id);
}

/**
 * 清理表单数据
 */
function clearForm(){
	$("form#fromAddMiaosha")[0].reset();//重置input等表单数据
	$("select[name=type2]").html("<option>请选择</option>");//重置select下拉框数据
	$("select[name=type3]").html("");//重置select下拉框数据
	$("select[name=goods_id]").html("");//重置select下拉框数据
	/*$("select[name=label] option").each(function(index,obj){
		$(obj).removeAttr("selected");
	});*/
	$("select[name=label]").html("<option value='1'>秒杀</option>");//重置select下拉框数据
	$("select[name=type2]").removeAttr("disabled");//移除禁用
	$("select[name=type3]").removeAttr("disabled");//移除禁用
	$("select[name=goods_id]").removeAttr("disabled");//移除禁用
}

function page(curpage){
	/*var name = $("#miaoshaGoods").val();*/
	var html="";
	$.ajax({
		url:'../adminmiaosha/listpage.do',
		type:'post',
		data:{"curpage":curpage},
		success:function(result){
			result = eval("("+result+")");
			var i = 0;
			$(result).each(function(i,object){
				$(object.list).each(function(index,obj){
					var goods = ajaxSubmit("../admingoods/getid.do",{"id":obj.goods_id},false);
					if(goods!=null){
						i++;
					var shop = ajaxSubmit("../adminshop/getid.do",{"id":goods.shop_id},false);
					html += "<tr>";
					html += "<td>"+i+"</td>";
					html += "<td>"+goods.goods_name+"</td>";
					html += "<td>"+shop.shop_name+"</td>";
					html += "<td>"+obj.start_time+"</td>";
					html += "<td>"+obj.end_time+"</td>";
					html += "<td>"+obj.real_price+"元</td>";
					html += "<td><a style='cursor: pointer;' data-field='check' data-value='"+obj.id+"' class='butBox'>查看</a>"+
							"<a style='cursor: pointer;' data-field='edit' data-value='"+obj.id+"' class='butBox'>编辑</a>"+
							"<a style='cursor: pointer;' data-field='delete' data-value='"+obj.id+"' class='butBox'>删除</a></td>";
					html += "</tr>";
				}
				})
				/** 写入页面 **/
				$("#miaosha_num").html(object.count);
				$("#pageCount").html(object.page.pageCount);
				//$("#curpage").html(curpage);
				$("#curpage").val(object.page.currentPage);
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

function getEnterKey(){
	if(event.keyCode==13){
		var curpage=$("input[name=curpage]").val();
		page(curpage);
	}
}
