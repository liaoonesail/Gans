package com.lanzhou.action;

import com.lanzhou.entity.WhiteName;
import com.lanzhou.service.WhiteNameService;
import com.lanzhou.service.WhitegoodsService;
import com.lanzhou.service.WhitephoneService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import java.util.List;

@Controller
@RequestMapping("/adminWhiteName")
public class WhiteNameAction {
    @Resource
    private WhiteNameService service;
    @Resource
    private WhitephoneService whitephoneService;
    @Resource
    private WhitegoodsService whitegoodsService;
    @RequestMapping("/add")
    public @ResponseBody boolean add(WhiteName whiteName){
        service.add(whiteName);
        return true;
    }
    @RequestMapping("/list")
    public @ResponseBody List<WhiteName> list(){
        return service.list();
    }

    /**
     * 刪除對應的白名單名稱，白名單人員，白名單商品
     * @param id 白名單名單Id
     * @return 返回狀態
     */
    @RequestMapping("/del")
    public @ResponseBody boolean del(Integer id){
        service.del(id);
        whitephoneService.delByNameId(id);
        whitegoodsService.delByNameId(id);
        return true;
    }
}
