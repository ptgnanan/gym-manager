import request from '../utils/request';
export const getCoachList = () => request.get('/api/coach/list');
export const createCoach = (data) => request.post('/api/coach', data);
export const updateCoach = (data) => request.put('/api/coach', data);
export const deleteCoach = (id) => request.delete(`/api/coach/${id}`);
