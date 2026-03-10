import request from '../utils/request'

export const getCoachList = () => request.get('/api/coach/list')
