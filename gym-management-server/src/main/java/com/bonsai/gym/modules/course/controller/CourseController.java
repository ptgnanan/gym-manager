package com.bonsai.gym.modules.course.controller;

import com.bonsai.gym.common.api.ApiResponse;
import com.bonsai.gym.modules.course.entity.Course;
import com.bonsai.gym.modules.course.service.CourseService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

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

    @GetMapping("/{id}")
    public ApiResponse<Course> detail(@PathVariable Long id) {
        return ApiResponse.success(courseService.getById(id));
    }

    @PostMapping
    public ApiResponse<Void> save(@RequestBody Course course) {
        courseService.save(course);
        return ApiResponse.success("保存成功", null);
    }

    @PutMapping
    public ApiResponse<Void> update(@RequestBody Course course) {
        courseService.update(course);
        return ApiResponse.success("更新成功", null);
    }

    @DeleteMapping("/{id}")
    public ApiResponse<Void> delete(@PathVariable Long id) {
        courseService.deleteById(id);
        return ApiResponse.success("删除成功", null);
    }
}
