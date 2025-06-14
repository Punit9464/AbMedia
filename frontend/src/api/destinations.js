import fetcher from './fetcher.js';

const fetchDestinations = async () => {
  try {
    const response = await fetcher.get('/api/destinations');
    return response.data.destinations;
  } catch (error) {
    if (error.response) {
      console.error('API Error Response:', error.response.data);
      console.error('API Status:', error.response.status);
      console.error('API Headers:', error.response.headers);
      throw new Error(`HTTP error! status: ${error.response.status} - ${error.response.data.message || error.response.statusText}`);
    } else if (error.request) {
      console.error('Network Error:', error.request);
      throw new Error('Network Error: No response received from server.');
    } else {
      console.error('Axios Setup Error:', error.message);
      throw new Error(`Error setting up request: ${error.message}`);
    }
  }
};


export { fetchDestinations };