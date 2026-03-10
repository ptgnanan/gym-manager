import request from '../utils/request'

export const getFeedbackList = () => request.get('/api/feedback/review/list')
export const createFeedback = (data: Record<string, unknown>) => request.post('/api/feedback/review', data)
export const updateFeedback = (data: Record<string, unknown>) => request.put('/api/feedback/review', data)
export const deleteFeedback = (id: number) => request.delete(`/api/feedback/review/${id}`)

export const getMetricList = () => request.get('/api/feedback/metric/list')
export const createMetric = (data: Record<string, unknown>) => request.post('/api/feedback/metric', data)
export const updateMetric = (data: Record<string, unknown>) => request.put('/api/feedback/metric', data)
export const deleteMetric = (id: number) => request.delete(`/api/feedback/metric/${id}`)
