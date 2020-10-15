import createNewUser from './NewUser.js';
import Register from './Register.js';
import Login from './Login.js';

export default {
  createNewUser,
  Login,
  Register,
};

export const USER_ENPOINTS = {
  register: '/auth/register',
  loging: '/auth/login',
  verifyEmail: '/auth/verifyEmail',
  verifyUser: '/auth/verifyUser',
};
