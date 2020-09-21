import { _Request, _Response } from '../utils/factory.js'
import { setSwapiView } from '../views/swapi.js'
import { justFetch } from '../models/index.js'

const exampleSwapi = () => {
    let request
    let response

    request = _Request({}, 'people/1/', 'GET')
    response = justFetch(request, setSwapiView)

    return response;
}

export default exampleSwapi;
