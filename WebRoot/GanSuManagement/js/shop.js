/**
 * 供应商管理相关js
 */
$(function() {



	/** 文档加载函数 ** */
	$(document).ready(function(){
		
		$.post("../adminshop/list.do",{},function(res){
			//console.log(res);
			res = eval("("+res+")");
			var html = "";
			$(res).each(function(index,obj){
				html += "<tr>";
				html += "<td>"+(index+1)+"</td>";
				html += "<td>"+obj.shop_name+"</td>";
				html += "<td>"+obj.province+obj.city+obj.county+"</td>";
				html += "<td>"+obj.address+"</td>";
				html += "<td>"+obj.phone+"</td>";
				html += "<td><a href='javascript:;' data-field='edit' data-value='"+obj.id+"' class='butBox ml10'>修改</a><a href='javascript:;' data-field='delete' data-value='"+obj.id+"' class='butBox mt10'>删除</a></td>";
				html += "</tr>";
			});
			$("table.commodityTab.orderFormTab tbody").html(html);
		});
	});
	
	/**供应商的更新**/
	$(document).on('click','a[data-field=edit]',function(){
		var id = $(this).attr('data-value');
		window.location.href = "addSupplier.html?id="+id;
		return false;
	});
	
	/**供应商的删除* */
	$(document).on("click","a[data-field=delete]",function(){
		var id = $(this).attr("data-value");
		if(id !=""){
			if(confirm("确定删除该供应商吗？")){
				$.ajax({
					url:'../adminshop/del.do',
					type:'post',
					data:{"id":id},
					success:function(res){
						if(res == "true"){
							alert("删除供应商成功！");
							window.location.reload();
						}
					},error:function(){alert("删除失败");}
					
				});
			}else{
				alert("删除已取消");
			}
		}
	});
	/** * */
	/** * */
	/** * */

});