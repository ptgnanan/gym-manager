import request from '../utils/request'

export const getAnnouncements = () => request.get('/api/content/announcement/list')
export const createAnnouncement = (data: Record<string, unknown>) => request.post('/api/content/announcement', data)
export const updateAnnouncement = (data: Record<string, unknown>) => request.put('/api/content/announcement', data)
export const deleteAnnouncement = (id: number) => request.delete(`/api/content/announcement/${id}`)
export const getBanners = () => request.get('/api/content/banner/list')
