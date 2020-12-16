import {
  API_URL,
  ERROR_CODE,
  FORM_ERROR,
  getStorageItem,
} from '../utils/constants.js';
import HTTPHelper from './HTTPHelper.js';
import $Response from './Response.js';

class Fetch {
  constructor({
    method, endpoint, session, data,
  }) {
    this.method = method;
    this.endpoint = endpoint;
    this.session = session;
    this.setHeaders();
    this.setRequestOptions(data);
  }

  setHeaders() {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    if (this.session) {
      headers.append('Authorization', `Bearer ${getStorageItem('token')}`);
    }
    this.headers = headers;
  }

  setRequestOptions(data) {
    this.requestOptions = {
      method: this.method,
      headers: this.headers,
      redirect: 'follow',
    };
    if (data && this.method !== HTTPHelper.GET) {
      this.requestOptions.body = data ? JSON.stringify(data) : {};
    }
  }

  async fetch() {
    let response = {};
    let result = await fetch(`${API_URL}${this.endpoint}`, this.requestOptions);

    if (result) {
      result = await result.json();
      response = {
        message: result.message,
        code: result.code,
        data: result.data || result.token || {},
      };
    }
    return response || $Response(FORM_ERROR, {}, ERROR_CODE);
  }
}

export default Fetch;
