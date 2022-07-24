import React from 'react'
import { Linking, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import FontAwesome from '@expo/vector-icons/FontAwesome'

// custom components
import CustomText from '../CustomText'

// utils
import { getApi } from '../../services/api'
import { showAlert } from '../../utils/messages'

// styles
import styles from './styles'


function DrugstoreCard({ drugstore }) {
    const navigation = useNavigation()

    function pressCall(phoneNumber) {
        const url = `tel://${ phoneNumber }`
        Linking.openURL(url)
    }

    async function seeMedicines() {
        const { data, status } = await getApi(`api/medicines?drugstore=${ drugstore.id }`)
        // console.log(status)

        try {
            if (status === 200) {
				navigation.navigate('DrugstoreDetail', {
					medicines: data,
				})
            } else {
                showAlert()
            }
        } catch(err) {
            showAlert()
        }
    }

	return (
        <TouchableOpacity
            style={ styles.drugstoreCard }
            activeOpacity={ 0.8 }
            onPress={ seeMedicines }
        >
            <CustomText style={ styles.name }>
                { drugstore.name }
            </CustomText>

            <CustomText style={ styles.description }>
                Endereço: { drugstore.address }
            </CustomText>

            <View style={ styles.phoneContainer }>
                <CustomText style={ styles.description }>
                    Telefone: { drugstore.phone }
                </CustomText>

                <View style={ styles.buttonContainer }>
                    <FontAwesome.Button
                        name="phone"
                        size={ 18 }
                        iconStyle={{ marginRight: 2, marginLeft: 2, marginTop: 0, marginBottom: 0 }}
                        style={ styles.buttonPhone }
                        onPress={ () => pressCall(drugstore.phone) }
                    />
                </View>

            </View>


            <CustomText style={ styles.description }>
                Medicamentos em estoque: { drugstore.stock }
            </CustomText>


        </TouchableOpacity>
	)
}

export default DrugstoreCard
