import apiClient from './apiConfig';

export interface DashboardStats {
  total_sales: number;
  total_revenue: number;
  total_customers: number;
  total_products: number;
  [key: string]: any;
}

export interface SalesTrend {
  date: string;
  amount: number;
  count: number;
}

const dashboardService = {
  getStats: async (): Promise<DashboardStats> => {
    const response = await apiClient.get('/dashboard/stats');
    return response.data.data || {};
  },

  getSalesTrend: async (period: string = 'monthly'): Promise<SalesTrend[]> => {
    const response = await apiClient.get('/dashboard/sales-trend', {
      params: { period },
    });
    return response.data.data || [];
  },
};

export default dashboardService;
