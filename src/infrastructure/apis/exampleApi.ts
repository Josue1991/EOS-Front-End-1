// src/infrastructure/api/apiClient.ts

import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://172.16.30.14:8080/inpsercom/api/billing/auriga/v1/',
  timeout: 6000,
  headers: {
    'Content-Type': 'application/json',
    'REFERENCE_ID': '123456',
    'CONSUMER': 'cliente-abc',    
  },
});

export default apiClient;
