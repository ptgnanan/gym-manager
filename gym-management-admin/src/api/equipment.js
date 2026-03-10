import request from '../utils/request';
export const getEquipmentList = () => request.get('/api/equipment/list');
export const createEquipment = (data) => request.post('/api/equipment', data);
export const updateEquipment = (data) => request.put('/api/equipment', data);
export const deleteEquipment = (id) => request.delete(`/api/equipment/${id}`);
