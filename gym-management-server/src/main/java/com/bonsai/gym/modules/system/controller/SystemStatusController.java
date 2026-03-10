package com.bonsai.gym.modules.system.controller;

import com.bonsai.gym.common.api.ApiResponse;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDateTime;
import java.util.Map;

@RestController
@RequestMapping("/api/system-status")
public class SystemStatusController {

    @GetMapping
    public ApiResponse<Map<String, Object>> status() {
        return ApiResponse.success(Map.of(
                "frontend", "running",
                "backend", "developing",
                "database", "mysql8-ready",
                "architecture", "frontend-backend-separated",
                "time", LocalDateTime.now().toString()
        ));
    }
}
