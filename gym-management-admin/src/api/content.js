import request from '../utils/request';
export const getAnnouncements = () => request.get('/api/content/announcement/list');
export const createAnnouncement = (data) => request.post('/api/content/announcement', data);
export const updateAnnouncement = (data) => request.put('/api/content/announcement', data);
export const deleteAnnouncement = (id) => request.delete(`/api/content/announcement/${id}`);
export const getBanners = () => request.get('/api/content/banner/list');
