package com.bonsai.gym.modules.course.controller;

import com.bonsai.gym.common.api.ApiResponse;
import com.bonsai.gym.modules.course.entity.Course;
import com.bonsai.gym.modules.course.service.CourseService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/course")
@RequiredArgsConstructor
public class CourseController {

    private final CourseService courseService;

    @GetMapping("/list")
    public ApiResponse<List<Course>> list() {
        return ApiResponse.success(courseService.listCourses());
    }
}
