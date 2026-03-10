import request from '../utils/request';
export const getEquipmentSummary = () => request.get('/api/equipment-dashboard/summary');
