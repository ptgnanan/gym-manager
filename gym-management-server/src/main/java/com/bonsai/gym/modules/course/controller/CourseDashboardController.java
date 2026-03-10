package com.bonsai.gym.modules.course.controller;

import com.bonsai.gym.common.api.ApiResponse;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/course-dashboard")
public class CourseDashboardController {

    @GetMapping("/summary")
    public ApiResponse<Map<String, Object>> summary() {
        return ApiResponse.success(Map.of(
                "totalCourses", 24,
                "weeklySchedules", 68,
                "todayReservations", 42,
                "privateTrainingRecords", 15
        ));
    }

    @GetMapping("/today-schedules")
    public ApiResponse<List<Map<String, Object>>> todaySchedules() {
        return ApiResponse.success(List.of(
                Map.of("time", "09:00-10:00", "name", "燃脂搏击操", "coach", "王教练", "location", "A教室"),
                Map.of("time", "14:00-15:30", "name", "核心私教进阶", "coach", "刘教练", "location", "私教室1"),
                Map.of("time", "19:00-20:00", "name", "瑜伽拉伸", "coach", "陈教练", "location", "B教室")
        ));
    }
}
