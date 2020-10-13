import {
  getInputsFromForm,
  createData,
  showNotification,
  ERROR_CODE,
} from '../utils/constants.js';
import controllers from '../controllers/index.js';

const setUser = (response) => {
  if (response.code !== ERROR_CODE) {
    // create new HTML with backend data
  }
};

const newUserForm = async (event) => {
  event.preventDefault();
  const inputs = getInputsFromForm(event.target);
  const data = createData(inputs);
  const response = await controllers.createNewUser(data, setUser);
  showNotification(response.message, response.code);
};

export default newUserForm;
