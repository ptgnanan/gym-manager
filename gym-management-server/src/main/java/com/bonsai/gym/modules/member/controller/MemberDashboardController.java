package com.bonsai.gym.modules.member.controller;

import com.bonsai.gym.common.api.ApiResponse;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/member-dashboard")
public class MemberDashboardController {

    @GetMapping("/summary")
    public ApiResponse<Map<String, Object>> summary() {
        return ApiResponse.success(Map.of(
                "totalMembers", 286,
                "todayNewMembers", 18,
                "activePackages", 164,
                "pendingOrders", 5
        ));
    }

    @GetMapping("/recent-orders")
    public ApiResponse<List<Map<String, Object>>> recentOrders() {
        return ApiResponse.success(List.of(
                Map.of("orderNo", "O20260310001", "memberName", "张三", "packageName", "月卡", "amount", "299.00", "status", "已支付"),
                Map.of("orderNo", "O20260310002", "memberName", "李四", "packageName", "私教10节课", "amount", "1999.00", "status", "待支付")
        ));
    }
}
