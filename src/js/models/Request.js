import { showNotification } from '../utils/constants.js';
import HTTPHelper from './HTTPHelper.js';

export class $Request {
  constructor(data, endpoint, method) {
    try {
      this.data = data;
      this.endpoint = endpoint;
      this.method = this._isMethodValid(method);
    } catch (error) {
      showNotification(error);
    }
  }

  _isMethodValid(method) {
    debugger;
    if (HTTPHelper[method]) {
      return method;
    }
    throw new Error(`El método HTTP ${method} no es correcto.`);
  }

  setMethod(method) {
    try {
      isMethodValid(method);
      this.method = method;
    } catch (error) {
      console.error(error);
    }
  }
}
