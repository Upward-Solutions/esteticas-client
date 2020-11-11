import Register, { CheckUserName, CheckEmail } from './index/Register.js';
import Login from './index/Login.js';
import RecoveryPass from './index/RecoveryPass.js';
import LoadClients from './clients/LoadClients.js';
import NewClient, { CheckIdExternal } from './clients/NewClient.js';

export default {
  Login,
  Register,
  CheckUserName,
  CheckEmail,
  RecoveryPass,
  LoadClients,
  NewClient,
  CheckIdExternal,
};
