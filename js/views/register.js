import {
  getInputsFromForm,
  createData,
  showNotification,
} from '../utils/constants.js';
import controllers from '../controllers/index.js';

const register = async (event) => {
  event.preventDefault();
  const inputs = getInputsFromForm(event.target);
  const data = createData(inputs);
  const response = await controllers.createNewUser(data);
  showNotification(response.message, response.code);
};
export default register;
