package com.bonsai.gym.modules.coach.controller;

import com.bonsai.gym.common.api.ApiResponse;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/coach")
public class CoachController {

    @GetMapping("/list")
    public ApiResponse<List<Map<String, Object>>> list() {
        return ApiResponse.success(List.of(
                Map.of("coachNo", "C001", "name", "王教练", "phone", "13900000001", "specialty", "增肌 / 力量训练", "status", "在职"),
                Map.of("coachNo", "C002", "name", "刘教练", "phone", "13900000002", "specialty", "减脂 / 私教塑形", "status", "在职")
        ));
    }
}
