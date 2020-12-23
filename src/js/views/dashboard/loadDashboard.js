import { Index } from '../../controllers/index/Login.js';
import { redirect, SUCCESS_CODE, editStorageItem } from '../../utils/constants.js';

const loadDashboard = async () => {
  const index = await Index();
  if (index.code === SUCCESS_CODE) {
    const {
      email,
      username,
      fullname,
      phone,
      createdAt,
      updatedAt,
    } = index.data;
    const user = {
      email,
      username,
      fullname,
      phone,
      createdAt,
      updatedAt,
    };
    editStorageItem('user', user);
  } else {
    redirect('/index.html');
  }
};

export default loadDashboard;
