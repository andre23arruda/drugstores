const BASE_URL = process.env.NEXT_PUBLIC_API_KEY

export async function getApi(route: string) {
    return fetch(BASE_URL + route)
    .then(response => response.json()
        .then(data => ({
            status: response.status,
            data
        }))
    )
}
