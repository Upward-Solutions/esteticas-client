import { SUCCESS_CODE } from '../utils/constants.js';

class $Response {
  constructor(message, data, code) {
    this.message = message;
    this.data = data;
    this.code = code;
  }

  isOk() {
    return this.code === SUCCESS_CODE;
  }

  getMessage() {
    return this.message;
  }

  getData() {
    return this.data;
  }
}

export default $Response;
