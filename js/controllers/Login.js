import { _Request } from '../utils/factory.js';

import {
  isValid,
  showNotification,
} from '../utils/constants.js';
import { justFetchWithData } from '../models/index.js';

const LOGIN_ENDPOINTS = {
  login: '/auth/login',
  index: '/api/index',
};

const isValidLogin = (data) => {
  let isValidData = true;

  for (const key in data) {
    if (isValidData) {
      isValidData = data[key].value !== '' || data[key].value.includes(' ');
    }
  }

  return isValidData;
};

const Login = (dataForm) => {
  let request;
  let response;

  if (isValid(dataForm) && isValidLogin(dataForm)) {
    const data = {
      userName: dataForm.user.value,
      password: dataForm.password.value,
    };

    request = _Request(data, LOGIN_ENDPOINTS.login, 'POST');
    response = justFetchWithData(request);
  } else {
    showNotification('El usuario o la contraseña son incorrectos, por favor intentá de nuevo.');
  }

  return response;
};

export default Login;
