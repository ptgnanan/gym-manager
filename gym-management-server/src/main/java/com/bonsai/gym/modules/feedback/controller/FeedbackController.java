package com.bonsai.gym.modules.feedback.controller;

import com.bonsai.gym.common.api.ApiResponse;
import com.bonsai.gym.modules.feedback.entity.BodyMetric;
import com.bonsai.gym.modules.feedback.entity.FeedbackReview;
import com.bonsai.gym.modules.feedback.service.FeedbackService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/feedback")
@RequiredArgsConstructor
public class FeedbackController {

    private final FeedbackService feedbackService;

    @GetMapping("/review/list")
    public ApiResponse<List<FeedbackReview>> listReviews() {
        return ApiResponse.success(feedbackService.listReviews());
    }

    @GetMapping("/list")
    public ApiResponse<List<FeedbackReview>> list() {
        return ApiResponse.success(feedbackService.listReviews());
    }

    @GetMapping("/review/{id}")
    public ApiResponse<FeedbackReview> getReview(@PathVariable Long id) {
        return ApiResponse.success(feedbackService.getReviewById(id));
    }

    @PostMapping("/review")
    public ApiResponse<Void> saveReview(@RequestBody FeedbackReview review) {
        feedbackService.saveReview(review);
        return ApiResponse.success("保存成功", null);
    }

    @PutMapping("/review")
    public ApiResponse<Void> updateReview(@RequestBody FeedbackReview review) {
        feedbackService.updateReview(review);
        return ApiResponse.success("更新成功", null);
    }

    @DeleteMapping("/review/{id}")
    public ApiResponse<Void> deleteReview(@PathVariable Long id) {
        feedbackService.deleteReviewById(id);
        return ApiResponse.success("删除成功", null);
    }

    @GetMapping("/metric/list")
    public ApiResponse<List<BodyMetric>> listMetrics() {
        return ApiResponse.success(feedbackService.listBodyMetrics());
    }

    @GetMapping("/metric/{id}")
    public ApiResponse<BodyMetric> getMetric(@PathVariable Long id) {
        return ApiResponse.success(feedbackService.getBodyMetricById(id));
    }

    @PostMapping("/metric")
    public ApiResponse<Void> saveMetric(@RequestBody BodyMetric metric) {
        feedbackService.saveBodyMetric(metric);
        return ApiResponse.success("保存成功", null);
    }

    @PutMapping("/metric")
    public ApiResponse<Void> updateMetric(@RequestBody BodyMetric metric) {
        feedbackService.updateBodyMetric(metric);
        return ApiResponse.success("更新成功", null);
    }

    @DeleteMapping("/metric/{id}")
    public ApiResponse<Void> deleteMetric(@PathVariable Long id) {
        feedbackService.deleteBodyMetricById(id);
        return ApiResponse.success("删除成功", null);
    }
}
