import controllers from '../controllers/index.js';
import { SUCCES_CODE, showNotification } from '../utils/constants.js';

const setSwapiView = (data) => {
  showNotification(data.code, data.message);
  if (data.code === SUCCES_CODE) {
    // eslint-disable-next-line no-console
    console.log(data);
  }
};

const getExampleSwapi = () => {
  controllers.exampleSwapi(setSwapiView);
};

export default getExampleSwapi;
