import { IS_INDEX, getById } from './constants.js';
import views from '../views/index.js';

const createEvents = () => {
    if (IS_INDEX) {
        getById('register').addEventListener('submit', views.register)
        getById('swapi-example').addEventListener('click', views.getExampleSwapi)
    } else {
        // global envents
    }
}

export default createEvents;
