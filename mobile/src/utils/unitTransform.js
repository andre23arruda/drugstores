export function roundValue(value) {
    return value.toFixed(1)
}

export function kg2lbs(kg) {
    return roundValue(kg * 2.20462)
}

export function meter2feet(meter) {
    return roundValue(meter / 0.3048)
}
