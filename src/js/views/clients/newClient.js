import {
  createData,
  GENERAL_ERROR,
  SUCCESS_CODE,
  REG_EX_TEXT,
  getById,
  getInputsFromForm,
  showNotification,
} from '../../utils/constants.js';
import controllers from '../../controllers/index.js';
import { setInputError } from '../../utils/styles.js';

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

export const checkClientId = async (event) => {
  event.preventDefault();
  const input = getById('id-external');
  const { value } = input;

  if (value) {
    if (REG_EX_TEXT.test(value)) {
      const response = await controllers.CheckIdExternal(value);
      if (response.code === SUCCESS_CODE) {
        input.classList.add('success');
      } else {
        setInputError(input);
      }
      showNotification(response.message);
    } else {
      setInputError(input);
      showNotification('El identificador del cliente solo acepta letras y números.');
    }
  } else {
    showNotification('Ingresá un identificador para saber si está disponible.');
  }
};

export default newClient;
