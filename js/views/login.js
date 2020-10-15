import controllers from "../controllers/index.js";
import {
  SUCCESS_CODE,
  showNotification,
  getInputsFromForm,
  createData,
  redirect,
} from "../utils/constants.js";

const login = (event) => {
  event.preventDefault();
  let inputs = getInputsFromForm(event.target);
  let data = createData(inputs);
  controllers.Login(data);
};

export const setLoginView = (data) => {
  if (data.code === SUCCESS_CODE) {
    redirect("/dashboard.html");
    showNotification("Bienvenido de nuevo (Nombre de usuario)");
  } else {
    showNotification(data.code, data.message);
  }
};

export const validateCapitalLetter = (event) => {
  var mayus = event.getModifierState && event.getModifierState("CapsLock");
  if (mayus) alert("Bloq Mayus está activado.");
};

export default login;
