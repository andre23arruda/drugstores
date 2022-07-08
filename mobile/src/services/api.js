const BASE_URL = `http://192.168.1.20:8000/`

export async function getApi(route) {
    return fetch(BASE_URL + route)
    .then(response => response.json()
        .then(data => ({
            status: response.status,
            data
        }))
    )
}
