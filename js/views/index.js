import register, {
  checkUserName,
  checkEmail,
  checkPasswordConfirm,
  changeInputValidated,
} from './index/register.js';
import login, { validateCapitalLetter } from './index/login.js';
import recoveryPass from './index/recoveryPass.js';
import loadDashboard from './dashboard/loadDashboard.js';
import loadClients from './clients/loadClients.js';

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
  loadClients,
};
