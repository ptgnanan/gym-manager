import request from '../utils/request'

export const getContentSummary = () => request.get('/api/content-dashboard/summary')
