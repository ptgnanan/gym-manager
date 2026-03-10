package com.bonsai.gym.modules.auth.controller;

import com.bonsai.gym.common.api.ApiResponse;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
}
