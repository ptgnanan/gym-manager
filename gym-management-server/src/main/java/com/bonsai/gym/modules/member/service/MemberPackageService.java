package com.bonsai.gym.modules.member.service;

import com.bonsai.gym.modules.member.entity.MemberPackage;

import java.util.List;

public interface MemberPackageService {
    List<MemberPackage> listPackages();
    MemberPackage getById(Long id);
    void save(MemberPackage memberPackage);
    void update(MemberPackage memberPackage);
}
