package com.bonsai.gym.modules.system.controller;

import com.bonsai.gym.common.api.ApiResponse;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/system-manage")
public class SystemManageController {

    @GetMapping("/users")
    public ApiResponse<List<Map<String, Object>>> users() {
        return ApiResponse.success(List.of(
                Map.of("username", "admin", "nickname", "管理员", "role", "系统管理员"),
                Map.of("username", "reception01", "nickname", "前台小李", "role", "前台人员")
        ));
    }

    @GetMapping("/roles")
    public ApiResponse<List<Map<String, Object>>> roles() {
        return ApiResponse.success(List.of(
                Map.of("name", "系统管理员", "desc", "拥有系统全部权限"),
                Map.of("name", "前台人员", "desc", "负责会员接待与订单处理")
        ));
    }
}
