import createNewUser from './NewUser.js';
import Register from './Register.js';

export default {
  createNewUser,
  Register,
};

export const USER_ENPOINTS = {
  register: '/auth/register',
  loging: '/auth/login',
  verifyEmail: '/auth/verifyEmail',
  verifyUser: '/auth/verifyUser',
};
