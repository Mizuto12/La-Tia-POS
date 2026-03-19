import apiClient from './apiConfig';

export const productImageService = {
  uploadImage: async (productId: number, file: File) => {
    try {
      const formData = new FormData();
      formData.append('image', file);

      const response = await apiClient.post(
        `/products/${productId}/upload-image`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      return response.data.data;
    } catch (error: any) {
      throw error.response?.data || error;
    }
  },
};
