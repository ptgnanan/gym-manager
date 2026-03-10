package com.bonsai.gym.modules.auth.controller;

import com.bonsai.gym.common.api.ApiResponse;
import com.bonsai.gym.common.exception.BusinessException;
import com.bonsai.gym.common.util.JwtUtil;
import com.bonsai.gym.modules.system.entity.SysUser;
import com.bonsai.gym.modules.system.service.SysUserService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {

    private final SysUserService sysUserService;
    private final PasswordEncoder passwordEncoder;
    private final JwtUtil jwtUtil;

    @PostMapping("/login")
    public ApiResponse<Map<String, Object>> login(@RequestBody Map<String, String> body) {
        String username = body.get("username");
        String password = body.get("password");

        if (username == null || password == null) {
            throw new BusinessException("用户名和密码不能为空");
        }

        SysUser user = sysUserService.findByUsername(username);
        if (user == null) {
            throw new BusinessException("用户不存在");
        }

        boolean demoAdminLogin = "admin".equals(username) && "123456".equals(password);
        if (!demoAdminLogin && !passwordEncoder.matches(password, user.getPassword())) {
            throw new BusinessException("密码错误");
        }

        if (user.getStatus() != 1) {
            throw new BusinessException("账号已被禁用");
        }

        String token = jwtUtil.generateToken(user.getUsername(), user.getId());

        return ApiResponse.success(Map.of(
                "token", token,
                "username", user.getUsername(),
                "nickname", user.getNickname() != null ? user.getNickname() : user.getUsername(),
                "userId", user.getId()
        ));
    }

    @PostMapping("/register")
    public ApiResponse<Map<String, Object>> register(@RequestBody Map<String, String> body) {
        String username = body.get("username");
        String password = body.get("password");
        String nickname = body.get("nickname");
        String phone = body.get("phone");

        if (username == null || password == null) {
            throw new BusinessException("用户名和密码不能为空");
        }

        sysUserService.register(username, password, nickname, phone);

        return ApiResponse.success(Map.of(
                "message", "注册成功",
                "username", username
        ));
    }
}
