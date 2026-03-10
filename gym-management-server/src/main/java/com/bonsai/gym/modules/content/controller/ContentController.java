package com.bonsai.gym.modules.content.controller;

import com.bonsai.gym.common.api.ApiResponse;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/content")
public class ContentController {

    @GetMapping("/announcements")
    public ApiResponse<List<Map<String, Object>>> announcements() {
        return ApiResponse.success(List.of(
                Map.of("title", "关于清明节营业时间调整通知", "category", "通知", "status", "已发布"),
                Map.of("title", "春季塑形挑战赛报名开始", "category", "活动", "status", "已发布")
        ));
    }
}
