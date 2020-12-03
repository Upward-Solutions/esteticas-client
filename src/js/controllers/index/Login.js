import $Request from '../../models/Request.js';
import Endpoints from './Endpoints.js';
import {
  REG_EX_EMAIL,
  REG_EX_PASS,
  REG_EX_TEXT,
  showNotification,
} from '../../utils/constants.js';
import { login, session } from '../../models/index.js';

const isValidLogin = (data) => {
  let isValidData = true;

  // eslint-disable-next-line no-restricted-syntax
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
      data: {
        email: dataForm.user.value,
        password: dataForm.password.value,
      },
    };
    const { endpoint, method } = Endpoints.login;
    request = new $Request(data, endpoint, method);
    response = login(request);
  } else {
    showNotification(
      'El usuario o la contraseña son incorrectos, por favor intentá de nuevo.',
    );
  }

  return response;
};

export const Index = async () => {
  const { method, endpoint } = Endpoints.index;
  const request = new $Request({}, endpoint, method);
  const response = await session(request);
  return response;
};

export default Login;
