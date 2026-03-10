package com.bonsai.gym.modules.equipment.controller;

import com.bonsai.gym.common.api.ApiResponse;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/api/equipment-dashboard")
public class EquipmentDashboardController {

    @GetMapping("/summary")
    public ApiResponse<Map<String, Object>> summary() {
        return ApiResponse.success(Map.of(
                "totalEquipment", 58,
                "normalEquipment", 52,
                "maintainingEquipment", 4,
                "warningEquipment", 2
        ));
    }
}
