import HTTPHelper from '../../models/HTTPHelper.js';

const head = '/api/user';

const Endpoints = {
  register: {
    endpoint: `${head}/new`,
    method: HTTPHelper.POST,
    session: false,
  },
  verifyEmail: {
    endpoint: `${head}/verifyEmail`,
    method: HTTPHelper.POST,
    session: false,
  },
  verifyUser: {
    endpoint: `${head}/verifyUser`,
    method: HTTPHelper.POST,
    session: false,
  },
  recovery: {
    endpoint: `${head}/resetPassword`,
    method: HTTPHelper.POST,
    session: false,
  },
  login: {
    endpoint: `${head}/login`,
    method: HTTPHelper.POST,
    session: false,
  },
  index: {
    endpoint: `${head}/index`,
    method: HTTPHelper.GET,
    session: true,
  },
};

export default Endpoints;
