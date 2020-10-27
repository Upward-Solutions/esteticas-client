import controllers from '../../controllers/index.js';
import {
  getById, getStorageItem, setInnerHTML, showElement, showNotification, SUCCESS_CODE,
} from '../../utils/constants.js';

const setClients = () => {};
const withoutClients = () => {
  const message = getById('without-clients');
  showElement(message);
};

const renderResponseClient = (response) => {
  if (response && response.data) {
    setClients();
  } else {
    withoutClients();
  }
};

const loadClients = () => {
  const token = getStorageItem('token');
  const response = controllers.LoadClients(token);
  if (response && response.code === SUCCESS_CODE) {
    renderResponseClient(response);
  } else {
    // showNotification(response.message);
    renderResponseClient();
  }
};

export default loadClients;
