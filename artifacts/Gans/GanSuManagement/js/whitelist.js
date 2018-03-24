/**
 * 白名单相关js
 */
var nameId=0;
$(function(){
	$(document).ready(function(){
        getwihteNameList();

	});
	
	$(".seckillAdd").click(function(){
		initForm();//初始化表单
		return false;
	});
	
	/** 添加白名单商品 **/
	$(document).on("click",'.addWhitelistshop',function(){
        $("div.commodityClass.whiteNameList a").each(function(index,obj){
            if($(obj).hasClass("bgGreen")){
                 nameId = $(obj).attr("data-value");
                $("input[name=nameId]").val(nameId);
            }});
		//显示弹窗
		$("#bai div.chooseCommWin").hide();
		$("#bai div.seckillAddBox").hide();
		$("#bai div.seckillWin").toggle();
		initForm();
		return false;
	});
	
	$(".addMiaoshaGoods").click(function(){
		var goods_id = $("select[name=goods_id]").find("option:selected").val();
		 nameId = $("input[name=nameId]").val();
		if(goods_id == "0"){
			alert("请选择白名单商品！");
			return false;
		}
		$.ajax({
			url:'../adminWhitegoods/add.do',
			type:'post',
			data:{"goodsId":goods_id,"nameId":nameId},
			success:function(res){
				if(res == "true"){
					alert("添加白名单商品成功！");
					page(1,nameId);
                    clearForm();//清理表单
                    $(".seckillWin").css("display","none");
				}else{
					alert("您操作的数据有误或已存在该商品,请检查后再提交！");
				}
			},
			error:function(){alert("操作失败！");}
		});
	});

    /**
	 * 添加白名單名稱
     */
    $(".addWhiteName").click(function(){
    	var whiteName=$("input[name=whiteName]").val();
        if(whiteName == ""){
            alert("请輸入白名單名稱！");
            return false;
        }
        $.ajax({
            url:'../adminWhiteName/add.do',
            type:'post',
            data:{"whiteName":whiteName},
            success:function(res){
                if(res == true){
                    alert("添加白名单名稱成功！");
                    window.location.reload();
                    clearForm();//清理表单
                    $(".seckillWin").css("display","none");
                }else{
                    alert("您操作的数据有误或已存在该商品,请检查后再提交！");
                }
            },
            error:function(){alert("操作失败！");}
        });
	});




	$(document).on("click","a[data-field=delete]",function(){
		var id = $(this).attr("data-value");
		if(id !=""){
			if(confirm("确定删除该白名单商品？")){
				$.ajax({
					url:'../adminWhitegoods/del.do',
					type:'post',
					data:{"id":id},
					success:function(res){
						if(res == "true"){
							alert("删除白名单商品成功！");
							$("#whitelist"+id).remove();
							/*window.location.reload();*/
						}
					},error:function(){alert("删除白名单商品失败");}
					
				});
			}else{
				alert("删除已取消");
			}
		}
	});
	
	/*二级分类选择的监听*/
	$(document).on("change","select[name=type2]",function(){
		$("select[name=goods_id]").html("<option value='0'>请选择</option>");//重置商品
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
 * 清理表单数据
 */
function clearForm(){
	$("form#fromAddWhitelistshop")[0].reset();//重置input等表单数据
	$("select[name=type2]").html("<option>请选择</option>");//重置select下拉框数据
	$("select[name=type3]").html("");//重置select下拉框数据
	$("select[name=goods_id]").html("");//重置select下拉框数据
	$("select[name=type2]").removeAttr("disabled");//移除禁用
	$("select[name=type3]").removeAttr("disabled");//移除禁用
	$("select[name=goods_id]").removeAttr("disabled");//移除禁用
}

/**
 * 初始化表单(包含分类的选择,商品的选择)
 */
function initForm(){
	console.log("初始化。。。");
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


function firstpage(){
	var curpage = 1;
	page(curpage,nameId);
}

function prevpage(){
	var curpage=parseInt($("#curpage").val())-1;
	var pageCount=parseInt($("#pageCount").html().trim());
	if(curpage<1){
		return false;
	}if(curpage>pageCount){
		return false;
	}
	page(curpage,nameId);
}


function lastpage(){
	var curpage = parseInt($("#pageCount").html().trim());
	page(curpage,nameId);
}
/**
 * 显示弹窗
 */
function showFormBox(){
	if(confirm("本次导入会覆盖之前的数据")){
		$("#excel div.chooseCommWin").hide();
		$("#excel div.seckillAddBox").hide();
		$("#excel div.seckillWin").toggle();
        $("div.commodityClass.whiteNameList a").each(function(index,obj){
            if($(obj).hasClass("bgGreen")){
                 nameId = $(obj).attr("data-value");
                $("input[name=nameId]").val(nameId);
            }});
	}
}

/**
 * 刪除白名單
 */
function delFormBox(){
    if(confirm("你確定要刪除此白名單和對應的商品？")){
        $("div.commodityClass.whiteNameList a").each(function(index,obj){
            if($(obj).hasClass("bgGreen")){
                nameId = $(obj).attr("data-value");
                $("input[name=nameId]").val(nameId);
            }});
        $.ajax({
            type : "POST",
            url:'../adminWhiteName/del.do',
            data:{"id":nameId},
            dataType:'json',
            success : function(data) {
              if(date=true){
              	alert("刪除成功");
                  window.location.reload();
			  }
            }
        });
    }
}

function nextpage(){
	var curpage=parseInt($("#curpage").val())+1;
	var pageCount=parseInt($("#pageCount").html().trim());
	if(curpage<1){
		return false;
	}if(curpage>pageCount){
		return false;
	}
	page(curpage,nameId);
}

function page(curpage,nameId){
    $("table.infoTabShow.userInformation tbody").html("");
	var name = "";
	var html = "";
	$.ajax({
		url:'../adminWhitegoods/listpage.do',
		type:'post',
		data:{"name":name,"curpage":curpage,"nameId":nameId},
		success:function(result){
			result = eval("(" + result + ")");
			console.log(result);
			$(result).each(function(i,object){
				$(object.list).each(function(index,obj){
					//alert(obj.goodsId);
					html += "<tr id='whitelist"+obj.id+"'>";
					html += "<td>" + (index+1) + "</td>";
					var goods = ajaxSubmit("../admingoods/getid.do",{id:obj.goodsId},false);
					console.log(goods);
					if(goods != null){
						html += "<td>"+goods.goods_name+"</td>";
						html += "<td><a style='cursor: pointer;' data-field='delete' data-value='"+obj.id+"' class='butBox'>删除</a></td>";
						html += "</tr>";
					}else{
						
					}
					
				});
			});
			$("#wining_num").html(result[0].count);
			$("#pageCount").html(result[0].page.pageCount);
			$("#curpage").val(result[0].page.currentPage);
			$("#pageSize").html(result[0].page.pageSize);
			$("table.infoTabShow.userInformation tbody").html(html);
			$($("table.infoTabShow.userInformation tbody").find("tr"));
		}
	})
}

/**
 * 上传excel文件 
 */
function uploadExcelFile(){
	var filePath = $("input[name=filePath]").val();
	if(filePath == ""){
		alert("请上传您的数据！");
		return false;
	}
	$("form#uploadExcel").submit();
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

function getEnterKey(){
	if(event.keyCode==13){
		var curpage=$("input[name=curpage]").val();
		page(curpage,nameId);
	}
}
