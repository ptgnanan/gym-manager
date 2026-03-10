import request from '../utils/request'

export const registerUser = (data: Record<string, unknown>) => request.post('/api/auth/register', data)
