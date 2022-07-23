import { StyleSheet } from 'react-native'

const defaultColor =  '#3186CC'

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
