package com.bonsai.gym.modules.feedback.controller;

import com.bonsai.gym.common.api.ApiResponse;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/feedback")
public class FeedbackController {

    @GetMapping("/list")
    public ApiResponse<List<Map<String, Object>>> list() {
        return ApiResponse.success(List.of(
                Map.of("member", "张三", "target", "燃脂搏击操", "rating", 5, "status", "已审核"),
                Map.of("member", "李四", "target", "私教塑形课", "rating", 4, "status", "待审核")
        ));
    }
}
