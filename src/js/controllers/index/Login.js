import $Request from '../../models/Request.js';
import Fetch from '../../models/Fetch.js';
import Endpoints from './Endpoints.js';
import {
  REG_EX_EMAIL,
  REG_EX_PASS,
  REG_EX_TEXT,
  showNotification,
} from '../../utils/constants.js';

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

const Login = async (dataForm) => {
  let request;
  let response;

  if (isValidLogin(dataForm)) {
    const data = {
      data: {
        email: dataForm.user.value,
        password: dataForm.password.value,
      },
    };
    const { endpoint, method, session } = Endpoints.login;
    request = new $Request(data, endpoint, method, session);
    const fetch = new Fetch(request);
    response = await fetch.fetch();
  } else {
    showNotification(
      'El usuario o la contraseña son incorrectos, por favor intentá de nuevo.',
    );
  }

  return response;
};

export const Index = async () => {
  const { method, endpoint, session } = Endpoints.index;
  const request = new $Request({}, endpoint, method, session);
  const fetch = new Fetch(request);
  const response = await fetch.fetch();
  return response;
};

export default Login;
