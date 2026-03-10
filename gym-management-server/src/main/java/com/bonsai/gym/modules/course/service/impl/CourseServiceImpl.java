package com.bonsai.gym.modules.course.service.impl;

import com.baomidou.mybatisplus.core.toolkit.Wrappers;
import com.bonsai.gym.modules.course.entity.Course;
import com.bonsai.gym.modules.course.mapper.CourseMapper;
import com.bonsai.gym.modules.course.service.CourseService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CourseServiceImpl implements CourseService {

    private final CourseMapper courseMapper;

    @Override
    public List<Course> listCourses() {
        return courseMapper.selectList(Wrappers.<Course>lambdaQuery().orderByDesc(Course::getId));
    }
}
