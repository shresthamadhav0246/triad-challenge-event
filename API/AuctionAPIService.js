import { apiClient } from "./ApiClient"

export const retriveHello = ()=> apiClient.get('/hello')

export const addCategoryApi = (category) => apiClient.post('/categories/add', category)

export const getAllCategoriesApi = () =>
                      apiClient.get('/categories')

export const addEscooterApi  = (data) => 
apiClient.post('/escooters', data, {
  headers: {
    'Content-Type': 'application/json',
  },
})

export const login  = (data) => 
apiClient.post('/users/login', data, {
  headers: {
    'Content-Type': 'application/json',
  },
})
