import { IS_INDEX, getById } from './constants.js';
import views from '../views/index.js';

const createEvents = () => {
  if (IS_INDEX) {
    getById('login-password').addEventListener('keypress', views.validateCapitalLetter);
    getById('login').addEventListener('submit', views.login);
    getById('check-username').addEventListener('click', views.checkUserName);
    getById('check-email').addEventListener('click', views.checkEmail);
    getById('password-confirm').addEventListener('keyup', views.checkPasswordConfirm);
    getById('username-register').addEventListener('keyup', views.changeInputValidated);
    getById('email-register').addEventListener('keyup', views.changeInputValidated);
    getById('register').addEventListener('submit', views.register);
  } else {
    // global envents
  }
};

export default createEvents;
