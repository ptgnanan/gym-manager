package com.bonsai.gym.modules.member.service.impl;

import com.baomidou.mybatisplus.core.toolkit.Wrappers;
import com.bonsai.gym.modules.member.entity.Member;
import com.bonsai.gym.modules.member.mapper.MemberMapper;
import com.bonsai.gym.modules.member.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class MemberServiceImpl implements MemberService {

    private final MemberMapper memberMapper;

    @Override
    public List<Member> listMembers() {
        return memberMapper.selectList(Wrappers.<Member>lambdaQuery().orderByDesc(Member::getId));
    }
}
