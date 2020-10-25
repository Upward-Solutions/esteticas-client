import { _Response } from '../utils/factory.js';
import {
  API_URL, ERROR_CODE,
  FORM_ERROR,
  getStorageItem,
} from '../utils/constants.js';

const getHeaders = () => {
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');
  return headers;
};

const getSessionHeaders = () => {
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('Authorization', `Bearer ${getStorageItem('token')}`);
  return headers;
};

const getSessionRequestOptions = (request) => ({
  method: request.method,
  headers: getSessionHeaders(),
  body: JSON.stringify(request.data),
  redirect: 'follow',
});

const getRequestOptions = (request) => ({
  method: request.method,
  headers: getHeaders(),
  body: request.data ? JSON.stringify(request.data) : {},
  redirect: 'follow',
});

export const justFetchWithData = async (request) => {
  const requestOptions = getRequestOptions(request);
  let response = {};
  let result = await fetch(`${API_URL}${request.endpoint}`, requestOptions);

  if (result) {
    result = await result.json();
    response = {
      message: result.message,
      code: result.code,
      data: result.data || {},
    };
  }
  return response || _Response(FORM_ERROR, {}, ERROR_CODE);
};

export const login = async (request) => {
  const requestOptions = getRequestOptions(request);
  let response = {};
  let result = await fetch(`${API_URL}${request.endpoint}`, requestOptions);

  if (result) {
    result = await result.json();
    response = {
      message: result.message,
      code: result.code,
      token: result.token,
    };
  }
  return response || _Response(FORM_ERROR, {}, ERROR_CODE);
};

export const session = async (request) => {
  const requestOptions = getSessionRequestOptions(request);
  let response = {};
  let result = await fetch(`${API_URL}${request.endpoint}`, requestOptions);

  if (result) {
    result = await result.json();
    response = {
      message: result.message,
      code: result.code,
      data: result.data || {},
    };
  }
  return response || _Response(FORM_ERROR, {}, ERROR_CODE);
};
