package com.bonsai.gym.modules.member.service;

import com.bonsai.gym.modules.member.entity.Member;

import java.util.List;

public interface MemberService {
    List<Member> listMembers();
    Member getById(Long id);
    void save(Member member);
    void update(Member member);
    void deleteById(Long id);
}
