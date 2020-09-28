import { IS_INDEX, getById } from './constants.js'
import views from '../views/index.js'

export const createEvents = () => {
    if (IS_INDEX) {
        getById('register-form').addEventListener('submit', views.newUserForm);
    } else {
        // global envents
    }
}