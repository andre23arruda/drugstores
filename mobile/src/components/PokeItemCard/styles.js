import { StyleSheet } from 'react-native'
import { colors } from '../../../theme'


export default StyleSheet.create({
    informacao: {
        paddingVertical: 15,
        paddingHorizontal: 2,
        marginHorizontal: '2.5%',
        marginVertical: 10,
        width: '45%',
        alignItems: 'center',
        borderColor: colors.escuro,
        backgroundColor: colors.claro,
        borderWidth: 2,
        borderRadius: 10
    },

    name: {
        color: colors.escuro,
        fontSize: 10,
        textAlign: 'left',
        textTransform: 'capitalize',
    },

    image: {
        width: 50,
        height: 50,
        resizeMode: 'contain'
    },

    divisor: {
        marginHorizontal: 24,
        borderBottomWidth: 1,
        borderBottomColor: colors.cinza,
    },

})