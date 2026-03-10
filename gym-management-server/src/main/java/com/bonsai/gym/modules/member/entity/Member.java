package com.bonsai.gym.modules.member.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Data
@TableName("member")
public class Member {
    @TableId(type = IdType.AUTO)
    private Long id;
    private String memberNo;
    private String name;
    private Integer gender;
    private String phone;
    private LocalDate birthday;
    private String avatar;
    private Long levelId;
    private Integer status;
    private LocalDateTime registerTime;
    private String remark;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
