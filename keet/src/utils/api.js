import axios from 'axios';

const API_BASE_URL = 'https://fec3571b-d98f-4554-bdd2-ec125f0af206-00-3rd1l0zhveroa.kirk.replit.dev/';

export const uploadFiles = async (files) => {
  const formData = new FormData();
  files.forEach((file) => {
    formData.append('files', file);
  });

  try {
    const response = await axios.post(`${API_BASE_URL}/upload`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error uploading files:', error);
    throw error;
  }
};

export const getResults = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/results`);
    return response.data;
  } catch (error) {
    console.error('Error fetching results:', error);
    throw error;
  }
};
