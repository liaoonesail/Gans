/*
 * 广告相关js
 **/

/*
 * 编辑器
 */
$(function($){
	$(document).ready(function(){
		page(1);
	});
	
	var editor;
	KindEditor.ready(function(K) {
    	 editor  = K.create('textarea[name="ad_path"]', {
    		 resizeType : 1,
    		 allowPreviewEmoticons : false,
             items : [
            'source','image','preview'],
    	 });
	});
                    
	/**添加图片**/
	$(document).on("click",".addAdvertisement",function(){
	/*$(".addAdvertisement").click(function(){*/
    	 var id = $("#id").val();
    	 var ad_name = $("#ad_name").val();
    	 var ad_address = $("select[name=three]").find("option:selected").val();
    	 var ad_url = $("#ad_url").val();
    	 var ad_path = editor.html();
    	 if(ad_name == ""){
 			alert("广告名称不能为空");
 			$("input[name=ad_name]").focus();
     			return false;
    	 }
    	 if(ad_path == ""){
    		 alert("请上传图片!");
    		 return false;
    	 }
    	 if(ad_url == ""){
    		 alert("广告链接不能为空!");
    		 return false;
    	 }
    	 $.ajax({
    		 url:'../advertisement/add.do',
    		 type:'post',
    		 data:{"ad_name":ad_name,"ad_address":ad_address,"ad_url":ad_url,"ad_path":ad_path},
    		 success:function(res){
    			 if(res == "true"){
    				 alert("添加广告成功！");
    				 window.location.reload();
    			}else{
    				alert("添加广告失败！");
    			}
    		 },error:function(){alert("添加广告失败！");}
    	 });
	});
     
	$(document).on("click",'.seckillClose',function(){
 		$(".updateAdvertisement").html("添加");
 		$(".selectList").css("display","block");
 		$(".updateAdvertisement").addClass("addAdvertisement");
 		$(".updateAdvertisement").removeClass("updateAdvertisement");
 		
 		//重置表单
 		resetForm(editor);
	});
     
     /** 编辑 **/
 	$(document).on("click","a[data-field='edit']",function(){
 		var id = $(this).attr("data-value");
 		$(".seckillWin").hide();
 		$(".chooseCommWin").show();
 		$(".selectList").css("display","none");
 		$(".addAdvertisement").html("更新");
 		$(".addAdvertisement").addClass("updateAdvertisement");
 		$(".addAdvertisement").removeClass("addAdvertisement");
 		editAdvertisement(editor,id);
 	});
 	
 	$(document).on("click","a[data-field='delete']",function(){
		var id = $(this).attr("data-value");
		if(id != ""){
			if(confirm("确定删除该广告吗？")){
				$.ajax({
					url:'../advertisement/del.do',
					type:'post',
					data:{"id":id},
					success:function(result){
						if(result == "true"){
							alert("删除广告成功!");
							window.location.reload();
						}
					},error:function(){alert("删除广告失败");}
				})
			}
		}
	});
 	
 	/**
 	 * 广告位置的三级联动
 	 */
 	$(".selectList").each(function(){
        var url = "js/advertisement.json";
        var adJson;
        var html;
        var Sone = $(this).find("select[name=one]");
        var Stwo = $(this).find("select[name=two]");
        var Sthree = $(this).find("select[name=three]");
        //初始化一级
        var one = function(){
            $.each(adJson,function(i,one){
                html+="<option value='"+one.t1+"'>"+one.t1+"</option>";
            });
            Sone.html(html);
            two();
        };
        //赋值二级
        var two = function(){
            html = ""; 
            var n = Sone.get(0).selectedIndex;
            $.each(adJson[n].t2,function(i,two){
                html+="<option value='"+two.type2+"'>"+two.type2+"</option>";
            });
            Stwo.html(html);
            three();
        };
        //赋值三级
        var three = function(){
            html = ""; 
            var m = Sone.get(0).selectedIndex;
            var n = Stwo.get(0).selectedIndex;
            if(typeof(adJson[m].t2[n].t3) == "undefined"){
                Sthree.css("display","none");
            }else{
                Sthree.css("display","inline");
                $.each(adJson[m].t2[n].t3,function(i,three){
                   html+="<option value='"+three.type3+"'>"+three.type3+"</option>";
                });
                Sthree.html(html);
            };
        };
        //选择一级改变二级
        Sone.change(function(){
            two();
        });
        //选择二级改变三级
        Stwo.change(function(){
            three();
        });
        //获取json数据
        $.getJSON(url,function(data){
            adJson = data;
            one();
        });
 	});
 	
 	function editAdvertisement(editor,id){
    	editor.html("");
    	$.post("../advertisement/getid.do",{"id":id},function(res){
    		res = eval("("+res+")");
    		$("input[name=id]").val(res.id);
    		$("input[name=ad_name]").val(res.ad_name);
    		/*$("select[name=three]").find("option").each(function(index,obj){
    			console.log(obj);
    			if($(obj).val() == res.ad_address){
    				$(obj).attr("selected",true);
    			}else{
    				$(obj).removeAttr("selected");
    			}
    		});*/
    		$("input[name=ad_url]").val(res.ad_url);
    		editor.insertHtml("<img src='"+res.ad_path+"' alt=''/>");
    		$(".updateAdvertisement").attr("data-value",res.id);
    		
    		/** 提交更新 **/
    		$(".updateAdvertisement").click(function(){
    			var id = $("#id").val();
    			var ad_name = $("#ad_name").val();
    			/*var ad_address = $("#ad_address").val();*/
    			/*var ad_address = $("select[name=three]").find("option:selected").val();*/
    			var ad_url = $("#ad_url").val();
    			var ad_path = editor.html();
    			$.ajax({
    				url:'../advertisement/update.do',
    				type:'post',
    				data:{"id":id,"ad_name":ad_name,"ad_path":ad_path,"ad_url":ad_url},
    				success:function(result){
    					if(result == "true"){alert("广告更新成功！");document.location.reload();}else{alert("广告更新失败！");}
    				}
    			});
    		});
    	});
    }
 	/**
	 * 重置表单
	 */
	function resetForm(editor){
		editor.html("");
		$("form#fromAddAdvertisement")[0].reset();
	}
});

function page(curpage){
	var name = $("#AdvertisementName").val();
	var html = "";
	$.ajax({
		url:'../advertisement/listpage.do',
		type:'post',
		data:{"name":name ,"curpage":curpage},
		success:function(result){
			result = eval("(" + result + ")");
			$(result).each(function(i,object){
				$(object.list).each(function(index,obj){
					html += "<tr>";
					html += "<td>" + (index+1) + "</td>";
					html += "<td>" + obj.ad_name + "</td>";
					html += "<td>" + obj.ad_address + "</td>";
					html += "<td class='advertiseImg'><img src='" + obj.ad_path + "' alt=''></td>";
					html += "<td><a style='cursor: pointer;' data-field='edit' data-value='"+obj.id+"' class='butBox'>编辑</a>" +
							"<a style='cursor: pointer;' data-field='delete' data-value='"+obj.id+"' class='butBox'>删除</a></td>"
					html += "</tr>";
				});
				$("#advertisement_num").html(object.count);
				$("#pageCount").html(object.page.pageCount);
				$("#curpage").html("<option value='"+object.page.currentPage+"'>"+object.page.currentPage+"</option>");
				$("#pageSize").html(object.page.pageSize);
				$("table.commodityTab.orderFormTab tbody").html(html);
				$($("table.commodityTab.orderFormTab tbody").find("tr"));
			});
		}
	})
}

function firstpage(){
	var curpage = 1;
	page(curpage);
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

function lastpage(){
	var curpage = parseInt($("#pageCount").html().trim());
	page(curpage);
}
