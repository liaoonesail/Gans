// 返回顶部动画
$window = $(window);

var $backTop = $('#scrolltoss');
$window.on('scroll', function() {
	var $this = $(this);
	var $scroll = $(this).scrollTop();

	if($scroll > 100) {

		$backTop.css('right', '6px');
	} else if($scroll < 100) {

		$backTop.css('right', '-64px');
	}
});
$backTop.click(function() {
	$('body,html').animate({
		scrollTop: 0
	}, 300);
});