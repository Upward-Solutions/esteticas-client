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
  redirect: 'follow',
});

const getRequestOptions = (request) => ({
  method: request.method,
  headers: getHeaders(),
  body: request.data ? JSON.stringify(request.data) : {},
  redirect: 'follow',
});

const getSessionWithBodyRequestOptions = (request) => ({
  method: request.method,
  headers: getSessionHeaders(),
  body: request.data ? JSON.stringify(request.data) : {},
  redirect: 'follow',
});

export const justFetch = async (request) => {
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

export const fetchSession = async (request) => {
  const requestOptions = getSessionWithBodyRequestOptions(request);
  let response = {};
  fetch(`${API_URL}${request.endpoint}`, requestOptions)
    .then((res) => {
      res.json();
    })
    .then((data) => {
      if (data) {
        response = {
          message: data.message,
          code: data.code,
          data: data.data || {},
        };
      }
    })
    .catch((error) => {
      console.error(error);
    });

  return response || _Response(FORM_ERROR, {}, ERROR_CODE);
};
