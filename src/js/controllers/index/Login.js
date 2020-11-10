import { _Request } from '../../utils/factory.js';

import {
  REG_EX_EMAIL,
  REG_EX_PASS,
  REG_EX_TEXT,
  showNotification,
} from '../../utils/constants.js';
import { login, session } from '../../models/index.js';

const LOGIN_ENDPOINTS = {
  login: '/auth/login',
  index: '/api/index',
};

const isValidLogin = (data) => {
  let isValidData = true;

  for (const key in data) {
    if (isValidData) {
      isValidData = data[key].value !== '' || data[key].value.includes(' ');
      isValidData = REG_EX_EMAIL.test(data[key].value)
      || REG_EX_PASS.test(data[key].value)
      || REG_EX_TEXT.test(data[key].value);
    }
  }

  return isValidData;
};

const Login = (dataForm) => {
  let request;
  let response;

  if (isValidLogin(dataForm)) {
    const data = {
      email: dataForm.user.value,
      password: dataForm.password.value,
    };

    request = _Request(data, LOGIN_ENDPOINTS.login, 'POST');
    response = login(request);
  } else {
    showNotification('El usuario o la contraseña son incorrectos, por favor intentá de nuevo.');
  }

  return response;
};

export const Index = async () => {
  const request = _Request({}, LOGIN_ENDPOINTS.index, 'GET');
  const response = await session(request);
  return response;
};

export default Login;
