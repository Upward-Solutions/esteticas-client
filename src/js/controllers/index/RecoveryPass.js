import { $Request } from '../../models/Request.js';
import { $Response } from '../../models/Response.js';
import {
  isValid, FORM_ERROR, ERROR_CODE, WARNING_CODE, REG_EX_EMAIL,
} from '../../utils/constants.js';
import { justFetch } from '../../models/index.js';
import { CheckEmail, CheckUserName } from './Register.js';
import Endpoints from './Endpoints.js';

const isValidEmail = async (data) => {
  const { user } = data;
  let valueChecked = {};
  if (REG_EX_EMAIL.test(user.value)) {
    valueChecked = await CheckEmail(user.value);
  } else {
    valueChecked = await CheckUserName(user.value);
  }
  return valueChecked.code === WARNING_CODE;
};

const RecoveryPass = async (values) => {
  let response;
  if (isValid(values) && isValidEmail(values)) {
    const { user } = values;
    let data = {};
    if (REG_EX_EMAIL.test(user.value)) {
      data = { email: user.value, username: '' };
    } else {
      data = { email: '', username: user.value };
    }
    const { endpoint, method } = Endpoints.recovery;
    const request = new $Request(data, endpoint, method);

    response = await justFetch(request);
  } else {
    response = new $Response(FORM_ERROR, {}, ERROR_CODE);
  }

  return response;
};

export default RecoveryPass;
