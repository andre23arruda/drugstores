import { StyleSheet } from 'react-native'
import { colors } from '../../../theme'


export default StyleSheet.create({
    detail: {
        padding: 20,
    },

    top: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40
    },

    image: {
        width: 120,
        height: 120,
        resizeMode: 'contain',
        marginTop: 40,
        marginBottom: 20,
    },

    name: {
        color: colors.escuro,
        fontSize: 20,
        textTransform: 'capitalize',
        position: 'absolute',
        top: 5,
    },

    types: {
        flexDirection: 'row',
        marginBottom: 10,
        justifyContent: 'center',
    },

    description: {
        lineHeight: 20,
        textAlign: 'justify',
        marginHorizontal: 4,
        marginVertical: 10,
    },

    effect: {
        fontSize: 12,
        lineHeight: 20,
        textAlign: 'justify',
    },

    attrLabel: {
        paddingTop: 8,
        textAlign: 'center',
    },

    typeValue: {
        marginLeft: 3,
        fontSize: 12,
        paddingTop: 8,
        paddingLeft: 10,
        textAlign: 'center',
        borderWidth: 2,
        borderColor: colors.escuro,
        borderRadius: 5,
        opacity: .7,
    },

    paddingBottom: {
        paddingBottom: 8,
    },

    paddingVertical: {
        paddingVertical: 4,
        fontSize: 12
    },

    block: {
        backgroundColor: colors.claro,
        padding: 5,
        borderColor: colors.escuro,
        borderWidth: 2,
        borderRadius: 5,
        marginVertical: 10,
    },

    titleCase: {
        textTransform: 'capitalize',
    },

    lastBlock: {
        marginBottom: 30,
    }

})