import { _Request } from '../utils/factory.js';
import { justFetch } from '../models/index.js';

const exampleSwapi = (setSwapiView) => {
  const request = _Request({}, 'people/1/', 'GET');
  const response = justFetch(request, setSwapiView);

  return response;
};

export default exampleSwapi;
