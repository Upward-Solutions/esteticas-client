import createNewUser from './NewUser.js'
import exampleSwapi from './Swapi.js'

export default { 
    createNewUser,
    exampleSwapi,
}

export const USER_ENPOINTS = {
    register: '/auth/register',
    loging: '/auth/login',
    verifyEmail: '/auth/verifyEmail',
    verifyUser: '/auth/verifyUser',
}
