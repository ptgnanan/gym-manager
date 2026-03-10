package com.bonsai.gym.modules.member.controller;

import com.bonsai.gym.common.api.ApiResponse;
import com.bonsai.gym.modules.member.entity.MemberPackage;
import com.bonsai.gym.modules.member.service.MemberPackageService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/member-package")
@RequiredArgsConstructor
public class MemberPackageController {

    private final MemberPackageService memberPackageService;

    @GetMapping("/list")
    public ApiResponse<List<MemberPackage>> list() {
        return ApiResponse.success(memberPackageService.listPackages());
    }

    @GetMapping("/{id}")
    public ApiResponse<MemberPackage> detail(@PathVariable Long id) {
        return ApiResponse.success(memberPackageService.getById(id));
    }

    @PostMapping
    public ApiResponse<Void> save(@RequestBody MemberPackage memberPackage) {
        memberPackageService.save(memberPackage);
        return ApiResponse.success("保存成功", null);
    }

    @PutMapping
    public ApiResponse<Void> update(@RequestBody MemberPackage memberPackage) {
        memberPackageService.update(memberPackage);
        return ApiResponse.success("更新成功", null);
    }

    @DeleteMapping("/{id}")
    public ApiResponse<Void> delete(@PathVariable Long id) {
        memberPackageService.deleteById(id);
        return ApiResponse.success("删除成功", null);
    }
}
