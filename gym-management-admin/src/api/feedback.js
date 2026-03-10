import request from '../utils/request';
export const getFeedbackList = () => request.get('/api/feedback/review/list');
export const createFeedback = (data) => request.post('/api/feedback/review', data);
export const updateFeedback = (data) => request.put('/api/feedback/review', data);
export const deleteFeedback = (id) => request.delete(`/api/feedback/review/${id}`);
export const getMetricList = () => request.get('/api/feedback/metric/list');
export const createMetric = (data) => request.post('/api/feedback/metric', data);
export const updateMetric = (data) => request.put('/api/feedback/metric', data);
export const deleteMetric = (id) => request.delete(`/api/feedback/metric/${id}`);
