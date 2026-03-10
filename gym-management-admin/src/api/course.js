import request from '../utils/request';
export const getCourseList = () => request.get('/api/course/list');
export const createCourse = (data) => request.post('/api/course', data);
export const updateCourse = (data) => request.put('/api/course', data);
export const deleteCourse = (id) => request.delete(`/api/course/${id}`);
