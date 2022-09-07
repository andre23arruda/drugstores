import { API_BASE_URL, AUTH_TOKEN } from "../utils/config"

export async function getApi(route) {
    return fetch(
        API_BASE_URL + route,
        {
            headers: new Headers({
                'Authorization': `Token ${ AUTH_TOKEN }`,
            }),
        }
    )
    .then(response => response.json()
        .then(data => ({
            status: response.status,
            data
        }))
    )
}
