import { _Request, _Response } from '../utils/factory.js';
import {
  isValid, FORM_ERROR, ERROR_CODE, SUCCESS_CODE,
} from '../utils/constants.js';
import { fetchData } from '../models/index.js';
import { CheckEmail } from './Register.js';

const RECOVERY_ENDPOINTS = {
  recovery: '/user/resetPassword',
};

const isValidEmail = async (data) => {
  const emailChecked = await CheckEmail(data);
  return emailChecked.code === SUCCESS_CODE;
};

const RecoveryPass = async (values) => {
  let response;
  if (isValid(values) && isValidEmail(values)) {
    const data = { email: values.email.value };
    const request = _Request(data, RECOVERY_ENDPOINTS.recovery, 'POST');
    response = await fetchData(request);
  } else {
    response = _Response(FORM_ERROR, {}, ERROR_CODE);
  }

  return response;
};

export default RecoveryPass;
