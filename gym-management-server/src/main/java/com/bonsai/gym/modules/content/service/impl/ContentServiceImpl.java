package com.bonsai.gym.modules.content.service.impl;

import com.baomidou.mybatisplus.core.toolkit.Wrappers;
import com.bonsai.gym.modules.content.entity.Announcement;
import com.bonsai.gym.modules.content.entity.Banner;
import com.bonsai.gym.modules.content.mapper.AnnouncementMapper;
import com.bonsai.gym.modules.content.mapper.BannerMapper;
import com.bonsai.gym.modules.content.service.ContentService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ContentServiceImpl implements ContentService {

    private final BannerMapper bannerMapper;
    private final AnnouncementMapper announcementMapper;

    @Override
    public List<Banner> listBanners() {
        return bannerMapper.selectList(Wrappers.<Banner>lambdaQuery().orderByAsc(Banner::getSortNo));
    }

    @Override
    public Banner getBannerById(Long id) {
        return bannerMapper.selectById(id);
    }

    @Override
    public void saveBanner(Banner banner) {
        bannerMapper.insert(banner);
    }

    @Override
    public void updateBanner(Banner banner) {
        bannerMapper.updateById(banner);
    }

    @Override
    public void deleteBannerById(Long id) {
        bannerMapper.deleteById(id);
    }

    @Override
    public List<Announcement> listAnnouncements() {
        return announcementMapper.selectList(Wrappers.<Announcement>lambdaQuery().orderByDesc(Announcement::getId));
    }

    @Override
    public Announcement getAnnouncementById(Long id) {
        return announcementMapper.selectById(id);
    }

    @Override
    public void saveAnnouncement(Announcement announcement) {
        if (announcement.getPublishStatus() == null) {
            announcement.setPublishStatus("PUBLISHED");
        }
        announcementMapper.insert(announcement);
    }

    @Override
    public void updateAnnouncement(Announcement announcement) {
        if (announcement.getPublishStatus() == null) {
            announcement.setPublishStatus("PUBLISHED");
        }
        announcementMapper.updateById(announcement);
    }

    @Override
    public void deleteAnnouncementById(Long id) {
        announcementMapper.deleteById(id);
    }
}
