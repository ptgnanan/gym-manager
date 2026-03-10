package com.bonsai.gym.modules.member.service.impl;

import com.baomidou.mybatisplus.core.toolkit.Wrappers;
import com.bonsai.gym.modules.member.entity.MemberLevel;
import com.bonsai.gym.modules.member.mapper.MemberLevelMapper;
import com.bonsai.gym.modules.member.service.MemberLevelService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class MemberLevelServiceImpl implements MemberLevelService {

    private final MemberLevelMapper memberLevelMapper;

    @Override
    public List<MemberLevel> listLevels() {
        return memberLevelMapper.selectList(Wrappers.<MemberLevel>lambdaQuery().orderByAsc(MemberLevel::getLevelValue));
    }

    @Override
    public MemberLevel getById(Long id) {
        return memberLevelMapper.selectById(id);
    }

    @Override
    public void save(MemberLevel level) {
        if (level.getStatus() == null) {
            level.setStatus(1);
        }
        memberLevelMapper.insert(level);
    }

    @Override
    public void update(MemberLevel level) {
        if (level.getStatus() == null) {
            level.setStatus(1);
        }
        memberLevelMapper.updateById(level);
    }

    @Override
    public void deleteById(Long id) {
        memberLevelMapper.deleteById(id);
    }
}
