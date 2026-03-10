package com.bonsai.gym.modules.content.controller;

import com.bonsai.gym.common.api.ApiResponse;
import com.bonsai.gym.modules.content.entity.Announcement;
import com.bonsai.gym.modules.content.entity.Banner;
import com.bonsai.gym.modules.content.service.ContentService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/content")
@RequiredArgsConstructor
public class ContentController {

    private final ContentService contentService;

    @GetMapping("/banner/list")
    public ApiResponse<List<Banner>> listBanners() {
        return ApiResponse.success(contentService.listBanners());
    }

    @GetMapping("/banner/{id}")
    public ApiResponse<Banner> getBanner(@PathVariable Long id) {
        return ApiResponse.success(contentService.getBannerById(id));
    }

    @PostMapping("/banner")
    public ApiResponse<Void> saveBanner(@RequestBody Banner banner) {
        contentService.saveBanner(banner);
        return ApiResponse.success("保存成功", null);
    }

    @PutMapping("/banner")
    public ApiResponse<Void> updateBanner(@RequestBody Banner banner) {
        contentService.updateBanner(banner);
        return ApiResponse.success("更新成功", null);
    }

    @DeleteMapping("/banner/{id}")
    public ApiResponse<Void> deleteBanner(@PathVariable Long id) {
        contentService.deleteBannerById(id);
        return ApiResponse.success("删除成功", null);
    }

    @GetMapping("/announcement/list")
    public ApiResponse<List<Announcement>> listAnnouncements() {
        return ApiResponse.success(contentService.listAnnouncements());
    }

    @GetMapping("/announcements")
    public ApiResponse<List<Announcement>> listAnnouncementsAlias() {
        return ApiResponse.success(contentService.listAnnouncements());
    }

    @GetMapping("/announcement/{id}")
    public ApiResponse<Announcement> getAnnouncement(@PathVariable Long id) {
        return ApiResponse.success(contentService.getAnnouncementById(id));
    }

    @PostMapping("/announcement")
    public ApiResponse<Void> saveAnnouncement(@RequestBody Announcement announcement) {
        contentService.saveAnnouncement(announcement);
        return ApiResponse.success("保存成功", null);
    }

    @PutMapping("/announcement")
    public ApiResponse<Void> updateAnnouncement(@RequestBody Announcement announcement) {
        contentService.updateAnnouncement(announcement);
        return ApiResponse.success("更新成功", null);
    }

    @DeleteMapping("/announcement/{id}")
    public ApiResponse<Void> deleteAnnouncement(@PathVariable Long id) {
        contentService.deleteAnnouncementById(id);
        return ApiResponse.success("删除成功", null);
    }
}
