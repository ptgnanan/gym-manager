import request from '../utils/request'

export const getCourseList = () => request.get('/api/course/list')
export const getCoachList = () => request.get('/api/coach/list')
export const getFeedbackList = () => request.get('/api/feedback/list')
export const getAnnouncementList = () => request.get('/api/content/announcements')
