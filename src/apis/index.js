import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3131'

export const getDevicesAPI = async () => axios.get('/devices')

export const postDeviceAPI = async (device) => axios.post(`/devices`, device)

export const deleteDeviceAPI = async (device) => axios.delete(`/devices/${device.id}`)

export const updateDeviceAPI = async (device) => axios.put(`/devices/${device.id}`,device)
/*

export const getUserByIdAPI = async (id) => axios.get(`/users/${id}`)
export const updateUserAPI = async (user) => axios.put(`/users/${user.id}`, user)

export const deleteUserByIdAPI = async (id) => axios.delete(`/users/${id}`)
*/