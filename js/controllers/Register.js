import { _Request, _Response } from '../utils/factory.js';
import {
  isValid, FORM_ERROR, ERROR_CODE,
} from '../utils/constants.js';
import { justFetchWithData } from '../models/index.js';

const REGISTER_ENDPOINTS = {
  register: '/auth/register',
  verifyEmail: '/auth/verifyEmail',
  verifyUser: '/auth/verifyUser',
};

const validateEmail = async (email) => {
  const data = { email: email.value };
  const request = _Request(data, REGISTER_ENDPOINTS.verifyEmail, 'POST');
  const response = await justFetchWithData(request);
  return response;
};

const validateUser = async (user) => {
  const data = { user: user.value };
  const request = _Request(data, REGISTER_ENDPOINTS.verifyUser, 'POST');
  const response = await justFetchWithData(request);
  return response;
};

const isValidNewUser = async (data) => {
  /**
   * @juanmcastillo3 acá debería estar la validación previa al registro
   * del nuevo usuario.
   * @description revisar documentación
   */
};

const createNewUser = async (data) => {
  let request;
  let response;

  if (isValid(data) && await isValidNewUser(data)) {
    /**
     * @juanmcastillo3 acá deberías construir el objeto data
     * para mandar al backend
     * @description revisar documentación
     */
    request = _Request(data, REGISTER_ENDPOINTS.register, 'POST');
    response = await justFetchWithData(request);
  } else {
    response = _Response(FORM_ERROR, {}, ERROR_CODE);
  }

  return response;
};

export const CheckUserName = async (userName) => validateUser(userName);
export const CheckEmail = async (email) => validateEmail(email);

export default createNewUser;
