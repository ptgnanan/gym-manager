package com.bonsai.gym.modules.member.controller;

import com.bonsai.gym.common.api.ApiResponse;
import com.bonsai.gym.modules.member.entity.MemberLevel;
import com.bonsai.gym.modules.member.service.MemberLevelService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/member-level")
@RequiredArgsConstructor
public class MemberLevelController {

    private final MemberLevelService memberLevelService;

    @GetMapping("/list")
    public ApiResponse<List<MemberLevel>> list() {
        return ApiResponse.success(memberLevelService.listLevels());
    }

    @GetMapping("/{id}")
    public ApiResponse<MemberLevel> detail(@PathVariable Long id) {
        return ApiResponse.success(memberLevelService.getById(id));
    }

    @PostMapping
    public ApiResponse<Void> save(@RequestBody MemberLevel level) {
        memberLevelService.save(level);
        return ApiResponse.success("保存成功", null);
    }

    @PutMapping
    public ApiResponse<Void> update(@RequestBody MemberLevel level) {
        memberLevelService.update(level);
        return ApiResponse.success("更新成功", null);
    }

    @DeleteMapping("/{id}")
    public ApiResponse<Void> delete(@PathVariable Long id) {
        memberLevelService.deleteById(id);
        return ApiResponse.success("删除成功", null);
    }
}
