import apiClient from './apiConfig';

export interface Category {
  id: number;
  name: string;
  description?: string;
  products_count?: number;
  created_at?: string;
  updated_at?: string;
}

export interface CreateCategoryRequest {
  name: string;
  description?: string;
}

const categoryService = {
  getAll: async (): Promise<Category[]> => {
    const response = await apiClient.get('/categories');
    return response.data.data || [];
  },

  getById: async (id: number): Promise<Category> => {
    const response = await apiClient.get(`/categories/${id}`);
    return response.data.data;
  },

  create: async (data: CreateCategoryRequest): Promise<Category> => {
    const response = await apiClient.post('/categories', data);
    return response.data.data;
  },

  update: async (id: number, data: CreateCategoryRequest): Promise<Category> => {
    const response = await apiClient.put(`/categories/${id}`, data);
    return response.data.data;
  },

  delete: async (id: number): Promise<any> => {
    const response = await apiClient.delete(`/categories/${id}`);
    return response.data;
  },
};

export default categoryService;
