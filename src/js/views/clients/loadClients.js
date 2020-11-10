import controllers from '../../controllers/index.js';
import {
  getById,
  getStorageItem,
  redirect,
  showElement,
  showNotification,
  SUCCESS_CODE,
} from '../../utils/constants.js';

const setClients = (response) => {
  /** @todo
   * cargar tabla con la data del response
   */
};

const withoutClients = () => {
  const message = getById('without-clients');
  showElement(message);
};

const renderResponseClient = (response) => {
  if (response && response.data) {
    setClients(response);
  } else {
    withoutClients();
  }
};

const loadClients = () => {
  const token = getStorageItem('token');
  if (token) {
    const response = controllers.LoadClients(token);
    if (response && response.code === SUCCESS_CODE) {
      renderResponseClient(response);
    } else {
      showNotification(response.message);
      renderResponseClient();
    }
  } else {
    // redirect('/index.html');
  }
};

export default loadClients;
