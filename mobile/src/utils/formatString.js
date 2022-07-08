export function removeHyphen(text) {
    return text.replace(/-/g, ' ')
}

export function removeNewLine(text) {
    return text.replace(/\n/g,' ');
}


export function extractIdFromUrl(url) {
    const urlPattern = 'https://pokeapi.co/api/v2/pokemon/'
    const id =  url.replace(urlPattern, '')
    return id.slice(0, -1)
}

export function getVarietyName(pokemonName) {
    let nameArray = pokemonName.split('-')
    nameArray.shift()
    return nameArray.join(' ').toUpperCase()
}

export function getEnglishText(textArray) {
    return textArray.filter(text => text.language.name === 'en')[0]
}