package com.bonsai.gym.modules.member.service;

import com.bonsai.gym.modules.member.entity.MemberOrder;

import java.util.List;

public interface MemberOrderService {
    List<MemberOrder> listOrders();
    MemberOrder getById(Long id);
    void save(MemberOrder order);
    void update(MemberOrder order);
    void deleteById(Long id);
}
