const initialStorage = {
  token: '',
  user: {},
};

const setInitialLocalStorage = () => {
  localStorage.setItem('storage_app', JSON.stringify(initialStorage));
};

export default setInitialLocalStorage;
