import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3131'

export const getDevicesAPI = async () => axios.get('/devices')

export const postDeviceAPI = async (device) => axios.post(`/devices`, device)

export const deleteDeviceAPI = async (device) => axios.delete(`/devices/${device.id}`)

export const updateDeviceAPI = async (device) => axios.put(`/devices/${device.id}`,device)
