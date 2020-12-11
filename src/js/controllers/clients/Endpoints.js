const head = '/api/client';

export default {
  new: {
    endpoint: `${head}/new`,
    method: 'POST',
    session: true,
  },
  edit: {
    endpoint: `${head}/edit/:id`,
    method: 'PUT',
    session: true,
  },
  getId: {
    endpoint: `${head}/verifyID`,
    method: 'POST',
    session: true,
  },
  delete: {
    endpoint: `${head}/delete/:id`,
    method: 'DELETE',
    session: true,
  },
  getAll: {
    endpoint: `${head}/getAll`,
    method: 'GET',
    session: true,
  },
};
