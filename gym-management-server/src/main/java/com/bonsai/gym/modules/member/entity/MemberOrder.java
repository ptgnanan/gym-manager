package com.bonsai.gym.modules.member.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Data
@TableName("member_order")
public class MemberOrder {
    @TableId(type = IdType.AUTO)
    private Long id;
    private String orderNo;
    private Long memberId;
    private Long packageId;
    private BigDecimal amount;
    private BigDecimal discountAmount;
    private BigDecimal payableAmount;
    private String paymentStatus;
    private String orderStatus;
    private String auditStatus;
    private String paymentMethod;
    private LocalDateTime paidAt;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
