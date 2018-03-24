//单个大的搜索框点击得到焦点清空input的内容
$(".text-clear-content").focus(function() {
	$(".clear-button22").hide();
	$(this).next(".clear-button22").show();
 });
 $(".clear-button22").click(function() {
	$(this).prev().val("");
	$(this).prev().focus(); 
 	$(".clear-button22").hide();
});
$("#searchCode").click(function(){
	var searchName = $("#searchName").val();
	if(searchName == ""){
		alert("请输入搜索商品名称")
	}else{
		setTimeout(function(){
			mui.openWindow({
				url: 'search_proud.html?searchName='+searchName,
				id: 'search_proud',
				showType: 'zoom-fade-out',
				showTime: 200
			});
		},200); 
	 $("#searchName").val("");
	}
	
});

document.onkeydown = function(e) {
    if(!e) e = window.event;
    if((e.keyCode || e.which) == 13) {
        var searchName = $("#searchName").val();
        if(searchName == ""){
            alert("请输入搜索商品名称")
        }else{
            setTimeout(function(){
                mui.openWindow({
                    url: '/Gans/stage/discountgo/search_proud.html?searchName='+searchName,
                    id: 'search_proud',
                    showType: 'zoom-fade-out',
                    showTime: 200
                });
            },200);
            $("#searchName").val("");
        }
    }
}

/**
 * 获取品牌中的商品
 * @param response
 * @return
 * @throws IOException
 */
function getAdvertByStatus(search){
	var url = "goods/getGoodsBySearch.do";
	var data = {
		search:search
    };
	async = false;
	var result = ajaxSubmit(url, data, async);
	return result;
}