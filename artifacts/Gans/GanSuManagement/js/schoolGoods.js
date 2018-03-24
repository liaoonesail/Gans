/**
 * @author zs
 * @time 2017年7月29日15:13:26
 * @description 入学季商品管理js
 */
$(function(){
	
	$(document).ready(function(){
		getTableData(1);
	});
	/**点击查看**/
	$(document).on("click","a[data-field=see]",function(){
		$("li.seckillUpBut").css("display","none");
		var id = $(this).parent().attr("data-id");
		returnFormData(id);//还原表单数据
	});
	/**点击编辑**/
	$(document).on("click","a[data-field=edit]",function(){
		$("li.seckillUpBut").css("display","block");
		var id = $(this).parent().attr("data-id");
		returnFormData(id);//还原表单数据
	});
	/**移除**/
	$(document).on("click","a[data-field=delete]",function(){
		var id = $(this).parent().attr("data-id");
		deleteTuangou(id);//删除
	});
	
	 /**点击分页(第一页)**/
    $(".commPage1").click(function(){
    	var curpage = 1;
    	getTableData(curpage);
        return false;
    });
    /**点击分页(上一页)**/
    $(".commPage2").click(function(){
    	var page = $("select[name=curpage]").attr("curpage");
    	page = Number(page);
    	if(page == 1){
    		alert("当前是第一页");
    		return false;
    	}
    	getTableData(page-1);
        return false;
    });
    /**点击分页(下一页)**/
    $(".commPage3").click(function(){
    	var page = $("select[name=curpage]").attr("curpage");
    	var lastPage = $(".pageCount").html().trim();
    	lastPage = Number(lastPage);
    	page = Number(page);
    	if(page == lastPage){
    		alert("当前是最后一页");
    		return false;
    	}
    	getTableData(page+1);
        return false;
    });
    
    /**点击分页(最后一页)**/
    $(".commPage4").click(function(){
    	var page = $(".pageCount").html().trim();
    	getTableData(page);
        return false;
    });
	
});


/**
 * 还原表单数据
 * @param id 
 */
function returnFormData(id){
	//显示弹窗
	$(".chooseCommWin").hide();
	$(".seckillAddBox").hide();
	$(".seckillWin").toggle();
	//禁用地区和商品
	$("select[name=area_id]").attr("disabled","disabled");//禁用
	$("select[name=goods_id]").attr("disabled","disabled");//禁用
	var result = ajaxSubmit("../adminInschool/getid.do",{id:id},false);
	getArea();//获取地区
	$("select[name=area_id] option").each(function(index,obj){
		if($(obj).val() == result.areaId){
			$(obj).attr("selected","selected");
		}else{
			$(obj).removeAttr("selected");
		}
	});
	$("input[name=id]").val(result.id);
	$("#startDate").val(result.startTime);
	$("#endDate").val(result.endTime);
	var goods = ajaxSubmit("../admingoods/getid.do",{id:result.goodsId},false);
	var goodsHtml = "<option value='"+goods.id+"'>"+goods.goods_name+"</option>";
	$("select[name=goods_id]").html(goodsHtml);
	$("#real_price").val(result.realPrice);
	$("#price").val(goods.price);
	
}


/**
 * 重置表单
 */
function clearForm(){
	$(".form")[0].reset();//重置input等表单数据
	$("select[name=area_id]").html("<option>请选择</option>");//重置地区select下拉框数据
	$("select[name=goods_id]").html("<option value='0'>请选择</option>");//重置select下拉框数据
	$("select[name=type]").find("option:selected").removeAttr("selected");//
	$("select[name=area_id]").removeAttr("disabled");//移除禁用
	$("select[name=goods_id]").removeAttr("disabled");//移除禁用
	$("select[name=goods_id]").removeAttr("disabled");//移除禁用
	$("select[name=label]").find("option:selected").removeAttr("selected");//移除selected
	$("select[name=part]").find("option:selected").removeAttr("selected");//移除selected
	$("li.seckillUpBut").css("display","block");
	
}

/**
 * 获取数据table
 * @param curpage 当前页码
 * @returns 无返回
 */
function getTableData(curpage){
	var result = ajaxSubmit("../adminInschool/listpage.do",{curpage:curpage},false);
	var html = "";
	var i = 0;
	$(result).each(function(index,object){
		$(object.list).each(function(index,obj){
			//console.log(obj);
			var goods = ajaxSubmit("../admingoods/getid.do",{"id":obj.goodsId},false);
			//console.log(goods);
			if(goods!=null){
				i++;
				var shop = ajaxSubmit("../adminshop/getid.do",{"id":goods.shop_id},false);
				html += "<tr><td>"+(i)+"</td><td>"+goods.goods_name+"</td><td>"+shop.shop_name+"</td><td>"+obj.startTime+"</td><td>"+obj.endTime+"</td><td><span class='costList'>原价：<span style='color:red;'>"+goods.price+"</span>元</span><span class='costList'>活动价格："+obj.realPrice+"元</span></td><td><span class='operationButBox' data-id='"+obj.id+"'><a href='javascript:;' data-field='see' class='butBox'>查看</a><a href='javascript:;' data-field='edit' class='butBox ml10'>编辑</a><a href='javascript:;' data-field='delete' class='butBox mt10'>移除</a></span></td></tr>";
				
			}
		});
	});
	$(".count").html(i);//总记录数
	$(".pageCount").html(result[0].page.pageCount);//总的页数
	$(".pageSize").html(result[0].page.pageSize);//每页大小
	$("select[name=curpage]").attr("curpage",result[0].page.currentPage);//设置当前页
	$("select[name=curpage]").html("<option>"+result[0].page.currentPage+"</option>");//设置当前页
	$("tbody").html(html);
}

/**
 * 添加或更新商品的方法
 * @param url 添加或更新入学季商品的url地址
 * @param msg 成功后的提示信息
 */
function addOrUpdate(){
	var id = $("input[name=id]").val();
	var areaId = $("select[name=area_id]").find("option:selected").val();
	var goodsId = $("select[name=goods_id]").find("option:selected").val();
	var type = $("select[name=type]").find("option:selected").val();
	var startTime = $("input[name=start_time]").val();
	var endTime = $("input[name=end_time]").val();
	var realPrice = $("input[name=real_price]").val();
	var data = {
			areaId:areaId,
			goodsId:goodsId,
			type:type,
			startTime:startTime,
			endTime:endTime,
			realPrice:realPrice
	};
	var url = "../adminInschool/add.do";//默认为添加商品的路径
	var msg = "添加入学季商品成功！";//默认为添加商品的提示信息
	if(id != ""){
		url = "../adminInschool/update.do";
		msg = "商品更新成功！";
		data['id'] = id;
	}
	$.ajax({
		url:url,
		data:data,
		type:"post",
		success:function(res){
			if(res == "true"){
				alert(msg);
				window.location.reload();
			}else{
				alert("此商品已存在,无需再添加！");
				window.location.reload();
			}
		}
	})
	return false;
}
/**移除**/
 function deleteTuangou(id){
 	if(confirm("确认删除该数据？")){
		var result = ajaxSubmit("../adminInschool/del.do",{id:id},false);
		if(result == true){
			alert("商品移除成功！");
			window.location.reload();
		}
	}else{
		alert("删除已取消");
	}
 }
/**
 * 获取商品原价
 * @param goodsId 商品id
 */
function getPrice(goodsId){
	var goods = ajaxSubmit("../admingoods/getid.do",{id:goodsId},false);
	$("input[name=price]").val(goods.price);
	return false;
}

/**
 * 根据地区id获取商品
 * @param areaId 地区id
 * @returns 无返回
 */
function getGoodsByAreaId(areaId){
	var goods = ajaxSubmit("../admingoods/getByareaId.do",{"areaId":areaId},false);
	var html = "<option value='0'>请选择</option>";
	$(goods).each(function(index,obj){
		html += "<option value='"+obj.id+"'>"+obj.goods_name+"</option>";
	});
	$("select[name=goods_id]").html(html);
}

/**
 * 获取地区
 */
function getArea(){
	var url = "";
	var result = ajaxSubmit("../adminarea/list.do",{},false);
	var html = "<option value='0'>请选择</option>";
	$(result).each(function(index,obj){
		html += "<option value='"+obj.id+"'>"+obj.name+"</option>";
	});
	$("select[name=area_id]").html(html);
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