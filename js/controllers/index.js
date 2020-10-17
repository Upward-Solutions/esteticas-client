import Register, { CheckUserName, CheckEmail } from './Register.js';
import Login from './Login.js';

export default {
  Login,
  Register,
  CheckUserName,
  CheckEmail,
};

export const USER_ENPOINTS = {
  register: '/auth/register',
  loging: '/auth/login',
  verifyEmail: '/auth/verifyEmail',
  verifyUser: '/auth/verifyUser',
};
