
	$(function(){
		/*品牌选择弹窗*/
		$(".FormBrand").focus(function() {
			$(".commonBrandWin").toggle();
		});
		$(".commonBrandName span").click(function() {
			$(".commonBrandName span").removeClass("BrandNameFocus");
			$(this).addClass('BrandNameFocus')
		});
		$(".commonBrandList b").click(function() {
			$(".FormBrand").val($(this).html());
			$(".commonBrandWin").hide();
     	 });
     	 $(document).bind('click', function(e) {
            var e = e || window.event; //浏览器兼容性   
            var elem = e.target || e.srcElement;  
            while (elem) { //循环判断至跟节点，防止点击的是div子元素   
                if (elem.id && elem.id == 'brandWin') {  
                    return;  
                }
                if (elem.id && elem.id == 'brandText') {  
                    return;  
                }
                elem = elem.parentNode;  
            }  
            $('#brandWin').css('display', 'none'); //点击的不是div或其子元素   
        });   


		/*营销管理弹窗*/
		$(".seckillAdd").click(function() {
			$(".chooseCommWin").hide();
			$(".seckillAddBox").hide();
			$(".seckillWin").toggle();
		});
		$(".seckillWin i").click(function() {
			$(".seckillWin").hide();
		});

		/*页面参数活动规则修改*/
		$(".ruleupdate").click(function() {
			$(".seckillAddBox").hide();
			$(".ruleBox").toggle();
		});
		$(".ruleBox i").click(function() {
			$(".ruleBox").hide();
		});

		
		/*活动类型*/
		$(".activTySel>option").click(function() {
			var Active = $(this).index();
			$(".activeTyTab").hide();
			$(".activeTyTab").eq(Active).show();
			$(".limitSeckillWin").hide();
		});
		$(".activeBut").click(function() {
			var AcTab = $(this).parents(".activeTyTab").attr("id");
			$('.'+AcTab+'Win').toggle();
			var ButTop = $(this).offset().top-120;
			var ButLeft = $(this).offset().left-500;
			$('.'+AcTab+'Win').css({
				top: ButTop,
				left: ButLeft
			});
			$('.'+AcTab+'Win i').click(function() {
				$('.'+AcTab+'Win').hide();
			});
		});

		/*订单选项卡*/
		$(".orderFormOption a").click(function() {
			$(".orderFormOption a").removeClass('bgGreen');
			$(this).addClass('bgGreen');
		});

		/*龙支付添加商品*/
		$(".chooseCommAdd").click(function() {
			$(".seckillWin").hide();
			$(".chooseCommWin").show();
		});
		$(".chooseCommWin i").click(function() {
			$(".chooseCommWin").hide();
		});
		
		
	});