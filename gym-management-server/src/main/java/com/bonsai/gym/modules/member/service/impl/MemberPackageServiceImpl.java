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
        normalize(memberPackage);
        memberPackageMapper.insert(memberPackage);
    }

    @Override
    public void update(MemberPackage memberPackage) {
        normalize(memberPackage);
        memberPackageMapper.updateById(memberPackage);
    }

    @Override
    public void deleteById(Long id) {
        memberPackageMapper.deleteById(id);
    }

    private void normalize(MemberPackage memberPackage) {
        if (memberPackage.getStatus() == null) {
            memberPackage.setStatus(1);
        }
        if (memberPackage.getPackageType() == null) {
            memberPackage.setPackageType("TIME_BASED");
        } else if ("TIME".equalsIgnoreCase(memberPackage.getPackageType())) {
            memberPackage.setPackageType("TIME_BASED");
        } else if ("COUNT".equalsIgnoreCase(memberPackage.getPackageType())) {
            memberPackage.setPackageType("SESSION_BASED");
        }
    }
}
