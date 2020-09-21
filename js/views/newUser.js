import {
    getInputsFromForm,
    createData,
    showNotification,
    ERROR_CODE
} from '../utils/constants.js'
import controllers from '../controllers/index.js'

const newUserForm = async (event) => {
    event.preventDefault()
    let inputs = getInputsFromForm(event.target)
    let data = createData(inputs)
    let response = await controllers.createNewUser(data)
    showNotification(response.message, response.code)
}

export const setUser = response => {
    if (response.code !== ERROR_CODE) {
        //create new HTML with backend data
    }
}

export default newUserForm;