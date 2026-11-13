import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || '/api',
  headers: { Accept: 'application/json' },
  timeout: 10000,
})

export const getProjects = (params) => api.get('/projects/', { params })
export const getSkills = (params) => api.get('/skills/', { params })
export const sendContactMessage = (message) => api.post('/contact/', message)
export const askChatbot = (question) => api.post('/chatbot/', { question })
export const getApiHealth = () => api.get('/health/')

export default api
