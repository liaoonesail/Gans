/**
 * 添加新商品js
 */
$(function() {
	/**商品类别（实物、虚拟）**/
	$(".ChooseComm1").click(function() {
		$("input[name='goods_type']").val("1");
	});
	$(".ChooseComm2").click(function() {
		$("input[name='goods_type']").val("2");
	});

	/**选择商品类目**/
	$(document).on("click", "ul.first li", function() {
		$("input[name='type_id']").val($(this).attr("val"));
	});
	$(document).on("click", "ul.second li", function() {
		$("input[name='type_next_id']").val($(this).attr("val"));
	});
	$(document).on("click", "ul.third li", function() {
		$("input[name='type_next_next_id']").val($(this).attr("val"));
	});

	/**商品信息>商品类目 用户选择的商品类别**/
	$(document).on("click", '.stepok2', function() {
		var typeVal = $("input[name='cname']").val();
		//console.log("type:"+typeVal);
		typeVal = typeVal.replace("/[ ]/g","");
		typeVal = typeVal.replace(/,/g,"、");
		$("i.colorRed.font_16.ml10").html(typeVal);
	});

	/*点击发布商品
	$(document).on("click", '.publishShop', function() {
		$("#addGoodsSubmit").click();
		return false;
	});*/
	
	/**下拉框的改变事件**/
	$("select[name=activity_id]").change(function(){
		if($(this).find(":selected").val() == "0"){
			$(".activity").hide();
		}else{
			$(".activity").show();
		}
	});
	/****/
	/**
	 * 获取地区
	 */
	function getArea(){
		var url = "";
		var result = ajaxSubmit("../adminarea/list.do",{},false);
		var html = "<option value='0'>请选择</option>";
		$(result).each(function(index,obj){
			html += "<option value='"+obj.id+"'>"+obj.name+"</option>";
		});
		$("select[name=area_id]").html(html);
	}
	/****/
	/****/
	/****/

});