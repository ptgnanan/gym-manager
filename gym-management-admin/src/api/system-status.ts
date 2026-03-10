import request from '../utils/request'

export const getSystemStatus = () => request.get('/api/system-status')
