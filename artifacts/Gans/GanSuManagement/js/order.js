document.write(" <script type='text/javascript' src='js/deriveExcl.js'></script>");
/**
 * 订单管理js
 */
/*$(function(){*/
	var status;
	
	$(document).ready(function(){
		ajaxLoadTableData("-1","",1);
		status=-1;
		$.ajax({
	    	url:'../adminorder/orderCount.do',
	    	type:'post',
	    	dataType:'json',
	    	success:function(result){
	    		$(".allNum").html(result[0]);
	    		$(".daifukuanNum").html(result[1]);
	    		$(".daifahuoNum").html(result[2]);
	    		$(".daituikuanNum").html(result[3]);
	    		$(".yifahuoNum").html(result[4]);
	    		$(".yiguanbiNum").html(result[5]);
	    		$(".yishouhuoNum").html(result[6]);
	    		$(".yituikuanNum").html(result[7]);
	    	}
	    });
		$("#outOrder").attr("myattr",status);
	});
	
	function daohang(){
		$.ajax({
	    	url:'../adminorder/orderCount.do',
	    	type:'post',
	    	dataType:'json',
	    	success:function(result){
	    		$(".allNum").html(result[0]);
	    		$(".daifukuanNum").html(result[1]);
	    		$(".daifahuoNum").html(result[2]);
	    		$(".daituikuanNum").html(result[3]);
	    		$(".yifahuoNum").html(result[4]);
	    		$(".yiguanbiNum").html(result[5]);
	    		$(".yishouhuoNum").html(result[6]);
	    		$(".yituikuanNum").html(result[7]);
	    		var countsum=$("span.count").html();
	    		$("span.count").html(countsum-1);
	    	}
	    });
	}

$(function(){	
	 /**点击分页(第一页)**/
    $(".commPage1").click(function(){
    	var name = $("input[name=name]").val();
    	/*var curpage = 1;*/
    	var curpage=$("input[name=curpage]").attr("curpage");
        curpage = Number(curpage);
    	var stauts = "";
    	$("div.commodityClass.orderFormOption a").each(function(index,obj){
    		if($(obj).hasClass("bgGreen")){
    			stauts = $(obj).attr("data-value");
    		}
    	});
    	ajaxLoadTableData(stauts,name,curpage);
        return false;
    });
    /**点击分页(上一页)**/
    $(".commPage2").click(function(){
    	var name = $("input[name=name]").val();
    	var stauts = "";
    	$("div.commodityClass.orderFormOption a").each(function(index,obj){
    		if($(obj).hasClass("bgGreen")){
    			stauts = $(obj).attr("data-value");
    		}
    	});
    	var curpage=$("input[name=curpage]").attr("curpage");
        var pageCount = $("#pageCount").html();
        pageCount = Number(pageCount);
        curpage = Number(curpage);
        curpage -= 1;
        if(curpage < 1){
            alert("当前是第一页");
            return false;
        }
    	ajaxLoadTableData(stauts,name,curpage);
        return false;
    });
    /**点击分页(下一页)**/
    $(".commPage3").click(function(){
    	var name = $("input[name=name]").val();
    	var stauts = "";
    	$("div.commodityClass.orderFormOption a").each(function(index,obj){
    		if($(obj).hasClass("bgGreen")){
    			stauts = $(obj).attr("data-value");
    		}
    	});
    	var curpage = $("input[name=curpage]").attr("curpage");
    	var pageCount = $(".pageCount").html();
    	pageCount = Number(pageCount);
    	curpage = Number(curpage);
    	curpage += 1;
    	if(curpage > pageCount){
            alert("当前是最后一页");
            return false;
        }
    	ajaxLoadTableData(stauts,name,curpage);
        return false;
    });
    
    /**点击分页(最后一页)**/
    $(".commPage4").click(function(){
    	var name = $("input[name=name]").val();
    	var stauts = "";
    	$("div.commodityClass.orderFormOption a").each(function(index,obj){
    		if($(obj).hasClass("bgGreen")){
    			stauts = $(obj).attr("data-value");
    		}
    	});
    	var curpage = $(".pageCount").html();
    	ajaxLoadTableData(stauts,name,curpage);
        return false;
    });
	
    /**搜索商品**/
    $(document).on("click",'.searchOrder',function(){
    	var name = $("input[name=name]").val();
    	var stauts = "";
    	$("div.commodityClass.orderFormOption a").each(function(index,obj){
    		if($(obj).hasClass("bgGreen")){
    			stauts = $(obj).attr("data-value");
    		}
    	});
    	var curpage = $("input[name=curpage]").attr("curpage");
    	var lastPage = $(".pageCount").html().trim();
    	lastPage = Number(lastPage);
    	curpage = Number(curpage);
    	/*if(page == lastPage){
    		alert("当前是最后一页");
    		return false;
    	}*/
    	ajaxLoadTableData(stauts,name,1);
    	$("#outOrder").attr("myserch",name);
    });
})

    
	/**
	 * 待付款订单
	 */
	$(document).on("click","a[data-field=daifukuan]",function(){
		ajaxLoadTableData("0","",1);
		status=0;
		$("#outOrder").attr("myattr",status);
		$("#outOrder").attr("myserch","");
	});
	/**
	 * 待发货订单
	 */
	$(document).on("click","a[data-field=daifahuo]",function(){
		ajaxLoadTableData("1","",1);
		status=1;
		$("#outOrder").attr("myattr",status);
		$("#outOrder").attr("myserch","");
	});
	/**
	 * 待退款订单
	 */
	$(document).on("click","a[data-field=daituikuan]",function(){
		ajaxLoadTableData("2","",1);
		status=2;
		$("#outOrder").attr("myattr",status);
		$("#outOrder").attr("myserch","");
	});
	/**
	 * 已完成订单
	 */
	$(document).on("click","a[data-field=yifahuo]",function(){
		ajaxLoadTableData("3","",1);
		status=3;
		$("#outOrder").attr("myattr",status);
		$("#outOrder").attr("myserch","");
	});
	/**
	 * 已关闭订单
	 */
	$(document).on("click","a[data-field=yiguanbi]",function(){
		ajaxLoadTableData("4","",1);
		status=4;
		$("#outOrder").attr("myattr",status);
		$("#outOrder").attr("myserch","");
	});
	/**
	 * 已收货订单
	 */
	$(document).on("click","a[data-field=yishouhuo]",function(){
		ajaxLoadTableData("5","",1);
		status=5;
		$("#outOrder").attr("myattr",status);
		$("#outOrder").attr("myserch","");
	});
	/**
	 * 已退款订单
	 */
	$(document).on("click","a[data-field=yituikuan]",function(){
		ajaxLoadTableData("6","",1);
		status=6;
		$("#outOrder").attr("myattr",status);
		$("#outOrder").attr("myserch","");
	});
	
	/**
	 * 更新订单状态
	 * //状态 0代付款 1待发货 2待退款 3已发货 4已关闭 5已收货 6已退款 -1全部订单
	 *  关闭订单
	 */
	$(document).on("click","a[data-field=closeOrder]",function(){
		var id = $(this).attr("data-id");
		var status = "4";
		updateOrderStatus(id,status,"");
	});
	/**
	 * 查看已退款订单退款信息
	 * //状态 0代付款 1待发货 2待退款 3已发货 4已关闭 5已收货 6已退款 -1全部订单
	 *  发货
	 */
	$(document).on("click","a[data-field=checkOrder]",function(){
		var id = $(this).attr("data-id");
		$(".chooseCommWin").hide();
		$(".seckillAddBox").hide();
		$(".seckillWin").toggle();
		$(".tkxx").removeAttr("style");
		checkOrder(id);
	});
	function checkOrder(id){
		$.post("../adminorder/getid.do",{"id":id},function(res){
			res = eval("("+res+")");
			$("#tuikuanInfo").val(res.tuikuanInfo);
		});
	}
	
	/**
	 * 更新订单状态
	 * //状态 0代付款 1待发货 2待退款 3已发货 4已关闭 5已收货 6已退款 -1全部订单
	 *  退款
	 */
	var tuiid;
	$(document).on("click","a[data-field=refund]",function(){
		/*var id = $(this).attr("data-id");
		var status = "2";
		updateOrderStatus(id,status);*/
		tuiid = $(this).attr("data-id");
		$(".chooseCommWin").hide();
		$(".seckillAddBox").hide();
		$(".seckillWin").toggle();
		$(".tkxx").removeAttr("style");
		$("li.seckillUpBut").removeAttr("style");
		$(".addLogistics").addClass("updateFefund");
		$(".addLogistics").removeClass("addLogistics");
	});

	/** 提交更新 **/
	$(document).on("click",".updateFefund",function(){
		var tuikuanInfo = $("#tuikuanInfo").val();
		if(tuikuanInfo == ""){
			alert("退款消息不能为空");
			$("#tuikuanInfo").focus();
			return false;
		}
		var status = "6";//
		$(".seckillWin").hide();
		$("form#form")[0].reset();
		updateOrderStatus(tuiid,status,tuikuanInfo);
		
	});
	
	
	/**
	 * 更新订单状态
	 * //状态 0代付款 1待发货 2待退款 3已发货 4已关闭 5已收货 6已退款 -1全部订单
	 *  删除
	 */
	$(document).on("click","a[data-field=delOrder]",function(){
		var id = $(this).attr("data-id");
		deleteOrder(id)
	});
	
	
	/**
	 * 删除订单
	 */
	function deleteOrder(id){
		if(confirm("您确定删除该订单吗？")){
			$.ajax({
				url:'../adminorder/del.do',type:'post',data:{"id":id},success:function(res){
					if(res == "true"){
						alert("操作成功！");
						//window.location.reload();
						//从数据列表中移除操作的数据
						$("table.commodityTab.orderFormTab tbody tr").each(function(index,obj){
							if($(obj).attr("data-id") == id){
								/*$(obj).remove();*/
								/*if(status==3 || status==4 || status==5){
									$(".allNum").val()-1;
									$("#order"+id).remove();
								}*/
								$("#order"+id).remove();
							}
						});
						daohang();
					}else{
			               window.parent.opener = null;
			               window.parent.open("index.html", "_self");
			               window.parent.close();
			               window.parent.location.reload();
					}
				}
			});
		}else{
			alert("操作已取消");
		}
	}
	
	
	/**
	 * 更新订单状态
	 */
	function updateOrderStatus(id,status,tuikuanInfo){
		// 0代付款 1待发货 2待退款 3已发货 4已关闭 5已收货 6已退款 -1全部订单
		var tip = "";
		if(status == '6'){
			tip = "您确定退款？";
		}
		if(status == '3'){
			tip = "您确定发货？";
		}
		if(status == '4'){
			tip = "您确定关闭？";
		}
		if(confirm(tip)){
			$.ajax({
				url:'../adminorder/updatestatus.do',type:'post',data:{"id":id,"status":status,"tuikuanInfo":tuikuanInfo},success:function(res){
					if(res == "true"){
						alert("操作成功！");
						/*window.location.reload();*/
						//从数据列表中移除操作的数据
						$("table.commodityTab.orderFormTab tbody tr").each(function(index,obj){
							if($(obj).attr("data-id") == id){
								/*$(obj).remove();*/
								$("#order"+id).remove();
							}
						});
						daohang();
					}else{
			               window.parent.opener = null;
			               window.parent.open("index.html", "_self");
			               window.parent.close();
			               window.parent.location.reload();
					}
				}
			});
		}else{
			alert("操作已取消");
		}
	}
	
	/**
	 * 数据列表
	 */
	function ajaxLoadTableData(status,name,curpage){
		$("table.commodityTab.orderFormTab tbody").html("");
		$.ajax({
			type:"post",
			data:{"status":status,"name":name,'curpage':curpage},
			url:"../adminorder/listpage.do",
			success:function(res){
				res = eval("("+res+")");
				console.log(res);
				var html = "";
				var optionHtml = "";//操作按钮（根据状态添加已完成按钮）
				$(res).each(function(index,obj){
					//console.log(obj.list[index].order_num);
					
					/*判断订单数据长度是否为0，若为0 显示暂无数据*/
					if(obj.list.length != 0){
					
						/*遍历订单数据*/
						$(obj.list).each(function(i,object){

							/*第一层tr*/
							/*html += "<tr data-id='"+object.id+"'  id='order"+object.id+"'>";
							html += "<td class='orderMerge' colspan='9'>";
							html += "<span>"+object.order_num+"<span>";
							html += "<i>成交时间："+object.order_time+"<i>";
							html += "</td>";
							html += "</tr>";*/
							/*第二层tr*/
							var data = "";
							/*ajax同步获取商品信息*/
							$.ajax({
								url:'../admingoods/getid.do',
								type:'post',
								async:false,
								data:{"id":object.goods_id},
								success:function(result){
									result = eval("("+result+")");
									//console.log(result);
									data = result;//赋值出来
								},error:function(){console.log("同步获取商品信息失败！");}
							});
                            /*第一层tr*/
                            html += "<tr data-id='"+object.id+"'  id='order"+object.id+"'>";
                            html += "<td class='orderMerge' colspan='9'>";
                            html += "<span>"+object.order_num+"<span>";
                            html += "<i>成交时间："+object.order_time+"<i>";
                            if(object.remarks1!==""&&object.remarks1!==null){
                                html +="<i>"+data.remarks1+":"+object.remarks1+"</i><i>"+data.remarks2+":"+object.remarks2+"</i>"
                            }
                            html += "</td>";
                            html += "</tr>";
							
							html += "<tr data-id='"+object.id+"' id='order"+object.id+"'>";
							//if(data == true){
								html += "<td>"+(i+1)+"</td>";
								html += "<td><img src='"+data.picture_address+"' class='commImg1'/></td>";
								html +="<td><span class='fl ml10'>"+data.goods_name+"</span></td>";
								html += "<td>"+data.price+"元</td>";
							//}else{
							//	html += "<td><img src='' class='commImg1'/><span class='fl ml10'></span></td><td>元</td>";
							//}
							
							/*
							 * 暂空缺,根据订单详情的数据显示数量
							 * var order_details = "";
							$.ajax({
								url:'../',
								type:'post',
								asyuc:false,
								data:{"":},
								success:function(result){
									result = eval("("+result+")");
									order_details = result;
								}
							});*/
							
							html += "<td>"+object.amount+"</td>";//数量
							
							/*var addressObj = "";
							//获取地址
							$.ajax({
								url:'../adminaddress/getuser_id.do',
								type:'post',
								async:false,
								data:{"user_id":object.user_id},
								success:function(result){
									//console.log(result);
									result = eval("("+result+")");
									addressObj = result;
									//console.log(result);
								}
							});
		
							html += "<td><span class='costList'>"+addressObj.user_name+"</span><span class='costList'>"+addressObj.address+""+addressObj.details+"</span></td>";//收货人*/
							html += "<td><span class='costList'>"+object.user_name+"</span><span class='costList'>"+object.address+""+object.details+"</span></td>";//收货人地址及地址详情
							/*判断订单状态*/
							/*var status = "";//状态 0代付款 1待发货 2待退款 3已发货 4已关闭 5已收货 6已退款 -1全部订单*/
							if(object.status == "-1"){
								optionHtml = "";
							}
							//console.log("状态："+object.status);
							if(status == "0"){
								optionHtml = "<a href='javascript:;' data-field='closeOrder' data-id='"+object.id+"' class='butBox'>关闭</a>";
							}
							if(status == "1"){
								optionHtml = "<a href='javascript:;' data-field='sendOrder' data-id='"+object.id+"' class='butBox'>发货</a>";
							}
							if(status == "2"){
								optionHtml = "<a href='javascript:;' data-field='refund' data-id='"+object.id+"' class='butBox'>退款</a>";
							}
							if(status == "3"){
								optionHtml = "<a href='javascript:;' data-field='editOrder' data-id='"+object.id+"' class='butBox'>编辑</a>" +
										"<a href='javascript:;' data-field='delOrder' data-id='"+object.id+"' class='butBox'>删除</a>";
								/*optionHtml = "";*/
							}
							if(status == "4"){
								optionHtml = "<a href='javascript:;' data-field='delOrder' data-id='"+object.id+"' class='butBox'>删除</a>";
							}
							if(status == "5"){
								optionHtml = "<a href='javascript:;' data-field='delOrder' data-id='"+object.id+"' class='butBox'>删除</a>";
							}
							if(status == "6"){
								optionHtml = "<a href='javascript:;' data-field='checkOrder' data-id='"+object.id+"' class='butBox'>查看</a>" +
										"<a href='javascript:;' data-field='closeOrder' data-id='"+object.id+"' class='butBox'>关闭</a>";
							}
							/*html += "<td>"+addressObj.phone+"</td>";//订单状态*/
							html += "<td>"+object.phone+"</td>";//收货人手机号
							html += "<td><span class='costList'>订单总金额："+object.total+"元</span></td>";//金额标签 total
							html += "<td>"+optionHtml+"</td>";//操作
							html += "</tr>";
						})
					}
				});
				console.log(res[0]);
				$(".count").html(res[0].count);//总记录数
				$(".pageCount").html(res[0].page.pageCount);//总的页数
				$(".pageSize").html(res[0].page.pageSize);//每页大小
				$("input[name=curpage]").attr("curpage",res[0].page.currentPage);//设置当前页
				$("input[name=curpage]").val(res[0].page.currentPage);//设置当前页
				
				$("table.commodityTab.orderFormTab tbody").html(html);
				
			
				
			}
		});
	}
	/**
	 * excle数据导出
	 */
	function ajaxLoadTableDataExcle(status,name){
		$("table.commodityTab.orderFormTab.excle tbody").html("");
		$.ajax({
			type:"post",
			data:{"status":status,"name":name},
			url:"../adminorder/list.do",
			success:function(res){
				res = eval("("+res+")");
				console.log(res);
				var html = "";
				var orderStatus="";
				var optionHtml = "";//操作按钮（根据状态添加已完成按钮）
				$(res).each(function(index,obj){
					//console.log(obj.list[index].order_num);
					
					/*判断订单数据长度是否为0，若为0 显示暂无数据*/
					if(obj.list.length != 0){
					
						/*遍历订单数据*/
						$(obj.list).each(function(i,object){
							var data = "";
							/*ajax同步获取商品信息*/
							$.ajax({
								url:'../admingoods/getid.do',
								type:'post',
								async:false,
								data:{"id":object.goods_id},
								success:function(result){
									result = eval("("+result+")");
									//console.log(result);
									data = result;//赋值出来
								},error:function(){console.log("同步获取商品信息失败！");}
							});
							
							
								html += "<tr data-id='"+object.id+"'>";
								html += "<td>"+(i+1)+"</td>";
								html +="<td>"+"Num:"+object.order_num+"</td>";
								html +="<td>"+object.order_time+"</td>";
								//html += "<td><img src='"+data.picture_address+"' class='commImg1'/></td>";
								html +="<td><span class='fl ml10'>"+data.goods_name+"</span></td>";
								html += "<td>"+data.price+"元</td>";
								html += "<td>"+object.amount+"</td>";//数量
							
							/*var addressObj = "";
							//获取地址
							$.ajax({
								url:'../adminaddress/getuser_id.do',
								type:'post',
								async:false,
								data:{"user_id":object.user_id},
								success:function(result){
									//console.log(result);
									result = eval("("+result+")");
									addressObj = result;
									//console.log(result);
								}
							});*/
							var status=object.status;
							if(status==0){
								orderStatus="代付款";
							}else if(status==1){
								orderStatus="待发货";
							}else if(status==2){
								orderStatus="待退款";
							}else if(status==3){
								orderStatus="已发货";
							}else if(status==4){
								orderStatus="已关闭";
							}else if(status==5){
								orderStatus="已收货";
							}else if(status==6){
								orderStatus="已退款";
							}
							html += "<td><span class='costList'>"+object.user_name+"</span></td><td><span class='costList'>"+object.address+""+object.details+"</span></td>";//收货人地址及地址详情
							html += "<td>"+object.phone+"</td>";//订单状态
							html += "<td><span class='costList'>"+object.total+"元</span></td>";//金额标签 total
							html +="<td>"+orderStatus+"</td>";
                            if(object.remarks1!==""&&object.remarks1!==null){
                                html +="<td>"+data.remarks1+":"+object.remarks1+"</td><td>"+data.remarks2+":"+object.remarks2+"</td>";
                            }else{
                            	html +="<td></td><td></td>"
							}
							html += "</tr>";
						})
					}
				});
				$("table.commodityTab.orderFormTab.excle tbody").html(html);
				method1('winingTable2');
			}
		});
	}
	/**
	 * 发货
	 */
    var fahuoid;
	$(document).on("click","a[data-field=sendOrder]",function(){
	/*function logistics(){*/
        fahuoid = $(this).attr("data-id");
		$(".chooseCommWin").hide();
		$(".seckillAddBox").hide();
		$(".wlmc").removeAttr("style");
		$(".wlh").removeAttr("style");
		$("li.seckillUpBut").removeAttr("style");
		$(".seckillWin").toggle();
	});
    /** 提交更新 **/
    $(document).on("click",".addLogistics",function(){
    	if(confirm("确认发货？")){
			var logistics_name = $("#logistics_name").val();
			var logistics_num = $("#logistics_num").val();
			if(logistics_name == ""){
				alert("物流名称不能为空");
				$("input[name=logistics_name]").focus();
				return false;
			}
			else if(logistics_num == ""){
				alert("物流号不能为空");
				$("input[name=logistics_num]").focus();
				return false;
			}else{
				$.ajax({
					url:'../adminLogistics/add.do',
					type:'post',
					data:{"order_id":fahuoid,"logistics_name":logistics_name,"logistics_num":logistics_num},
					success:function(res){
						if(res == "true"){
							/*alert("发货成功！");*/
							/*var id = $(this).attr("data-id");*/
						   /* updateOrderStatus(fahuoid,3,"");*/
                            $("table.commodityTab.orderFormTab tbody tr").each(function(index,obj){
                                if($(obj).attr("data-id") == fahuoid){
                                    $("#order"+fahuoid).remove();
                                }
                            });
						}else{
							alert("发货失败！");
						}
                        daohang();
					},
					error:function(){alert("请检查你的网络！");}
				});
				$(".seckillWin").hide();
				$("form#form")[0].reset();
			}

        }
    });
	
	/**
	 * 编辑已发货订单的物流信息
	 */
	$(document).on("click","a[data-field=editOrder]",function(){
		var id = $(this).attr("data-id");
		$(".chooseCommWin").hide();
		$(".seckillAddBox").hide();
		$(".seckillWin").toggle();
		$(".wlmc").removeAttr("style");
		$(".wlh").removeAttr("style");
		$("li.seckillUpBut").removeAttr("style");
		$(".addLogistics").html("更新");
		$(".addLogistics").addClass("updateLogistics");
		$(".addLogistics").removeClass("addLogistics");
		editOrder(id);
	});
	
	function editOrder(id){
		$.post("../adminLogistics/getByOrderId.do",{"orderId":id},function(res){
			res = eval("("+res+")");
			console.log(res);
			$("input[name=id]").val(res.id);
			$("input[name=logistics_name]").val(res.logistics_name);
			$("input[name=logistics_num]").val(res.logistics_num);
		});
		/** 提交更新 **/
		$(".updateLogistics").click(function(){
			var id = $("input[name=id]").val();
			var logistics_name = $("input[name=logistics_name]").val();
			var logistics_num = $("input[name=logistics_num]").val();
			$.ajax({
				url:'../adminLogistics/update.do',
				type:'post',
				data:{"id":id,"logistics_name":logistics_name,"logistics_num":logistics_num},
				success:function(result){
					if(result == "true"){alert("物流更新成功！");document.location.reload();}else{alert("物流更新失败！");}
				}
			});
		});
	}
	
	$(document).on("click",'.seckillClose',function(){
 		$(".updateLogistics").html("提交");
 		$(".updateLogistics").addClass("addLogistics");
 		$(".updateLogistics").removeClass("updateLogistics");
 		$(".wlmc").css("display","none");
 		$(".wlh").css("display","none");
 		$(".tkxx").css("display","none");
 		$("li.seckillUpBut").css("display","none");
 		$("#tuikuanInfo").html("");
 		$(".updateFefund").html("提交");
 		$(".updateFefund").addClass("addLogistics");
 		$(".updateFefund").removeClass("updateFefund");
 		$("form#form")[0].reset();
	});
	$(document).on("click",'#outOrder',function(){
		var status=$("#outOrder").attr("myattr");
		var name=$("#outOrder").attr("myserch");
		ajaxLoadTableDataExcle(status,name);
	});
	
	function getKey(){
		if(event.keyCode==13){
			var name = $("input[name=name]").val();
			var curpage=$("input[name=curpage]").val();
			var stauts = "";
			$("div.commodityClass.orderFormOption a").each(function(index,obj){
	    		if($(obj).hasClass("bgGreen")){
	    			stauts = $(obj).attr("data-value");
	    		}
	    	});
			ajaxLoadTableData(status,name,curpage);
		}
	}
/*})*/
