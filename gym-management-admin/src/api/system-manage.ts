import request from '../utils/request'

export const getSystemUsers = () => request.get('/api/system-manage/users')
export const getSystemRoles = () => request.get('/api/system-manage/roles')
