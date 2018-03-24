/**
 * 周周惠管理
 */


	$(document).ready(function(){
		getTabelData(1);//默认加载第一页
	});
	
	/*编辑周周惠商品弹窗*/
	$(document).on("click","a[data-field=edit]",function(){
		var id = $(this).attr("data-value");
		$("li.seckillUpBut").css("display","block");
		returnFormData(id);//还原表单数据
	});
	/*删除*/
	$(document).on("click","a[data-field=delete]",function(){
		var id = $(this).attr("data-value");
		deleteZhouzhouhui(id);//删除
	});
	
$(function(){
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

	/**
	 * 删除
	 */
	function deleteZhouzhouhui(id){
		if(confirm("确认删除该数据？")){
			var result = ajaxSubmit("../adminactivity_details/del.do",{id:id},false);
			if(result == true){
				alert("周周惠商品删除成功！");
				/*window.location.reload();*/
				$("#zzh"+id).remove();
				var countsum=$("span.count").html();
	    		$("span.count").html(countsum-1);
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
	
	/**
	 * table数据
	 */
	function getTabelData(curpage){
		var data = {
				curpage:curpage,
		};
		var async = false;
		var result = ajaxSubmit("../adminactivity_details/listpage.do",data,false);
		var html = "";
		$(result).each(function(index,object){
			$(object.list).each(function(index,obj){
				var goods = ajaxSubmit("../admingoods/getid.do",{"id":obj.goods_id},false);
				if(goods!=null){
					var shop = ajaxSubmit("../adminshop/getid.do",{"id":goods.shop_id},false);
					
					html += "<tr id='zzh"+obj.id+"'>";
					html += "<td>" + (index+1) + "</td>";
					html += "<td>" + goods.goods_name+ "</td>";
					html += "<td>" + shop.shop_name + "</td>";
					html += "<td>" + obj.start_time + "</td>";
					html += "<td>" + obj.end_time + "</td>";
					html += "<td><span class='costList'>" + obj.real_price + "元</span></td>";
					html += "<td><a href='javascript:;' data-field='edit' data-value='"+obj.id+"' class='butBox ml10'>编辑</a>" +
								"<a href='javascript:;' data-field='delete' data-value='"+obj.id+"' class='butBox mt10'>删除</a></td>";
				}
			});
			$(".count").html(object.count);//总记录数
			$(".pageCount").html(result[0].page.pageCount);//总的页数
			$(".pageSize").html(result[0].page.pageSize);//每页大小
			$("input[name=curpage]").attr("curpage",result[0].page.currentPage);//设置当前页
			$("input[name=curpage]").val(result[0].page.currentPage);//设置当前页
			$("tbody").html(html);
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
		var result = ajaxSubmit("../adminactivity_details/getid.do",{id:id});
		console.log(result);
		var goods = ajaxSubmit("../admingoods/getid.do",{id:result.goods_id});
		$("input[name=id]").val(result.id);
		$("select[name=goods_id]").html("<option value='"+goods.id+"'>"+goods.goods_name+"</option>");
		$("select[name=goods_id]").attr("disabled","disabled");
		$("input[name=start_time]").val(result.start_time);
		$("input[name=end_time]").val(result.end_time);
		$("input[name=real_price]").val(result.real_price);
		
		/** 提交更新 **/
		$(".updateZhouzhouhuiGoods").click(function(){
			var id = $("input[name=id]").val();
			var goods_id = $("select[name=goods_id]").find("option:selected").val();
			var start_time = $("input[name=start_time]").val();
			var end_time = $("input[name=end_time]").val();
			var real_price = $("input[name=real_price]").val();
			if(start_time == ""){
				alert("请选择开始时间！");
				return false;
			}
			if(end_time == ""){
				alert("请选择结束时间！");
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
			$.ajax({
				url:'../adminactivity_details/update.do',
				type:'post',
				data:{"id":id,"goods_id":goods_id,"start_time":start_time,"end_time":end_time,"real_price":real_price},
				success:function(result){
					if(result == "true"){alert("周周惠商品更新成功！");document.location.reload();}else{alert("周周惠商品更新失败！");}
				}
			});
		});
	}
	
	/**
	 * 清理表单数据
	 */
	function clearForm(){
		$("#form")[0].reset();//重置input等表单数据
		$("select[name=goods_id]").html("");//重置select下拉框数据
		$("select[name=goods_id]").removeAttr("disabled");//移除禁用
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


	function getKey(){
		if(event.keyCode==13){
			var curpage=$("input[name=curpage]").val();
			getTabelData(curpage);
		}
	}
