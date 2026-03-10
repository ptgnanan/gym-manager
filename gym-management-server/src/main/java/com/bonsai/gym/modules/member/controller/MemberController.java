package com.bonsai.gym.modules.member.controller;

import com.bonsai.gym.common.api.ApiResponse;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/member")
public class MemberController {

    @GetMapping("/modules")
    public ApiResponse<List<Map<String, String>>> modules() {
        return ApiResponse.success(List.of(
                Map.of("name", "member", "desc", "会员管理"),
                Map.of("name", "level", "desc", "会员等级"),
                Map.of("name", "package", "desc", "会员套餐"),
                Map.of("name", "order", "desc", "会员订单"),
                Map.of("name", "recharge", "desc", "充值记录")
        ));
    }
}
