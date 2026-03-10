import request from '../utils/request';
export const getCourseSummary = () => request.get('/api/course-dashboard/summary');
export const getTodaySchedules = () => request.get('/api/course-dashboard/today-schedules');
