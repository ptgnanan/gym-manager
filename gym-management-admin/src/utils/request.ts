import axios from 'axios'

const request = axios.create({
  baseURL: 'http://localhost:8088',
  timeout: 10000
})

request.interceptors.request.use((config) => {
  return config
})

request.interceptors.response.use((response) => response.data)

export default request
