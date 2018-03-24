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
	<script type="text/javascript" src="/Gans/stage/js/ccb/md5.js"></script>
	<script type="text/javascript" src="/Gans/stage/js/ccb/pay.js"></script>
	
  </head>
  
  <body>
    <%
    String MERCHANTID = ServiceUtil.MERCHANTID;
    String POSID = ServiceUtil.POSID;
    String BRANCHID = ServiceUtil.BRANCHID;
    String ORDERID = (String)request.getAttribute("ORDERID");
    String PAYMENT = (String)request.getAttribute("PAYMENT");
    String PUB = ServiceUtil.PUB;
     %>
     <form>
     	<input name="MERCHANTID" type="hidden" class="text1" id="MERCHANTID" value="<%=MERCHANTID %>" />
     	<input name="POSID" type="hidden" class="text1" id="POSID" value="<%=POSID %>" />
     	<input name="BRANCHID" type="hidden" class="text1" id="BRANCHID" value="<%=BRANCHID %>" />
     	<input name="ORDERID" type="hidden" class="text1" id="ORDERID" value="<%=ORDERID %>" />
     	<input name="PAYMENT" type="hidden" class="text1" id="PAYMENT" value="<%=PAYMENT %>">
     	<input name="CURCODE" type="hidden" class="text1" id="CURCODE" value="01" />
     	<input name="TXCODE" type="hidden" class="text1" id="TXCODE" value="520100" />
     	<input name="REMARK1" type="hidden" class="text1" id="REMARK1" />
     	<input name="REMARK2" type="hidden" class="text1" id="REMARK2" />
     	<input name="PUB32" type="hidden" class="text1" id="PUB32" value="30819d300d06092a864886f70d0101" />
     	<input name="PUB32TR2" type="hidden" class="text1" id="PUB32TR2" value="<%=PUB %>" />
     	<input name="GATEWAY" type="hidden" class="text1" id="GATEWAY" value="0" />
     	<input name="CLIENTIP" type="hidden" class="text1" id="CLIENTIP" value ="" />
     	<input name="REGINFO" type="hidden" class="text1" id="REGINFO" value="" />
     	<input name="PROINFO" type="hidden" class="text1" id="PROINFO" value="" />
     	<input name="STOREINFO" type="hidden" class="text1" id="STOREINFO" />
     	<input name="PROTYPE" type="hidden" class="text1" id="PROTYPE" />
     	<input name="MER_REFERER" type="hidden" class="text1" id="MER_REFERER" value="" />
     	<input type="hidden" name="MAC" id="MAC" value="" />
     </form>
     
    <!--  <button onclick="getMAC();">获取MAC</button>
     
     <button onclick="subForm();">提交表单</button> -->
     <form id="payForm" method="post">
     	
     </form>
     
     
  </body>
  <script type="text/javascript">
  $(function(){
  
  	//getMAC();
  
  });
  </script>
</html>
