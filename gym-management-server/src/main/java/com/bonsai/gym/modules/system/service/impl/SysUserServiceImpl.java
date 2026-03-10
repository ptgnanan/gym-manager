package com.bonsai.gym.modules.system.service.impl;

import com.baomidou.mybatisplus.core.toolkit.Wrappers;
import com.bonsai.gym.common.exception.BusinessException;
import com.bonsai.gym.modules.system.entity.SysUser;
import com.bonsai.gym.modules.system.mapper.SysUserMapper;
import com.bonsai.gym.modules.system.service.SysUserService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class SysUserServiceImpl implements SysUserService {

    private final SysUserMapper sysUserMapper;
    private final PasswordEncoder passwordEncoder;

    @Override
    public SysUser findByUsername(String username) {
        return sysUserMapper.selectOne(
                Wrappers.<SysUser>lambdaQuery()
                        .eq(SysUser::getUsername, username)
        );
    }

    @Override
    public void register(String username, String password, String nickname, String phone) {
        SysUser existing = findByUsername(username);
        if (existing != null) {
            throw new BusinessException("用户名已存在");
        }

        SysUser user = new SysUser();
        user.setUsername(username);
        user.setPassword(passwordEncoder.encode(password));
        user.setNickname(nickname);
        user.setPhone(phone);
        user.setUserType("ADMIN");
        user.setStatus(1);

        sysUserMapper.insert(user);
    }
}
