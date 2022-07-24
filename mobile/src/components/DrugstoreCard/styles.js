import { StyleSheet } from 'react-native'
import { colors } from '../../../theme'


export default StyleSheet.create({
    drugstoreCard: {
        padding: 20,
        width: '90%',
        marginHorizontal: '5%',
        marginVertical: 10,
        borderColor: colors.dark,
        borderRadius: 10,
        backgroundColor: colors.grayLight
    },

    name: {
        color: colors.dark,
        fontSize: 25,
        textAlign: 'left',
    },

    address: {
        color: colors.dark,
        fontSize: 15,
        textAlign: 'left',
    },

    phoneContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
    },

    buttonContainer: {
        marginLeft: 15,
        marginBottom: 5,

    },

    buttonPhone: {
        padding: 3,
    }
})