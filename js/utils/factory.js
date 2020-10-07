/**
 * @param {string} message Los mensajes están pensados para mostarse como notificación en la aplicación al usuario.
 * @param {Object} data La estructura interna del objeto data se puede ajustar según cada contexto.
 * @param {string} code Los códigos posibles son ERROR, WARNING, SUCCESS
 * @returns {Object} Response
 * @description El objeto Response encapsula la respuesta del backend. 
 * En caso de que el código sea ERROR la data viene undefined.
 */

export const _Response = (message, data, code) => {
    let Response = new Object()
    Response.message = message
    Response.data = {data}
    Response.code = code

    return Response
}

/**
 * @param {Object} data objeto con información requerida para la transacción en caso de ser necesario.
 * @param {string} endpoint cadena con la ruta al endpoint deseado
 * @param {string} method cadena con el método HTTP requerido
 * @returns {Object} Request
 * @description El objeto Request encapsula la solicitud al backend. 
 * En caso de que no sea requerida información la data viene undefined.
 */

export const _Request = (data, endpoint, method) => {
    let Request = new Object()
    Request.data = data
    Request.endpoint = endpoint
    Request.method = method

    return Request
}
