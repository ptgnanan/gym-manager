package com.bonsai.gym.modules.course.service;

import com.bonsai.gym.modules.course.entity.Course;

import java.util.List;

public interface CourseService {
    List<Course> listCourses();
    Course getById(Long id);
    void save(Course course);
    void update(Course course);
    void deleteById(Long id);
}
