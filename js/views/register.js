import {
  getInputsFromForm,
  createData,
  showNotification,
  ERROR_CODE,
} from "../utils/constants.js";
import controllers from "../controllers/index.js";

const register = async (event) => {
  event.preventDefault();
  let inputs = getInputsFromForm(event.target);
  let data = createData(inputs);
  let response = await controllers.createNewUser(data);
  showNotification(response.message, response.code);
};
export default register;
