import { _Request } from '../utils/factory.js';
import { setLoginView } from '../views/login.js';
// import { justFetch } from '../models/index.js';
import {
  isValid,
  showNotification,
  SUCCESS_CODE,
} from '../utils/constants.js';

const LOGIN_ENDPOINTS = {
  loging: '/auth/login',
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

const Login = (data) => {
  let request;
  let response;

  if (isValid(data) && isValidLogin(data)) {
    request = _Request(data, LOGIN_ENDPOINTS.loging, 'POST');
    // response = justFetch(request, setLoginView);
    setLoginView({ code: SUCCESS_CODE });
  } else {
    showNotification('El usuario o la contraseña son incorrectos, por favor intentá de nuevo.');
  }

  return response;
};

export default Login;
