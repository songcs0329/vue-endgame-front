import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
});

export const registerUser = userData => instance.post(`/signup`, userData);

export const loginUser = userData => instance.post(`/login`, userData);
