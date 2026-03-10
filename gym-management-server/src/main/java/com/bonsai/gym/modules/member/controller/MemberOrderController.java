package com.bonsai.gym.modules.member.controller;

import com.bonsai.gym.common.api.ApiResponse;
import com.bonsai.gym.modules.member.entity.MemberOrder;
import com.bonsai.gym.modules.member.service.MemberOrderService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/member-order")
@RequiredArgsConstructor
public class MemberOrderController {

    private final MemberOrderService memberOrderService;

    @GetMapping("/list")
    public ApiResponse<List<MemberOrder>> list() {
        return ApiResponse.success(memberOrderService.listOrders());
    }

    @GetMapping("/{id}")
    public ApiResponse<MemberOrder> detail(@PathVariable Long id) {
        return ApiResponse.success(memberOrderService.getById(id));
    }

    @PostMapping
    public ApiResponse<Void> save(@RequestBody MemberOrder order) {
        memberOrderService.save(order);
        return ApiResponse.success("保存成功", null);
    }

    @PutMapping
    public ApiResponse<Void> update(@RequestBody MemberOrder order) {
        memberOrderService.update(order);
        return ApiResponse.success("更新成功", null);
    }
}
