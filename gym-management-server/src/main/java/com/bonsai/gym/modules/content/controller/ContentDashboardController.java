package com.bonsai.gym.modules.content.controller;

import com.bonsai.gym.common.api.ApiResponse;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/api/content-dashboard")
public class ContentDashboardController {

    @GetMapping("/summary")
    public ApiResponse<Map<String, Object>> summary() {
        return ApiResponse.success(Map.of(
                "bannerCount", 4,
                "announcementCount", 12,
                "publishedCount", 10,
                "draftCount", 2
        ));
    }
}
