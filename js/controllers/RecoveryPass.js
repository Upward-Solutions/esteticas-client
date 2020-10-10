import { _Request, _Response } from '../utils/factory.js'
import { isValid, FORM_ERROR, ERROR_CODE } from '../utils/constants.js'
import { fetchData } from '../models/index.js'
import { setUser } from '../views/newUser.js'

const RecoveryPass = async data => {
    let request
    let response

    if (isValid(data) && isValidEmail(data)) {
        alert('llégo')
        request = _Request(data, 'newUser', 'POST')
        response = await fetchData(request, setUser)
    } else {
        response = _Response(FORM_ERROR, {}, ERROR_CODE)
    }

    return response
}


const isValidEmail = data => {
    // ¿existe email en la base?
    return true;
}

export default RecoveryPass;