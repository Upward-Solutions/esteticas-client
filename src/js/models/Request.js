import { showNotification } from '../utils/constants.js';
import HTTPHelper from './HTTPHelper.js';

class $Request {
  constructor(data, endpoint, method) {
    try {
      this.data = data;
      this.endpoint = endpoint;
      this.isMethodValid(method);
    } catch (error) {
      showNotification(error);
    }
  }

  isMethodValid(inputMethod) {
    if (HTTPHelper[inputMethod]) {
      this.method = inputMethod;
    }
    throw new Error(`El método HTTP ${inputMethod} no es correcto.`);
  }
}

export default $Request;
