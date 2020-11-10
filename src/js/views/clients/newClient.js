import {
  createData, GENERAL_ERROR, getInputsFromForm, showNotification,
} from '../../utils/constants.js';
import controllers from '../../controllers/index.js';

const newClient = (event) => {
  event.preventDefault();
  const inputs = getInputsFromForm(event.target);
  const data = createData(inputs);
  const response = controllers.NewClient(data);
  if (response.message) {
    showNotification(response.message);
  } else {
    showNotification(GENERAL_ERROR);
  }
};

export default newClient;
