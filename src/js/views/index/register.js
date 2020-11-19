import {
  getInputsFromForm,
  createData,
  showNotification,
  getById,
  SUCCESS_CODE,
  REG_EX_PASS,
  REG_EX_TEXT,
  REG_EX_EMAIL,
} from '../../utils/constants.js';
import controllers from '../../controllers/index.js';
import { setInputError } from '../../utils/styles.js';

const register = async (event) => {
  event.preventDefault();
  const inputs = getInputsFromForm(event.target);
  const data = createData(inputs);
  const { password, passwordConfirm } = data;
  if (password.value !== passwordConfirm.value) {
    showNotification('Las contraseñas deben coincidir.');
  } else if (!REG_EX_PASS.test(password.value)) {
    showNotification('La contraseña debe tener únicamente letras y números.');
  } else {
    const response = await controllers.Register(data);
    showNotification(response.message);
    if (response.code === SUCCESS_CODE) { event.target.reset(); }
  }
};

export const checkUserName = async (event) => {
  event.preventDefault();
  const userName = getById('index-register-input-username');
  const { value } = userName;

  if (value) {
    if (REG_EX_TEXT.test(value)) {
      const response = await controllers.CheckUserName(value);
      if (response.code === SUCCESS_CODE) {
        userName.classList.add('success');
      } else {
        setInputError(userName);
      }
      showNotification(response.message);
    } else {
      setInputError(userName);
      showNotification('El nombre de usuario solo acepta letras y números.');
    }
  } else {
    showNotification('Ingresá un usuario para saber si está disponible.');
  }
};

export const checkEmail = async (event) => {
  event.preventDefault();
  const email = getById('index-register-input-email');
  const { value } = email;

  if (value) {
    if (REG_EX_EMAIL.test(value)) {
      const response = await controllers.CheckEmail(value);
      if (response.code === SUCCESS_CODE) {
        email.classList.add('success');
      } else {
        setInputError(email);
      }
      showNotification(response.message);
    } else {
      setInputError(email);
      showNotification('El correo ingresado debe ser un email válido.');
    }
  } else {
    showNotification('Ingresá un usuario para saber si está disponible.');
  }
};

export const checkPasswordConfirm = () => {
  const passwordConfirmInput = getById('index-register-input-passwordConfirm');
  const passwordConfirmValue = passwordConfirmInput.value;
  const passwordValue = getById('index-register-input-password').value;

  if (passwordValue === passwordConfirmValue) {
    passwordConfirmInput.classList.remove('error');
  } else {
    setInputError(passwordConfirmInput);
  }
};

export const changeInputValidated = (event) => {
  const input = event.target;
  input.classList.remove('success');
  input.classList.remove('error');
};

export default register;
