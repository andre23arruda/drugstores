const BASE_URL = process.env.REACT_APP_API_URL

export async function getApi(route) {
    return fetch(BASE_URL + route)
    .then(response => response.json()
        .then(data => ({
            status: response.status,
            data
        }))
    )
}
