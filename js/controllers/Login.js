import { _Request, _Response } from "../utils/factory.js";
import { setLoginView } from "../views/login.js";
import { justFetch } from "../models/index.js";
import {
  isValid,
  showNotification,
  SUCCESS_CODE,
  FORM_ERROR,
} from "../utils/constants.js";

const Login = (data) => {
  let request;
  let response;

  if (isValid(data) && isValidLogin(data)) {
    request = _Request(data, "", "POST");
    // response = justFetch(request, setLoginView);
    setLoginView({code: SUCCESS_CODE});
  } else {
    showNotification('El usuario o la contraseña son incorrectos, por favor intentá de nuevo.');
  }

  return response;
};

const isValidLogin = (data) => {
  let isValid = true;

  for (const key in data) {
    if (isValid) {
      isValid = data[key].value !== "" || data[key].value.includes(" ");
    }
  }

  return isValid;
};

export default Login;
