package com.bonsai.gym.modules.feedback.entity;

import com.baomidou.mybatisplus.annotation.*;
import lombok.Data;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Data
@TableName("body_metric")
public class BodyMetric {

    @TableId(type = IdType.AUTO)
    private Long id;

    private Long memberId;

    private Long coachId;

    private BigDecimal heightCm;

    private BigDecimal weightKg;

    private BigDecimal bodyFatRate;

    private BigDecimal bmi;

    private LocalDateTime measureTime;

    private String remark;
}
