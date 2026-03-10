package com.bonsai.gym.modules.content.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.bonsai.gym.modules.content.entity.Announcement;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface AnnouncementMapper extends BaseMapper<Announcement> {
}
