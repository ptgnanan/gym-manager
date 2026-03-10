package com.bonsai.gym.modules.auth.controller;

import com.bonsai.gym.common.api.ApiResponse;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @GetMapping("/placeholder")
    public ApiResponse<Map<String, Object>> placeholder() {
        return ApiResponse.success(Map.of(
                "module", "auth",
                "message", "JWT 登录鉴权模块骨架已创建"
        ));
    }

    @PostMapping("/login")
    public ApiResponse<Map<String, Object>> login(@RequestBody Map<String, Object> body) {
        return ApiResponse.success(Map.of(
                "token", "demo-token-2026",
                "username", body.getOrDefault("username", "admin"),
                "role", "ADMIN"
        ));
    }

    @PostMapping("/register")
    public ApiResponse<Map<String, Object>> register(@RequestBody Map<String, Object> body) {
        return ApiResponse.success(Map.of(
                "message", "注册成功（演示）",
                "username", body.getOrDefault("username", "new-user")
        ));
    }
}
