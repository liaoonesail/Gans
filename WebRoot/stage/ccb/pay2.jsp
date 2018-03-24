<%@page import="com.lanzhou.util.ServiceUtil"%>
<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>ccb-pay</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
	<script type="text/javascript" src="/Gans/stage/js/jquery-1.8.3.min.js"></script>
	<!-- <script type="text/javascript" src="/Gans/stage/js/ccb/md5.js"></script>
	<script type="text/javascript" src="/Gans/stage/js/ccb/pay.js"></script> -->
	<script language="JavaScript">
		
		//苹果支付
		function MBC_PAY(){
		  window.location="/mbcpay.b2c ";
		}
		function MBC_PAYINFO(){
		  var orderinfo =
		"TXCODE="+mbcpay_b2c.TXCODE.value+","+
		"WAPVER="+mbcpay_b2c.WAPVER.value+","+
			  "MERCHANTID="+mbcpay_b2c.MERCHANTID.value+","+
			  "ORDERID="+mbcpay_b2c.ORDERID.value+","+
			  "PAYMENT="+mbcpay_b2c.PAYMENT.value+","+
			  "MAGIC="+mbcpay_b2c.MAGIC.value+","+
			  "BRANCHID="+mbcpay_b2c.BRANCHID.value+","+
			  "POSID="+mbcpay_b2c.POSID.value+","+
			  "CURCODE="+mbcpay_b2c.CURCODE.value+","+
			  "REMARK1="+mbcpay_b2c.REMARK1.value+","+
		"REMARK2="+mbcpay_b2c.REMARK2.value+","+
		"SUPPORTACCOUNTTYPE="+mbcpay_b2c.SUPPORTACCOUNTTYPE.value;
		  return "{" + orderinfo + "}";
		}
	
		//安卓支付
		function MBC_PAY2(){
		 var orderinfo =
		"TXCODE="+mbcpay_b2c.TXCODE.value+","+
		"WAPVER="+mbcpay_b2c.WAPVER.value+","+
			  "MERCHANTID="+mbcpay_b2c.MERCHANTID.value+","+
			  "ORDERID="+mbcpay_b2c.ORDERID.value+","+
			  "PAYMENT="+mbcpay_b2c.PAYMENT.value+","+
			  "MAGIC="+mbcpay_b2c.MAGIC.value+","+
			  "BRANCHID="+mbcpay_b2c.BRANCHID.value+","+
			  "POSID="+mbcpay_b2c.POSID.value+","+
			  "CURCODE="+mbcpay_b2c.CURCODE.value+","+
			  "REMARK1="+mbcpay_b2c.REMARK1.value+","+
		"REMARK2="+mbcpay_b2c.REMARK2.value+","+
			  "SUPPORTACCOUNTTYPE="+mbcpay_b2c.SUPPORTACCOUNTTYPE.value;
		window.mbcpay.b2c(orderinfo);
		}
</script>
	
  </head>
  
  <body>
    <%
    String MERCHANTID = (String)request.getAttribute("MERCHANTID");;
    String POSID = (String)request.getAttribute("POSID");;
    String BRANCHID = (String)request.getAttribute("BRANCHID");;
    String ORDERID = (String)request.getAttribute("ORDERID");
    String PAYMENT = (String)request.getAttribute("PAYMENT");
    String PUB = (String)request.getAttribute("PUB");;
    String MAGIC = (String)request.getAttribute("MAGIC");
    String ErrorMessage=(String)request.getAttribute("ErrorMessage");
    String zhongduan = (String)session.getAttribute("zhongduan");
    if(zhongduan == null || "".equals(zhongduan)){
    	zhongduan = "android";
    }
     %>
     
     <form name="mbcpay_b2c">
		<input type="hidden" name="TXCODE" value=" SP7010" /> 
		<input type="hidden" name="WAPVER" value="1.2" />
		<input type="hidden" name="MERCHANTID" value="<%=MERCHANTID %>" /> 
		<input type="hidden" name="ORDERID" value="<%=ORDERID %>" />
		<input type="hidden" name="PAYMENT" value="<%=PAYMENT %>" /> 
		<input type="hidden" name="MAGIC" value="<%=MAGIC %>" />
		<input type="hidden" name="BRANCHID" value="<%=BRANCHID %>" />
		<input type="hidden" name="POSID" value="<%=POSID %>" />
		<input type="hidden" name="CURCODE" value="01" /> 
		<input type="hidden" name="REMARK1" value="" />
		<input type="hidden" name="REMARK2" value="" /> 
		<input type="hidden" name="SUPPORTACCOUNTTYPE" value="" />
	</form>
     
     
  </body>
  <script type="text/javascript">
  $(function(){
  
  	//getMAC();
  	if("<%=ErrorMessage%>" == "ok"){
  	if("<%=zhongduan%>" == "ios"){
  		MBC_PAY();
  	}else{
  		MBC_PAY2();
  	}
  	}else{
  		alert("库存不足！");
  	}
  	
  
  });
  </script>
</html>
