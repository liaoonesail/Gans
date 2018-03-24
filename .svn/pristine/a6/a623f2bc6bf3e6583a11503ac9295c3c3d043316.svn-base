document.write(" <script type='text/javascript' src='js/deriveExcl.js'></script>");
/**
 * 中奖相关js
 */
var status=1;
$(function(){
	$(document).ready(function(){
		page(1,status);
		$("#outPrize").attr("myattr",status);
	});
	
	
	$(document).on("click","a[data-field=zhongjiang]",function(){
		status=1;
		page(1,status);
		$("#outPrize").attr("myattr",status);
	});
	
	$(document).on("click","a[data-field=weizhongjiang]",function(){
		status=0;
		page(1,status);
		$("#outPrize").attr("myattr",status);
	});
	
	$(document).on("click","a[data-field='fafang']",function(){
		var isTicket=0;
		var name=$(this).attr("data-name");
		var id = $(this).attr("data-id");
		var prize_id = $(this).attr("data-value");
		if(name.indexOf("善融") >= 0){
			isTicket=1;
		}
		/**同步获取奖品名称**/
		$.ajax({
			url:"../adminprize/getid.do",
			async:false,
			type:'post',
			data:{"id":prize_id},
			success:function(res){
				res = JSON.parse(res);
				console.log(res.name);
				if(res.name !="谢谢参与"){
					$.ajax({
						url:'../adminUserPrize/updateStatus.do',
						type:'post',
						data:{"id":id,"isTicket":isTicket},
						success:function(result){
							$("#function"+id).html("已发放");
						}
					});
				}
				/*if(res.name=="")*/
				/*$.ajax({
					url:'../adminUserPrize/updateStatus.do',
					type:'post',
					data:{"id":id},
					success:function(result){
						console.log(result);
						document.location.reload();
					}
				});*/
			}
		})
		
	});
	
});

function firstpage(){
	var curpage = 1;
	page(curpage,status);
}

function prevpage(){
	var curpage=parseInt($("#curpage").val())-1;
	var pageCount=parseInt($("#pageCount").html().trim());
	if(curpage<1){
		return false;
	}if(curpage>pageCount){
		return false;
	}
	page(curpage,status);
}


function lastpage(){
	var curpage = parseInt($("#pageCount").html().trim());
	page(curpage,status);
}
/**
 * 显示弹窗
 */
function showFormBox(){
	if(confirm("本次导入会覆盖之前的数据")){
		$(".chooseCommWin").hide();
		$(".seckillAddBox").hide();
		$(".seckillWin").toggle();
	}
}
function nextpage(){
	console.log("这是打印内容");
	var curpage=parseInt($("#curpage").val())+1;
	var pageCount=parseInt($("#pageCount").html().trim());
	if(curpage<1){
		return false;
	}if(curpage>pageCount){
		return false;
	}
	page(curpage,status);
	console.log("打印结束");
}

function page(curpage,status){
	$("table.infoTabShow.userInformation tbody").html("");
	var name = "";
	var html = "";
	var jiangpinName="";
	$.ajax({
		url:'../adminUserPrize/listpage.do',
		type:'post',
		data:{"name":name ,"curpage":curpage,"status":status},
		success:function(result){
			result = eval("(" + result + ")");
			console.log(result);
			$(result).each(function(i,object){
				$(object.list).each(function(index,obj){
					html += "<tr>";
					html += "<td>" + (index+1) + "</td>";
					/**同步获取奖品名称**/
					$.ajax({
						url:"../adminprize/getid.do",
						async:false,
						type:'post',
						data:{"id":obj.prize_id},
						success:function(res){
							if(res == "null"){
		                          html += "<td></td>";
		                      }else{
		                          res = eval("("+res+")");
		                          html += "<td>"+res.name+"</td>";
		                          jiangpinName =res.name;
		                      }
						}
					})
					
					html += "<td>"+obj.phone+"</td>";
					html += "<td>"+obj.area+"</td>";
					/*html += "<td>" + obj.user_id + "</td>";*/
					html += "<td>" + obj.time + "</td>";
					if(obj.status == "0"){
						if(jiangpinName =="谢谢参与"){
							html += "<td>未中奖</td>";
						}else{
							html += "<td id='function"+obj.id+"'><a style='cursor: pointer;' data-field='fafang' data-id='"+obj.id+"' data-value='"+obj.prize_id+"' data-name='"+jiangpinName+"' class='butBox'>未发放</a></td>";
						}
						
					}
					if(obj.status == "1"){
						html += "<td id='function"+obj.id+"'>已发放</td>";
					}
				});
				$("#wining_num").html(object.count);
				$("#pageCount").html(object.page.pageCount);
				$("#curpage").html("<option value='"+object.page.currentPage+"'>"+object.page.currentPage+"</option>");
				$("#pageSize").html(object.page.pageSize);
				$("table.infoTabShow.userInformation tbody").html(html);
				//$($("table.infoTabShow.userInformation tbody").find("tr"));
			});
		}
	})
}
function ajaxLoadTableDataExcle(status){
	$("table.infoTabShow.userInformation1 tbody").html("");
	var name = "";
	var html = "";
	var jiangpinName="";
	$.ajax({
		url:'../adminUserPrize/list.do',
		type:'post',
		data:{"status":status},
		success:function(result){
			result = eval("(" + result + ")");
			console.log(result);
			$(result).each(function(i,object){
				$(object.list).each(function(index,obj){
					html += "<tr>";
					html += "<td>" + (index+1) + "</td>";
					/**同步获取奖品名称**/
					$.ajax({
						url:"../adminprize/getid.do",
						async:false,
						type:'post',
						data:{"id":obj.prize_id},
						success:function(res){
							if(res == "null"){
		                          html += "<td></td>";
		                      }else{
		                          res = eval("("+res+")");
		                          html += "<td>"+res.name+"</td>";
		                          jiangpinName =res.name;
		                      }
						}
					})
					
					html += "<td>"+obj.phone+"</td>";
					html += "<td>"+obj.area+"</td>";
					/*html += "<td>" + obj.user_id + "</td>";*/
					html += "<td>" + obj.time + "</td>";
					if(obj.status == "0"){
						if(jiangpinName =="谢谢参与"){
							html += "<td>未中奖</td>";
						}else{
							html += "<td id='function"+obj.id+"'><a style='cursor: pointer;' data-field='fafang' data-id='"+obj.id+"' data-value='"+obj.prize_id+"' data-name='"+jiangpinName+"' class='butBox'>未发放</a></td>";
						}
						
					}
					if(obj.status == "1"){
						html += "<td id='function"+obj.id+"'>已发放</td>";
					}
				});
				$("table.infoTabShow.userInformation1 tbody").html(html);
				method1('winingTable2');
			});
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
 * 导出excel文件
 */
$(document).on("click",'#outPrize',function(){
	var status=$("#outPrize").attr("myattr");
	ajaxLoadTableDataExcle(status);
});

