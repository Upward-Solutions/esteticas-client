import HTTPHelper from '../../models/HTTPHelper.js';

const Endpoints = {
  register: {
    endpoint: '/auth/register',
    method: HTTPHelper.POST,
  },
  verifyEmail: {
    endpoint: '/auth/verifyEmail',
    method: HTTPHelper.POST,
  },
  verifyUser: {
    endpoint: '/auth/verifyUser',
    method: HTTPHelper.POST,
  },
  recovery: {
    endpoint: '/user/resetPassword',
    method: HTTPHelper.POST,
  },
  login: {
    endpoint: '/auth/login',
    method: HTTPHelper.POST,
  },
  index: {
    endpoint: '/index/index',
    method: HTTPHelper.POST,
  },
};

export default Endpoints;
