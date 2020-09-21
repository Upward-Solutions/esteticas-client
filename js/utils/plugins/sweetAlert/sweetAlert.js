const alert = (content) => {
  swal(content);
};

const alertResponse = (response) => {
  const { code, message } = response;
  swal(code, message, code.toLowerCase());
};

const alertDescription = (title, description) => {
  swal(title, description);
};

const alertCustomButton = (title, description, status, buttonText) => {
  swal(title, description, status, {
    button: buttonText  ,
  });
};
