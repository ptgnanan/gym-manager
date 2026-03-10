package com.bonsai.gym.modules.coach.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.bonsai.gym.modules.coach.entity.Coach;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface CoachMapper extends BaseMapper<Coach> {
}
