import $Request from '../../models/Request.js';
import $Response from '../../models/Response.js';
import Fetch from '../../models/Fetch.js';
import {
  isValid,
  FORM_ERROR,
  ERROR_CODE,
  WARNING_CODE,
  REG_EX_EMAIL,
} from '../../utils/constants.js';
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
      data = { username: '', email: user.value };
    } else {
      data = { username: user.value, email: '' };
    }
    const { endpoint, method, session } = Endpoints.recovery;
    const request = new $Request(data, endpoint, method, session);

    const fetch = new Fetch(request);
    response = await fetch.fetch();
  } else {
    response = new $Response(FORM_ERROR, {}, ERROR_CODE);
  }

  return response;
};

export default RecoveryPass;
