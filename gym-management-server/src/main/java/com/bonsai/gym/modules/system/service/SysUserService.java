package com.bonsai.gym.modules.system.service;

import com.bonsai.gym.modules.system.entity.SysUser;

public interface SysUserService {
    SysUser findByUsername(String username);
    void register(String username, String password, String nickname, String phone);
}
