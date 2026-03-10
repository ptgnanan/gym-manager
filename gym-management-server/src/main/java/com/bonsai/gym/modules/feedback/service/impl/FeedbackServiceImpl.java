package com.bonsai.gym.modules.feedback.service.impl;

import com.baomidou.mybatisplus.core.toolkit.Wrappers;
import com.bonsai.gym.modules.feedback.entity.BodyMetric;
import com.bonsai.gym.modules.feedback.entity.FeedbackReview;
import com.bonsai.gym.modules.feedback.mapper.BodyMetricMapper;
import com.bonsai.gym.modules.feedback.mapper.FeedbackReviewMapper;
import com.bonsai.gym.modules.feedback.service.FeedbackService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class FeedbackServiceImpl implements FeedbackService {

    private final FeedbackReviewMapper feedbackReviewMapper;
    private final BodyMetricMapper bodyMetricMapper;

    @Override
    public List<FeedbackReview> listReviews() {
        return feedbackReviewMapper.selectList(Wrappers.<FeedbackReview>lambdaQuery().orderByDesc(FeedbackReview::getId));
    }

    @Override
    public FeedbackReview getReviewById(Long id) {
        return feedbackReviewMapper.selectById(id);
    }

    @Override
    public void saveReview(FeedbackReview review) {
        feedbackReviewMapper.insert(review);
    }

    @Override
    public void updateReview(FeedbackReview review) {
        feedbackReviewMapper.updateById(review);
    }

    @Override
    public void deleteReviewById(Long id) {
        feedbackReviewMapper.deleteById(id);
    }

    @Override
    public List<BodyMetric> listBodyMetrics() {
        return bodyMetricMapper.selectList(Wrappers.<BodyMetric>lambdaQuery().orderByDesc(BodyMetric::getId));
    }

    @Override
    public BodyMetric getBodyMetricById(Long id) {
        return bodyMetricMapper.selectById(id);
    }

    @Override
    public void saveBodyMetric(BodyMetric metric) {
        bodyMetricMapper.insert(metric);
    }

    @Override
    public void updateBodyMetric(BodyMetric metric) {
        bodyMetricMapper.updateById(metric);
    }

    @Override
    public void deleteBodyMetricById(Long id) {
        bodyMetricMapper.deleteById(id);
    }
}
