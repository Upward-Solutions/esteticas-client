import {
  getInputsFromForm,
  createData,
  showNotification,
} from '../../utils/constants.js';
import controllers from '../../controllers/index.js';

const recoveryPass = async (event) => {
  event.preventDefault();
  const inputs = getInputsFromForm(event.target);
  const data = createData(inputs);
  const response = await controllers.RecoveryPass(data);
  showNotification(response.message);
};

export default recoveryPass;