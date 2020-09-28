import { _Request, _Response } from '../utils/factory.js'
import { isValid, FORM_ERROR, ERROR_CODE } from '../utils/constants.js'
import { fetchData } from '../models/index.js'
import { setUser } from '../views/newUser.js'
import { USER_ENPOINTS } from './index.js'

const createNewUser = async data => {
    let request, response

    if (isValid(data) && isValidNewUser(data)) {
        request = _Request(data, 'newUser', 'POST')
        response = await fetchData(request, setUser)
    } else {
        response = _Response(FORM_ERROR, {}, ERROR_CODE)
    }

    return response
}


const isValidNewUser = data => {
    let validate = true;
    let email, user

    email = validateEmail(data.email)
    user = validateUser(data.user)

    return true
}

const validateEmail = async email => {
    let request, response;
    const data = { email };

    request = _Request(data, USER_ENPOINTS.verifyEmail, 'POST');
    response = await fetchData(request);

    return response;
}

const validateUser = async user => {
    let request, response;
    const data = { user };

    request = _Request(data, USER_ENPOINTS.verifyUser, 'POST');
    response = await fetchData(request);

    return response;
}

export default createNewUser;
