package com.lanzhou.controller;

import java.io.IOException;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.commons.CommonsMultipartFile;

import com.lanzhou.entity.User;
import com.lanzhou.service.FileUploadUtil;
import com.lanzhou.service.UserService;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 * Created by Administrator on 2017/5/24.
 */
@Controller
@RequestMapping("/files")
public class FileUploadController {

	private UserService userService;
    private FileUploadUtil fileUploadUtil;

    public UserService getUserService() {
		return userService;
	}
    @Resource
	public void setUserService(UserService userService) {
		this.userService = userService;
	}
    
	public FileUploadUtil getFileUploadUtil() {
        return fileUploadUtil;
    }
    @Resource
    public void setFileUploadUtil(FileUploadUtil fileUploadUtil) {
        this.fileUploadUtil = fileUploadUtil;
    }

    /**
     * 上传文件
     * @param file
     * @return
     */
    @RequestMapping("/uploadImage")
    public String uploadFile(@RequestParam("images") CommonsMultipartFile file, HttpServletRequest request, HttpServletResponse response) throws IOException{
        String fileName = "";
        HttpSession session = request.getSession();
        User user = (User)session.getAttribute("user");
        try {
            fileName = fileUploadUtil.uploadFile(file, "personphoto/");
            user.setHead_picture(fileName);
            userService.updateHead(user, request);
        } catch (Exception e) {
            e.printStackTrace();
        }
        response.getWriter().print(fileName);
        return null;
    }
    
}
