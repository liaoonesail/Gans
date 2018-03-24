/**
 * 活动管理js
 * @author zs
 */
$(function(){
	
	/**文档加载函数**/
	$(document).ready(function(){
		ajaxLoadTabelData();
	});
	
	/**添加活动**/
	$(".submitAddActivity").click(function(){
		addActivity();
	});
	
	/**删除活动**/
	$(document).on("click","a[data-field=delete]",function(){
		var id = $(this).attr("data-id");
		ajaxDeleteActivity(id);
	});
	
	/**
	 * 保存添加活动
	 */
	function addActivity(){
		var name = $("input[name=name]").val();
		if(name==""){
			alert("活动名称不能为空");
			return false;
		}
		$.ajax({
			url:'../adminactivity/add.do',
			type:'post',
			data:{"activity_name":name},
			success:function(res){
				if(res == "true"){alert("添加成功！");window.location.reload();}else{alert("添加失败");}
			},error:function(){alert("网络连接错误，添加失败！");}
		});
	}
	
	/**
	 * 异步加载table表数据
	 */
	function ajaxLoadTabelData(){$.post("../adminactivity/list.do",{},function(res){res = eval("("+res+")");var html = "";$(res).each(function(index,obj){html += "<tr>";html += "<td>"+(index+1)+"</td>";html += "<td>"+obj.activity_name+"</td>";html += "<td><a href='javascript:;' data-field='delete' data-id='"+obj.id+"' class='butBox'>删除</a></td>";html += "</tr>";});$("table.infoTabShow.przeInKind tbody").html(html);});}

	/**
	 * 地区的删除
	 */
	function ajaxDeleteActivity(id){
		if(confirm("确认删除该地区码？")){
			$.ajax({
				url:'../adminactivity/del.do',type:'post',data:{"id":id},success:function(res){
					if(res == "true"){
						alert("地区删除成功！");
						window.location.reload();
					}
				},error:function(){alert("网络连接错误,删除失败!");}
			});
		}else{
			alert("删除已取消");
		}
	}
	
   
	
});