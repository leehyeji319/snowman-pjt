import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from './types';

import AuthService from '../services/auth.service';

export const register = (email, password, nickname) => (dispatch) => {
  return AuthService.register(email, password, nickname).then((response) => {
    dispatch({
      type: REGISTER_SUCCESS,
    });
    return Promise.resolve();
  });
};

export const login = (email, password) => (dispatch) => {
  return AuthService.login(email, password).then((data) => {
    dispatch({
      type: LOGIN_SUCCESS,
      payload: { user: data },
    });
    return Promise.resolve();
  });
};

export const logout = () => (dispatch) => {
  AuthService.logout();
  dispatch({
    type: LOGOUT,
  });
  return Promise.resolve();
};
