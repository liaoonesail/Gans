/**
 * 团购管理
 */


	$(document).ready(function(){
		getTabelData(1);//默认加载第一页
	});
	
	
	/*****************事件区*************************/
	$(".addGroupActivity").click(function(){
		initForm();//初始化表单
		return false;
	});
	
	/*添加活动商品*/
	$(document).on("click",".addGroupGoods",function(){
		var url ="../admintuangou/add.do";
		var msg = "添加活动商品成功！";
		addOrUpdate(url,msg,true);
	});
	
	/*查看或编辑活动商品弹窗*/
	$(document).on("click","a[data-field=see]",function(){
		var id = $(this).parent().attr("data-id");
		returnFormData(id);//还原表单数据
		$("li.seckillUpBut").css("display","none");
	});
	$(document).on("click","a[data-field=edit]",function(){
		var id = $(this).parent().attr("data-id");
		$("li.seckillUpBut").css("display","block");
		returnFormData(id);//还原表单数据
	});
	/*移除*/
	$(document).on("click","a[data-field=delete]",function(){
		var id = $(this).parent().attr("data-id");
		deleteTuangou(id);//删除
	});
	
$(function() {
	 /**点击分页(第一页)**/
    $(".commPage1").click(function(){
    	var curpage = 1;
    	getTabelData(curpage);
        return false;
    });
    /**点击分页(上一页)**/
    $(".commPage2").click(function(){
    	var page = $("input[name=curpage]").attr("curpage");
    	page = Number(page);
    	if(page == 1){
    		alert("当前是第一页");
    		return false;
    	}
    	getTabelData(page-1);
        return false;
    });
    /**点击分页(下一页)**/
    $(".commPage3").click(function(){
    	var page = $("input[name=curpage]").attr("curpage");
    	var lastPage = $(".pageCount").html().trim();
    	lastPage = Number(lastPage);
    	page = Number(page);
    	if(page == lastPage){
    		alert("当前是最后一页");
    		return false;
    	}
    	getTabelData(page+1);
        return false;
    });
    
    /**点击分页(最后一页)**/
    $(".commPage4").click(function(){
    	var page = $(".pageCount").html().trim();
    	getTabelData(page);
        return false;
    });
})
    
    /*原价的显示*/
    $(document).on("change","select[name=goods_id]",function(){
    	var id = $(this).find("option:selected").val();
    	priceChange(id);
    });
	
    function priceChange(id){
    	if(id != ""){
    		var result = ajaxSubmit("../admingoods/getid.do",{id:id},false);
    		$("input[name=price]").val(result.price);
    		$("input[name=price]").attr("disabled","disabled");
    	}
    }
    
	/**
	 * @param url 
	 * @param msg 提示信息
	 */
	function addOrUpdate(url,msg){
		var id = $("input[name=id]").val();
		var goods_id = $("select[name=goods_id]").find("option:selected").val();
		var start_time = $("input[name=start_time]").val();
		var end_time = $("input[name=end_time]").val();
		var label = $("select[name=label]").find("option:selected").val();
		var real_price = $("input[name=real_price]").val();
		//数据验证
		if(goods_id == "0"){
			alert("请选择团购商品！");
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
			alert("请输入优惠价格！");
			return false;
		}
		if(!real_price.match(/^\d+(\.\d+)?$/)){
            alert("请正确输入优惠价格");
            return false;
         }
		var data = {};
		if(id == ""){
			data = {
					goods_id:goods_id,
					start_time:start_time,
					end_time:end_time,
					label:label,
					real_price:real_price,
			};
		}else{
			url = "../admintuangou/update.do";
			msg = "更新活动商品成功！";
			data = {
					id:id,
					goods_id:goods_id,
					start_time:start_time,
					end_time:end_time,
					label:label,
					real_price:real_price
			};
		}
		$.ajax({
			url:url,
			type:'post',
			data:data,
			success:function(res){
				if(res == "true"){
					alert(msg);
					window.location.reload();
				}else{
					alert("您操作的数据有误,请检查后再提交！");
				}
			},error:function(){
				alert("操作失败！");
			}
		});
	}

	/**
	 * 删除
	 */
	function deleteTuangou(id){
		if(confirm("确认删除该数据？")){
			var result = ajaxSubmit("../admintuangou/del.do",{id:id},false);
			if(result == true){
				alert("团购商品移除成功！");
				window.location.reload();
			}
		}else{
			alert("删除已取消");
		}
	}
	
	/*关闭弹窗事件*/
	$(".seckillClose").click(function(){
		clearForm();//清理表单
		return false;
	});
	
	/* 函数区 */
	
	/**
	 * table数据
	 */
	function getTabelData(curpage){
		var data = {
				curpage:curpage,
		};
		var async = false;
		var result = ajaxSubmit("../admintuangou/listpage.do",data,false);
		var html = "";
		var i = 0;
		$(result).each(function(index,object){
			$(object.list).each(function(index,obj){
				var goods = ajaxSubmit("../admingoods/getid.do",{"id":obj.goods_id},false);
				if(goods!=null){
					i++;
					var shop = ajaxSubmit("../adminshop/getid.do",{"id":goods.shop_id},false);
					html += "<tr><td>"+i+"</td><td>"+goods.goods_name+"</td><td>"+shop.shop_name+"</td><td>"+obj.end_time+"</td><td><span class='costList'>原价：<span style='color:red;'>"+goods.price+"</span>元</span><span class='costList'>数量达到："+obj.amount+"</span><span class='costList'>享受价格："+obj.real_price+"元</span></td><td><span class='operationButBox' data-id='"+obj.id+"'><a href='javascript:;' data-field='see' class='butBox'>查看</a><a href='javascript:;' data-field='edit' class='butBox ml10'>编辑</a><a href='javascript:;' data-field='delete' class='butBox mt10'>移除</a></span></td></tr>";
				}
			});
		});
		$(".count").html(result[0].count);//总记录数
		$(".pageCount").html(result[0].page.pageCount);//总的页数
		$(".pageSize").html(result[0].page.pageSize);//每页大小
		$("input[name=curpage]").attr("curpage",result[0].page.currentPage);//设置当前页
		$("input[name=curpage]").val(result[0].page.currentPage);//设置当前页
		$("tbody").html(html);
	}
	
	/**
	 * 还原表单数据
	 */
	function returnFormData(id){
		//显示弹窗
		$(".chooseCommWin").hide();
		$(".seckillAddBox").hide();
		$(".seckillWin").toggle();
		var result = ajaxSubmit("../admintuangou/getid.do",{id:id});
		var goods = ajaxSubmit("../admingoods/getid.do",{id:result.goods_id});
		var type2 = ajaxSubmit("../admintype_next/getid.do",{id:goods.type_next_id});
		var type3 = ajaxSubmit("../admintype_next_next/getid.do",{id:goods.type_next_next_id});
		$("select[name=type2]").html("<option>"+type2.name+"</option>");
		$("select[name=type2]").attr("disabled","disabled");
		$("select[name=type3]").html("<option>"+type3.name+"</option>");
		$("select[name=type3]").attr("disabled","disabled");
		$("select[name=goods_id]").html("<option value='"+goods.id+"'>"+goods.goods_name+"</option>");
		$("select[name=goods_id]").attr("disabled","disabled");
		$("input[name=start_time]").val(result.start_time);
		$("input[name=end_time]").val(result.end_time);
		$("input[name=amount]").val(result.amount);
		$("input[name=real_price]").val(result.real_price);
		$("input[name=price]").val(goods.price);
		$("input[name=id]").val(result.id);
	}
	
	/**
	 * 初始化表单(包含分类的选择,商品的选择,活动时间的选择)
	 */
	function initForm(){
		/*分类*/
		var result = ajaxSubmit("../admintype_next/list.do",{});
		var html = "<option>请选择</option>";
		$(result).each(function(index,obj){
			html += "<option value='"+obj.id+"'>"+obj.name+"</option>";
		});
		$("select[name=type2]").html(html);
		$("li.seckillUpBut").css("display","block");
	}
	/**
	 * 清理表单数据
	 */
	function clearForm(){
		$("#form")[0].reset();//重置input等表单数据
		$("select[name=type2]").html("<option>请选择</option>");//重置select下拉框数据
		$("select[name=type3]").html("");//重置select下拉框数据
		$("select[name=goods_id]").html("");//重置select下拉框数据
		$("select[name=type2]").removeAttr("disabled");//移除禁用
		$("select[name=type3]").removeAttr("disabled");//移除禁用
		$("select[name=goods_id]").removeAttr("disabled");//移除禁用
	}

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
		/*获取商品
		var id = $("select[name=type3]").find("option:selected").val();
		var goods_ = ajaxSubmit("../admingoods/getGoodsBySanNextId.do",{"id":id,"area_id":"0"});
		var goodsHtml = "<option value='0'>请选择</option>";
		$(goods_).each(function(index,obj){
			goodsHtml+="<option value='"+obj.id+"'>"+obj.goods_name+"</option>";
		});
		$("select[name=goods_id]").html(goodsHtml);*/
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
	
	function getEnterKey(){
		if(event.keyCode==13){
			var curpage=$("input[name=curpage]").val();
			getTabelData(curpage);
		}
	}
	
	