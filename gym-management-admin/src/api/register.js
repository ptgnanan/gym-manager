import request from '../utils/request';
export const registerUser = (data) => request.post('/api/auth/register', data);
