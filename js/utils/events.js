import {
  IS_INDEX,
  IS_DASHBOARD,
  getById,
  IS_CLIENTS,
} from './constants.js';
import views from '../views/index.js';

const createEvents = () => {
  if (IS_INDEX) {
    getById('login-password').addEventListener('keypress', views.validateCapitalLetter);
    getById('login').addEventListener('submit', views.login);
    getById('check-username').addEventListener('click', views.checkUserName);
    getById('check-email').addEventListener('click', views.checkEmail);
    getById('password-confirm').addEventListener('keyup', views.checkPasswordConfirm);
    getById('password').addEventListener('keyup', views.checkPasswordConfirm);
    getById('username-register').addEventListener('keyup', views.changeInputValidated);
    getById('email-register').addEventListener('keyup', views.changeInputValidated);
    getById('register').addEventListener('submit', views.register);
    getById('recovery-pass').addEventListener('submit', views.recoveryPass);
  } else if (IS_DASHBOARD) {
    window.addEventListener('load', views.loadDashboard);
  } else if (IS_CLIENTS) {
    window.addEventListener('load', views.loadClients);
    getById('new-client').addEventListener('submit', views.newClient);
  }
};

export default createEvents;
