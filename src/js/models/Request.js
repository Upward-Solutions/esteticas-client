import { showNotification } from '../utils/constants.js';
import HTTPHelper from './HTTPHelper.js';

class $Request {
  constructor(data, endpoint, method, session) {
    try {
      this.data = data || {};
      this.endpoint = endpoint;
      this.session = session;
      this.isMethodValid(method);
    } catch (error) {
      showNotification(error);
    }
  }

  isMethodValid(inputMethod) {
    if (HTTPHelper[inputMethod]) {
      this.method = inputMethod;
    } else {
      throw new Error(`El método HTTP ${inputMethod} no es correcto.`);
    }
  }
}

export default $Request;
