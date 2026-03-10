import request from '../utils/request'

export const getEquipmentList = () => request.get('/api/equipment/list')
export const createEquipment = (data: Record<string, unknown>) => request.post('/api/equipment', data)
export const updateEquipment = (data: Record<string, unknown>) => request.put('/api/equipment', data)
export const deleteEquipment = (id: number) => request.delete(`/api/equipment/${id}`)
