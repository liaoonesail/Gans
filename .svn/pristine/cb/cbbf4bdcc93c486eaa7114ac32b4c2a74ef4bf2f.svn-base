<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>My JSP 'index.jsp' starting page</title>
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
	
    </script>
  </head>
  
  <body>
    <%
    String success = (String)request.getAttribute("success");
    String ORDERID = "";
    String PAYMENT = "";
    if(success != null && !"".equals(success)){
    	//success = "N";
    }else{
    	success = request.getParameter("SUCCESS");
    	ORDERID = request.getParameter("ORDERID");
    	PAYMENT = request.getParameter("PAYMENT");
    	if(success == null){
    		success = "没有传该值";
    	}
    }
    
     %>
     <link rel="stylesheet" href="/Gans/stage/css/mui.min.css" />
    <style>
    	body,.mui-content{
    		background: #fff;
    		max-width: 540px;
    	}
    </style>
     <div class="mui-content">
     <%
     if("Y".equals(success)){
    	%><img src="/Gans/stage/img/pay_succ.png"  width="50" height="50" style="display: block;margin: 60px auto 20px auto;"/><%
    }else{
    	%>
    	<img src="/Gans/stage/img/not.jpg"  width="50" height="50" style="display: block;margin: 60px auto 20px auto;display: none;"/>
    	<%
    }
      %>
        
        
        <h3 style="text-align: center;font-size: 20px;margin: 10px auto;">支付成功</h3>
        <p style="text-align: center;padding: 0px 30px;">订单号：<%=ORDERID %></p>
        <p style="text-align: center;padding: 0px 30px;">金额：￥<%=PAYMENT %></p>
        <button onclick="javascript:window.location.href='/Gans/index.do'" style="border: none;width: 88%;margin: 30px auto;background: #0c97f8;display: block;color: #fff;border-radius: 6px;">完成</button>
    </div>
  </body>
</html>
