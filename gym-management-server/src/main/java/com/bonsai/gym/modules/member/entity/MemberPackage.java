package com.bonsai.gym.modules.member.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Data
@TableName("member_package")
public class MemberPackage {
    @TableId(type = IdType.AUTO)
    private Long id;
    private String packageName;
    private String packageType;
    private BigDecimal price;
    private Integer durationDays;
    private Integer sessionCount;
    private String description;
    private Integer status;
    private LocalDateTime createdAt;
}
