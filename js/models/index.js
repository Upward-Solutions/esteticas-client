import { _Response } from '../utils/factory.js'
import { API_URL, GENERAL_ERROR, EXAMPLE_API_SUCCES, SUCCES_CODE } from '../utils/constants.js'


export const fetchData = (request, setView) => {
    let response
    fetch(`${API_URL}/${request.endpoint}`, {
        method: request.method,
        mode: 'no-cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        referrerPolicy: 'same-origin',
        body: request.data
    })
        .then(res => {
            if (!res.ok) {
                response = _Response('Network response was not ok', {}, GENERAL_ERROR)
                return response
            } else {
                return res.json();
            }
        })
        .then(data => {
            response = _Response(data.message, data.data, data.code)
            setView(response)
        });
    if (!response) {
        response = _Response('Network response was not ok', {}, GENERAL_ERROR)
    }
    return response
}

export const justFetch = (request, setView) => {
    let response
    fetch(`${EXAMPLE_API_SUCCES}/${request.endpoint}`)
    .then(res => {
        if (!res.ok) {
            response = _Response('Network response was not ok', {}, GENERAL_ERROR)
            return response
        } else {
            return res.json();
        }
    })
    .then(data => {
        response = _Response('Transacción realizada con éxito', data, SUCCES_CODE)
        setView(response)
    });
    return response;
}