<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@page import="com.lanzhou.entity.Adminuser"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<!DOCTYPE HTML>
<html>
<head>
    <base href="<%=basePath%>">
    <title></title>
    <meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge" >
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<link rel="stylesheet" href="/Gans/GanSuManagement/css/frame.css">
	<link rel="stylesheet" href="/Gans/GanSuManagement/css/common.css">
	<script type="text/javascript" src="/Gans/GanSuManagement/js/jquery-1.11.1.min.js"></script>
	<title></title>
</head>
<body height="100%">
	<div class="menuAll">
		<a  href="main.html" target="mainFrame" class="logoA"><h1 class="frameTit">汇聚甘肃后台管理中心</h1></a>
		<div class="frameHead">
			<!-- 头像图片 -->
			<i class="headPor"><img src="/Gans/GanSuManagement/img/headico.jpg" alt=""></i>
			<!-- 系统管理员 -->
			<span class="headAdmin">
				<span class="adminName" title="南波瑠">南波瑠</span>
				<span class="adminT">系统管理员</span>
			</span>
		</div>
		<!-- 菜单栏 -->
		<div class="menuContent clearfix" id="MenuList">
			<dl class="sidebarBox">
				<dt>微公益</dt>
				<dd><a href="/Gans/GanSuManagement/bg_pictureManagement.html" target="mainFrame">管理背景图片</a></dd>
				<dd><a href="/Gans/GanSuManagement/prizeManagement.html" target="mainFrame">奖品管理</a></dd>
				<!--<dd><a href="userManagement.html" target="mainFrame">用户管理</a></dd> -->
				<dd><a href="/Gans/GanSuManagement/winingManagement.html" class="threeLevelLabel" target="mainFrame">中奖管理</a></dd>
				<dd><a href="/Gans/GanSuManagement/donationManagement.html" class="threeLevelLabel" target="mainFrame">捐款管理</a></dd>
				<dd><a href="/Gans/GanSuManagement/statisticalStatement.html" class="threeLevelLabel" target="mainFrame">统计报表</a></dd>
				<dd><a href="/Gans/GanSuManagement/pageParameter.html" target="mainFrame">页面参数</a></dd>
			</dl>
			<dl class="sidebarBox">
                <dt>入学季</dt>
                <dd><a href="/Gans/GanSuManagement/schoolGoodsManagement.html" target="mainFrame">入学季商品管理</a></dd>
                <dd><a href="/Gans/GanSuManagement/schoolPrice.html" target="mainFrame">礼包管理</a></dd>
                <dd><a href="/Gans/GanSuManagement/twelvePrizeManagement.html" target="mainFrame">奖品管理</a></dd>
                <dd><a href="/Gans/GanSuManagement/schoolwiningManagement.html" target="mainFrame">中奖管理</a></dd>
            </dl>
			<dl class="sidebarBox">
				<dt>商城管理</dt>
				<dd><a href="/Gans/GanSuManagement/commodityManagement.html" target="mainFrame">商品管理</a></dd>
				<dd><a href="/Gans/GanSuManagement/addCommodity.html" class="threeLevelLabel" target="mainFrame">添加商品</a></dd>
				<dd><a href="/Gans/GanSuManagement/typeManagement.html" class="threeLevelLabel" target="mainFrame">类目管理</a></dd>
				<dd><a href="/Gans/GanSuManagement/area.html" class="threeLevelLabel" target="mainFrame">地区管理</a></dd>
				<dd><a href="/Gans/GanSuManagement/activity.html" class="threeLevelLabel" target="mainFrame">活动管理</a></dd>
				<dd><a href="/Gans/GanSuManagement/zhouzhouhuiManagement.html" class="threeLevelLabel" target="mainFrame">周周惠管理</a></dd>
				<!-- <dd><a href="commodityManagement.html" class="threeLevelLabel" target="mainFrame">普通商品</a></dd>
				<dd><a href="virtualManagement.html" class="threeLevelLabel" target="mainFrame">虚拟商品</a></dd>
				<dd><a href="revocationManagement.html" class="threeLevelLabel" target="mainFrame">下架商品</a></dd>
				<dd><a href="recycleManagement.html" class="threeLevelLabel" target="mainFrame">回收站</a></dd> -->
				<dd><a href="/Gans/GanSuManagement/orderForm.html" target="mainFrame">订单管理</a></dd>
				<dd><a href="/Gans/GanSuManagement/whitelist.html" target="mainFrame">白名单管理</a></dd>
				<!-- <dd><a href="orderInquire.html" class="threeLevelLabel" target="mainFrame">订单查询</a></dd> -->
				<dt>专场活动</dt>
				<dd><a href="/Gans/GanSuManagement/miaoshatime.html" class="threeLevelLabel" target="mainFrame">添加秒杀时间</a></dd>
                <dd><a href="/Gans/GanSuManagement/miaoshaManagement.html" class="threeLevelLabel" target="mainFrame">秒杀管理</a></dd>
                <!-- <dd><a href="/Gans/GanSuManagement/moneyOffManagement.html" class="threeLevelLabel" target="mainFrame">生活服务</a></dd>
                <dd><a href="/Gans/GanSuManagement/moneyOffManagement.html" class="threeLevelLabel" target="mainFrame">海淘管理</a></dd> -->
                <dd><a href="/Gans/GanSuManagement/grouponManagement.html" class="threeLevelLabel" target="mainFrame">团购管理</a></dd>
                <dd><a href="/Gans/GanSuManagement/performanceManagement.html" class="threeLevelLabel" target="mainFrame">各类专场</a></dd>
                <!--<dd><a href="/Gans/GanSuManagement/moneyOffManagement.html" class="threeLevelLabel" target="mainFrame">虚拟卡卷</a></dd> -->
                <!-- <dd><a href="/Gans/GanSuManagement/moneyOffManagement.html" class="threeLevelLabel" target="mainFrame">满减管理</a></dd>
                <dd><a href="/Gans/GanSuManagement/moneyOffManagement.html" class="threeLevelLabel" target="mainFrame">9.9特卖</a></dd> -->
				<dd><a href="/Gans/GanSuManagement/dragonPaymentManagement.html" class="threeLevelLabel" target="mainFrame">龙支付管理</a></dd>
				<dd><a href="/Gans/GanSuManagement/lotteryTicketList.html" class="threeLevelLabel" target="mainFrame">券管理</a></dd>
				<dd><a href="/Gans/GanSuManagement/supplierManagement.html" target="mainFrame">供应商管理</a></dd>
				<dd><a href="/Gans/GanSuManagement/addSupplier.html" class="threeLevelLabel" target="mainFrame">添加供应商</a></dd>
				<dd><a href="/Gans/GanSuManagement/shop_pictureMenagement.html" class="threeLevelLabel" target="mainFrame">供应商banner图</a></dd>
				<!-- <dd><a href="logisticsTemplate.html" class="threeLevelLabel" target="mainFrame">物流模板</a></dd>
				<dd><a href="supplierOrderForm.html" class="threeLevelLabel" target="mainFrame">供应商订单</a></dd> -->
			</dl>
			<dl class="sidebarBox">
				<dt>平台管理</dt>
				<dd><a href="/Gans/GanSuManagement/articleManagement.html" target="mainFrame">文章资讯</a></dd>
				<dd><a href="/Gans/GanSuManagement/advertisementManagement.html" target="mainFrame">广告管理</a></dd>
				<dd><a href="/Gans/GanSuManagement/Area_pictureManagement.html" class="threeLevelLabel" target="mainFrame">管理区域图片</a></dd>
				<dd><a href="/Gans/GanSuManagement/addArea_picture.html" class="threeLevelLabel" target="mainFrame">添加区域图片</a></dd>
				<dd><a href="/Gans/GanSuManagement/memberManagement.html" target="mainFrame">会员管理</a></dd>
				<dd><a href="/Gans/GanSuManagement/dataStatistics.html" target="mainFrame">数据统计</a></dd>
				<dd><a href="/Gans/GanSuManagement/administratorLog.html" target="mainFrame">系统管理</a></dd>
				<!-- <dd><a href="administratorLog.html" class="threeLevelLabel" target="mainFrame">管理员日志</a></dd> -->
				<%
					Adminuser adminuser = (Adminuser)session.getAttribute("adminuser");
					if(adminuser.getSuperadmin()==1){
	 			%>
				<dd><a href="/Gans/GanSuManagement/adminList.html" class="threeLevelLabel" target="mainFrame">管理员列表</a></dd>
				<%
					}else{
				%>
				<dd style="display:none"><a href="/Gans/GanSuManagement/adminList.html" class="threeLevelLabel" target="mainFrame">管理员列表</a></dd>
				<%
					}
				%>
				<dd><a href="/Gans/GanSuManagement/problemsManagement.html" class="threeLevelLabel" target="mainFrame">常见问题</a></dd>
				<!-- <dd><a href="javascript:;" class="threeLevelLabel" target="mainFrame">角色管理</a></dd> -->
				<!-- <dd><a href="categoryManagement.html" target="mainFrame">类目管理</a></dd> -->
			</dl>
		</div>
	</div>
	<script type="text/javascript">
/*判断屏幕分辨率*/
window.onload=function(){
    var MenuBox=document.getElementById("MenuList");
    if(screen.width<1440)
    {
    	MenuBox.className='menuScreen menuContent clearfix';
    }
    else{
    	MenuBox.className='menuContent clearfix';
    }
}
/*菜单选中*/
$(function(){
	$(".sidebarBox dd a").click(function() {
		$(".sidebarBox dd").removeClass("colorWhite");
		$(this).parent().addClass("colorWhite");
	});
	$(".logoA").click(function() {
		$(".sidebarBox dd").removeClass("colorWhite");
	});
});
</script>
</body>
</html>
