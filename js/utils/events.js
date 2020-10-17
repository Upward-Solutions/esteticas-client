import { IS_INDEX, getById } from './constants.js';
import views from '../views/index.js';

const createEvents = () => {
  if (IS_INDEX) {
    /** @todo: que el evento se dispare cuando se hace focus sobre el input password
        y definir qué mensaje aparece. */
    document.addEventListener('keydown', views.validateCapitalLetter);
    getById('login').addEventListener('submit', views.login);
    getById('register').addEventListener('submit', views.register);
    getById('check-username').addEventListener('click', views.checkUserName);
    getById('check-email').addEventListener('click', views.checkEmail);
    getById('password-confirm').addEventListener('keyup', views.checkPasswordConfirm);
  } else {
    // global envents
  }
};

export default createEvents;
