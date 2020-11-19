import { fetchSession } from '../../models/index.js';
import { isValid, FORM_ERROR, ERROR_CODE } from '../../utils/constants.js';
import { _Request, _Response } from '../../utils/factory.js';
import Endpoints from './Endpoints.js';

const NewClient = async (values) => {
  let request;
  let response;

  if (isValid(values)) {
    const {
      idExternal, phone, email, address, description, name,
    } = values;
    const data = {
      id_external: idExternal.value,
      name: name.value,
      email: email.value,
      address: address.value,
      phone: phone.value,
      description: description.value,
    };

    const {
      newClient: { endpoint, method },
    } = Endpoints;

    request = _Request(data, endpoint, method);
    response = await fetchSession(request);
  } else {
    response = _Response(FORM_ERROR, {}, ERROR_CODE);
  }

  return response;
};

export const CheckIdExternal = (value) => {};

export default NewClient;
