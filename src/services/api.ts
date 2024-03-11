// axiosConfig.ts
import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:3000', // Replace with your API base URL
  timeout: 5000, // Set the timeout for requests (in milliseconds)
  headers: {
    'Content-Type': 'application/json',
    // Add any other common headers here
  },
});

export default API;
