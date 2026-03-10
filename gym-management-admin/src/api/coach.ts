import request from '../utils/request'

export const getCoachList = () => request.get('/api/coach/list')
export const createCoach = (data: Record<string, unknown>) => request.post('/api/coach', data)
export const updateCoach = (data: Record<string, unknown>) => request.put('/api/coach', data)
export const deleteCoach = (id: number) => request.delete(`/api/coach/${id}`)
