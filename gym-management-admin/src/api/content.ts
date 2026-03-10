import request from '../utils/request'

export const getAnnouncements = () => request.get('/api/content/announcements')
