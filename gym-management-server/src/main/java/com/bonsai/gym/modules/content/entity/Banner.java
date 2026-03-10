package com.bonsai.gym.modules.content.entity;

import com.baomidou.mybatisplus.annotation.*;
import lombok.Data;

@Data
@TableName("banner")
public class Banner {

    @TableId(type = IdType.AUTO)
    private Long id;

    private String title;

    private String imageUrl;

    private String linkUrl;

    private Integer sortNo;

    private Integer status;
}
