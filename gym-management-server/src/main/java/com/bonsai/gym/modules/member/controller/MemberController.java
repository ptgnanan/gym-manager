package com.bonsai.gym.modules.member.controller;

import com.bonsai.gym.common.api.ApiResponse;
import com.bonsai.gym.modules.member.entity.Member;
import com.bonsai.gym.modules.member.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
}
