import axios from 'axios';

export const client = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
});

export const getEquipmentItems = () => client.get('/v1/equipment-items');
export const getFaculties = () => client.get('/v1/faculties');
