package com.lanzhou.action;

import java.io.IOException;
import java.security.KeyPair;

import javax.servlet.http.HttpServletResponse;

import net.sf.json.JSONObject;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.lanzhou.util.CCBRsaUtil;
import com.lanzhou.util.MD5ONCE;

@Controller
@RequestMapping("/pay")
public class PayAction {
	@RequestMapping("/magic")
	public String MAGIC(String string,HttpServletResponse response) throws IOException{
		MD5ONCE mac=new MD5ONCE(string);
		mac.calc();
		String MAGIC=mac.toString();
		response.getWriter().print(MAGIC);
		return null;
	}
	@RequestMapping("/pub")
	public String pub(HttpServletResponse response) throws Exception{
		KeyPair keyPair = CCBRsaUtil.getKeyPair("F:\\tomcat\\apache-tomcat-7.0.26\\webapps\\GanShu\\UTIL\\B2Ctest.cert");
		//CCBRsaUtil.generateRSAPublicKey(keyPair.getPublic().get, publicExponent);
		JSONObject json=JSONObject.fromObject(keyPair.getPublic());
		response.getWriter().print(json);
		return null;
	}

}
