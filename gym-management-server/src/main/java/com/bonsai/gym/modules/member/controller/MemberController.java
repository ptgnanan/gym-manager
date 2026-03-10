package com.bonsai.gym.modules.member.controller;

import com.bonsai.gym.common.api.ApiResponse;
import com.bonsai.gym.modules.member.entity.Member;
import com.bonsai.gym.modules.member.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/member")
@RequiredArgsConstructor
public class MemberController {

    private final MemberService memberService;

    @GetMapping("/list")
    public ApiResponse<List<Member>> list() {
        return ApiResponse.success(memberService.listMembers());
    }

    @GetMapping("/{id}")
    public ApiResponse<Member> detail(@PathVariable Long id) {
        return ApiResponse.success(memberService.getById(id));
    }

    @PostMapping
    public ApiResponse<Void> save(@RequestBody Member member) {
        memberService.save(member);
        return ApiResponse.success("保存成功", null);
    }

    @PutMapping
    public ApiResponse<Void> update(@RequestBody Member member) {
        memberService.update(member);
        return ApiResponse.success("更新成功", null);
    }

    @DeleteMapping("/{id}")
    public ApiResponse<Void> delete(@PathVariable Long id) {
        memberService.deleteById(id);
        return ApiResponse.success("删除成功", null);
    }
}
