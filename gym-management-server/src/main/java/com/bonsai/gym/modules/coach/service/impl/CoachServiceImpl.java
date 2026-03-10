package com.bonsai.gym.modules.coach.service.impl;

import com.baomidou.mybatisplus.core.toolkit.Wrappers;
import com.bonsai.gym.modules.coach.entity.Coach;
import com.bonsai.gym.modules.coach.mapper.CoachMapper;
import com.bonsai.gym.modules.coach.service.CoachService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CoachServiceImpl implements CoachService {

    private final CoachMapper coachMapper;

    @Override
    public List<Coach> listCoaches() {
        return coachMapper.selectList(Wrappers.<Coach>lambdaQuery().orderByDesc(Coach::getId));
    }

    @Override
    public Coach getById(Long id) {
        return coachMapper.selectById(id);
    }

    @Override
    public void save(Coach coach) {
        coachMapper.insert(coach);
    }

    @Override
    public void update(Coach coach) {
        coachMapper.updateById(coach);
    }

    @Override
    public void deleteById(Long id) {
        coachMapper.deleteById(id);
    }
}
