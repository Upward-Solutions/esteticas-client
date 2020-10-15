import { _Response } from '../utils/factory.js';
import {
  API_URL, ERROR_CODE, GENERAL_ERROR, SUCCES_CODE, FORM_ERROR,
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

export const justFetch = (request) => {
  let response;
  fetch(`${API_URL}${request.endpoint}`)
    .then((res) => {
      if (!res.ok) {
        response = _Response('Network response was not ok', {}, GENERAL_ERROR);
        return response;
      }
      return res.json();
    })
    .then((data) => {
      response = _Response(
        'Transacción realizada con éxito',
        data,
        SUCCES_CODE,
      );
    });
  return response;
};

export const justFetchWithData = (request) => {
  const requestOptions = getRequestOptions(request);
  let response = {};

  fetch(`${API_URL}${request.endpoint}`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      response.message = result.message;
      response.code = result.code;
      response.data = result.data || {};
    })
    .catch((error) => console.log('error', error));

  response = response || _Response(FORM_ERROR, {}, ERROR_CODE);

  return response;
};
