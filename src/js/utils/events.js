import {
  IS_INDEX,
  IS_DASHBOARD,
  getById,
  IS_CLIENTS,
} from './constants.js';
import views from '../views/index.js';
// import setInitialLocalStorage from './storage.js';

const createEvents = () => {
  if (IS_INDEX) {
    getById('index-login-input-password').addEventListener('keypress', views.validateCapitalLetter);
    getById('login').addEventListener('submit', views.login);
    // getById('check-username').addEventListener('click', views.checkUserName);
    // getById('check-email').addEventListener('click', views.checkEmail);
    // getById('index-register-input-passwordConfirm').addEventListener('keyup', views.checkPasswordConfirm);
    // getById('index-register-input-password').addEventListener('keyup', views.checkPasswordConfirm);
    // getById('index-register-input-username').addEventListener('keyup', views.changeInputValidated);
    // getById('index-register-input-email').addEventListener('keyup', views.changeInputValidated);
    // getById('register').addEventListener('submit', views.register);
    // getById('recovery-pass').addEventListener('submit', views.recoveryPass);
    getById('index-nav-button-login').addEventListener('click', views.showLogin);
    getById('index-login-close').addEventListener('click', views.hiddenLogin);
    getById('index-login-btn-register').addEventListener('click', views.showRegisterFromLogin);
    getById('index-login-btn-recoveryPass').addEventListener('click', views.showRecoveryPassFromLogin);
  } else if (IS_DASHBOARD) {
    window.addEventListener('load', views.loadDashboard);
  } else if (IS_CLIENTS) {
    window.addEventListener('load', views.loadClients);
    getById('new-client').addEventListener('submit', views.newClient);
    getById('check-clientId').addEventListener('click', views.checkClientId);
  }
};

export default createEvents;
