import $Request from '../../models/Request.js';
import $Response from '../../models/Response.js';
import {
  isValid,
  FORM_ERROR,
  ERROR_CODE,
  SUCCESS_CODE,
} from '../../utils/constants.js';
import { justFetch } from '../../models/index.js';
import Endpoints from './Endpoints.js';

const validateEmail = async (correo) => {
  const data = {
    data: {
      email: correo,
    },
  };
  const { method, endpoint } = Endpoints.verifyEmail;
  const request = new $Request(data, endpoint, method);
  const response = await justFetch(request);
  return response;
};

const validateUser = async (user) => {
  const data = {
    data: {
      username: user,
    },
  };
  const { method, endpoint } = Endpoints.verifyUser;
  const request = new $Request(data, endpoint, method);
  const response = await justFetch(request);
  return response;
};

const isValidNewUser = async ({ username, email }) => {
  let response;
  const responseUser = await validateUser(username.value);
  if (responseUser.code === SUCCESS_CODE) {
    const responseEmail = await validateEmail(email.value);
    if (responseEmail.code === SUCCESS_CODE) {
      response = new $Response('', {}, SUCCESS_CODE);
    } else {
      response = new $Response(responseEmail.message, {}, ERROR_CODE);
    }
  } else {
    response = new $Response(responseUser.message, {}, ERROR_CODE);
  }
  return response;
};

const createNewUser = async (values) => {
  let request;
  let response;
  if (isValid(values)) {
    const newUserValidated = await isValidNewUser(values);
    if (newUserValidated.code === SUCCESS_CODE) {
      const {
        email, password, username, fullname, phone,
      } = values;
      const data = {
        data: {
          email: email.value,
          password: password.value,
          username: username.value,
          fullname: fullname.value,
          phone: phone.value,
        },
      };
      const { endpoint, method } = Endpoints.register;
      request = new $Request(data, endpoint, method);
      response = await justFetch(request);
    } else {
      response = newUserValidated;
    }
  } else {
    response = new $Response(FORM_ERROR, {}, ERROR_CODE);
  }

  return response;
};

export const CheckUserName = async (userName) => validateUser(userName);
export const CheckEmail = async (email) => validateEmail(email);

export default createNewUser;
