/**
 * 添加秒杀时间js
 * @author lkl
 */
$(function(){
	init();
	/**
	 * 初始化方法
	 */
	function init(){
		/**获取秒杀时间列表**/
		getTimelist();
	}
	/**移除**/
	$(document).on("click","a[data-field=delete]",function(){
		var id = $(this).attr("data-value");
		if(confirm("确认删除该数据？")){
			deletetime(id);//删除
		}else{
			alert("删除已取消");
		}
	});
	/**
	 * 根据id删除秒杀时间
	 */
	function deletetime(id){
		$.ajax({
			url:"../adminMiaoshaDay/del.do",
			type:"post",
			data:{id:id},
			dataType:"json",
			success:function(data){
				if(data == true){
					getTimelist();
				}else{
					alert("删除失败");
				}
			}
		})
	}
	/**
	 * 获取秒杀时间列表
	 */
	function getTimelist(){
		$.ajax({
			url:"../adminMiaoshaDay/list.do",
			type:"get",
			dataType:"json",
			success:function(data){
				console.log(data);
				if(data!=null&&data!=""){
					var str;
					for(var i=0;i<data.length;i++){
						str +="<tr><td>"+(i+1)+"</td><td>"+data[i].startTime+"</td><td>"+data[i].endTime+"</td><td><a style='cursor: pointer;' data-field='delete' data-value='"+data[i].id+"' class='butBox'>删除</a></td></tr>"
					}
					$("#content").html(str);
				}else{
					$("#content").html("");
				}
			}
		});
	}
	/**
	 * 添加秒杀时间
	 */
	$("#submit").click(function(){
		var startTime = $("#startDate").val();//$("#startDate-h option:selected").val()+$("#startDate-m option:selected").val();
		//console.log(startTime);
		var endTime = $("#endDate").val();//$("#endDate-h option:selected").val()+$("#endDate-m option:selected").val();
		$.ajax({
			url:"../adminMiaoshaDay/add.do",
			type:"post",
			data:{
				startTime:startTime,
				endTime:endTime
			},
			success:function(data){
				if(data == "true"){
					$("#startDate").val("");
					$("#endDate").val("");
					alert("添加成功");
					window.location.reload();
				}else{
					alert("添加失败");
				}
			}
		});
	});
});