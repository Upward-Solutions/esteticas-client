import { IS_INDEX, getById } from './constants.js';
import views from '../views/index.js';

const createEvents = () => {
  if (IS_INDEX) {
    getById('register').addEventListener('submit', views.register);
  } else {
    // global envents
  }
};

export default createEvents;
