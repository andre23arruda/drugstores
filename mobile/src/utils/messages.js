import { Alert } from 'react-native'

export function showAlert(message, title='Sorry. Something went wrong   :(') {
    Alert.alert(
        title,
        message,
        [
            {
                text: 'Ok',
                style: 'cancel'
            },
        ],
        {cancelable: false},
    )
}
