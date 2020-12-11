import { isValid, FORM_ERROR, ERROR_CODE } from '../../utils/constants.js';
import $Request from '../../models/Request.js';
import $Response from '../../models/Response.js';
import Fetch from '../../models/Fetch.js';
import Endpoints from './Endpoints.js';

const NewClient = async (values) => {
  let request;
  let response;

  if (isValid(values)) {
    const {
      idCustom, phone, email, address, description, name,
    } = values;
    const data = {
      data: {
        id_external: idCustom.value,
        name: name.value,
        email: email.value,
        address: address.value,
        phone: phone.value,
        description: description.value,
      },
    };

    const {
      new: { endpoint, method, session },
    } = Endpoints;

    request = new $Request(data, endpoint, method, session);
    const fetch = new Fetch(request);
    response = await fetch.fetch();
  } else {
    response = new $Response(FORM_ERROR, {}, ERROR_CODE);
  }

  return response;
};

export const CheckIdExternal = (value) => {};

export default NewClient;
