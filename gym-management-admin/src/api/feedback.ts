import request from '../utils/request'

export const getFeedbackList = () => request.get('/api/feedback/list')
