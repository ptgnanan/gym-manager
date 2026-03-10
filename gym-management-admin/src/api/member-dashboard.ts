import request from '../utils/request'

export const getMemberSummary = () => request.get('/api/member-dashboard/summary')
export const getRecentOrders = () => request.get('/api/member-dashboard/recent-orders')
