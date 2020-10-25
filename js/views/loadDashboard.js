import { Index } from '../controllers/Login.js';
import { redirect, SUCCESS_CODE, showNotification } from '../utils/constants.js';

const loadDashboard = async () => {
  const index = await Index();
  if (index.code === SUCCESS_CODE) {
    showNotification(index.message);
  } else {
    redirect('/index.html');
  }
};

export default loadDashboard;
