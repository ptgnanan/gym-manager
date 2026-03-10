package com.bonsai.gym.modules.system.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.bonsai.gym.modules.system.entity.SysUser;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface SysUserMapper extends BaseMapper<SysUser> {
}
