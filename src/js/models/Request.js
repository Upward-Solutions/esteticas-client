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
    if (HTTPHelper[method]) {
      return method;
    }
    throw new Error(`El método HTTP ${method} no es correcto.`);
  }

}
