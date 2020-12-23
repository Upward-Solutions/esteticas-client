import register, {
  checkUserName,
  checkEmail,
  checkPasswordConfirm,
  changeInputValidated,
  showRegisterFromLogin,
} from './index/register.js';
import login, {
  validateCapitalLetter,
  showLogin,
  hiddenLogin,
} from './index/login.js';
import recoveryPass, { showRecoveryPassFromLogin } from './index/recoveryPass.js';
import loadDashboard from './dashboard/loadDashboard.js';
import loadClients from './clients/loadClients.js';
import newClient, { checkClientId } from './clients/newClient.js';

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
  showLogin,
  showRegisterFromLogin,
  showRecoveryPassFromLogin,
  loadClients,
  hiddenLogin,
  newClient,
  checkClientId,
};
