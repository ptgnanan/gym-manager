package com.bonsai.gym.modules.feedback.entity;

import com.baomidou.mybatisplus.annotation.*;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@TableName("feedback_review")
public class FeedbackReview {

    @TableId(type = IdType.AUTO)
    private Long id;

    private Long memberId;

    private String targetType;

    private Long targetId;

    private Integer rating;

    private String content;

    private String auditStatus;

    @TableField(fill = FieldFill.INSERT)
    private LocalDateTime createdAt;
}
