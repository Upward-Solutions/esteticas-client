import { IS_INDEX, getById } from './constants.js'
import views from '../views/index.js'

export const createEvents = () => {
    if (IS_INDEX) {
        getById('test-form').addEventListener('submit', views.newUserForm)
        getById('swapi-example').addEventListener('click', views.getExampleSwapi)
    } else {
        // global envents
    }
}