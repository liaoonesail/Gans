/**
 * 用户相关js
 */
$(function(){
	$(document).ready(function(){
		page(1);
	});
});

function page(curpage){
	var name=$("#username").val();
    var html="";
    var option="";
       /**异步获取所有的用户信息**/
       $.ajax({
           url:'../adminuser/listpage.do',
           type:'post',
           data:{"name":name,"curpage":curpage},
           success:function(result){
        	   result = eval("(" + result + ")");
        	   $(result).each(function(i,object){
	        	   $("#user_num").html(object.count);
	               $("#pageCount").html(object.page.pageCount);
       
	               $("#curpage").html(curpage);
	               $("#curpage").val(curpage);
	               $("#pageSize").html(object.page.pageSize);
	               $(object.list).each(function(index,obj){
	                   html += "<tr>";
                    html += "<td>"+(index+1)+"</td>";
                    html += "<td>"+obj.name+"</td>";
                    html += "<td>"+obj.phone+"</td>";
                    html += "<td>"+obj.card+"</td>";
                    
	                    /**同步获取收货地址**/
	                    $.ajax({
			                  url:"../adminaddress/getuser_id.do",
			                  async:false,
			                  type:'post',
			                  data:{"user_id":obj.id},
			                  success:function(result){
			                      if(result == "null"){
			                          html += "<td></td>";
			                      }else{
			                          result = eval("("+result+")");
			                          html += "<td>"+result.address+"</td>";
			                      }
			                  }
			              })
	                    
	                 html += "<td><a href='javascript:;' data-field='delete' data-value="+obj.id+" class='butBox ml10'>删除</a></td>";
	                 html += "</tr>";
		                   
		           })
	               /**写入页面**/
	           $("table.commodityTab.orderFormTab tbody").html(html);
        	 });
           }
       });
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
function firstpage(){
	var curpage=1;
	page(curpage);
}
function lastpage(){
	var curpage=parseInt($("#pageCount").html().trim());
	page(curpage);
}

$(function($) {
	/** 删除会员 **/
	$(document).on("click","a[data-field=delete]",function(){
		var id = $(this).attr("data-value");
		if(id !=""){
			if(confirm("确定删除该会员吗？")){
				$.ajax({
					url:'../adminuser/del.do',
					type:'post',
					data:{"id":id},
					success:function(res){
						if(res == "true"){
							alert("删除会员成功！");
							window.location.reload();
						}
					},error:function(){alert("删除会员失败");}
					
				});
			}else{
				alert("删除已取消");
			}
		}
	});
});
