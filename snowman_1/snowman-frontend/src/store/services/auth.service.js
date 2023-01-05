import axios from 'axios';
import { API } from '../../config';

const register = (email, password, nickname) => {
  return axios.post(API.REGISTER, {
    email,
    password,
    nickname,
  });
};

const login = (email, password) => {
  return axios
    .post(API.LOGIN, {
      email,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem('user', JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem('user');
};

const AuthService = {
  register,
  login,
  logout,
};

export default AuthService;
