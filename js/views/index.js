import register, {
  checkUserName,
  checkEmail,
  checkPasswordConfirm,
  changeInputValidated,
} from './register.js';
import login, { validateCapitalLetter } from './login.js';
import recoveryPass from './recoveryPass.js';
import loadDashboard from './loadDashboard.js';

export default {
  register,
  login,
  validateCapitalLetter,
  checkUserName,
  checkEmail,
  checkPasswordConfirm,
  changeInputValidated,
  recoveryPass,
  loadDashboard,
};
