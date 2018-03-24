/**
 * 管理员相关js
 */

$(function(){
	
	$(document).ready(function(){
		var name = "";
		var curpage = "1";
		ajaxLoadTable(name,curpage);
	});
	
	/**第一页**/
	$('.commPage1').click(function(){
		ajaxLoadTable("",1);
	});
	/**上一页**/
	$('.commPage2').click(function(){
		var curpage = $('select[name=curpage]').attr("curpage");
		if(curpage == 1){
			alert("当前是已是第一页");
			return false;
		}
		ajaxLoadTable("",Number(curpage)-1);
	});
	/**下一页**/
	$('.commPage3').click(function(){
		var pageCount = $('.pageCount').html().trim();
		var curpage = $("select[name=curpage]").attr('curpage');
		if(pageCount == curpage){
			alert('当前是最后一页');
			return false;
		}
		ajaxLoadTable("",Number(curpage)+1);
	});
	/**最后一页**/
	$('.commPage4').click(function(){
		var pageCount = $('.pageCount').html().trim();
		ajaxLoadTable("",Number(pageCount));
	});
	
	/**添加超级管理员**/
	//$(".submitAddAdminUser").click(function(){
	$(document).on('click',".submitAddAdminUser",function(){
		addAdminUser();
	});
	
	/**编辑超级管理员**/
	$(document).on('click','a[data-field=edit]',function(){
		var id = $(this).parent().attr("data-id");
		editAdminUser(id);
		return false;
	});
	
	/**保存编辑后的超级管理员**/
	$(document).on("click",".updateAdminUser",function(){
		updateAdminUser();
		return false;
	});
	
	/**移除管理员**/
	$(document).on('click','a[data-field=remove]',function(){
		var id = $(this).parent().attr("data-id");
		delAdminUser(id);
		return false;
	});
	
	/**重置表单数据**/
	$(document).on('click','.seckillClose',function(){
		$('form#adminUser')[0].reset();
		$("form#adminUser").find('input[name=id]').remove();
		$('.updateAdminUser').html("提交");
		$('.updateAdminUser').addClass("submitAddAdminUser");
		$('.updateAdminUser').removeClass('updateAdminUser');
		return false;
	});
	
	/**
	 * 更新管理员
	 */
	function updateAdminUser(){
		var data = $('form#adminUser').serialize();
		var username = $('input[name=username]').val();
		var password = $('input[name=password]').val();
		var real_name = $('input[name=real_name]').val();
		var phone = $('input[name=phone]').val();
		var email = $('input[name=email]').val();
		if(username == ""){
			alert("用户名不能为空！");
			return false;
		}
		if(password == ""){
			alert("密码不能为空！");
			return false;
		}
		if(real_name == ""){
			alert("真实姓名不能为空！");
			return false;
		}
		if(phone == ""){
			alert("手机号不能为空！");
			return false;
		}
		if(email == ""){
			alert("邮箱不能为空！");
			return false;
		}
		//alert("1");
		$.ajax({
			url:'../adminadminuser/update.do',type:'post',data:data,success:function(res){
				if(res == "true"){
					alert("管理员信息更新成功！");
					window.location.reload();
				}
			}
		});
	}
	
	/**
	 * 编辑管理员获取数据并显示到弹窗上
	 */
	function editAdminUser(id){
		//显示弹窗
		$(".seckillAddBox").hide();
		$(".seckillWin").toggle();
		$("form#adminUser")[0].reset();
		$.post("../adminadminuser/getid.do",{"id":id},function(res){
			res = eval("("+res+")");
			$('input[name=username]').val(res.username);
			$('input[name=real_name]').val(res.real_name);
			$('input[name=phone]').val(res.phone);
			$('input[name=email]').val(res.email);
			$("form#adminUser ul li").eq(5).find("input").each(function(index,obj){
				if($(obj).val() == res.superadmin){
					$(obj).attr("checked",true);
				}else{
					$(obj).removeAttr("checked");
				}
			});
			$('form#adminUser ul').after("<input name='id' type='hidden' value='"+res.id+"'/>");
			$('.submitAddAdminUser').html("更新");
			$('.submitAddAdminUser').addClass("updateAdminUser");
			$('.submitAddAdminUser').removeClass('submitAddAdminUser');
		});
		
	}
	
	/**
	 * 移除管理员
	 */
	function delAdminUser(id){
		if(confirm("您确定移除该管理员吗?")){
			$.post('../adminadminuser/del.do',{"id":id},function(res){
				if(res == "true"){
					alert("操作成功！");
					window.location.reload();
				}
			});
		}else{
			alert('已取消操作');
		}
	}
	
	/**
	 * ajax加载数据列表
	 */
	function ajaxLoadTable(name,curpage){
		
		$.ajax({
			url:'../adminadminuser/listpage.do',
			type:'post',
			data:{"name":name,"curpage":curpage},
			success:function(res){
				res = eval("("+res+")");
				var html = "";
				$('table.commodityTab.orderFormTab tbody').html("");
				$(res).each(function(index,object){
					$(object.list).each(function(i,obj){
						html += "<tr><td>"+obj.username+"</td>" +
								"<td>"+obj.real_name+"</td>" +
								"<td>"+obj.phone+"</td>" +
								"<td>"+obj.email+"</td>" +
								"<td>"+obj.reg_time+"</td>" +
								"<td>"+obj.login_time+"</td>" +
								"<td><span class='operationButBox' data-id='"+obj.id+"'>" +
								/*"<a href='javascript:;' data-field='seeLog' class='butBox'>查看日志</a>" +*/
								"<a href='javascript:;' data-field='edit' class='butBox ml10'>编辑</a>" +
								"<a href='javascript:;' data-field='remove' class='butBox ml10'>移除</a></span></td></tr>";
					});
				});
				$('table.commodityTab.orderFormTab tbody').html(html);
				
				//分页数据显示
				//console.log(res[0])
				$('.countNum').html(res[0].count);
				$('.pageCount').html(res[0].page.pageCount);
				$('.pageSize').html(res[0].pageSize);
				$('select[name=curpage]').attr("curpage",res[0].page.currentPage);
				$('select[name=curpage]').html("<option>"+res[0].page.currentPage+"</option>");
			}
		});
	}
	
	/**
	 * 添加管理员
	 */
	function addAdminUser(){
		var data = $('form#adminUser').serialize();
		var username = $('input[name=username]').val();
		var password = $('input[name=password]').val();
		var real_name = $('input[name=real_name]').val();
		var phone = $('input[name=phone]').val();
		var email = $('input[name=email]').val();
		if(username == ""){
			alert("用户名不能为空！");
			return false;
		}
		if(password == ""){
			alert("密码不能为空！");
			return false;
		}
		if(real_name == ""){
			alert("真实姓名不能为空！");
			return false;
		}
		if(phone == ""){
			alert("手机号不能为空！");
			return false;
		}
		if(email == ""){
			alert("邮箱不能为空！");
			return false;
		}
		$.ajax({
			url:'../adminadminuser/add.do',
			type:'post',
			data:data,
			success:function(res){
				if(res == "true"){
					alert("管理员添加成功！");
					window.location.reload();
				}else{
					alert("用户名已存在,添加失败！");
				}
			}
		});
		return false;
	}
	
});