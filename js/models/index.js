import { _Response } from '../utils/factory.js';
import {
  API_URL, ERROR_CODE, GENERAL_ERROR, SUCCESS_CODE, FORM_ERROR,
} from '../utils/constants.js';

const getHeaders = () => {
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');
  return headers;
};

const getRequestOptions = (request) => ({
  method: request.method,
  headers: getHeaders(),
  body: JSON.stringify(request.data),
  redirect: 'follow',
});

export const fetchData = (request, setView) => {
  let response;
  fetch(`${API_URL}${request.endpoint}`, {
    method: request.method,
    mode: 'no-cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    referrerPolicy: 'same-origin',
    body: request.data,
  })
    .then((res) => {
      if (!res.ok) {
        response = _Response('Network response was not ok', {}, GENERAL_ERROR);
        return response;
      }
      return res.json();
    })
    .then((data) => {
      response = _Response(data.message, data.data, data.code);
      if (setView) {
        setView(response);
      }
    });
  if (!response) {
    response = _Response('Network response was not ok', {}, GENERAL_ERROR);
  }
  return response;
};

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
