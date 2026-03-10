package com.bonsai.gym.modules.member.service.impl;

import com.baomidou.mybatisplus.core.toolkit.Wrappers;
import com.bonsai.gym.modules.member.entity.MemberOrder;
import com.bonsai.gym.modules.member.mapper.MemberOrderMapper;
import com.bonsai.gym.modules.member.service.MemberOrderService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class MemberOrderServiceImpl implements MemberOrderService {

    private final MemberOrderMapper memberOrderMapper;

    @Override
    public List<MemberOrder> listOrders() {
        return memberOrderMapper.selectList(Wrappers.<MemberOrder>lambdaQuery().orderByDesc(MemberOrder::getId));
    }

    @Override
    public MemberOrder getById(Long id) {
        return memberOrderMapper.selectById(id);
    }

    @Override
    public void save(MemberOrder order) {
        memberOrderMapper.insert(order);
    }

    @Override
    public void update(MemberOrder order) {
        memberOrderMapper.updateById(order);
    }
}
