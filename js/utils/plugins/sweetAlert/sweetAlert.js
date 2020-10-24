/* eslint-disable no-undef */
export const alert = (content) => {
  swal(content);
};

export const alertResponse = (response) => {
  const { code, message } = response;
  swal(code, message, code.toLowerCase());
};

export const alertDescription = (title, description) => {
  swal(title, description);
};

export const alertCustomButton = (title, description, status, buttonText) => {
  swal(title, description, status, {
    button: buttonText,
  });
};
