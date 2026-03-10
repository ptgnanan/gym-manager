package com.bonsai.gym.modules.coach.controller;

import com.bonsai.gym.common.api.ApiResponse;
import com.bonsai.gym.modules.coach.entity.Coach;
import com.bonsai.gym.modules.coach.service.CoachService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/coach")
@RequiredArgsConstructor
public class CoachController {

    private final CoachService coachService;

    @GetMapping("/list")
    public ApiResponse<List<Coach>> list() {
        return ApiResponse.success(coachService.listCoaches());
    }

    @GetMapping("/{id}")
    public ApiResponse<Coach> detail(@PathVariable Long id) {
        return ApiResponse.success(coachService.getById(id));
    }

    @PostMapping
    public ApiResponse<Void> save(@RequestBody Coach coach) {
        coachService.save(coach);
        return ApiResponse.success("保存成功", null);
    }

    @PutMapping
    public ApiResponse<Void> update(@RequestBody Coach coach) {
        coachService.update(coach);
        return ApiResponse.success("更新成功", null);
    }

    @DeleteMapping("/{id}")
    public ApiResponse<Void> delete(@PathVariable Long id) {
        coachService.deleteById(id);
        return ApiResponse.success("删除成功", null);
    }
}
