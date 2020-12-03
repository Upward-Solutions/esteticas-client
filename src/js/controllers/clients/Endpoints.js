const head = '/api/client';

export default {
  new: {
    endpoint: `${head}/new`,
    method: 'POST',
  },
  edit: {
    endpoint: `${head}/edit/:id`,
    method: 'PUT',
  },
  getId: {
    endpoint: `${head}/verifyID`,
    method: 'POST',
  },
  delete: {
    endpoint: `${head}/delete/:id`,
    method: 'DELETE',
  },
  getAll: {
    endpoint: `${head}/getAll`,
    method: 'GET',
  },
};
