import request from '../utils/request'

export const getMemberList = () => request.get('/api/member/list')
export const createMember = (data: Record<string, unknown>) => request.post('/api/member', data)
export const updateMember = (data: Record<string, unknown>) => request.put('/api/member', data)
export const deleteMember = (id: number) => request.delete(`/api/member/${id}`)

export const getMemberLevelList = () => request.get('/api/member-level/list')
export const createMemberLevel = (data: Record<string, unknown>) => request.post('/api/member-level', data)
export const updateMemberLevel = (data: Record<string, unknown>) => request.put('/api/member-level', data)
export const deleteMemberLevel = (id: number) => request.delete(`/api/member-level/${id}`)

export const getMemberPackageList = () => request.get('/api/member-package/list')
export const createMemberPackage = (data: Record<string, unknown>) => request.post('/api/member-package', data)
export const updateMemberPackage = (data: Record<string, unknown>) => request.put('/api/member-package', data)
export const deleteMemberPackage = (id: number) => request.delete(`/api/member-package/${id}`)

export const getMemberOrderList = () => request.get('/api/member-order/list')
export const createMemberOrder = (data: Record<string, unknown>) => request.post('/api/member-order', data)
export const updateMemberOrder = (data: Record<string, unknown>) => request.put('/api/member-order', data)
export const deleteMemberOrder = (id: number) => request.delete(`/api/member-order/${id}`)
