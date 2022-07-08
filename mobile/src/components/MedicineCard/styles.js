import { StyleSheet } from 'react-native'
import { colors } from '../../../theme'


export default StyleSheet.create({
    medicineCard: {
        padding: 20,
        width: '90%',
        marginHorizontal: '5%',
        marginVertical: 10,
        borderColor: colors.dark,
        borderRadius: 10,
        backgroundColor: colors.grayLight,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },

    name: {
        color: colors.dark,
        fontSize: 18,
        width: '80%',
        textAlign: 'left',
    },
})