import { _Request, _Response } from '../utils/factory.js';
import { USER_ENPOINTS } from './index.js';
import {
  isValid, FORM_ERROR, ERROR_CODE, SUCCESS_MESSAGE,
} from '../utils/constants.js';
import { justFetchWithData } from '../models/index.js';

const validateEmail = async (email) => {
  const data = { email: email.value };
  const request = _Request(data, USER_ENPOINTS.verifyEmail, 'POST');
  const response = await justFetchWithData(request);
  return response;
};

const validateUser = async (user) => {
  const data = { user: user.value };
  const request = _Request(data, USER_ENPOINTS.verifyUser, 'POST');
  const response = await justFetchWithData(request);
  return response;
};

const isValidNewUser = async (data) => {
  const email = await validateEmail(data.email);
  const user = await validateUser(data.username);

  return email.code === SUCCESS_MESSAGE && user.code === SUCCESS_MESSAGE;
};

const createNewUser = async (data) => {
  let request;
  let response;

  if (isValid(data) && await isValidNewUser(data)) {
    request = _Request(data, 'newUser', 'POST');
    response = await justFetchWithData(request);
  } else {
    response = _Response(FORM_ERROR, {}, ERROR_CODE);
  }

  return response;
};

export const CheckUserName = async (userName) => validateUser(userName);
export const CheckEmail = async (email) => validateEmail(email);

export default createNewUser;
