/**
 * 物流模板js
 * @author zs
 */
$(function(){
	
	/**文档加载**/
	$(document).ready(function(){
		
		/*异步获取物流模板数据*/
		$.ajax({
			url:'../adminmould/list.do',
			type:'post',
			success:function(res){
				/*渲染物流模板数据列表*/
				renderWLMBTabelList(res);
			}
		});
		
	});
	
	/**添加物流模板**/
	$(".submitAddMould").click(function(){
		addWLMB();
	});
	
	/**
	 * 删除物流模板
	 */
	$(document).on("click","a[data-field=del]",function(){
		var id = $(this).attr("data-value");
		deleteWLMBById(id);
	});
	
	/**
	 * 修改物流模板信息
	 */
	$(document).on("click",'a[data-field=modify]',function(){
		var id = $(this).attr("data-value");
		modifyWLMBById(id);
	});
	
	
	/**
	 * 渲染数据table表
	 */
	function renderWLMBTabelList(res){
		res = eval("("+res+")");
		var html = "";
		$(res).each(function(index,obj){
			html +=　"<tr>";
			html +=　"<td class='tc'>"+obj.mould_name+"</td>";
			if(obj.count_way == "1"){
				html +=　"<td class='tc'>始发地 "+obj.repertory_address+" 首重1KG以内费用 "+obj.one_kg+"元 续重1KG或其零数的费用 "+obj.over_kg+"元 </td>";
			}else{
				html +=　"<td class='tc'>单件价格 "+obj.one_piece+" 元</td>";
			}
			html +=　"<td class='tc'><span class='operationButBox'><a href='javascript:;' data-field='modify' data-value='"+obj.id+"' class='butBox'>修改</a><a href='javascript:;' data-field='del' data-value='"+obj.id+"' class='butBox ml10'>删除</a></span></td>";
			html +=　"</tr>";
		});
		$("table.commodityTab tbody").html(html);
	}
	
	/**
	 * 添加物流模板信息
	 */
	function addWLMB(){
		var mould_name = $("input[name=mould_name]").val();
		var repertory_address = $(".wladdress label").find("input:checked").val();//始发地
		var logistics = $("select[name=logistics]").find("option:selected").val();//物流公司
		var count_way = $("li.jsfs label").find("input:checked").val();//计算方式
		var data = '';
		if(count_way == "1"){
			//*首重1KG以内费用：
			var one_kg = $("input[name=one_kg]").val();
			//*续重1KG或其零数的费用
			var over_kg = $("input[name=over_kg]").val();
			var data = 'mould_name='+mould_name+"&repertory_address="+repertory_address+"&logistics="+logistics+"&count_way="+count_way+"&one_kg="+one_kg+"&over_kg="+over_kg;
		}else if(count_way == "2"){
			//*单件价格
			var one_piece = $("input[name=one_piece]").val();
			var data = 'mould_name='+mould_name+"&repertory_address="+repertory_address+"&logistics="+logistics+"&count_way="+count_way+"&one_piece="+one_piece;
		}
	
		if(mould_name == ""){
			alert("物流模板不能为空");
			return false;
		}
		if(one_kg == ""){
			alert("首重1KG以内费用不能为空");
			return false;
		}
		if(over_kg == ""){
			alert("续重1KG或其零数的费用不能为空");
			return false;
		}
		if(one_piece == ""){
			alert("单件价格不能为空");
			return false;
		}
		//console.log(data);
		$.ajax({
			url:"../adminmould/add.do",
			type:'post',
			data:data,
			success:function(res){
				alert("添加物流模板成功!");
				window.location.reload();
			},error:function(){console.log("添加物流模板失败,请检查您的网络连接");}
		});
		
		return false;
	}
	
	/**
	 * 修改物流模板信息
	 * @param {Object} id
	 */
	function modifyWLMBById(id){
		/**
		 * 1.显示弹窗
		 * 2.重置弹窗中的表单数据
		 * 3.发送ajax请求
		 * 4.处理返回的数据
		 * 5.显示到页面
		 * 6.提交修改后的数据
		 * 7.完成修改
		 */
		/*1*/
  		$(".seckillWin").toggle();
  		/*2*/
  		$("form#wlmb")[0].reset();
  		
  		/*3*/
  		$.ajax({
  			url:'../adminmould/getid.do',
  			type:'post',
  			data:{"id":id},success:function(res){
  				/*4*/
  				res = eval("("+res+")");
  				/*5*/
  				$("input[name=mould_name]").val(res.mould_name);
  				$($('li.wladdress label').find("input")).each(function(index,obj){
  					if($(obj).val() == res.repertory_address){
  						$(obj).attr("checked",true);
  					}
  				})
  				$($("select[name=logistics]").find("option")).each(function(index,obj){
  					console.log(obj);
  					if($(obj).val() == res.logistics){
  						$(obj).attr("selected",true);
  						$(obj).siblings().removeAttr("selected");
  					}
  				})
  				
  				if(res.count_way == "1"){
  					$(".amount").show();
  					$(".piece").hide();
  					
  				}else{
  					$(".amount").hide();
  					$(".piece").show();
  					
  				}
  				
  				/*6*/
  				
  			},error:function(){
  				console.log("网络连接错误,修改失败!");
  			}
  		})
	}
	
	/**
	 * 根据id删除物流模板信息
	 */
	function deleteWLMBById(id){
		if(confirm("删除后不可恢复,是否继续？")){
			$.ajax({
				url:'../adminmould/del.do',
				type:'post',
				data:{"id":id},
				success:function(res){
					if(res=="true"){
						alert('删除成功');
						window.location.reload();
					}else{
						alert('删除失败');
					}
				},error:function(){
					console.log("删除失败,请检查您的网络");
				}
			})
		}else{
			alert("删除已取消");
		}
	}
	
	
});