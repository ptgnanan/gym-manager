package com.bonsai.gym.modules.member.service.impl;

import com.baomidou.mybatisplus.core.toolkit.Wrappers;
import com.bonsai.gym.modules.member.entity.MemberPackage;
import com.bonsai.gym.modules.member.mapper.MemberPackageMapper;
import com.bonsai.gym.modules.member.service.MemberPackageService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class MemberPackageServiceImpl implements MemberPackageService {

    private final MemberPackageMapper memberPackageMapper;

    @Override
    public List<MemberPackage> listPackages() {
        return memberPackageMapper.selectList(Wrappers.<MemberPackage>lambdaQuery().orderByDesc(MemberPackage::getId));
    }

    @Override
    public MemberPackage getById(Long id) {
        return memberPackageMapper.selectById(id);
    }

    @Override
    public void save(MemberPackage memberPackage) {
        memberPackageMapper.insert(memberPackage);
    }

    @Override
    public void update(MemberPackage memberPackage) {
        memberPackageMapper.updateById(memberPackage);
    }
}
