import { _Request, _Response } from '../utils/factory.js';
import {
  isValid, FORM_ERROR, ERROR_CODE, SUCCESS_CODE,
} from '../utils/constants.js';
import { justFetch } from '../models/index.js';

const REGISTER_ENDPOINTS = {
  register: '/auth/register',
  verifyEmail: '/auth/verifyEmail',
  verifyUser: '/auth/verifyUser',
};

const validateEmail = async (correo) => {
  const data = { email: correo };
  const request = _Request(data, REGISTER_ENDPOINTS.verifyEmail, 'POST');
  const response = await justFetch(request);
  return response;
};

const validateUser = async (user) => {
  const data = { username: user };
  const request = _Request(data, REGISTER_ENDPOINTS.verifyUser, 'POST');
  const response = await justFetch(request);
  return response;
};

const isValidNewUser = async ({ username, email }) => {
  let response;
  const responseUser = await validateUser(username.value);
  if (responseUser.code === SUCCESS_CODE) {
    const responseEmail = await validateEmail(email.value);
    if (responseEmail.code === SUCCESS_CODE) {
      response = _Response('', {}, SUCCESS_CODE);
    } else {
      response = _Response(responseEmail.message, {}, ERROR_CODE);
    }
  } else {
    response = _Response(responseUser.message, {}, ERROR_CODE);
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
        email: email.value,
        password: password.value,
        username: username.value,
        fullname: fullname.value,
        phone: phone.value,
      };
      request = _Request(data, REGISTER_ENDPOINTS.register, 'POST');
      response = await justFetch(request);
    } else {
      response = newUserValidated;
    }
  } else {
    response = _Response(FORM_ERROR, {}, ERROR_CODE);
  }

  return response;
};

export const CheckUserName = async (userName) => validateUser(userName);
export const CheckEmail = async (email) => validateEmail(email);

export default createNewUser;
