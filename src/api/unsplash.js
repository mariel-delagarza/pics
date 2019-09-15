import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 
      'Client-ID 469188ae8f37d44fa5ee867b38d60d4103f1852d87d9de9e70f3ebb857ad471e'
  }
});