import axios from 'axios';

const api = axios.create({
  baseURL: "https://dashboard-backend-ruddy.vercel.app",
  headers: {
    'Content-Type': 'application/json'
  }
});


export default api;
