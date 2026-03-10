package com.bonsai.gym.modules.course.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@TableName("course")
public class Course {
    @TableId(type = IdType.AUTO)
    private Long id;
    private String courseName;
    private String courseType;
    private Long categoryId;
    private Long coachId;
    private Integer durationMinutes;
    private Integer capacity;
    private String description;
    private Integer status;
    private LocalDateTime createdAt;
}
