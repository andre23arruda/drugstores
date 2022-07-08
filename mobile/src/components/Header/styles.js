import { StyleSheet } from 'react-native'
import { colors } from '../../../theme'


export default StyleSheet.create({
    header: {
        marginHorizontal: '5%',
        marginTop: 20,
        marginBottom: 20,
        width: '90%',
        alignItems: 'center',
        flexDirection: 'row'
    },

    headerText: {
        color: colors.grayLight,
        fontSize: 25,
        textAlign: 'center',
        flex: 1,
    },
})