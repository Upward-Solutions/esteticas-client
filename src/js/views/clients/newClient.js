import { getInputsFromForm } from '../../utils/constants.js';

const newClient = (event) => {
  event.preventDefault();
  const inputs = getInputsFromForm(event.target);
};

export default newClient;
