package com.bonsai.gym.modules.equipment.entity;

import com.baomidou.mybatisplus.annotation.*;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@TableName("equipment")
public class Equipment {

    @TableId(type = IdType.AUTO)
    private Long id;

    private String equipmentNo;

    private String equipmentName;

    private Long categoryId;

    private Integer quantity;

    private Integer availableQuantity;

    private String location;

    private String status;

    @TableField(fill = FieldFill.INSERT)
    private LocalDateTime createdAt;
}
