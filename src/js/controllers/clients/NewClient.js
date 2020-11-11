import { session } from '../../models/index.js';
import { isValid, FORM_ERROR, ERROR_CODE } from '../../utils/constants.js';
import { _Request, _Response } from '../../utils/factory.js';
import Endpoints from './Endpoints.js';

const NewClient = async (values) => {
  let request;
  let response;

  if (isValid(values)) {
    const {
      idExternal, phone, email, adress, description, name,
    } = values;
    const data = {
      id_external: idExternal.value,
      name: name.value,
      phone: phone.value,
      email: email.value,
      adress: adress.value,
      description: description.value,
    };
    const { newClient: { endpoint, method } } = Endpoints;

    request = _Request(data, endpoint, method);
    response = await session(request);
  } else {
    response = _Response(FORM_ERROR, {}, ERROR_CODE);
  }

  return response;
};

export const CheckIdExternal = (value) => {

};

export default NewClient;
