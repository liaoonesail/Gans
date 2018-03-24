/*
 * 微公益抽奖转盘背景图相关js
 * */

/*
 * 编辑器
 */
$(function($){
	var editor;
	var id;
	$.post(
	"../adminbgpicture/list.do",
	{},
	function(data){
		id=data.id;
	},
	"json"
	);
	KindEditor.ready(function(K) {
    	 editor  = K.create('textarea[name="pic_address"]', {
    		 resizeType : 1,
    		 allowPreviewEmoticons : false,
             items : [
            'source','image','preview'],
    	 });
	});
                    
	/**添加图片**/
	$(".addPicture").click(function(){
    	 var pic_address = editor.html();
    	 if(pic_address == ""){
    		 alert("请上传图片!");
    		 return false;
    	 }
    	 $.ajax({
    		 url:'../adminbgpicture/add.do',
    		 type:'post',
    		 data:{"pic_address":pic_address},
    		 success:function(res){
    			 if(res == "true"){alert("添加背景图片成功！");window.location.reload();}else{alert("添加背景图片失败！");}
    		 },error:function(){alert("添加背景图片失败！");}
    	 });
	});
	
	$(document).on("click",'.seckillClose',function(){
		$(".addPicture").css("display","inline-block");
		//重置表单
		resetForm(editor);
	});
	
	$(".preview").click(function(){
		$(".addPicture").css("display","none");
		check(editor,id);
		return false;
	});
});

function resetForm(editor){
	editor.html("");
	$("form#fromAddPicture")[0].reset();
}

function check(editor,id){
	editor.html("");
	$(".chooseCommWin").hide();
	  $(".seckillAddBox").hide();
	  $(".seckillWin").toggle();
	//显示弹窗
	//$(".seckillWin").toggle();
	$.post("../adminbgpicture/getid.do",{"id":id},function(res){
		res = eval("("+res+")");
		editor.insertHtml("<img src='"+res.pic_address+"' alt='' />");
	});
}