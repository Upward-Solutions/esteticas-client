import HTTPHelper from '../../models/HTTPHelper.js';

const head = '/api/user';

const Endpoints = {
  register: {
    endpoint: `${head}/new`,
    method: HTTPHelper.POST,
  },
  verifyEmail: {
    endpoint: `${head}/verifyEmail`,
    method: HTTPHelper.POST,
  },
  verifyUser: {
    endpoint: `${head}/verifyUser`,
    method: HTTPHelper.POST,
  },
  recovery: {
    endpoint: `${head}/resetPassword`,
    method: HTTPHelper.POST,
  },
  login: {
    endpoint: `${head}/login`,
    method: HTTPHelper.POST,
  },
  index: {
    endpoint: `${head}/index`,
    method: HTTPHelper.POST,
  },
};

export default Endpoints;
