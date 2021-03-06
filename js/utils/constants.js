/* Custom */

export const FULL_COMPANY_NAME = "Upward web and digital solutions";
export const SHORT_COMPANY_NAME = "Upward";

/* Location */

export const IS_MOBILE = screen.width < 800;
export const CURRENT_URL = document.location.pathname;
export const IS_INDEX = CURRENT_URL.includes("index") || CURRENT_URL === "/";

/* DOM Functions */

export const getById = (id) => document.getElementById(id);
export const getByClass = (nameClass) =>
  document.getElementsByClassName(nameClass);
export const getByTag = (tag) => document.getElementsByTagName(tag);

export const hiddenElement = (element) => (element.hidden = true);
export const showElement = (element) => (element.hidden = false);

export const getInnerText = (element) => element.innerText;
export const getInnerHTML = (element) => element.innerHTML;
export const setInnerText = (element, content) => (element.innerText = content);
export const setInnerHTML = (element, content) => (element.innerHTML = content);

/* Form */

export const getInputsFromForm = (form) => {
  let childrens = Array.from(form.children);
  let inputs = childrens.filter(
    (children) =>
      children.tagName === "INPUT" || children.tagName === "TEXTAREA"
  );

  return inputs;
};

export const createData = (inputs) => {
  let data = {};
  inputs.forEach((input) => {
    if (input.type === "checkbox") {
      data[input.name] = input.checked;
    } else {
      data[input.name] = input.value;
    }
  });

  return data;
};

/**
 * @param {Object} data Objeto data compuesto de inputs de cualquier forms
 * @description Esta función valida que los input hayan registrado un valor
 * equivalente al tipo que representan. Ej. (email == email)
 */

export const isValid = (data) => {
  let valid = true;
  for (const key in data) {
    let type = key.split("-")[1];
    let value = data[key];
    switch (type) {
      case "text":
        valid = REG_EX_TEXT.test(value);
        break;
      case "number":
        valid = REG_EX_NUMBER.test(value);
        break;
      case "textarea":
        valid = REG_EX_TEXTAREA.test(value);
        break;
      case "email":
        valid = REG_EX_EMAIL.test(value);
        break;
      case "checkbox":
        valid = value;
        break;
      default:
        break;
    }
  }
  return valid;
};

/* Math */

export const randomInt = (min, max) => parseInt(Math.random() * max) + min;

/* Styles */

export const SUCCESS_COLOR = "#97EB72";
export const ERROR_COLOR = "#b41f1f";

/* Messages */

export const SUCCESS_MESSAGE = "Transacción realizada con éxito";
export const GENERAL_ERROR = "Ocurrió un error inesperado";
export const FORM_ERROR =
  "Alguno de los campos no cumple con los requisitos esperados";

export const showNotification = (status, title) => {
  alert(`${status}: ${title}`)
};

/* Codes */

export const ERROR_CODE = "ERROR";
export const SUCCES_CODE = "SUCCESS";
export const WARNING_CODE = "WARNING";
export const INFO_CODE = "INFO";

/* Regular Expressions */

export const REG_EX_TEXT = /^[A-Za-z0-9]*$/;
export const REG_EX_NUMBER = /^[0-9]*$/;
export const REG_EX_TEXTAREA = /^[A-Za-z0-9]*$/;
export const REG_EX_EMAIL = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

/* API */

export const API_URL = "http://localhost:8282/api/v1";
export const EXAMPLE_API_SUCCES = "https://swapi.dev/api";
