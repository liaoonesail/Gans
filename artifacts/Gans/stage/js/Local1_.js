//地方汇左边分类导航点击添加css样式	
//让指定的DIV始终显示在屏幕正中间   
     left_w=($(document).width()-$('#loadingicon').width())/2;  
     top_w = $('html').scrollTop()+($(window).height()-$('#loadingicon').height())/2;  
     $('#loadingicon').offset({top:top_w,left:left_w});  
	/**
	 * 获取所有地区
	 * @returns
	 */
	var area_List =getArea();
	 //console.log(area_List);
	area_List = JSON.parse(area_List);
	 $("#ListNavService").empty();
	 $("#shop_Img_new").empty();
	 $('#loadingicon').show();
     $('#loadingicon').offset({top:top_w,left:left_w});  
     setTimeout(function(){
	        $('#loadingicon').hide();
	        area_start();
 	},300);
	
	function area_start(){
		var color_ = "",area_id ="";
		$("#ListNavService").empty();
		var arae_List_html ="";
		/**
		 * 获取用户所选区域
		 * @returns 该区域对象
		 */	
		var getCheckedArea_true =getCheckedArea();
		// console.log(getCheckedArea_true);
		getCheckedArea_true = JSON.parse(getCheckedArea_true);
		var getCheckedArea_true_id =getCheckedArea_true.id;
		for(var i = 0; i < area_List.length; i++){
			arae_List_html +="<li id='"+area_List[i].id+"' area_id='"+area_List[i].id+"'>"+area_List[i].name+"</li>";		
			if(area_List[i].id == getCheckedArea_true_id){
				area_id = getCheckedArea_true_id;
				color_ =area_List[i].id;
			}
		}
		$("#ListNavService").append(arae_List_html);
		/**
		 * 获取用户所选区域
		 * @returns 该区域对象
		 */	
		$("#"+color_).addClass("navLocalOk");
		/**
		 * 修改所选地区
		 * @param area 地区ID
		 * @returns 成功返回"ok"
		 */
		$("ul#ListNavService li").click(function() {
			$("ul#ListNavService  li").removeClass("navLocalOk"); //siblings是循环遍历
			$(this).addClass("navLocalOk");
			 var area_id =$(this).attr("area_id");
			 /**
			  * 修改所选地区
			  * @param area 地区ID
			  * @returns 成功返回"ok"
			  */
			// $("#ListNavService").empty();
			 $("#shop_Img_new").empty();
			 $('#loadingicon').show();
		     $('#loadingicon').offset({top:top_w,left:left_w});  
		     setTimeout(function(){
			        $('#loadingicon').hide();
			        var getCheckedArea = changeArea(area_id);
			        shop_area_conts(area_id)
		 	},300);
			 
			
			
		});
		/**
		 * 获取该区域的广告图片
		 * @param area
		 * @returns
		 */
		
		shop_area_conts(area_id)
		function shop_area_conts(area_id){
			 var area_shop =getAreaPic(area_id);
			 area_shop = JSON.parse(area_shop);
			 //console.log(area_shop);
			 var shop_fenglei_Img = "";
			 $("#shop_Img_new").empty();
			 for(var i = 0; i <area_shop.length; i++){
				 if(i==0){
					 shop_fenglei_Img +="<div class='mui-col-xs-12 first1'>"
				   	   	  +"<p style='display: none'>—2017年6月9日—6月15日   缤纷夏日欢乐购 —</p>"
				   	   	  +"<img  src='"+area_shop[i].picture_address+"'/>"
				   	 + "</div>";
				 }else{
					 shop_fenglei_Img +="<div class='mui-col-xs-12 localNav'>"
				   	   	  +"<p style='display: none'>—2017年6月9日—6月15日   缤纷夏日欢乐购 —</p>"
				   	   	  +"<a href='"+area_shop[i].url+"'><img src='"+area_shop[i].picture_address+"'/></a>"
				   	 + "</div>";
				 }
			 }
			 $("#shop_Img_new").append(shop_fenglei_Img);
			//地方汇专区跳转
				/*$(".localNav").click(function() {
					setTimeout(function() {
						mui.openWindow({
							url: area_shop[x].url,
							id: 'Local',
							showType: 'zoom-fade-out',
							showTime: 200
						});
					}, 500);
				});*/
				$(".first1").click(function() {
					setTimeout(function() {
						mui.openWindow({
							url: 'stage/discountgo/Local.html',
							id: 'Local',
							showType: 'zoom-fade-out',
							showTime: 200
						});
					}, 500);
				});
		}
		
	}
	