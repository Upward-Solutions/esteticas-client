import { _Request } from '../utils/factory.js';

import {
  isValid,
  showNotification,
} from '../utils/constants.js';
import { justFetchWithData } from '../models/index.js';

const RECOVERY_ENDPOINTS = {
  recovery: '/auth/login',
};

const RecoveryPass = (dataForm) => {
  let request;
  let response;

  if (isValid(dataForm)) {
    const data = {
      userName: dataForm.user.value,
      password: dataForm.password.value,
    };

    request = _Request(data, RECOVERY_ENDPOINTS.recovery, 'POST');
    response = justFetchWithData(request);
  } else {
    showNotification('El usuario o la contraseña son incorrectos, por favor intentá de nuevo.');
  }

  return response;
};

export default RecoveryPass;
