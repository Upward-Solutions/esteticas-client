import controllers from '../controllers/index.js';
import {
  SUCCESS_CODE,
  showNotification,
  getInputsFromForm,
  editStorageItem,
  createData,
  redirect,
} from '../utils/constants.js';

const login = async (event) => {
  event.preventDefault();
  const inputs = getInputsFromForm(event.target);
  const data = createData(inputs);
  const response = await controllers.Login(data);
  if (response.code === SUCCESS_CODE) {
    editStorageItem('token', response.token);
    redirect('/dashboard.html');
  } else {
    showNotification(response.message);
  }
};

export const validateCapitalLetter = (event) => {
  const s = String.fromCharCode(event.which);
  if (s.toUpperCase() === s && s.toLowerCase() !== s && !event.shiftKey) {
    showNotification('Bloq Mayus está activado.');
  }
};

export default login;
