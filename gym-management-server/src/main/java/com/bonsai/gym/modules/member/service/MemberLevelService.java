package com.bonsai.gym.modules.member.service;

import com.bonsai.gym.modules.member.entity.MemberLevel;

import java.util.List;

public interface MemberLevelService {
    List<MemberLevel> listLevels();
    MemberLevel getById(Long id);
    void save(MemberLevel level);
    void update(MemberLevel level);
    void deleteById(Long id);
}
