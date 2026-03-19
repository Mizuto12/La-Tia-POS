import apiClient from './apiConfig';

export interface ProductIngredient {
  id: number;
  product_id: number;
  inventory_item_id: number;
  quantity: number;
  inventory_item?: {
    id: number;
    name: string;
    unit: string;
    quantity: number;
  };
  created_at?: string;
  updated_at?: string;
}

export interface LinkIngredientsRequest {
  ingredients: Array<{
    inventory_item_id: number;
    quantity: number;
  }>;
}

const ingredientsService = {
  /**
   * Get all ingredients linked to a product
   */
  getProductIngredients: async (productId: number): Promise<ProductIngredient[]> => {
    const response = await apiClient.get(`/products/${productId}/ingredients`);
    return response.data.data || [];
  },

  /**
   * Link ingredients to a product
   */
  linkIngredients: async (productId: number, request: LinkIngredientsRequest): Promise<ProductIngredient[]> => {
    const response = await apiClient.post(`/products/${productId}/ingredients`, request);
    return response.data.data || [];
  },

  /**
   * Delete a specific ingredient link
   */
  deleteIngredientLink: async (productIngredientId: number): Promise<void> => {
    await apiClient.delete(`/product-ingredients/${productIngredientId}`);
  },

  /**
   * Update the quantity of an ingredient
   */
  updateIngredientQuantity: async (productIngredientId: number, quantity: number): Promise<ProductIngredient> => {
    const response = await apiClient.put(`/product-ingredients/${productIngredientId}`, { quantity });
    return response.data.data;
  },
};

export default ingredientsService;
