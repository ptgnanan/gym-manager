import request from '../utils/request'

export const getHealthPing = () => request.get('/api/health/ping')
