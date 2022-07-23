import { StyleSheet } from 'react-native'
import { colors } from '../../../theme'


export default StyleSheet.create({
    medicinesList: {
        paddingBottom: 30,
    },

    searchContainer: {
        flexDirection: 'row',
        width: '90%',
        marginHorizontal: '5%',
        height: 40,
        marginBottom: 10,
        position: 'relative',
    },

    searchInput: {
        backgroundColor: colors.grayLight,
        width: '100%',
        height: 40,
        borderRadius: 5,
        fontSize: 16,
        fontFamily: 'Poppins',
        paddingHorizontal: 20,
    },

    searchIcon: {
        position: 'absolute',
        right: 10,
        color: colors.dark,
        textAlign: 'center',
        textAlignVertical: 'center',
        height: '100%',
    },

    noMedicines: {
        width: '90%',
        marginHorizontal: '5%',
    },

    noMedicinesText: {
        color: colors.grayLight,
        fontSize: 45,
        marginVertical: 50,
    }
})