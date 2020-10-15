const initialStorage = {
  token: '',
};

const setInitialLocalStorage = () => {
  localStorage.setItem('storage_app', JSON.stringify(initialStorage));
};
export default setInitialLocalStorage;
