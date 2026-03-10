package com.bonsai.gym.modules.member.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.bonsai.gym.modules.member.entity.MemberOrder;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface MemberOrderMapper extends BaseMapper<MemberOrder> {
}
