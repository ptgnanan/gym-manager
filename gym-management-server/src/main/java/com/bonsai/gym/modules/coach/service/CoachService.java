package com.bonsai.gym.modules.coach.service;

import com.bonsai.gym.modules.coach.entity.Coach;

import java.util.List;

public interface CoachService {
    List<Coach> listCoaches();
    Coach getById(Long id);
    void save(Coach coach);
    void update(Coach coach);
    void deleteById(Long id);
}
