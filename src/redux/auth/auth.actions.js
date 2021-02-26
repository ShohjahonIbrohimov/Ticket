import AUTH_ACTION_TYPES from "./auth.action-types";

// LOGOUT
export const authLogout = () => ({
  type: AUTH_ACTION_TYPES.AUTH_LOGOUT,
  payload: null,
});

// LOGIN
export const startLogin = (data) => ({
  type: AUTH_ACTION_TYPES.START_LOGIN,
  payload: data,
});

export const successLogin = (data) => ({
  type: AUTH_ACTION_TYPES.SUCCESS_LOGIN,
  payload: data,
});

// AUTH_ME
export const startAuthme = (data) => ({
  type: AUTH_ACTION_TYPES.START_AUTH_ME,
  payload: data,
});

export const successAuthme = (data) => ({
  type: AUTH_ACTION_TYPES.SUCCESS_AUTH_ME,
  payload: data,
});

// SUCCESS & ERROR
export const setError = (data) => ({
  type: AUTH_ACTION_TYPES.SET_ERROR,
  payload: data,
});

export const setSuccess = (data) => ({
  type: AUTH_ACTION_TYPES.SET_SUCCESS,
  payload: data,
});

// CREATE USER
export const startCreateUser = (data) => ({
  type: AUTH_ACTION_TYPES.START_CREATE_USER,
  payload: data,
});

export const successCreateUser = (data) => ({
  type: AUTH_ACTION_TYPES.SUCCESS_CREATE_USER,
  payload: data,
});
