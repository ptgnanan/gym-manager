import request from '../utils/request'

export const loginApi = (data: Record<string, unknown>) => request.post('/api/auth/login', data)
export const registerApi = (data: Record<string, unknown>) => request.post('/api/auth/register', data)
