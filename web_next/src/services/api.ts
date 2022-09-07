const BASE_URL = process.env.NEXT_PUBLIC_API_KEY
const TOKEN = process.env.NEXT_PUBLIC_AUTH_TOKEN

export async function getApi(route: string) {
    return fetch(
        BASE_URL + route,
        {
            headers: new Headers({
                'Authorization': `Token ${ TOKEN }`,
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
