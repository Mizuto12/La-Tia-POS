import apiClient from './apiConfig';

export interface AuthResponse {
  success: boolean;
  message: string;
  data: {
    user: {
      id: number;
      username: string;
      email: string;
      role_id: number;
      full_name: string;
      is_active: boolean;
      created_at: string;
      updated_at: string;
      role: any;
    };
    token: string;
  };
}

export interface User {
  id: number;
  username: string;
  email: string;
  role_id: number;
  full_name: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
  role: any;
}

const authService = {
  login: async (username: string, password: string): Promise<AuthResponse> => {
    const response = await apiClient.post('/auth/login', {
      username,
      password,
    });
    
    // Store token
    if (response.data.data?.token) {
      localStorage.setItem('auth_token', response.data.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.data.user));
    }
    
    return response.data;
  },

  logout: async (): Promise<any> => {
    const response = await apiClient.post('/auth/logout');
    
    // Clear token
    localStorage.removeItem('auth_token');
    localStorage.removeItem('user');
    
    return response.data;
  },

  getUser: async (): Promise<any> => {
    const response = await apiClient.get('/user');
    return response.data;
  },

  getStoredUser: (): User | null => {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  },

  isAuthenticated: (): boolean => {
    return !!localStorage.getItem('auth_token');
  },
};

export default authService;
