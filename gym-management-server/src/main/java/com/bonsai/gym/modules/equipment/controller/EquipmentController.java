package com.bonsai.gym.modules.equipment.controller;

import com.bonsai.gym.common.api.ApiResponse;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/equipment")
public class EquipmentController {

    @GetMapping("/list")
    public ApiResponse<List<Map<String, Object>>> list() {
        return ApiResponse.success(List.of(
                Map.of("equipmentNo", "EQ-001", "name", "跑步机", "category", "有氧器械", "quantity", 12, "location", "A区", "status", "正常"),
                Map.of("equipmentNo", "EQ-002", "name", "史密斯架", "category", "力量器械", "quantity", 3, "location", "B区", "status", "维护中")
        ));
    }
}
