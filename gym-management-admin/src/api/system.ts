import request from '../utils/request'

export const getSystemHealth = () => request.get('/api/health/ping')
