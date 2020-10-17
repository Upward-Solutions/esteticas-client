import {
  getInputsFromForm,
  createData,
  showNotification,
  getById,
} from '../utils/constants.js';
import controllers from '../controllers/index.js';

const register = async (event) => {
  event.preventDefault();
  const inputs = getInputsFromForm(event.target);
  const data = createData(inputs);
  const response = await controllers.createNewUser(data);
  showNotification(response.message, response.code);
};

export const checkUserName = async (event) => {
  event.preventDefault();
  const userName = getById('username').value;
  if (userName) {
    const response = await controllers.CheckUserName(userName);
  } else {
    alert('Ingresá un usuario para saber si está disponible.');
  }
};

export default register;
