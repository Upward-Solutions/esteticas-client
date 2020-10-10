import {
    getInputsFromForm,
    createData,
    showNotification,
} from '../utils/constants.js'
import controllers from '../controllers/index.js'

const recoveryPass = async (event) => {
    event.preventDefault();
    let inputs = getInputsFromForm(event.target);
    let data = createData(inputs);
    let response = await controllers.RecoveryPass(data);
    showNotification(response.message, response.code);
}

export default recoveryPass;