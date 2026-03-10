import request from '../utils/request'

export const getMemberList = () => request.get('/api/member/list')
export const getMemberLevelList = () => request.get('/api/member-level/list')
export const getMemberPackageList = () => request.get('/api/member-package/list')
export const getMemberOrderList = () => request.get('/api/member-order/list')
