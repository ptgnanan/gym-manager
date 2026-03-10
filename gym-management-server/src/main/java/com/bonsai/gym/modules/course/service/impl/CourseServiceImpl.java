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

    @Override
    public Course getById(Long id) {
        return courseMapper.selectById(id);
    }

    @Override
    public void save(Course course) {
        if (course.getCourseType() == null) {
            course.setCourseType("GROUP");
        }
        if (course.getDurationMinutes() == null) {
            course.setDurationMinutes(60);
        }
        if (course.getCapacity() == null) {
            course.setCapacity(20);
        }
        if (course.getStatus() == null) {
            course.setStatus(1);
        }
        courseMapper.insert(course);
    }

    @Override
    public void update(Course course) {
        if (course.getDurationMinutes() == null) {
            course.setDurationMinutes(60);
        }
        if (course.getCapacity() == null) {
            course.setCapacity(20);
        }
        if (course.getStatus() == null) {
            course.setStatus(1);
        }
        courseMapper.updateById(course);
    }

    @Override
    public void deleteById(Long id) {
        courseMapper.deleteById(id);
    }
}
