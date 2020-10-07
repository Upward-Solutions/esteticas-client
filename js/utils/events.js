import { IS_INDEX, getById } from './constants.js'
import views from '../views/index.js'

export const createEvents = () => {
    if (IS_INDEX) {
        /** @todo: que el evento se dispare cuando se hace focus sobre el input password
        y definir qué mensaje aparece. */
        document.addEventListener("keydown", views.validateCapitalLetter);
        getById('login').addEventListener('submit', views.login);
    } else {
        // global envents
    }
}