package com.bonsai.gym.modules.content.service;

import com.bonsai.gym.modules.content.entity.Announcement;
import com.bonsai.gym.modules.content.entity.Banner;

import java.util.List;

public interface ContentService {
    List<Banner> listBanners();
    Banner getBannerById(Long id);
    void saveBanner(Banner banner);
    void updateBanner(Banner banner);
    void deleteBannerById(Long id);
    
    List<Announcement> listAnnouncements();
    Announcement getAnnouncementById(Long id);
    void saveAnnouncement(Announcement announcement);
    void updateAnnouncement(Announcement announcement);
    void deleteAnnouncementById(Long id);
}
