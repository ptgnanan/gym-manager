import request from '../utils/request'

export const getEquipmentList = () => request.get('/api/equipment/list')
