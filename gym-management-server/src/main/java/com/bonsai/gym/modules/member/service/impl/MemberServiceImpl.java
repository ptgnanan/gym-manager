package com.bonsai.gym.modules.member.service.impl;

import com.baomidou.mybatisplus.core.toolkit.Wrappers;
import com.bonsai.gym.modules.member.entity.Member;
import com.bonsai.gym.modules.member.mapper.MemberMapper;
import com.bonsai.gym.modules.member.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class MemberServiceImpl implements MemberService {

    private final MemberMapper memberMapper;

    @Override
    public List<Member> listMembers() {
        return memberMapper.selectList(Wrappers.<Member>lambdaQuery().orderByDesc(Member::getId));
    }

    @Override
    public Member getById(Long id) {
        return memberMapper.selectById(id);
    }

    @Override
    public void save(Member member) {
        if (member.getStatus() == null) {
            member.setStatus(1);
        }
        if (member.getLevelId() == null) {
            member.setLevelId(1L);
        }
        if (member.getRegisterTime() == null) {
            member.setRegisterTime(LocalDateTime.now());
        }
        memberMapper.insert(member);
    }

    @Override
    public void update(Member member) {
        if (member.getStatus() == null) {
            member.setStatus(1);
        }
        if (member.getLevelId() == null) {
            member.setLevelId(1L);
        }
        memberMapper.updateById(member);
    }

    @Override
    public void deleteById(Long id) {
        memberMapper.deleteById(id);
    }
}
