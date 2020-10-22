import {
  getInputsFromForm,
  createData,
  showNotification,
  getById,
  SUCCESS_CODE,
} from '../utils/constants.js';
import controllers from '../controllers/index.js';

const register = async (event) => {
  event.preventDefault();
  const inputs = getInputsFromForm(event.target);
  const data = createData(inputs);
  const response = await controllers.Register(data);
  showNotification(response.message, response.code);
};

export const checkUserName = async (event) => {
  event.preventDefault();
  const userName = getById('username-register');
  const { value } = userName;

  if (value) {
    const response = await controllers.CheckUserName(value);
    if (response.code === SUCCESS_CODE) {
      userName.classList.add('success');
    } else {
      userName.classList.add('error');
    }
    showNotification(response.message);
  } else {
    showNotification('Ingresá un usuario para saber si está disponible.');
  }
};

export const checkEmail = async (event) => {
  event.preventDefault();
  const email = getById('email-register');
  const { value } = email;

  if (value) {
    const response = await controllers.CheckEmail(value);
    if (response.code === SUCCESS_CODE) {
      email.classList.add('success');
    } else {
      email.classList.add('error');
    }
    showNotification(response.message);
  } else {
    showNotification('Ingresá un usuario para saber si está disponible.');
  }
};

export const checkPasswordConfirm = (event) => {
  const { value: passwordConfirmValue } = event.target;
  const passwordConfirmInput = getById('password-confirm');
  const passwordValue = getById('password').value;

  if (passwordValue === passwordConfirmValue) {
    passwordConfirmInput.classList.remove('error');
  } else {
    passwordConfirmInput.classList.add('error');
  }
};

export const changeInputValidated = (event) => {
  const input = event.target;
  input.classList.remove('success');
  input.classList.remove('error');
};

export default register;
