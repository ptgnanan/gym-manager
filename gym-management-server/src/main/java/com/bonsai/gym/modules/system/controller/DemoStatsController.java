package com.bonsai.gym.modules.system.controller;

import com.bonsai.gym.common.api.ApiResponse;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/api/dashboard")
public class DemoStatsController {

    @GetMapping("/stats")
    public ApiResponse<Map<String, Object>> stats() {
        return ApiResponse.success(Map.of(
                "newMembers", 18,
                "todayOrders", 26,
                "reservations", 42,
                "equipmentWarnings", 3
        ));
    }
}
