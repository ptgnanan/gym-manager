package com.bonsai.gym.modules.coach.entity;

import com.baomidou.mybatisplus.annotation.*;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@TableName("coach")
public class Coach {

    @TableId(type = IdType.AUTO)
    private Long id;

    private String coachNo;

    private String name;

    private Integer gender;

    private String phone;

    private String specialty;

    private String introduction;

    private Integer status;

    @TableField(fill = FieldFill.INSERT)
    private LocalDateTime createdAt;
}
