import axios from 'axios';
import { setInterceptors } from './common/interceptors';

// axios 초기설정
function createInstance() {
  const instance = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
  });
  return setInterceptors(instance);
}

const instance = createInstance();

// 회원가입 API
function registerUser(userData) {
  return instance.post('signup', userData);
}

// 로그인 API
function loginUser(userData) {
  return instance.post('login', userData);
}

// 학습노트 데이터 조회
function fetchPosts() {
  return instance.get('posts');
}

export { registerUser, loginUser, fetchPosts };
