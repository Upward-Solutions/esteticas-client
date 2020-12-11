import $Request from '../../models/Request.js';
import Endpoints from './Endpoints.js';
import Fetch from '../../models/Fetch.js';

const LoadClients = async () => {
  const { endpoint, method } = Endpoints.getAll;
  const request = new $Request({}, endpoint, method);
  const fetch = new Fetch(request);
  const response = await fetch.fetch();
  return response;
};

export default LoadClients;
