import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    imageContainer: {
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.05)',
        marginTop: 30,
        paddingBottom: 20,
        borderRadius: 5,
    },

    image: {
        width: 150,
        height: 150,
        resizeMode: 'contain',
        marginTop: 20,
    },

    variety: {
        color: 'black',
        fontSize: 8,
        position: 'absolute',
        top: 10,
        left: 10,
    }
})