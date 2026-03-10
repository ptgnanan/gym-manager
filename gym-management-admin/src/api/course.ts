import request from '../utils/request'

export const getCourseList = () => request.get('/api/course/list')
export const createCourse = (data: Record<string, unknown>) => request.post('/api/course', data)
export const updateCourse = (data: Record<string, unknown>) => request.put('/api/course', data)
export const deleteCourse = (id: number) => request.delete(`/api/course/${id}`)
