import { StyleSheet } from 'react-native'

const defaultColor =  '#3186cc'

export default (backgroundColor=defaultColor) => StyleSheet.create({
    fill: {
        flex: 1,
        backgroundColor: backgroundColor,
    }
})

export const colors = {
    dark: '#535353',
    primary: '#3186CC',
    primaryDark: '#004385',
    secondary: '#087CA7',
    gray: '#C6C6C1',
    grayLight: '#E3E3E3',
}

export const pokemonTypeColors = {
	normal: {
        dark: '#A8A77A',
        light: '#C6C6A7',
    },
	fire: {
        dark: '#EE8130',
        light: '#F5AC78',
    },
	water: {
        dark: '#6390F0',
        light: '#9DB7F5',
    },
	electric: {
        dark: '#F7D02C',
        light: '#FAE078',
    },
	grass: {
        dark: '#7AC74C',
        light: '#A7DB8D',
    },
	ice: {
        dark: '#96D9D6',
        light: '#BCE6E6',
    },
	fighting: {
        dark: '#C22E28',
        light: '#D67873',
    },
	poison: {
        dark: '#A33EA1',
        light: '#C183C1',
    },
	ground: {
        dark: '#E2BF65',
        light: '#EBD69D',
    },
	flying: {
        dark: '#A98FF3',
        light: '#C6B7F5',
    },
	psychic: {
        dark: '#F95587',
        light: '#FA92B2',
    },
	bug: {
        dark: '#A6B91A',
        light: '#C6D16E',
    },
	rock: {
        dark: '#B6A136',
        light: '#D1C17D',
    },
	ghost: {
        dark: '#735797',
        light: '#A292BC',
    },
	dragon: {
        dark: '#6F35FC',
        light: '#A27DFA',
    },
	dark: {
        dark: '#705746',
        light: '#A29288',
    },
	steel: {
        dark: '#B7B7CE',
        light: '#D1D1E0',
    },
	fairy: {
        dark: '#D685AD',
        light: '#F4BDC9',
    },
}
