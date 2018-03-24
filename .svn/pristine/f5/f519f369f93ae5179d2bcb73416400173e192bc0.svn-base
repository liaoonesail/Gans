
function getMAC(){
	var tem = "";
	var temp_New = "";
	var temp_New1 = "";
	var strMD5 = "";
	var URL = "";
	//var bankURL = "https://ibsbjstar.ccb.com.cn/CCBIS/ccbMain";
	var bankURL = "https://ibsbjstar.ccb.com.cn/CCBIS/B2CMainPlat_07_EPAY";
	var MERCHANTID = $("#MERCHANTID").val();
	var POSID = $("#POSID").val();
	var BRANCHID = $("#BRANCHID").val();
	var ORDERID = $("#ORDERID").val();
	var PAYMENT = $("#PAYMENT").val();
	var CURCODE = $("#CURCODE").val();
	var TXCODE = $("#TXCODE").val();
	var REMARK1 = $("#REMARK1").val();
	var REMARK2 = $("#REMARK2").val();
	
	var PUB = $("#PUB32TR2").val();
	var GATEWAY = $("#GATEWAY").val();
	var CLIENTIP = $("#CLIENTIP").val();
	var REGINFO = $("#REGINFO").val();
	var PROINFO = $("#PROINFO").val();
	var REFERER = $("#MER_REFERER").val();
	var STOREINFO = $("#STOREINFO").val();
	var PROTYPE = $("#PROTYPE").val();
	
	var CCB_IBSVersion = "V6";
	var QRCODE = "1";
	var CHANNEL = "1";
	
	tmp ='MERCHANTID='+MERCHANTID+'&POSID='+POSID+'&BRANCHID='+BRANCHID+'&ORDERID='+ORDERID+'&PAYMENT='+PAYMENT+'&CURCODE='+CURCODE+'&TXCODE='+TXCODE+'&REMARK1='+REMARK1+'&REMARK2='+REMARK2;
	temp_New=tmp;
	temp_New += '&TYPE=1&PUB='+PUB+'&GATEWAY='+GATEWAY+'&CLIENTIP='+CLIENTIP+'&REGINFO='+escape(REGINFO)+'&PROINFO='+escape(PROINFO)+'&REFERER='+REFERER;
	temp_New1=tmp+'&TYPE=1&GATEWAY='+GATEWAY+'&CLIENTIP='+CLIENTIP+'&REGINFO='+escape(REGINFO)+'&PROINFO='+escape(PROINFO)+'&REFERER='+REFERER + '&STOREINFO='+escape(STOREINFO)+'&PROTYPE=' + escape(PROTYPE) + '&CCB_IBSVersion=v6&QRCODE=1&CHANNEL=1';
	strMD5=hex_md5(temp_New);
    //URL = bankURL+'?CCB_IBSVersion=V5&'+tmp+'&MAC='+strMD5;
    URL = bankURL+'?'+temp_New1+'&MAC='+strMD5;
    $("#MAC").val(strMD5);
    $("#payForm").attr("action",URL);
    $("#payForm").submit();
}
