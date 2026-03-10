package com.bonsai.gym.modules.feedback.service;

import com.bonsai.gym.modules.feedback.entity.BodyMetric;
import com.bonsai.gym.modules.feedback.entity.FeedbackReview;

import java.util.List;

public interface FeedbackService {
    List<FeedbackReview> listReviews();
    FeedbackReview getReviewById(Long id);
    void saveReview(FeedbackReview review);
    void updateReview(FeedbackReview review);
    void deleteReviewById(Long id);
    
    List<BodyMetric> listBodyMetrics();
    BodyMetric getBodyMetricById(Long id);
    void saveBodyMetric(BodyMetric metric);
    void updateBodyMetric(BodyMetric metric);
    void deleteBodyMetricById(Long id);
}
