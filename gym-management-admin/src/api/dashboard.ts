import request from '../utils/request'

export const getHealthPing = () => request.get('/api/health/ping')
export const getDashboardStats = () => request.get('/api/dashboard/stats')
