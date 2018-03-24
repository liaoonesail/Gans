/**
 * 通用js
 * @author zs
 */
$(function(){
	
	
	/**
	 * @param id 需要删除的id
	 * @param url 删除的地址
	 * @param msg 删除后的提示信息(选填)
	 */
	function del(id,url,msg){
		msg = msg == ""?"成功删除该数据！":msg;
		if(confirm("确认删除该数据吗?")){$.ajax({url:url,data:{"id":id},type:'post',success:function(res){
			if(res == "true"){alert(msg);window.location.reload();}else{alert("");}
		}});}else{alert("删除已取消！");}
	}
	
	
})